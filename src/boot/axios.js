// src/boot/axios.js

import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Setel URL Dasar (Base URL) untuk API Laravel Anda
const api = axios.create({
  // Ganti dengan URL API Backend Anda jika berbeda
  baseURL: 'http://127.0.0.1:8000',
})

export default boot(({ app }) => {
  // ... (biarkan kode sisanya sama)
})

export { api }
