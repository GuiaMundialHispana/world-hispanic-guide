<template>
  <section class="py-8 lg:py-28">
    <div class="2xl:container">
      <div class="lg:w-[600px] text-center mx-auto">
        <h2 class="text-primary text-[28px] mb-7 font-medium">Nuestras empresas</h2>
        <p class="lg:mx-auto mx-4 mb-14 text-sm">Descubre nuestras empresas, dedicadas día tras día a brindar satisfacción a nuestros usuarios.
        </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-8 lg:px-20 px-4 mx-auto">
        <a href="https://hispana-home-nuxt-eight.vercel.app/" target="_blank">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-home.png" alt="Hispana Home">
          </figure>
        </a>
        <a href="https://hispana-negocios.vercel.app/" target="_blank">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-bussiness.png" alt="Hispana Negocios">
          </figure>
        </a>
        <a href="https://hispana-auto-nuxt.vercel.app/" target="_blank">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-car.png" alt="Hispana Auto">
          </figure>
        </a>
        <NuxtLink to="/">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-afiliates.png" alt="Hispana Afiliados">
          </figure>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeCompanies'
}
</script>