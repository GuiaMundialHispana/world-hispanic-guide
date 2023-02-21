<template>
  <header class="md:px-10 px-4 h-[102px] py-9 flex items-center justify-between">
    <figure>
      <NuxtLink to="/">
        <img src="/img/logo-header.png" alt="Guia mundial hispana" class="w-32 object-contain" />
      </NuxtLink>
    </figure>
    <nav :class="{'hidden':!showMenu}" class="lg:block fixed lg:static bg-white lg:w-auto w-full h-full top-0 right-0 lg:p-0 p-4 z-50">
      <div class="flex lg:items-center gap-x-4 lg:flex-row flex-col w-full h-full">
        <button @click="showMenu = false" class="w-8 h-8 btn flex-none mb-1 ml-auto mt-4 lg:hidden">
          <AtomsIcon name="menu" :size=16></AtomsIcon>
        </button>
        <NuxtLink class="link-to" to="/">Inicio</NuxtLink>
        <NuxtLink class="link-to" to="/about-us">Sobre nosotros</NuxtLink>
        <NuxtLink class="link-to" to="/contact">Contacto</NuxtLink>
        <NuxtLink class="link-to" to="/maintenance">Beneficios</NuxtLink>
        <div class="form-group relative lg:m-0 mb-4 lg:w-max w-full">
          <input type="text" class="form-control" placeholder="Buscar">
          <AtomsIcon name="search" :size=16 class="absolute right-0 w-8 h-8 flex items-center justify-center border-l border-[#434343] top-0" />
        </div>
        <NuxtLink to="/" class="btn w-32 h-8">Inicia sesión</NuxtLink>
      </div>
    </nav>
    <button @click="showMenu = !showMenu" class="w-8 h-8 btn flex-none lg:hidden">
      <AtomsIcon name="menu" :size=16></AtomsIcon>
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
    }
  },
  watch: {
    showMenu: function() {
      if(this.showMenu) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.link-to {
  @apply text-[#434343] text-sm lg:px-4 py-1 lg:m-0 mb-4 hover:border-b hover:border-primary;
}

.form-control {
  @apply border border-[#434343] text-sm w-full h-8 px-4 rounded-sm placeholder:text-[#434343] placeholder:font-normal font-bold;
}

.router-link-active {
  @apply border-b border-primary !important;
}
</style>