<template>
  <section class="2xl:max-w-screen-2xl mx-auto p-8 lg:pb-16 lg:px-16">
    <div class="container p-0">
      <figure class="mb-16">
        <img v-if="tab === 0" src="/img/team/mision.png" alt="Misión" class="w-full object-contain max-w-[230px] mx-auto">
        <img v-if="tab === 1" src="/img/team/vision.png" alt="Visión" class="w-full object-contain max-w-sm mx-auto">
        <img v-if="tab === 2" src="/img/team/valores.png" alt="Valores" class="w-full object-contain max-w-md mx-auto">
      </figure>
      <nav class="flex justify-center gap-8 md:mb-6 mb-4">
        <button
          v-for="(tabito,index) in tabs" :key="tabito"
          :class="['tab-button', { active: tab === index}]"
          @click="tab = index">
          {{ tabito }}
        </button>
      </nav>
      <div class="tab-container" v-if="tab === 0">
        <p>El portal de propiedades más completo y actualizado de Latinoamérica y Estados Unidos para que usted pueda mostrar toda la información sobre su propiedad y poder llegar a más clientes potenciales en todo el mundo.</p>
      </div>
      <div class="tab-container" v-if="tab === 1">
        <p>Ser la mejor alternativa para la oferta de servicios de venta de publicidad por internet para los usuarios y empresas en los diferentes países de habla hispana, desde una relación con el cliente cercana y comprometida, ofreciendo las soluciones mas innovadoras a los precios mas competitivos.</p>
      </div>
      <div class="tab-container" v-if="tab === 2">
        <p>Nuestra empresa se reconoce por la alta calidad y precisión para mejorar los productos y servicios y crear nuevas oportunidades de negocios. Somos diferentes porque las personas que trabajamos en Guía Mundial Hispana hacemos de esta empresa un proyecto único y diferenciador. Trabajamos en equipo de forma rigurosa y transparente con un alto sentido del servicio al cliente, buscando en todo el momento satisfacer sus expectativas. Actualizamos constantemente nuestros conocimientos para conseguir ser pioneros por excelencia.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutStrategic',
  data() {
    return {
      tabs: ['Misión', 'Visión', 'Valores'],
      tab: 0
    }
  }
}
</script>

<style lang="postcss" scoped>
.tab-button {
  @apply text-base font-normal text-black text-opacity-[0.85] pb-1;

  &.active { @apply text-primary border-b border-primary font-medium; }
}

p { @apply text-center text-base text-opacity-[0.85]; }

.tab-container { @apply max-w-[830px] mx-auto ;}
</style>