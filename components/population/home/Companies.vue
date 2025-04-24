<template>
  <section class="py-8 lg:py-28">
    <div class="2xl:container">
      <div class="lg:w-[600px] text-center mx-auto">
        <h2 class="text-primary text-[28px] mb-7 font-medium">Nuestras empresas</h2>
        <p class="lg:mx-auto mx-4 mb-14 text-sm">Descubre nuestras empresas, dedicadas día tras día a brindar satisfacción a nuestros usuarios.
        </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-8 lg:px-20 px-4 mx-auto">
        <a href="https://www.grupocasasymas.com/" target="_blank">
          <figure class="px-4">
            <img class="md:w-50 lg:w-60 mx-auto" src="/img/home/hispana-home.svg" alt="Grupo Casas y Más">
          </figure>
        </a>
        <a href="https://www.gruponegociosymas.com/" target="_blank">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-bussiness.svg" alt="Grupo Negocios y Más">
          </figure>
        </a>
        <a href="https://www.grupocarrosymas.com/" target="_blank">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-car.svg" alt="Grupo Carros y Más">
          </figure>
        </a>
        <NuxtLink to="https://www.guiamundialhispana.com/affiliate">
          <figure class="px-4">
            <img class="md:w-52 lg:w-60 mx-auto" src="/img/home/hispana-afiliates.png" alt="Guía Mundial Hispana">
          </figure>
        </NuxtLink>
      </div>
      <ul class="grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-8 lg:px-20 px-4 mt-10 mx-auto">
        <li v-for="team in teams" :key="team">
          <MoleculesTeamCard :name="team.name" :img="team.img" />
        </li>
      </ul>

    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { data:teams } = useFetch('affiliates', {
  method: 'GET',
  baseURL: config.public.API,
  transform(_data) {
    return _data.results
  }
})
</script>