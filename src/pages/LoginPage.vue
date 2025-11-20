<template>
  <q-page class="flex flex-center" style="background-color: #007bff;">
    <q-card style="width: 350px; padding: 20px;">

      <q-card-section class="text-center q-pb-md">
        <img
          src="/logo-medisin.png"
          alt="Medisin Logo"
          style="width: 150px; height: auto;"
        />
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-form @submit="login" class="q-gutter-md">

          <q-input
            v-model="username"
            placeholder="Username"
            bg-color="grey-2"
            dense
            outlined
            hide-bottom-space
            input-class="q-px-sm"
          />
          <q-input
            v-model="password"
            placeholder="Password"
            type="password"
            bg-color="grey-2"
            dense
            outlined
            hide-bottom-space
            input-class="q-px-sm"
          />

          <div>
            <q-btn
              label="LOGIN"
              type="submit"
              color="primary"
              class="full-width text-white"
              size="lg"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
// ... import lain untuk logika login

const username = ref('');
const password = ref('');

const login = () => {
  // Logika login
  console.log('Attempting login with:', username.value, password.value);
};
</script>
