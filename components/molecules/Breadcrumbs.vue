<template>
  <nav class="bg-[#FFF0F0] px-4 md:px-16 py-4 flex items-center text-sm">
    <NuxtLink to="/" class="text-black text-opacity-[0.45]">Home</NuxtLink>
    <span class="text-black text-opacity-[0.45] mx-2">/</span>
    <NuxtLink :to="pageLink" class="text-primary font-normal">{{ pageName }}</NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'MoleculesBreadcrumbs',
  props: {
    pageName: 'String',
    pageLink: 'String'
  }
}
</script>