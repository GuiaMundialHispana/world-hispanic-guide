<template>
  <MoleculesBreadcrumbs pageName="Únete al equipo" pageLink="join-us" />
  <!--  -->
  <figure>
    <img src="/img/join/join-team.png" alt="Join us" class="max-w-[700px] w-full mx-auto">
  </figure>
  <!--  -->
  <Form class="mt-8 mb-20">
    <div class="max-w-[960px] px-8 mx-auto">
      <!-- User information -->
      <h2 class="text-xl font-medium text-black mb-7">Datos del usuario:</h2>
      <div class="grid lg:grid-cols-2 grid-cols-1 mb-6">
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="user">Usuario:</label>
            <input type="text" placeholder="usuario" id="user" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Correo:</label>
            <input type="text" placeholder="Correo" id="email" class="form-control" />
          </div>
        </div>
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" placeholder="Contraseña" id="password" class="form-control" />
          </div>
          <div class="form-group">
            <label for="repeatPassword">Repetir contraseña:</label>
            <input type="password" placeholder="Repetir contraseña" id="repeatPassword" class="form-control" />
          </div>
        </div>
      </div>
      <!-- Personal information -->
      <h2 class="text-xl font-medium text-black mb-7">Información Personal:</h2>
      <div class="grid lg:grid-cols-2 grid-cols-1 mb-6">
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" placeholder="Nombre" id="name" class="form-control" />
          </div>
          <div class="form-group">
            <label for="lastName">Apellido:</label>
            <input type="text" placeholder="Apellido" id="lastName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="address">Dirección:</label>
            <input type="text" placeholder="Dirección" id="address" class="form-control" />
          </div>
          <div class="form-group">
            <label for="personalPhone">Teléfono personal:</label>
            <input type="text" placeholder="Télefono" id="personalPhone" class="form-control" />
          </div>
        </div>
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="officePhone">Teléfono oficina:</label>
            <input type="text" placeholder="Télefono" id="officePhone" class="form-control" />
          </div>
          <div class="form-group">
            <label for="date">Fecha de nacimiento:</label>
            <input type="date" placeholder="Seleciona una fecha" id="date" class="form-control" />
          </div>
          <div class="form-group">
            <label for="userId">Cédula:</label>
            <input type="text" placeholder="Cédula" id="userId" class="form-control" />
          </div>
          <div class="form-group">
            <label for="country">País:</label>
            <input type="text" placeholder="País" id="country" class="form-control" />
          </div>
          <div class="form-group">
            <label for="hered">Ced. Hered:</label>
            <input type="text" placeholder="Ced. Hered" id="hered" class="form-control" />
          </div>
        </div>
      </div>
      <!-- Personal references -->
      <h2 class="text-xl font-medium text-black mb-7">Referencias Personales:</h2>
      <p class="text-sm font-normal text-opacity-[0.85]"><span class="text-primary">*</span> Referencias personales</p>
      <div class="overflow-x-scroll md:overflow-hidden mt-2 w-full">
        <table class="w-full mb-6 border-collapse m-0 p-0">
          <tr class="border-b border-black border-opacity-[0.06] bg-[#FAFAFA]">
            <th class="text-left w-1/3 whitespace-nowrap p-4 border-r border-black border-opacity-[0.06]">
              <span class="text-primary">*</span> Referencias personales
            </th>
            <th class="text-left w-1/3 whitespace-nowrap p-4 border-r border-black border-opacity-[0.06]">
              <span class="text-primary">*</span> Nombre completo
            </th>
            <th class="text-left w-1/3 whitespace-nowrap p-4">
              <span class="text-primary">*</span> Teléfono
            </th>
          </tr>
          <tr class="border-b border-black border-opacity-[0.06]">
            <td class="px-4 py-3">
              Referencia 1
            </td>
            <td class="px-4 py-3">
              <input type="text" class="border border-[#D9D9D9] text-sm rounded-sm px-3 md:w-full h-8 w-60" value="Pedro Perez">
            </td>
            <td class="px-4 py-3">
              <input type="text" class="border border-[#D9D9D9] text-sm rounded-sm px-3 md:w-full h-8 w-60" value="809-345-2345" />
            </td>
          </tr>
          <tr class="border-b border-black border-opacity-[0.06]">
            <td class="px-4 py-3">
              Referencia 1
            </td>
            <td class="px-4 py-3">
              <input type="text" class="border border-[#D9D9D9] text-sm rounded-sm px-3 md:w-full h-8 w-60" value="Pedro Perez">
            </td>
            <td class="px-4 py-3">
              <input type="text" class="border border-[#D9D9D9] text-sm rounded-sm px-3 md:w-full h-8 w-60" value="809-345-2345" />
            </td>
          </tr>
        </table>
      </div>
      <button class="w-full h-8 border-dashed border border-[#D9D9D9] flex items-center justify-center font-normal text-black">
        + Añadir
      </button>
      <!--  -->
      <div class="flex items-center text-sm text-opacity-[0.85] mb-2 mt-14">
        <input type="radio" name="Confirm" id="" class="mr-2 w-4 text-primary">
        Confirmar
      </div>
      <p class="text-sm text-black text-opacity-[0.45] mb-6">Confirmo que la información que estoy suministrando es verdadera y que he leído el Aviso Legal, la Política de <br /> Privacidad y que acepto los Términos y Condiciones <NuxtLink to="/" class="text-[#00DBF2]">aquí</NuxtLink> propuestos</p>
      <button class="btn px-4 mx-auto">Aceptar y enviar solicitud</button>
    </div>
  </Form>
</template>

<style lang="postcss" scoped>
label {
  @apply font-normal text-sm mr-2 text-opacity-[0.85];
}

.form-group { @apply mb-6 flex items-center w-full lg:w-auto; }

.form-control {
  @apply flex-grow md:w-[216px] h-8 border border-[#D9D9D9] text-sm rounded-sm px-3 placeholder:text-opacity-25 placeholder:font-normal;
}
</style>