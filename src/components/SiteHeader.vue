<script setup>
import { navigation } from '../content/siteContent'
import { isChinese, setLocale } from '../composables/useLanguage'
import { siteChrome, siteIdentity } from '../content/pageContent'
</script>

<template>
  <header class="site-header">
    <div class="page-shell">
      <div class="brand">
        <span class="brand-name">{{ siteIdentity.brand }}</span>
      </div>
      <nav class="nav" :aria-label="siteChrome.primaryNavigation">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="language-switch" role="group" :aria-label="siteChrome.languageSelector">
        <button type="button" :class="{ active: !isChinese }" :aria-pressed="!isChinese" @click="setLocale('en')">{{ siteChrome.languageEnglish }}</button>
        <span aria-hidden="true">/</span>
        <button type="button" :class="{ active: isChinese }" :aria-pressed="isChinese" @click="setLocale('zh')">{{ siteChrome.languageChinese }}</button>
      </div>
    </div>
  </header>
</template>
