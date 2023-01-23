<template>
  <div>
    <h1 class="bg-red-500">testing <span>Soy un span</span></h1>
    <AtomsIcon name="house-solid" />
  </div>
</template>

<style lang="postcss">
h1 {
  @apply font-thin;
  & span { @apply font-bold; }
}
</style>