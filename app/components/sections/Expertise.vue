<script setup lang="ts">
const expertise = [
  { num: '01', title: 'Frontend Web Development', desc: 'Building scalable, maintainable web applications with Vue.js and Nuxt.js — from SPAs to server-rendered apps.' },
  { num: '02', title: 'Responsive Web Design', desc: 'Crafting pixel-perfect, fluid interfaces that work seamlessly across desktop, tablet, and mobile devices.' },
  { num: '03', title: 'Mobile App Development', desc: 'Cross-platform mobile development with React Native, delivering operational tools and consumer-facing applications.' },
  { num: '04', title: 'REST API Integration', desc: 'Connecting frontend interfaces with backend services through clean, efficient API integration patterns.' },
  { num: '05', title: 'UI/UX Implementation', desc: 'Translating design mockups into interactive, accessible interfaces with attention to detail and user experience.' },
  { num: '06', title: 'Performance Optimization', desc: 'Tuning web applications for speed — lazy loading, code splitting, and efficient rendering strategies.' },
]
</script>

<template>
  <section id="expertise" class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center gap-3 mb-3">
        <span class="h-px w-8 bg-primary" />
        <span class="font-mono text-xs text-primary tracking-widest uppercase">04 — Expertise</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">What I Do Best</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          v-for="item in expertise"
          :key="item.num"
          class="group transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:-translate-y-1"
        >
          <CardHeader>
            <span class="font-mono text-xs text-muted-foreground/50 mb-2">{{ item.num }}</span>
            <h3 class="text-base font-semibold group-hover:text-primary transition-colors">{{ item.title }}</h3>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ item.desc }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
