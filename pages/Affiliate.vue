<template>
  <MoleculesBreadcrumbs pageName="Únete al equipo" pageLink="join-us" />
  <!--  -->
  <figure>
    <img src="/img/affiliate/join-team.png" alt="Join us" class="max-w-[700px] w-full mx-auto">
  </figure>
  <!--  -->
  <form @submit="onSubmit" class="mt-8 mb-20">
    <div v-if="!successConfirmation" class="max-w-[960px] px-8 mx-auto">
      <!-- Personal information -->
      <h1 v-if="inviter" class="text-black font-bold mb-7 text-2xl flex gap-2 items-center">
        <NuxtImg :src="inviter.user_image" :alt="inviter.name" placeholder="/img/logo-header.png" class="rounded-full w-12 h-12 mr-2 object-contain" />
        <span>Estas siendo invitado por: </span> <span class="text-primary">{{ inviter.name }}</span>
      </h1>
      <h2 class="text-xl font-medium text-black mb-7">Información Personal:</h2>
      <div class="grid sm:grid-cols-2 gap-x-4 grid-cols-1">
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <Field class="form-control" name="name" type="text" placeholder="Nombre" id="name" />
            <ErrorMessage class="error" name="name" />
          </div>
          <div class="form-group">
            <label for="lastName">Apellido:</label>
            <Field class="form-control" name="lastName" type="text" placeholder="Apellido" id="lastName" />
            <ErrorMessage class="error" name="lastName" />
          </div>
          <div class="form-group">
            <label for="email">Correo:</label>
            <Field class="form-control" name="email" type="email" placeholder="Correo" id="email" />
            <ErrorMessage class="error" name="email" />
          </div>
          <div class="form-group">
            <label for="address">Dirección:</label>
            <Field class="form-control" name="address" type="text" placeholder="Dirección" id="address" />
            <ErrorMessage class="error" name="address" />
          </div>
          <div class="form-group">
            <label for="personalPhone">Teléfono personal:</label>
            <Field class="form-control" name="personalPhone" type="text" id="personalPhone" v-slot="{ field }">
              <VueTelInput id="personalPhone" v-bind="field" mode="international" class="form-control w-full flex"></VueTelInput>
            </Field>
            <ErrorMessage class="error" name="personalPhone" />
          </div>
        </div>
        <div class="flex flex-col xl:items-end items-start">
          <div class="form-group">
            <label for="officePhone">Teléfono oficina:</label>
            <Field Field class="form-control" name="officePhone" type="text" id="officePhone" v-slot="{ field }">
              <VueTelInput id="officePhone" mode="international" v-bind="field" class="form-control w-full flex"></VueTelInput>
            </Field>
            <ErrorMessage class="error" name="officePhone" />
          </div>
          <div class="form-group">
            <label for="date">Fecha de nacimiento:</label>
            <Field class="form-control" name="birthdate" type="date" id="date" placeholder="Seleciona una fecha" />
            <ErrorMessage class="error" name="birthdate" />
          </div>
          <div class="form-group">
            <label for="userId">Cédula:</label>
            <Field class="form-control" name="socialId" type="text" id="userId" placeholder="Cédula" />
            <ErrorMessage class="error" name="socialId" />
          </div>
          <div class="form-group">
            <label for="country">País:</label>
            <Field class="form-control" name="country" type="text" id="country" placeholder="País" />
            <ErrorMessage class="error" name="country" />
          </div>
          <div class="form-group">
            <label for="city">Ciudad:</label>
            <Field class="form-control" name="city" type="text" id="city" placeholder="Ciudad" />
            <ErrorMessage class="error" name="city" />
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
        <button class="btn success h-8 px-4 mx-auto mt-4" @click="successConfirmation = false">Hacer una nueva aplicacion</button>
      </div>
      <div v-if="errorConfirmation" class="bg-primary confirmation-msg">
        <figure>
          <img src="/img/warning.png" alt="Error" class="w-full">
        </figure>
        <p class="text-white text-xl font-semibold text-center">Ocurrió un Error, por favor verifica la información suministrada</p>
        <ul class="pl-2">
          <li v-if="typeof errorMessage === 'object' && errorMessage !== null && !Array.isArray(errorMessage)"
              v-for="error in errorMessage" :key="error" class="text-white text-xl font-semibold mb-2 list-disc"
          >
            {{ error[0] }}
          </li>
          <li v-else class="text-white text-xl font-semibold mb-2 list-disc">{{  errorMessage }}</li>
        </ul>
      </div>
      <button class="btn h-8 px-4 mx-auto mt-4" v-if="!successConfirmation" type="submit" :disabled="confirm">Aceptar y enviar solicitud</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required('El nombre es requerido'),
  lastName: yup.string().required('El apellido es requerido'),
  email: yup.string().email('Correo inválido').required('El correo es requerido'),
  address: yup.string().required('La dirección es requerida'),
  personalPhone: yup.string().required('El teléfono personal es requerido'),
  officePhone: yup.string().required('El teléfono de oficina es requerido'),
  birthdate: yup.date().required('La fecha de nacimiento es requerida'),
  socialId: yup.string().required('La cédula es requerida'),
  country: yup.string().required('El país es requerido'),
  city: yup.string().required('La ciudad es requerida')
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const config = useRuntimeConfig();

const confirm = ref(false);
const loading = ref(false);
const successConfirmation = ref(false);
const errorConfirmation = ref(false);
let errorMessage = ref(null)

const inviter = ref(null);
async function getInviter() {
  await $fetch(`inviter/${useRoute().query.token}`, {
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
  await getInviter()
}

const onSubmit = handleSubmit (async (values) => {
  errorConfirmation.value = false;
  errorMessage.value = null;
  successConfirmation.value = false;
  loading.value = true;
  const form = new FormData();
  form.append('name', values.name);
  form.append('lastname', values.lastName);
  form.append('email', values.email);
  form.append('office_number', values.officePhone);
  form.append('birthdate', values.birthdate);
  form.append('address', values.address);
  form.append('social_id', values.socialId);
  form.append('personal_phone', values.personalPhone);
  form.append('country', values.country);
  form.append('city', values.city);

  const referedToken = useRoute().query.token?.toString();
  if (referedToken) {
    form.append('token', referedToken);
  }

  await useFetch('auth/register', {
    method: 'POST',
    baseURL: config.public.API,
    body: form,
    onResponse({response}) {
      loading.value = false;
      if (response._data.code === 200) {
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
      if (response._data.code === 400) {
        errorConfirmation.value = true;
        errorMessage.value = response._data.message;
      }
    }
  });
});

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

.error {
  @apply text-red-500 text-sm mt-2;
}

.btn.success {
  @apply bg-blue-400 text-white;
}
</style>