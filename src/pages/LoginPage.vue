<template>
  <q-page class="flex flex-center">
    <q-card style="width: 400px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Login Aplikasi</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleLogin" class="q-gutter-md">
          <q-input
            filled
            v-model="email"
            label="Email/Username *"
            type="email"
            :rules="[val => !!val || 'Email wajib diisi']"
          />

          <q-input
            filled
            v-model="password"
            label="Password *"
            :type="isPwd ? 'password' : 'text'"
            :rules="[val => !!val || 'Password wajib diisi']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div>
            <q-btn label="Login" type="submit" color="primary" class="full-width"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

export default {
  setup () {
    const store = useStore();
    const router = useRouter();
    const $q = useQuasar();

    const email = ref('');
    const password = ref('');
    const isPwd = ref(true);

    const handleLogin = async () => {
      try {
        // action login di Vuex
        await store.dispatch('auth/login', {
          email: email.value,
          password: password.value
        });


        $q.notify({
          type: 'positive',
          message: 'Login Berhasil!'
        });


        router.push('/');

      } catch (error) {
        let message = 'Login Gagal. Silakan coba lagi.';
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
      email,
      password,
      isPwd,
      handleLogin
    }
  }
}
</script>
