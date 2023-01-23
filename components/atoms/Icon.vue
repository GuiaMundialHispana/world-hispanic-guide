<template>
  <nuxt-icon
    :name="name"
    :styles="{ 'font-size': size + 'px' }"
    class="fill-current leading-none" 
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "search"
    },
    size: {
      type: Number,
      default: 16
    }
  }
}
</script>