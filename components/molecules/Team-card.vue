<template>
  <div class="team-card">
    <figure class="w-[290px] h-full mb-4 overflow-hidden">
      <img src="img/team/rafael-jaquez.jpg" alt="">
    </figure>
    <h4>Rafael Jaquez</h4>
    <h6>CEO Guía Mundial Hispana</h6>
    <p>Empresario Dominicano y Presidente Fundador de Guía Mundial Hispana. Amplio rango de responsabilidades en el diseño, planificación y ejecución de las estrategias de la empresa.</p>
  </div>
</template>

<style lang="postcss" scoped>
img { @apply rounded-2xl w-full h-60 object-cover object-center; }
h4 { @apply font-medium text-black text-xl; }
h6 { @apply text-primary font-medium text-sm mb-4; }
p { @apply text-sm text-black font-normal text-justify; }

.team-card {
  @apply p-4 hover:bg-[#FFF0F0] rounded-2xl;

</style>