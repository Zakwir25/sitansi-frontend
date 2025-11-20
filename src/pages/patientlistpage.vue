<template>
  <q-page class="q-pa-md">
    <q-card flat bordered>
      <q-card-section class="q-pa-none">
        <div class="bg-primary text-white text-h6 q-pa-sm text-center">
            <div class="text-h6 text-white text-weight-bold">
                Medisin
            </div>
        </div>

        <div class="q-pa-md row items-center q-gutter-md">
          <q-btn
            label="TAMBAH PASIEN"
            color="primary"
            @click="showTambahPasien = true"
          />

          <q-btn
            label="BUAT KUNJUNGAN"
            style="background-color: #4CAF50;"
            text-color="white"
            @click="showBuatKunjungan = true"
          />
        </div>

        <q-table
          :rows="rows"
          :columns="columns"
          row-key="no"
          flat
          bordered
          separator="cell"
          hide-bottom
        >
          <template v-slot:header="props">
            <q-tr :props="props" class="bg-grey-3">
              <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-weight-bold">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
        </q-table>
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
