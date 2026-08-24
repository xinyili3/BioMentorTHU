<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  to: { type: String, required: true },
})

const currentRoute = ref(window.location.hash.slice(1) || '/')
const updateRoute = () => {
  currentRoute.value = window.location.hash.slice(1) || '/'
}

onMounted(() => window.addEventListener('hashchange', updateRoute))
onBeforeUnmount(() => window.removeEventListener('hashchange', updateRoute))
</script>

<template>
  <a :href="`#${props.to}`" :class="{ 'router-link-exact-active': currentRoute === props.to }">
    <slot />
  </a>
</template>
