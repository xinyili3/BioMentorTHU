<script setup>
import { heroContent as copy, siteIdentity } from '../content/pageContent'
</script>

<template>
  <section class="hero">
    <div class="page-shell">
      <div class="hero-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">{{ copy.eyebrow }}</span>
            <h1 :aria-label="siteIdentity.brand">
              <span
                v-for="(part, index) in siteIdentity.brandParts"
                :key="part"
                :class="{ 'hero-title-thu': index === siteIdentity.brandParts.length - 1 }"
              >{{ part }}</span>
            </h1>
            <p class="hero-statement">{{ copy.statement }}</p>
            <p class="lead">
              {{ copy.lead }}
            </p>
          </div>
          <div class="hero-side">
            <div class="path-map">
              <svg class="path-map-art" viewBox="0 0 360 360" aria-hidden="true">
                <path d="M58 35 C 300 42, 54 145, 286 176 S 89 292, 302 328" />
                <circle cx="58" cy="35" r="7" />
                <circle cx="286" cy="176" r="7" />
                <circle cx="302" cy="328" r="7" />
              </svg>
              <span class="path-map-label">{{ copy.mapLabel }}</span>
              <div v-for="node in copy.nodes" :key="node.number" class="path-node">
                <span class="path-node-number">{{ node.number }}</span>
                <div>
                  <strong>{{ node.title }}</strong>
                  <p>{{ node.text }}</p>
                </div>
              </div>
              <p class="path-map-goal">{{ copy.goal }}</p>
            </div>
            <span class="hero-edition">{{ copy.edition }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
