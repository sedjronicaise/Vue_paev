
import AdminLayout from './AdminLayout.vue'
import Dashboard from './Dashboard.vue'

import PatientIndex from './patients/PatientIndex.vue'
import PatientEdit from './patients/PatientEdit.vue'
import PatientAdd from './patients/PatientAdd.vue'
import DossierMedical from './patients/DossierMedical.vue'
import Stats from './patients/Stats.vue'

import OrdonnanceBon from './ordonnance/OrdonnanceBon.vue'

import OrdonnanceIndex from './ordonnance/OrdonnanceIndex.vue'
import OrdonnanceCreate from './ordonnance/OrdonnanceCreate.vue'
import OrdonnanceEdit from './ordonnance/OrdonnanceEdit.vue'

import BonIndex from './bon/BonIndex.vue'
import BonCreate from './bon/BonCreate.vue'
import BonEdit from './bon/BonEdit.vue'

import CertificatIndex from './certificat/CertificatIndex.vue'
import CertificatEdit from './certificat/CertificatEdit.vue'
import CertificatRead from './certificat/CertificatRead.vue'


import Nutrition from './nutrition/Nutrition.vue'
import DossierNutrition from './nutrition/DossierNutrition.vue'



import PraticienIndex from './praticiens/PraticienIndex.vue'
import PraticienEdit from './praticiens/PraticienEdit.vue'


export {
    AdminLayout, Dashboard, PatientIndex, PatientEdit, PatientAdd,
    PraticienIndex, PraticienEdit, DossierMedical, Stats, OrdonnanceIndex, 
    Nutrition, DossierNutrition, OrdonnanceCreate, OrdonnanceEdit, 
    OrdonnanceBon, BonIndex, BonCreate, BonEdit, CertificatRead, CertificatEdit, CertificatIndex
}