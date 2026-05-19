import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['shadcn-nuxt', '@vercel/analytics', '@vercel/speed-insights'],

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Arie Arifin — Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Frontend Developer with 5 years of experience building scalable web applications within the Vue.js ecosystem.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  compatibilityDate: '2025-07-15',
});
