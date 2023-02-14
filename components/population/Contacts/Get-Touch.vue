<template>
  <div class="mx-4 sm:w-[568px] form-group sm:grid sm:grid-cols-2 sm:mx-auto gap-4">
    <div class="flex flex-col">
      <label for="name">Nombre</label>
      <input class="form-control mt-2" placeholder="Nombre" type="text" id="name">
    </div>
    <div class="flex flex-col">
      <label for="email">Correo</label>
      <input class="form-control mt-2" placeholder="Correo" type="email"  id="email">
    </div>
    <div class="flex flex-col col-span-2">
      <label for="message">Mensaje</label>
      <textarea class="mt-2 border border-[#D9D9D9] text-sm rounded-sm px-3 placeholder:text-opacity-25 placeholder:font-normal h-14" type="text" id="message" maxlength="100"></textarea>
      <p class="ml-auto text-[#000000] text-base opacity-25 mt-2">0/100</p>
    </div>
    <div class="mr-auto mt-4 sm:mt-1 col-start-2 sm:mr-0 ml-auto flex justify-end">
      <button class="rounded-sm w-20 h-10 bg-[#1F2841] text-white text-base ">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style lang="postcss" scoped>
  label {
    @apply font-normal text-sm mr-2 text-opacity-[0.85];
  }

  .form-group { @apply mb-6; }

  .form-control {
    @apply  h-8 border border-[#D9D9D9] text-sm rounded-sm px-3 placeholder:text-opacity-25 placeholder:font-normal;
  }
</style>
