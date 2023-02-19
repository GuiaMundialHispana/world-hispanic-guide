<template>
  <section class="md:py-24 py-8 md:px-16 px-4 grid xl:grid-cols-2 gap-x-20 max-w-screen-2xl mx-auto bg-[#F4F4F4]">
    <figure class="flex-none mb-8">
      <img src="/img/home/join.png" alt="Join us" class="lg:max-w-[822px] w-full xl:m-0 mx-auto" />
    </figure>
    <div>
      <h2 class="lg:text-6xl lg:leading-[68px] text-3xl font-bold text-primary mb-4 md:text-left text-center">Afíliate <br class="xl:block hidden" /> a nosotros</h2>
      <p class="lg:text-2xl text-base text-secondary font-medium mb-4 md:text-left text-center">Conoce los beneficios.</p>
      <p class="text-sm font-normal text-black mb-7">¡Únase a nuestro programa de afiliación y comience a ganar dinero por cada afiliación y venta que haga! Simplemente cree su cuenta y observe crecer el saldo de su cuenta a medida que sus invitados se convierten en sus afiliados y estos a su vez afilian o venden publicidad a sus clientes</p>
      <div class="flex gap-4">
        <NuxtLink to="/affiliate" class="btn w-20 h-9">Afíliate</NuxtLink>
        <NuxtLink to="/affiliate" class="btn-secondary h-9 w-max">Conoce los beneficios</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeJoin'
}
</script>