<template>
  <MoleculesBreadcrumbs pageName="Únete al equipo" pageLink="join-us" />
  <!--  -->
  <figure>
    <img src="/img/affiliate/join-team.png" alt="Join us" class="max-w-[700px] w-full mx-auto">
  </figure>
  <!--  -->
  <div class="mt-8 mb-20">
    <div v-if="!successConfirmation" class="max-w-[960px] px-8 mx-auto">
      <!-- Personal information -->
      <h1 v-if="inviter" class="text-black font-bold mb-7 text-2xl flex items-center">
        <img v-if="inviter.user_image" :src="inviter.user_image" :alt="inviter.name" class="rounded-full w-12 h-12 mr-2" />
        <span>Estas siendo invitado por:</span> <span class="text-primary">{{ inviter.name }}</span>
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
            <label for="email">Correo:</label>
            <input type="text" v-model="email" placeholder="Correo" id="email" class="form-control" />
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
          <div class="form-group">
            <label for="city">Ciudad:</label>
            <input type="text" v-model="city" placeholder="País" id="city" class="form-control" />
          </div>
        </div>
      </div>
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
      <button class="btn h-8 px-4 mx-auto mt-4" v-if="!successConfirmation" @click="createAffiliate()" :disabled="confirm">Aceptar y enviar solicitud</button>
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

const inviter = ref(null);
function getInviter() {
  $fetch(`inviter/${useRoute().query.token}`, {
    method: 'GET',
    baseURL: config.public.API,
    onResponse({response}) {
      if(response._data.code === 200) {
        inviter.value = response._data.results;
      }
    },
  });
}

if(useRoute().query.token) {
  console.log('token', useRoute().query.token)
  getInviter()
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
  form.append('office_number', officePhone.value);
  form.append('birthdate', birthdate.value);
  form.append('address', address.value);
  form.append('social_id', socialId.value);
  form.append('personal_phone', personalPhone.value);
  form.append('country', country.value);
  form.append('city', city.value);

  const referedToken = useRoute().query.token?.toString();
  if (referedToken) {
    form.append('token', referedToken);
  }

  await useFetch('auth/register',{
    method: 'POST',
    baseURL: config.public.API,
    body: form,
    onResponse({response}) {
      loading.value = false;
      if(response._data.code === 200) { 
        successConfirmation.value = true;
        errorConfirmation.value = false;
        errorMessage.value = null;
        name.value = '';
        lastName.value = '';
        email.value = '';
        address.value = '';
        personalPhone.value = '';
        officePhone.value = '';
        birthdate.value = '';
        socialId.value = '';
        country.value = '';
        city.value = '';

      }
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