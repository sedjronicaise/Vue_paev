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

import Login from '@/views/auth/Login.vue'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children: [
        { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
        { path: 'patient/index', component: Admin.PatientIndex },
        { path: 'patient/edit/:id', component: Admin.PatientEdit, name:'patientEdit' },
        { path: 'patient/add', component: Admin.PatientAdd },
        { path: 'patient/dossier/:id',name:"dossierMedical", component: Admin.DossierMedical },
        { path: 'patient/stats', component: Admin.Stats },
        { path: 'praticien/index', component: Admin.PraticienIndex },
        { path: 'praticien/edit/:id', component: Admin.PraticienEdit },

        { path: 'ordonnance/ordonnance-bons-examens', component: Admin.OrdonnanceBon },

        { path: 'ordonnance/index', component: Admin.OrdonnanceIndex },
        { path: 'ordonnance/read', component: Admin.OrdonnanceCreate },
        { path: 'ordonnance/edit', component: Admin.OrdonnanceEdit },

        { path: 'bon/index', component: Admin.BonIndex },
        { path: 'bon/read', component: Admin.BonCreate },
        { path: 'bon/edit', component: Admin.BonEdit },

        { path: 'certificat/index', component: Admin.CertificatIndex },
        { path: 'certificat/edit', component: Admin.CertificatEdit },
        { path: 'certificat/read', component: Admin.CertificatRead },

        { path: 'nutrition', component: Admin.Nutrition },
        { path: 'nutrition/dossier', component: Admin.DossierNutrition },


        {
          path: '/:pathMatch(.*)*', redirect: '/admin/dashboard'
        }
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

  

  {
    path: '/:pathMatch(.*)*', redirect: '/'
  },

  
  { 
    path: '/login', name: 'Login', component: Login 
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
