import { createRouter, createWebHistory } from 'vue-router'

// import AdminLayout from '../views/admin/AdminLayout.vue'
// import Dashboard from '../views/admin/Dashboard.vue'

// import PatientIndex from '../views/admin/patients/PatientIndex.vue'
// import PatientEdit from '../views/admin/patients/PatientEdit.vue'
// import PatientAdd from '../views/admin/patients/PatientAdd.vue'

// import PraticienIndex from '../views/admin/praticiens/PraticienIndex.vue'
// import PraticienEdit from '../views/admin/praticiens/PraticienEdit.vue'

import * as Admin from '@/views/admin'
import * as Public from '@/views/public'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children: [
        { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
        { path: 'patient/index', component: Admin.PatientIndex },
        { path: 'patient/edit/:id', component: Admin.PatientEdit },
        { path: 'patient/add', component: Admin.PatientAdd },
        { path: 'patient/dossier', component: Admin.DossierMedical },
        { path: 'patient/stats', component: Admin.Stats },



        { path: 'praticien/index', component: Admin.PraticienIndex },
        { path: 'praticien/edit/:id', component: Admin.PraticienEdit },
      
    ]
  },
  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
        { path: '/', name: 'home', component: Public.Home },
        { path: '/contact', component: Public.Contact },
        { path: '/about', component: Public.About },

    ]
  },

  

  // {
  //   path: '/:pathMatch(.*)*', redirect: '/'
  // }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router