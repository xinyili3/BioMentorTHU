<script setup>
import { navigation } from '../content/siteContent'
import { isChinese, setLocale } from '../composables/useLanguage'
</script>

<template>
  <header class="site-header">
    <div class="page-shell">
      <div class="brand">
        <!-- <span class="brand-kicker">Demo A</span> -->
        <span class="brand-name">BioMentor THU</span>
      </div>
      <nav class="nav" :aria-label="isChinese ? '主导航' : 'Primary navigation'">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="language-switch" role="group" :aria-label="isChinese ? '选择语言' : 'Select language'">
        <button type="button" :class="{ active: !isChinese }" :aria-pressed="!isChinese" @click="setLocale('en')">EN</button>
        <span aria-hidden="true">/</span>
        <button type="button" :class="{ active: isChinese }" :aria-pressed="isChinese" @click="setLocale('zh')">中文</button>
      </div>
    </div>
  </header>
</template>
