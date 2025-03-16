<template>
  <MoleculesBreadcrumbs pageName="Únete al equipo" pageLink="join-us" />
  <!--  -->
  <figure>
    <img src="/img/affiliate/join-team.png" alt="Join us" class="max-w-[700px] w-full mx-auto">
  </figure>
  <!--  -->
  <div class="mt-8 mb-20">
    <div v-if="!successConfirmation" class="max-w-[960px] px-8 mx-auto">
      <!-- User indivation -->
      <!-- <h2 class="text-xl font-medium text-black mb-7">Datos del usuario:</h2>
      <div class="grid sm:grid-cols-2 gap-4 grid-cols-1 mb-6 w-full">
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="user">Usuario:</label>
            <input type="text" v-model="userName" placeholder="Usuario" id="user" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Correo:</label>
            <input type="text" v-model="email" placeholder="Correo" id="email" class="form-control" />
          </div>
        </div>
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" placeholder="Contraseña" id="password" class="form-control" />
          </div>
          <div class="form-group">
            <label for="repeatPassword">Repetir contraseña:</label>
            <input type="password" v-model="confirmPassword" placeholder="Repetir contraseña" id="repeatPassword" class="form-control" />
            <p v-if="errorPasswordConfirm" class="text-red-500 font-bold text-xs">La contraseña no es igual</p>
          </div>
        </div>
      </div> -->
      <!-- Personal information -->
      <h1 v-if="useRoute().query.ref" class="text-black font-bold mb-7 text-2xl">
        <span>Estas siendo invitado por:</span> <span class="text-primary">Juanito Pena</span>
      </h1>
      <h2 class="text-xl font-medium text-black mb-7">Información Personal:</h2>
      <div class="grid sm:grid-cols-2 gap-x-4 grid-cols-1">
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" v-model="name" placeholder="Nombre" id="name" class="form-control" />
          </div>
          <div class="form-group">
            <label for="lastName">Apellido:</label>
            <input type="text" v-model="lastName" placeholder="Apellido" id="lastName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="address">Dirección:</label>
            <input type="text" v-model="address" placeholder="Dirección" id="address" class="form-control" />
          </div>
          <div class="form-group">
            <label for="personalPhone">Teléfono personal:</label>
            <VueTelInput id="personalPhone" v-model="personalPhone" mode="international" class="form-control w-full flex"></VueTelInput>
          </div>
        </div>
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="officePhone">Teléfono oficina:</label>
            <VueTelInput id="officePhone" v-model="officePhone" mode="international" class="form-control w-full flex"></VueTelInput>
          </div>
          <div class="form-group">
            <label for="date">Fecha de nacimiento:</label>
            <input type="date" v-model="birthdate" placeholder="Seleciona una fecha" id="date" class="form-control" />
          </div>
          <div class="form-group">
            <label for="userId">Cédula:</label>
            <input type="text" v-model="socialId" placeholder="Cédula" id="userId" class="form-control" />
          </div>
          <div class="form-group">
            <label for="country">País:</label>
            <input type="text" v-model="country" placeholder="País" id="country" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label for="city">Ciudad:</label>
          <input type="text" v-model="city" placeholder="País" id="city" class="form-control" />
        </div>
        <div class="form-group">
          <label for="affiliate">Tipo de Afiliado:</label>
          <select name="affiliate" id="affiliate" class="form-control">
            <option value="active">Afiliacion Activa</option>
            <option value="pasive">Afiliacion Pasiva</option>
          </select>
        </div>
      </div>
      <!-- Personal references -->
      <!-- <h2 class="text-xl font-medium text-black mb-7">Referencias Personales:</h2>
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
          <tr v-for="(tr,index) in referenceLimit" :key="index">
            <td class="px-4 py-3">
              Referencia {{ index + 1 }}
            </td>
            <td class="px-4 py-3">
              <input type="text" v-model="tr.name" class="border border-[#D9D9D9] text-sm rounded-sm px-3 md:w-full h-8 w-60" placeholder="Pedro Perez">
            </td>
            <td class="px-4 py-3">
              <VueTelInput id="officePhone" v-model="tr.phone" mode="international" class="border border-[#D9D9D9] text-sm rounded-sm px-3 md:w-full h-8 w-60"></VueTelInput>
            </td>
            <td v-if="index > 0" @click="referenceLimit.splice(index ,1)">eliminar</td>
          </tr>
        </table>
      </div>
      <button class="w-full h-8 border-dashed border border-[#D9D9D9] flex items-center justify-center font-normal text-black" @click="createRow()">
        + Añadir
      </button> -->
      <!--  -->
      <label for="confirm" class="flex items-center text-sm text-opacity-[0.85] mt-4">
        <input type="checkbox" name="Confirm" id="confirm" class="mr-2 w-4 h-4 text-primary" @click="confirm != confirm">
        Confirmar
      </label>
      <p class="text-sm text-black text-opacity-[0.45] mb-6 mt-3">Confirmo que la información que estoy suministrando es verdadera y que he leído el Aviso Legal, la Política de <br /> Privacidad y que acepto los Términos y Condiciones <NuxtLink to="/" class="text-[#00DBF2]">aquí</NuxtLink> propuestos</p>
    </div>
    <!-- Confirmation -->
    <div class="px-4 sm:px-8">
      <div v-if="successConfirmation" class="bg-[#3fcc3c] confirmation-msg">
        <figure>
          <img src="/img/check.png" alt="Confirm success">
        </figure>
        <p>La información fue enviada con éxito</p>
        <button class="btn h-8 px-4 mx-auto mt-4" @click="successConfirmation = false">Hacer una nueva aplicacion</button>
      </div>
      <div v-if="errorConfirmation" class="bg-primary confirmation-msg">
        <figure>
          <img src="/img/warning.png" alt="Error" class="w-full">
        </figure>
        <p class="text-white text-xl font-semibold text-center">Ocurrió un Error, por favor verifica la información suministrada</p>
        <ul>
          <li class="text-white text-xl font-semibold mb-2 list-disc" v-for="error in errorMessage" :key="error">{{  error[0] }}</li>
        </ul>
      </div>
      <button class="btn h-8 px-4 mx-auto mt-4" @click="createAffiliate()" :disabled="confirm">Aceptar y enviar solicitud</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

