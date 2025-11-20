<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="text-h6 q-mb-md">Pendaftaran Pasien Baru</div>

      <q-form @submit="registerPatient" class="q-gutter-md">
        <q-input
          filled
          v-model="form.nik"
          label="NIK (16 Digit) *"
          mask="############ ####"
          :rules="[
            val => !!val || 'NIK wajib diisi',
            val => val.length === 16 || 'NIK harus 16 digit'
          ]"
        />

        <q-input
          filled
          v-model="form.email"
          label="Email *"
          type="email"
          :rules="[val => !!val || 'Email wajib diisi', val => /.+@.+\..+/.test(val) || 'Format email tidak valid']"
        />

        <q-input
          filled
          v-model="form.name"
          label="Nama Lengkap *"
          :rules="[val => !!val || 'Nama wajib diisi']"
        />

        <q-input
          filled
          v-model="form.phone_number"
          label="Nomor Telepon"
        />

        <q-input filled v-model="form.date_of_birth" label="Tanggal Lahir" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="form.date_of_birth" minimal />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div>
          <q-btn label="Daftarkan Pasien" type="submit" color="positive"/>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useQuasar } from 'quasar';

export default {
  setup () {
    const store = useStore();
    const $q = useQuasar();

    const form = ref({
      nik: '',
      email: '',
      name: '',
      phone_number: '',
      date_of_birth: null,
    });

    const registerPatient = async () => {
      try {
        const result = await store.dispatch('patient/registerPatient', form.value);

        $q.notify({
          type: 'positive',
          message: `Pasien Berhasil Didaftarkan! No Rekam Medik: ${result.patient.medical_record_number}`
        });

        // Reset form
        form.value = { nik: '', email: '', name: '', phone_number: '', date_of_birth: null };

      } catch (error) {
        let message = 'Pendaftaran Pasien Gagal.';
        if (error.response && error.response.data && error.response.data.message) {
             message = error.response.data.message;
        }

        $q.notify({
          type: 'negative',
          message: message
        });
      }
    };

    return {
      form,
      registerPatient,
    }
  }
}
</script>
