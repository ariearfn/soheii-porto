<script setup lang="ts">
const jobs = [
  {
    role: 'Frontend Developer',
    company: 'PT Railink',
    period: 'May 2024 — Present',
    tasks: [
      'Architected and shipped production-grade frontend applications across web, vending machine, and mobile platforms using Nuxt.js — handling everything from initial scaffolding to deployment.',
      'Engineered mission-critical internal tools — an SSO authentication hub, a multi-branch POS ticketing system, and a real-time operations dashboard — now running live across station branches nationwide.',
      'Drove cross-functional API integration with backend teams and extended the product surface by contributing to a React Native mobile app for field operations.',
    ],
  },
  {
    role: 'Fullstack Web Programmer',
    company: 'TaraTech',
    period: 'Jan 2023 — Apr 2024',
    tasks: [
      'Delivered frontend modules for a Hospital Information System (HIS), streamlining back-office workflows and healthcare management for clinical operations.',
      'Crafted performant, responsive web applications and polished company profiles using Nuxt.js, consistently meeting tight client deadlines.',
      'Shipped end-to-end client solutions spanning custom web builds and WordPress implementations, owning the full delivery lifecycle from design handoff to launch.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center gap-3 mb-3">
        <span class="h-px w-8 bg-primary" />
        <span class="font-mono text-xs text-primary tracking-widest uppercase">02 — Experience</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">Where I've Worked</h2>

      <!-- Timeline -->
      <div class="relative pl-8 md:pl-10">
        <!-- Vertical line -->
        <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

        <div v-for="(job, i) in jobs" :key="i" class="relative mb-8 last:mb-0">
          <!-- Dot -->
          <div class="absolute -left-8 md:-left-10 top-8 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(var(--color-primary),0.3)]" style="transform: translateX(-5px);" />

          <Card class="transition-all duration-300 hover:shadow-md hover:translate-x-1 hover:border-primary/20">
            <CardHeader class="pb-3">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 class="text-lg font-bold">{{ job.role }}</h3>
                  <span class="text-primary font-medium text-sm">{{ job.company }}</span>
                </div>
                <Badge variant="secondary" class="font-mono text-xs w-fit whitespace-nowrap">
                  {{ job.period }}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul class="space-y-2.5">
                <li
                  v-for="(task, j) in job.tasks"
                  :key="j"
                  class="relative pl-5 text-sm text-muted-foreground leading-relaxed"
                >
                  <span class="absolute left-0 top-1.5 text-primary text-xs">▹</span>
                  {{ task }}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
