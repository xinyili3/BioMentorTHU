<script setup>
import { conceptContent as copy } from '../content/pageContent'
</script>

<template>
  <section class="concept-section">
    <div class="page-shell">
      <div class="concept-panel" :data-watermark="copy.watermark">
        <div class="concept-intro">
          <span class="eyebrow">{{ copy.eyebrow }}</span>
          <h2>{{ copy.title }}</h2>
          <p>{{ copy.description }}</p>
        </div>
        <div class="concept-stages">
          <article v-for="(stage, index) in copy.stages" :key="stage.number" class="concept-stage">
            <div class="concept-stage-top">
              <span>{{ stage.number }}</span>
              <span v-if="index < copy.stages.length - 1" class="concept-connector" aria-hidden="true"></span>
            </div>
            <h3>{{ stage.title }}</h3>
            <p>{{ stage.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
