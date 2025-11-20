<template>
  <q-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-weight-bold">BUAT KUNJUNGAN</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="$emit('update:modelValue', false)" />
      </q-card-section>

      <q-card-section class="q-gutter-md q-pt-md">
        <q-form @submit="buatKunjungan">

          <div class="text-subtitle1 text-weight-bold">Cari Pasien</div>
          <q-input
            v-model="form.no_rekam_medik"
            placeholder="No Rekam Medik"
            dense
            outlined
            input-class="q-px-sm"
          />

          <div class="text-subtitle1 text-weight-bold q-mt-lg">Data Pasien</div>
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <q-input
                v-model="dataPasien.nama_pasien"
                placeholder="Nama Pasien"
                bg-color="grey-3"
                dense
                outlined
                disable
                input-class="q-px-sm"
              />
            </div>
            <div class="col-6">
              <q-input
                v-model="dataPasien.nik"
                placeholder="NIK"
                bg-color="grey-3"
                dense
                outlined
                disable
                input-class="q-px-sm"
              />
            </div>
          </div>

          <q-input
            v-model="dataPasien.alamat"
            placeholder="Alamat"
            bg-color="grey-3"
            dense
            outlined
            type="textarea"
            rows="3"
            disable
            class="q-mt-md"
            input-class="q-px-sm"
          />

          <div class="text-center q-mt-xl">
            <q-btn
              label="BUAT KUNJUNGAN"
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

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

const form = ref({
  no_rekam_medik: '',
  // Perlu tambahkan field 'notes' sesuai API backend
});

const dataPasien = ref({
  nama_pasien: 'Otomatis terisi',
  nik: 'Otomatis terisi',
  alamat: 'Otomatis terisi',
});

const buatKunjungan = () => {
  // Logika:
  // 1. Dispatch action store untuk mencari pasien berdasarkan No Rekam Medik
  // 2. Jika pasien ditemukan, isi dataPasien.
  // 3. Dispatch action store createVisit (API akan mencatat kunjungan dan mengupdate total_visits)
  console.log('Membuat Kunjungan untuk RM:', form.value.no_rekam_medik);
};
</script>
