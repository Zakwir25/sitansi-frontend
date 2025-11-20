<template>
<q-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <q-card style="width: 500px">

      <q-card-section class="text-center q-pb-none">
        <img
            src="/logo-medisin.png"
            alt="Medisin Logo"
            style="width: 100px; height: auto;"
        />
      </q-card-section>

      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-weight-bold">TAMBAH PASIEN</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="$emit('update:modelValue', false)" />
      </q-card-section>

      <q-card-section class="q-gutter-md q-pt-md">
        <q-form @submit="simpanPasien">
          <q-input
            v-model="form.no_rekam_medik"
            placeholder="No. Rekam Medik"
            bg-color="grey-3"
            dense
            outlined
            disable
            input-class="q-px-sm"
          />

          <q-input
            v-model="form.nama_pasien"
            placeholder="Nama Pasien"
            dense
            outlined
            class="q-mt-md"
            input-class="q-px-sm"
          />

          <q-input
            v-model="form.nik"
            placeholder="NIK"
            dense
            outlined
            class="q-mt-md"
            input-class="q-px-sm"
          />

          <q-input
            v-model="form.alamat"
            placeholder="Alamat"
            dense
            outlined
            type="textarea"
            rows="3"
            class="q-mt-md"
            input-class="q-px-sm"
          />

          <div class="text-center q-mt-xl">
            <q-btn
              label="SIMPAN"
              type="submit"
              color="primary"
              size="lg"
              style="width: 60%;"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// Definisikan props untuk v-model pada q-dialog
const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

const form = ref({
  no_rekam_medik: 'Otomatis', // Placeholder, digenerate backend
  nama_pasien: '',
  nik: '',
  alamat: '',
  // Perlu tambahkan field email dan tanggal_lahir sesuai API backend
  // email: '',
  // date_of_birth: ''
});

const simpanPasien = () => {
  // Logika untuk dispatch action store registerPatient dengan data form
  console.log('Menyimpan Pasien:', form.value);
  // Setelah berhasil, tutup modal: emits('update:modelValue', false);
};
</script>
