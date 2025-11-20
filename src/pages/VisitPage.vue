<template>
  <q-input
    v-model="email"
    label="Email"
    :rules="[
      val => !!val || 'Email wajib diisi',
      val => /.+@.+\..+/.test(val) || 'Format email tidak valid'
    ]"
  />

  <q-input
    v-model="nik"
    label="NIK"
    type="number"
    :rules="[
      val => !!val || 'NIK wajib diisi',
      val => val.length === 16 || 'NIK harus 16 digit'
    ]"
  />
</template>
