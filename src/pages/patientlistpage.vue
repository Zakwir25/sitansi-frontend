<template>
  <q-page class="q-pa-md">
    <q-card flat bordered>

      <q-card-section class="q-pa-none">
        <div class="bg-primary text-white text-h6 q-py-sm text-center">
            <img
                src="/logo-medisin.png"
                alt="Medisin Logo"
                style="width: 120px; height: auto; margin: 5px 0;"
            />
        </div>

        <div class="q-pa-md row items-center q-gutter-md">
        </div>

        </q-card-section>
    </q-card>

    <TambahPasienModal v-model="showTambahPasien" />

    <BuatKunjunganModal v-model="showBuatKunjungan" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
// Import Modal (asumsi file terpisah)
import TambahPasienModal from './TambahPasienModal.vue';
import BuatKunjunganModal from './BuatKunjunganModal.vue';

const showTambahPasien = ref(false);
const showBuatKunjungan = ref(false);

const columns = [
  { name: 'no', required: true, label: 'NO', align: 'center', field: 'no', sortable: true },
  { name: 'rekam_medik', label: 'NO REKAM MEDIK', align: 'left', field: 'rekam_medik', sortable: true },
  { name: 'nama', label: 'NAMA PASIEN', align: 'left', field: 'nama', sortable: true },
  { name: 'nik', label: 'NIK', align: 'left', field: 'nik' },
  { name: 'alamat', label: 'ALAMAT', align: 'left', field: 'alamat' },
  { name: 'kunjungan', label: 'JML KUNJUNGAN', align: 'center', field: 'kunjungan' },
];

const rows = [
  { no: 1, rekam_medik: 'RM0001', nama: 'NURFAZA M.', nik: '321412412312412', alamat: 'Jl Wisata 2 No 18', kunjungan: 8 },
  { no: 2, rekam_medik: 'RM0002', nama: 'NURFAZA D.', nik: '321412412355553', alamat: 'Jl setra sari 4 No 18', kunjungan: 0 },
];
</script>
