<template>
  <section>
    <div class="container-fluid flex xl:flex-row flex-col justify-between items-center md:px-16 px-4 max-w-screen-2xl h-full relative z-10">
      <div class="xl:mb-0 mb-10">
        <h1 class="lg:text-6xl lg:leading-[68px] text-3xl font-bold text-primary mb-2 xl:text-left text-center">Creando empleos <br /> <span class="text-secondary">sin limites</span></h1>
        <p class="mb-8 lg:text-2xl text-base text-secondary font-medium xl:text-left text-center">Más allá de cualquier frontera</p>
        <div class="flex items-center gap-x-4 xl:justify-start justify-center">
          <NuxtLink to="/join-us" class="btn-secondary h-9 w-36">Afíliate</NuxtLink>
          <NuxtLink to="/about-us" class="btn-primary-border h-9">Conoce el equipo</NuxtLink>
        </div>
      </div>
      <figure>
        <img src="/img/home/team.png" alt="Guia Mundial Hispana" class="w-[620px] object-contain">
      </figure>
    </div>
    <PopulationHomeCounter class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 relative lg:mt-0 mt-8 mx-auto z-20"></PopulationHomeCounter>
  </section>
</template>

<style lang="postcss" scoped>
section {
  background-image: url('../img/home/hero-background.png');
  @apply bg-cover xl:h-[756px] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#F5F5F5] before:bg-opacity-[0.96] md:py-16 py-8;
}
</style>