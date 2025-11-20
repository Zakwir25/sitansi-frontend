const routes = [
  {
   path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Ganti dengan Dashboard
      { path: 'register-patient', component: () => import('pages/PatientRegistrationPage.vue') },
      { path: 'create-visit', component: () => import('pages/CreateVisitPage.vue') }
    ],

    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    component: () => import('pages/LoginPage.vue') // tidak perlu autentikasi
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
