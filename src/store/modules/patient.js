// src/store/modules/patient.js

import { api } from 'boot/axios'

const actions = {
    async registerPatient({ commit }, patientData) {
        try {
            // patientData: { nik, email, name, phone_number, date_of_birth }
            const response = await api.post('/patients/register', patientData);

            return response.data; // Mengembalikan data pasien yang berhasil didaftarkan
        } catch (error) {
            console.error('Pendaftaran Pasien Gagal:', error.response.data.message);
            throw error;
        }
    }
};

export default {
    namespaced: true,
    actions
};
