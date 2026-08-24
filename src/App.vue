<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import OverviewView from './views/OverviewView.vue'
import MentorsView from './views/MentorsView.vue'
import MenteesView from './views/MenteesView.vue'
import ApplyView from './views/ApplyView.vue'

const views = {
  '/': OverviewView,
  '/mentors': MentorsView,
  '/mentees': MenteesView,
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
  <main><component :is="currentView" /></main>
  <SiteFooter />
</template>
