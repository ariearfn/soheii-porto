<script setup lang="ts">
const projects = [
  {
    icon: 'SSO',
    name: 'SSO Integration Platform',
    subtitle: 'Enterprise Authentication',
    desc: 'Built a centralized authentication interface integrating multiple internal services through Single Sign-On, simplifying user access across internal applications.',
    tags: ['Nuxt.js', 'Auth', 'SSO', 'REST API'],
    color: 'primary',
  },
  {
    icon: 'POS',
    name: 'POS Ticketing System',
    subtitle: 'Multi-branch Transaction Platform',
    desc: 'Developed front-end interfaces for a web-based point-of-sale system used by multiple branches to manage ticket sales and transactions at scale.',
    tags: ['Vue.js', 'POS', 'Ticketing', 'Real-time'],
    color: 'chart-3',
  },
  {
    icon: 'DSH',
    name: 'Monitoring Dashboard',
    subtitle: 'Operations Visibility Tool',
    desc: 'Built an internal dashboard to visualize system metrics and operational data, improving monitoring and issue visibility for internal teams.',
    tags: ['Nuxt.js', 'Data Viz', 'Dashboard', 'Monitoring'],
    color: 'chart-5',
  },
]
</script>

<template>
  <section id="projects" class="py-20 md:py-28 bg-[#111113] border-t border-b border-border">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center gap-3 mb-3">
        <span class="h-px w-8 bg-primary" />
        <span class="font-mono text-xs text-primary tracking-widest uppercase">03 — Key Projects</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">Things I've Built</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          v-for="project in projects"
          :key="project.name"
          class="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
        >
          <!-- Top glow line -->
          <div class="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <CardHeader>
            <!-- Confidential badge -->
            <div class="flex items-center gap-1.5 mb-3">
              <Badge variant="outline" class="text-[#ff8c42] border-[#ff8c42]/20 bg-[#ff8c42]/8 gap-1 text-[10px] font-mono tracking-wider">
                <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                INTERNAL
              </Badge>
            </div>

            <!-- Icon -->
            <div class="w-12 h-12 rounded-xl bg-primary/5 border flex items-center justify-center font-mono text-xs font-bold text-primary mb-3">
              {{ project.icon }}
            </div>

            <h3 class="text-base font-bold">{{ project.name }}</h3>
            <span class="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{{ project.subtitle }}</span>
          </CardHeader>

          <CardContent>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">
              {{ project.desc }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <Badge v-for="tag in project.tags" :key="tag" variant="secondary" class="font-mono text-[10px] font-normal">
                {{ tag }}
              </Badge>
            </div>

            <!-- NDA note -->
            <Separator />
            <p class="font-mono text-[11px] text-muted-foreground mt-3 leading-relaxed">
              Details under NDA — available to discuss in interviews.
            </p>
          </CardContent>
        </Card>
      </div>

      <!-- Footer note -->
      <div class="mt-8 p-5 border border-dashed rounded-xl text-center text-sm text-muted-foreground leading-relaxed bg-card">
        <span class="font-medium text-foreground">These projects were built for an enterprise client.</span><br />
        Project names and specific details have been redacted for confidentiality. Happy to walk through architecture and implementation in person.
      </div>
    </div>
  </section>
</template>
