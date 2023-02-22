<template>
  <footer class="w-full bg-primary py-16" :class="changeBackground">
    <div class="xl:px-24 lg:px-16 px-4 grid md:grid-cols-12 grid-cols-1 xl:gap-x-16 md:gap-x-10 gap-y-6 items-center 2xl:max-w-screen-2xl 2xl:mx-auto">
      <figure class="xl:col-span-3 col-span-12">
        <NuxtLink to="/">
          <img src="/img/logo-white.png" class="w-56" alt="Guia Mundial Hispana" />
        </NuxtLink>
      </figure>
      <div class="xl:col-span-5 col-span-12">
        <p class="text-white text-sm font-normal mb-8">
          Guia Mundial Hispana es un proyecto concebido con el propósito de ofrecer un lugar de encuentro para la comunidad latina, que conforma un ambiente cómodo y seguro para el visitante.
        </p>
        <p class="text-white text-sm font-normal">
          Guia Mundial Hispana es una web comercial que agrupa una variedad de servicios, dentro de un mismo espacio.
        </p>
      </div>
      <nav class="flex lg:flex-col md:flex-row flex-col gap-4 md:justify-start justify-center xl:items-start items-center flex-none xl:col-span-2 md:col-span-6 col-span-12">
        <h6 class="uppercase text-white font-medium text-sm xl:block hidden">NAVEGACIÓN</h6>
        <NuxtLink class="link-to" to="/about-us">Sobre nosotros</NuxtLink>
        <NuxtLink class="link-to" to="/contact">Contacto</NuxtLink>
        <NuxtLink class="link-to" to="/affiliate">Afiliate</NuxtLink>
        <NuxtLink class="link-to" to="/legal-warning">Aviso legal</NuxtLink>
        <NuxtLink class="link-to" to="/privacy-policy">Politica de privacidad</NuxtLink>
      </nav>
      <nav class="flex flex-none items-center xl:justify-start md:justify-end justify-center gap-2 xl:col-span-2 md:col-span-6 col-span-12">
        <a href="/" class="social-link">
          <AtomsIcon name="facebook" />
        </a>
        <a href="/" class="social-link">
          <AtomsIcon name="instagram" />
        </a>
        <a href="/" class="social-link">
          <AtomsIcon name="twitter" />
        </a>
        <a href="/" class="social-link">
          <AtomsIcon name="youtube" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    changeBackground() {
      if(
        this.$route.fullPath === '/about-us' ||
        this.$route.fullPath === '/benefits' ||
        this.$route.fullPath === '/legal-warning' ||
        this.$route.fullPath === '/privacy-policy') 
      {
        return 'bg-[#111544]'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.link-to {
  @apply text-white text-sm block whitespace-nowrap;
}

.social-link {
  @apply w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-white flex-none;
}

.router-link-active {
  @apply font-bold !important;
}
</style>