const config = useRuntimeConfig();
const userName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const name = ref('');
const lastName = ref('');
const address = ref('');
const personalPhone = ref('');
const officePhone = ref('');
const birthdate = ref('');
const socialId = ref('');
const country = ref('');
const city = ref('');
const affiliate = ref('');
const confirm = ref(false);
const loading = ref(false);
const errorPasswordConfirm = ref(false);
const successConfirmation = ref(false);
const errorConfirmation = ref(false);
let errorMessage = ref(null)
const referenceLimit = ref([{name:'', phone: ''}])

function createRow() {
  referenceLimit.value.push({name: '', phone: ''});
}

watch(confirmPassword, (newPass) => {
  if(newPass !== password.value) {
    errorPasswordConfirm.value = true;
  } else {
    errorPasswordConfirm.value = false;
  }
})

if(useRoute().query.ref) {
  const { data, pending } = useFetch('inviter/rfxZfPRFgGPTvhtbw6DmGRZ9ewmntBym', {
    method: 'GET',
    baseURL: config.public.API,
    server: false,
    onResponse({response}) {
      console.log(response._data);
    },
  });
}

async function createAffiliate() {
  errorConfirmation.value = false;
  errorMessage.value = null;
  successConfirmation.value = false;
  loading.value = true;
  const form = new FormData();
  form.append('name', name.value);
  form.append('lastname', lastName.value);
  form.append('email', email.value);
  form.append('password', password.value);
  form.append('password_confirmation', confirmPassword.value);
  form.append('office_number', officePhone.value);
  form.append('birthdate', birthdate.value);
  form.append('address', address.value);
  form.append('social_id', socialId.value);
  form.append('personal_phone', personalPhone.value);
  form.append('country', country.value);
  form.append('city', city.value);
  form.append('suscription', affiliate.value);

  const referedToken = useRoute().query.ref?.toString();
  if (referedToken) {
    form.append('token', referedToken);
  }

  // referenceLimit.value.forEach(function (reference, index) {
  //   form.append(`personal_references[${index}][name]`, reference.name);
  //   form.append(`personal_references[${index}][phone]`, reference.phone);
  // });

  await useFetch('auth/register',{
    method: 'POST',
    baseURL: config.public.API,
    body: form,
    onResponse({response}) {
      loading.value = false;
      if(response._data.code === 200) { successConfirmation.value = true; }
    },
    onResponseError({response}) {
      loading.value = false;
      if(response._data.code === 400) {
        errorConfirmation.value = true;
        errorMessage.value = response._data.message;
      }
    }
  });
} 

</script>

<style lang="postcss" scoped>
label {
  @apply font-normal text-sm mr-2 text-opacity-[0.85];
}
.form-group { @apply mb-6 flex w-full flex-col gap-2; }
.form-control {
  @apply flex-grow h-8 border w-full border-[#D9D9D9] text-sm rounded-sm px-3 placeholder:text-opacity-25 placeholder:font-normal;
}
.confirmation-msg{
  @apply flex items-center justify-center flex-col mt-10 gap-4 sm:p-5 p-3 w-fit mx-auto rounded-xl;
  & figure{
    @apply flex items-center justify-center rounded-full w-14 h-14 bg-white p-3;
  }
  & p{
    @apply text-white text-base sm:text-xl font-semibold text-center;
  }
}
</style>