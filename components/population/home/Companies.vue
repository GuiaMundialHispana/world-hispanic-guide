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
    </div>
    <div class="container max-w-4xl mt-10">
      <h2 class="text-primary text-[28px] mb-7 font-medium text-center">Conozca nuestros afiliados</h2>
      <div class="flex items-center gap-4 justify-center">
        <button class="btn" @click="currentTab = 'active'" :class="{active: currentTab === 'active'}">Active</button>
        <button class="btn" @click="currentTab = 'inactive'" :class="{active: currentTab === 'inactive'}">Inactive</button>
      </div>
      <ul v-if="currentTab === 'active'" class="mt-10">
        <li v-for="team in actives" :key="team" class="flex items-center gap-2 mb-6">
          <NuxtImg :src="`/img/team/${img}`" :alt="name" placeholder="/img/team/team-placeholder.jpg" class="w-14 h-14 object-cover object-center rounded-full" />
          <h4 class="font-medium text-black text-xl">{{ team.name }}</h4>
        </li>
      </ul>
      <ul v-if="currentTab === 'inactive'"  class="mt-10">
        <li v-for="team in inactive" :key="team" class="flex items-center gap-2 mb-6">
          <NuxtImg :src="`/img/team/${img}`" :alt="name" placeholder="/img/team/team-placeholder.jpg" class="w-14 h-14 object-cover object-center rounded-full" />
          <h4 class="font-medium text-black text-xl">{{ team.name }}</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const actives = ref([]);
const inactive = ref([]);
const currentTab = ref('active');
const { data } = useFetch('affiliates', {
  method: 'GET',
  baseURL: config.public.API,
  transform(data) {
    data.results.forEach((item: {}) => {
      if (item.affiliate_type_id === 1) {
        actives.value.push(item);
      } else {
        inactive.value.push(item);
      }
    })
  }
})
</script>

<style lang="postcss" scoped>
.btn {
  @apply flex border border-solid border-primary bg-white hover:bg-primary hover:text-white w-full h-[40px] justify-center px-5 py-3 text-primary text-sm font-bold rounded-lg items-center;
  &.active {
    @apply bg-primary text-white;
  }
}
</style>