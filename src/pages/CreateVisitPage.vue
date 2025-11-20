<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="text-h6 q-mb-md">Buat Kunjungan Baru</div>

      <q-form @submit="createVisit" class="q-gutter-md">
        <q-input
          filled
          v-model="form.medical_record_number"
          label="No Rekam Medik (RMXXXX) *"
          hint="Masukkan No Rekam Medik Pasien"
          :rules="[
            val => !!val || 'No Rekam Medik wajib diisi',
            val => val.startsWith('RM') || 'Format harus RMXXXX'
          ]"
        />

        <q-input
          filled
          v-model="form.notes"
          label="Catatan Kunjungan (Opsional)"
          type="textarea"
          rows="3"
        />

        <div>
          <q-btn label="Catat Kunjungan" type="submit" color="primary"/>
        </div>
      </q-form>

      <q-card v-if="patientData" class="q-mt-lg bg-blue-grey-1">
        <q-card-section>
          <div class="text-subtitle1 text-weight-bold">✅ Pasien Ditemukan & Kunjungan Dicatat!</div>
          <q-list dense>
            <q-item><q-item-section avatar>RM:</q-item-section><q-item-section>{{ patientData.medical_record_number }}</q-item-section></q-item>
            <q-item><q-item-section avatar>Nama:</q-item-section><q-item-section>{{ patientData.name }}</q-item-section></q-item>
            <q-item><q-item-section avatar>Total Kunjungan:</q-item-section><q-item-section class="text-weight-bold">{{ patientData.total_visits }}</q-item-section></q-item>
          </q-list>
        </q-card-section>
      </q-card>
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
      medical_record_number: '',
      notes: '',
    });
    const patientData = ref(null);

    const createVisit = async () => {
      patientData.value = null; // Reset data pasien sebelumnya
      try {
        const result = await store.dispatch('patient/createVisit', form.value);

        $q.notify({
          type: 'positive',
          message: 'Kunjungan berhasil dicatat!'
        });

        patientData.value = result.patient;

      } catch (error) {
        let message = 'Gagal mencatat kunjungan.';
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
      patientData,
      createVisit,
    }
  }
}
</script>
