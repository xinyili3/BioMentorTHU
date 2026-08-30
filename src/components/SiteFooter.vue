<script setup>
import { isChinese } from '../composables/useLanguage'
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell">
      {{ isChinese
        ? 'BioMentor THU 是一个由志愿者发起、面向生命科学与生物医学领域学生的导师项目。'
        : 'BioMentor THU is a volunteer-led mentoring initiative serving students in the life and biomedical sciences.' }}
    </div>
  </footer>
</template>
