<template>
  <div class="team-card">
    <figure class="max-w-[290px] w-full h-full mb-4 overflow-hidden">
      <img :src="`/img/team/${img}`" :alt="name">
    </figure>
    <h4>{{ name }}</h4>
    <h6>{{ position }}</h6>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name:'teamCard',
  props: {
    img: String,
    name: String,
    position: String,
    description: String
  }
}
</script>

<style lang="postcss" scoped>
img { @apply rounded-2xl w-full h-60 object-cover object-center mx-auto; }
h4 { @apply font-medium text-black text-xl; }
h6 { @apply text-primary font-medium text-sm sm:mb-4 mb-2; }
p { @apply text-sm text-black font-normal sm:text-justify text-center; }

.team-card {
  @apply p-4 hover:bg-[#FFF0F0] rounded-2xl;
}
</style>