<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function scrollTo(href: string) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-background/80 backdrop-blur-xl border-b shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <span class="font-mono text-sm font-bold tracking-wider text-primary">soheii.space</span>

      <!-- Desktop -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <button
            @click="scrollTo(link.href)"
            class="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button
        class="md:hidden p-2 text-muted-foreground hover:text-foreground cursor-pointer"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-background/95 backdrop-blur-xl border-b shadow-lg">
        <ul class="flex flex-col p-4 gap-1">
          <li v-for="link in links" :key="link.href">
            <button
              @click="scrollTo(link.href)"
              class="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors cursor-pointer"
            >
              {{ link.label }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
