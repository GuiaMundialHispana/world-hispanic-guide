<template>
  <div class="w-max bg-secondary xl:h-[110px] min-h-[80px] lg:rounded-[60px] rounded-3xl xl:px-11 px-4 py-8 flex lg:flex-row flex-col lg:items-center">
    <div class="flex items-center gap-2.5 text-white xl:pr-11 lg:pr-4 lg:mb-0 mb-4">
      <span class="w-10 h-10 bg-[#8994AF] rounded-full flex items-center justify-center">
        <AtomsIcon name="home" :size=18 />
      </span>
      <h4 class="xl:text-[40px] xl:leading-[32px] text-3xl font-bold">4,365</h4>
      <p class="text-xl font-medium">Casas vendidas</p>
    </div>
    <div class="flex items-center gap-2.5 text-white xl:px-11 lg:px-4 lg:border-x border-white lg:mb-0 mb-4">
      <span class="w-10 h-10 bg-[#8994AF] rounded-full flex items-center justify-center">
        <AtomsIcon name="car" :size=18 />
      </span>
      <h4 class="xl:text-[40px] xl:leading-[32px] text-3xl font-bold">3,437</h4>
      <p class="text-xl font-medium">Vehículos vendidos</p>
    </div>
    <div class="flex items-center gap-2.5 text-white xl:pl-11 lg:pl-4">
      <span class="w-10 h-10 bg-[#8994AF] rounded-full flex items-center justify-center">
        <AtomsIcon name="world" :size=18 />
      </span>
      <h4 class="xl:text-[40px] xl:leading-[32px] text-3xl font-bold">17</h4>
      <p class="text-xl font-medium">Países</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCounter'
}
</script>