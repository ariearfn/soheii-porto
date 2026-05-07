<template>
  <footer class="py-16 border-t">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
        Let's build something
        <span class="text-primary">great</span>.
      </h2>

      <div class="flex flex-wrap justify-center gap-6 mb-8">
        <a
          href="mailto:ariearfn@gmail.com"
          class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          ariearfn@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ariearifin/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          LinkedIn
        </a>

      </div>

      <p class="font-mono text-xs text-muted-foreground/50">
        © {{ new Date().getFullYear() }} Arie Arifin. Jakarta, Indonesia.
      </p>
    </div>
  </footer>
</template>
