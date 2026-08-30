<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import OverviewView from './views/OverviewView.vue'
import MentorsView from './views/MentorsView.vue'
import MenteesView from './views/MenteesView.vue'
import ApplyView from './views/ApplyView.vue'
import ForMentorsView from './views/ForMentorsView.vue'
import FAQView from './views/FAQView.vue'

const views = {
  '/': OverviewView,
  '/mentors': MentorsView,
  '/mentees': MenteesView,
  '/for-mentors': ForMentorsView,
  '/faq': FAQView,
  '/apply': ApplyView,
}

const getRoute = () => window.location.hash.slice(1) || '/'
const currentRoute = ref(getRoute())
const currentView = computed(() => views[currentRoute.value] || OverviewView)

const updateRoute = () => {
  currentRoute.value = getRoute()
  window.scrollTo({ top: 0 })
}

onMounted(() => window.addEventListener('hashchange', updateRoute))
onBeforeUnmount(() => window.removeEventListener('hashchange', updateRoute))
</script>

<template>
  <SiteHeader />
  <main>
    <Transition name="page-fade" mode="out-in">
      <component :is="currentView" :key="currentRoute" />
    </Transition>
  </main>
  <SiteFooter />
</template>
