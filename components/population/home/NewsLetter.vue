<template>
  <section class="md:py-20 py-8 md:px-16 px-4 max-w-screen-2xl mx-auto">
    <div class="w-full max-w-4xl mx-auto bg-secondary py-10 text-center rounded-2xl text-white md:px-20 px-4">
      <h5 class="font-medium text-2xl mb-4">Suscríbete a nuestro boletín</h5>
      <p class="text-sm mb-4">Guia Mundial Hispana es un proyecto concebido con el propósito de ofrecer un lugar de encuentro para la comunidad latina, que conforma un ambiente cómodo y seguro para el visitante.</p>
      <form>
        <div class="form-group flex md:flex-row flex-col justify-center">
          <input type="text" class="form-control md:w-72 w-full" placeholder="Correo electrónico">
          <button class="btn w-[104px] h-9 md:m-0 mx-auto mt-4">
            <AtomsIcon class="mr-2" name="send" :size=16></AtomsIcon>
            Search
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.form-control {
  @apply h-9 border border-[#D9D9D9] text-sm rounded-sm px-3 placeholder:text-opacity-25 placeholder:font-normal focus:outline-none rounded-r-none;
}

button { @apply rounded-none; }
</style>