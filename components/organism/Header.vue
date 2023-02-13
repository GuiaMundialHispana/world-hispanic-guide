<template>
  <header class="px-10 h-[102px] py-9 flex items-center justify-between">
    <figure>
      <NuxtLink to="/">
        <img src="/img/logo-header.png" alt="Guia mundial hispana" class="w-32 object-contain" />
      </NuxtLink>
    </figure>
    <nav class="lg:flex hidden lg:items-center gap-x-4 lg:flex-row flex-col lg:static absolute bg-white lg:border-none border border-black lg:w-auto w-96 h-full top-0 right-0 lg:p-0 p-4">
      <button class="w-8 h-8 btn flex-none mb-6 ml-auto mt-4 lg:hidden">
        <AtomsIcon class="menu" :size=16></AtomsIcon>
      </button>
      <NuxtLink class="link-to" to="/">Sobre nosotros</NuxtLink>
      <NuxtLink class="link-to" to="/">Contacto</NuxtLink>
      <div class="form-group relative lg:m-0 mb-4 w-max">
        <input type="text" class="form-control" placeholder="Buscar">
        <AtomsIcon name="search" :size=16 class="absolute right-0 w-8 h-8 flex items-center justify-center border-l border-[#434343] top-0" />
      </div>
      <NuxtLink to="/" class="btn w-32">Inicia sesión</NuxtLink>
    </nav>
    <button class="w-8 h-8 btn flex-none lg:hidden">
      <AtomsIcon class="menu" :size=16></AtomsIcon>
    </button>
  </header>
</template>

<style lang="postcss" scoped>
.link-to {
  @apply text-[#434343] text-sm lg:px-4 py-1 lg:m-0 mb-4;
}

.form-control {
  @apply border border-[#434343] text-sm h-8 px-4 rounded-sm placeholder:text-[#434343] placeholder:font-normal font-bold;
}
</style>