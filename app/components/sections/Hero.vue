<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Badge from '~/components/ui/badge/Badge.vue'
import Button from '~/components/ui/button/Button.vue'

const visible = ref(false)
onMounted(() => {
  setTimeout(() => (visible.value = true), 100)
})
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <!-- Grid pattern -->
      <div
        class="absolute inset-0 opacity-[0.15]"
        style="background-image: linear-gradient(#222225 1px, transparent 1px), linear-gradient(90deg, #222225 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);"
      />
    </div>

    <div class="max-w-6xl mx-auto w-full relative">
      <!-- Tag line -->
      <div
        class="transition-all duration-700 ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <span class="inline-flex items-center gap-2 mb-6 font-mono text-xs tracking-wider px-4 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to Opportunities
        </span>
      </div>

      <!-- Name -->
      <h1
        class="transition-all duration-700 delay-150 ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <span class="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
          ARIE
        </span>
        <span class="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-transparent" style="-webkit-text-stroke: 1.5px #f0f0f2;">
          ARIFIN
        </span>
      </h1>

      <!-- Subtitle -->
      <p
        class="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-700 delay-300 ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <span class="font-semibold text-foreground">Frontend Developer</span> crafting scalable web experiences with the Vue.js ecosystem — from responsive interfaces to cross-platform applications.
      </p>

      <!-- CTAs -->
      <div
        class="flex flex-wrap gap-3 mt-8 transition-all duration-700 delay-[450ms] ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <a
          href="mailto:ariearfn@gmail.com?subject=Hey%20Arie%2C%20Let%27s%20Connect&body=Hi%20Arie%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20get%20in%20touch.%0A%0A"
          class="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-base font-medium bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Get In Touch
        </a>
        <a
          href="https://www.linkedin.com/in/ariearifin/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>

      </div>

      <!-- Stats -->
      <div
        class="flex flex-wrap gap-10 mt-14 pt-8 border-t transition-all duration-700 delay-[600ms] ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <div>
          <div class="font-mono text-3xl font-bold text-primary">5+</div>
          <div class="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years Experience</div>
        </div>
        <div>
          <div class="font-mono text-3xl font-bold text-primary">3+</div>
          <div class="text-xs uppercase tracking-widest text-muted-foreground mt-1">Production Platforms</div>
        </div>
        <div>
          <div class="font-mono text-3xl font-bold text-primary">Vue</div>
          <div class="text-xs uppercase tracking-widest text-muted-foreground mt-1">Primary Ecosystem</div>
        </div>
      </div>
    </div>
  </section>
</template>
