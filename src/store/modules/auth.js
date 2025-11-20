// src/store/modules/auth.js (Contoh menggunakan Vuex)

import { api } from 'boot/axios'
import { encryptPayload } from 'src/utils/crypto' // Import helper enkripsi

const state = {
  token: null,
  user: null,
}

const mutations = {
  setToken(state, token) {
    state.token = token
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  setUser(state, user) {
    state.user = user
  },
}

const actions = {
  async login({ commit }, payload) {
    try {
      // 1. Enkripsi Payload sebelum dikirim
      const encryptedData = {
        // Sesuai dengan yang diharapkan oleh Backend
        user_name: encryptPayload(payload.email),
        password: encryptPayload(payload.password),
      }

      // 2. Kirim data terenkripsi ke API
      const response = await api.post('/login', encryptedData)

      const token = response.data.token
      const user = response.data.user

      // 3. Simpan data (Vuex/Local Storage)
      commit('setToken', token)
      commit('setUser', user)

      return true // Login berhasil
    } catch (error) {
      console.error('Login Gagal:', error.response.data.message)
      // Tangani error (misalnya: pesan error ke pengguna)
      throw error
    }
  },
  // ... actions lain seperti logout
}

// ... getters

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  // ...
}
