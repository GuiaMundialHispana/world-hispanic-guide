<template>
  <section class="2xl:max-w-screen-2xl mx-auto px-4 md:px-8 p-8 lg:px-16 text-center lg:text-left">
    <h2 class="text-[28px] font-medium my-4 lg:my-10">Nuestras empresas</h2>
    <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-16 gap-6">
      <div class="company-card">
        <a href="#">
          <figure>
            <img src="/img/home/hispana-home.png" alt="Hispana Home">
          </figure>
        </a>
        <p>El portal de propiedades más completo y actualizado de Latinoamérica y Estados Unidos para que usted pueda mostrar toda la información sobre su propiedad y poder llegar a más clientes potenciales en todo el mundo.</p>
      </div>
      <div class="company-card">
        <a href="#">
          <figure>
            <img src="/img/home/hispana-bussiness.png" alt="Hispana Negocios">
          </figure>
        </a>
        <p>El portal de Negocios más completo y actualizado de Latinoamérica y Estados Unidos para que usted pueda mostrar toda la información sobre su negocio y poder llegar a más clientes potenciales en todo el mundo.</p>
      </div>
      <div class="company-card">
        <a href="#">
          <figure>
            <img src="/img/home/hispana-car.png" alt="Hispana Auto">
          </figure>
        </a>
        <p>El portal de vehículos más completo y actualizado de Latinoamérica y Estados Unidos para que usted pueda mostrar toda la información sobre su vehículo y poder llegar a más clientes potenciales en todo el mundo.</p>
      </div>
      <div class="company-card">
        <a href="#">
          <figure>
            <img src="/img/home/hispana-afiliates.png" alt="Hispana Afiliados">
          </figure>
        </a>
        <p>¡Únase a nuestro programa de afiliación y comience a ganar dinero por cada afiliación y venta que haga! Simplemente cree su cuenta y observe crecer el saldo de su cuenta a medida que sus invitados se convierten en sus afiliados y estos a su vez afilian o venden publicidad a sus clientes.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutCompanies'
}
</script>

<style lang="postcss" scoped>
.company-card{
  @apply 2xl:w-60 flex xl:gap-10 gap-4 flex-col text-center;

  & img { @apply w-60 object-contain mx-auto; }

  & p { @apply text-sm; }
}
</style>