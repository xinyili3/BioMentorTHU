import { computed, ref, watch } from 'vue'
import { documentTitles } from '../content/metadata'

const savedLocale = window.localStorage.getItem('biomentor-locale')
export const locale = ref(savedLocale === 'zh' ? 'zh' : 'en')

export const isChinese = computed(() => locale.value === 'zh')

export const setLocale = (value) => {
  locale.value = value === 'zh' ? 'zh' : 'en'
}

export const toggleLocale = () => {
  setLocale(isChinese.value ? 'en' : 'zh')
}

watch(
  locale,
  (value) => {
    window.localStorage.setItem('biomentor-locale', value)
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en'
    document.title = documentTitles[value]
  },
  { immediate: true },
)

export const localized = (translations) => computed(() => translations[locale.value])
