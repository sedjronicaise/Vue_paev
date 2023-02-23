<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-6 col-12 mb-2">
            <h3 class="content-header-title">Enregistrer un patient</h3>

            <div class="row breadcrumbs-top">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li class="breadcrumb-item">
                    <a href="#">Liste Patients</a>
                  </li>
                  <li class="breadcrumb-item active">Ajout</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="content-header-right col-md-6 col-12">
            <div
              class="btn-group float-md-right"
              role="group"
              aria-label="Button group with nested "
            >
              <router-link
                to="/admin/patient/index"
                class="btn btn-info round box-shadow-2 px-2 mb-1"
                id="btnGroupDrop1"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="ft-arrow-left"></i> Liste des patients
              </router-link>
            </div>
          </div>
        </div>
       

        <div class="content-body">
          <!-- Add Patient Form Wizard -->
          <section id="add-patient">
            <div class="icon-tabs">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header text-center">
                      <h4 class="badge border-info info badge-border">
                        NOUVEAU PATIENT
                      </h4>
                      <a class="heading-elements-toggle" href="#">
                        <i class="la la-ellipsis-h font-medium-3"> </i>
                      </a>
                    </div>
                    <div class="card-content collapse show">
                      <div class="card-body">
                        <form
                          @submit.prevent="addPatient"
                          class="add-patient-tabs steps-validation wizard-notification"
                        >
                          <!-- step 1 => Personal Details -->
                          <h6>
                            <i class="step-icon la la-user font-medium-3"> </i>
                            Details Personnel
                          </h6>
                          <fieldset>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="fullName">
                                    Nom et Prénom du patient:
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="fullName"
                                    name="fullName"
																		required
                                    v-model="formData.infoGeneral.fullName"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="dateA">
                                    Date d'arrivée
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="dateArrivee"
                                    name="dateArrivee"
																		required
                                    v-model="formData.infoGeneral.dateArriver"
                                    type="date"
                                  />
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="city">
                                    Situation Matrimoniale
                                  </label>
                                  <select
                                    v-model="
                                      formData.infoGeneral.situationMatrimoniale
                                    "
                                    class="custom-select"
                                    id="city"
                                  >
                                    <option value="Mariee">Marié(e)</option>
                                    <option value="célibataire">
                                      célibataire
                                    </option>
                                    <option value="Concubinage">
                                      Concubinage
                                    </option>
                                    <option value="Veuf">Veuf (ve)</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="address"> Adresse: </label>
                                  <input
                                    class="form-control"
                                    id="address"
                                    v-model="formData.infoGeneral.adresse"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="city"> Sexe  <span class="danger"> * </span> </label>
                                  <select
                                    v-model="formData.infoGeneral.sexe"
																		required
                                    class="custom-select"
                                    id="city"
                                  >
                                    <option value="masculin">Masculin</option>
                                    <option value="feminin">Feminin</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="state">
                                    Type de consultation  <span class="danger"> * </span>
                                  </label>
                                  <select
																	required
                                    v-model="
                                      formData.infoGeneral.typeConsultation
                                    "
                                    class="custom-select"
                                    id="state"
                                  >
                                    <option value="medecine generale">Médecine Génerale</option>
                                    <option value="nutrition">
                                      Nutrition
                                    </option>
                                    <option value="Gynécologie">Gynécologie</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="contact"> Profession </label>
                                  <input
                                    class="form-control"
                                    id="profession"
                                    name="profession"
                                    v-model="formData.infoGeneral.profession"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="contact"> Nombre d'enfant </label>
                                  <input
                                    class="form-control"
                                    id="contact"
                                    name="contact"
                                    v-model="formData.infoGeneral.nbreEnfant"
                                    type="number"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="contact">
                                    Numéro de télephone:
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="contact"
                                    name="contact"
                                    type="number"
																		required
                                    v-model="formData.infoGeneral.telephone"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="dob">
                                    Date de naissance:
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
																		required
                                    class="form-control"
                                    id="dob"
                                    name="dateofbirth"
                                    type="number"
                                    v-model="formData.infoGeneral.age"
                                  />
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <!-- Step 2 => Emergency Details-->
                          <h6>
                            <i class="step-icon la la-ambulance font-medium-3">
                            </i>
                            Personne à contacter en cas d'urgence
                          </h6>
                          <fieldset>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="fnemergency">
                                    Nom :
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="fnemergency"
                                    name="fnemergency"
                                    type="text"
																		required
                                    v-model="formData.personneContacter.nom"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="lnemergency">
                                    Prénom:
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
																		required
                                    class="form-control"
                                    id="lnemergency"
                                    name="lnemergency"
                                    type="text"
                                    v-model="formData.personneContacter.prenoms"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="relation">
                                    Relation avec le patient:
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="relation"
                                    name="relation"
																		required
                                    v-model="
                                      formData.personneContacter
                                        .relationAvecPatient
                                    "
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="relativeadd"> Adresse: </label>
                                  <input
                                    class="form-control"
                                    id="relativeadd"
                                    name="relativeadd"
                                    v-model="formData.personneContacter.adresse"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="cn">
                                    Télephone:
                                    <span class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="cn"
                                    name="cn"
                                    type="number"
																		required
                                    v-model="
                                      formData.personneContacter.telephone
                                    "
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="alternate"> Autre numéro: </label>
                                  <input
                                    class="form-control"
                                    id="alternate"
                                    name="alternate"
                                    type="text"
                                    v-model="
                                      formData.personneContacter.autreTelephone
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <!-- Step 3 => Symptoms -->
                          <!-- <h6>
                            <i class="step-icon font-medium-3 ft-thermometer">
                            </i>
                            Symptômes
                          </h6>
                          <fieldset>
                            <div class="row icheck_minimal skin">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label>
                                    Le patient était déjà de passage ?
                                    <span class="danger"> * </span>
                                  </label>
                                  <span class="option-y"> Oui </span>
                                  <input
                                    id="previousvisit"
                                    name="previousvisit"
                                    :value="checkSymptome.yes"
                                    checked
                                    v-model="formData.symptomes.passage"
                                    type="radio"
                                  />
                                  <span class="option-n"> Non </span>
                                  <input
                                    :value="checkSymptome.non"
                                    id="previousvisit1"
                                    name="previousvisit"
                                    v-model="formData.symptomes.passage"
                                    type="radio"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="symptoms">
                                    À quels symptômes le patient est-il
                                    confronté?
                                    <span v-if="formData.symptomes.passage" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="symptoms"
                                    name="symptoms"
																		:required="formData.symptomes.passage"
                                    v-model="formData.symptomes.symptomes"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="since">
                                    Depuis quand le patient est-il confronté à
                                    ce problème ?  <span v-if="formData.symptomes.passage" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="since"
                                    name="since"
                                    type="date"
																		:required="formData.symptomes.passage"
                                    v-model="formData.symptomes.dateSymptomes"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label for="history">
                                    Autres remarques ?  <span v-if="formData.symptomes.passage" class="danger"> * </span>
                                  </label>
                                  <textarea
                                    class="form-control"
                                    cols="10"
                                    id="remarque"
                                    v-model="formData.symptomes.autreRemarque"
                                    name="remarque"
																		:required="formData.symptomes.passage"
                                    rows="2"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </fieldset> -->
                          <!-- Step 4 => Insaurance Details -->
                          <h6>
                            <i class="step-icon font-medium-3 ft-file-text">
                            </i>
                            Détails de l'assurance
                          </h6>
                          <fieldset>
                            <div class="row icheck_minimal skin">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label class="pr-1">
                                    Le patient a-t-il une assurance ?
                                    <span class="danger"> * </span>
                                  </label>
                                  <span class="option-y"> Oui </span>
                                  <input
                                    class="icheck-checkbox"
                                    id="ins-yes"
                                    checked
                                    name="ins"
                                    type="radio"
                                    :value="checkAssurance.yes"
                                    v-model="formData.assurance.estAssurer"
                                  />
                                  <span class="option-n"> Non </span>
                                  <input
                                    class="icheck-checkbox"
                                    id="ins-no"
                                    name="ins"
                                    type="radio"
                                    :value="checkAssurance.non"
                                    v-model="formData.assurance.estAssurer"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="company">
                                    Nom de la compagnie d'assurance 
                                    <span v-if="formData.assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="company"
                                    name="degree"
                                    type="text"
																		:required="formData.assurance.estAssurer"
                                    v-model="formData.assurance.nomCompagnie"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="card">
                                    Numéro d'assurance 
																		<span v-if="formData.assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="card"
                                    name="card"
                                    type="number"
																		:required="formData.assurance.estAssurer"
                                    v-model="formData.assurance.numeroAssurance"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="amount">
																		
                                    Montant de l'assurance  <span v-if="formData.assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="amount"
                                    type="number"
																		:required="formData.assurance.estAssurer"
                                    v-model="
                                      formData.assurance.montantAssurance
                                    "
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="expirydate">
                                    Date d'expiration <span v-if="formData.assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="expirydate"
                                    name="expirydate"
                                    type="date"
																		:required="formData.assurance.estAssurer"
                                    v-model="formData.assurance.dateExpiration"
                                  />
                                </div>
                              </div>
                            </div>
                          </fieldset>
													<button class="btn btn-primary w-100 flex" type="submit">
														<span class="fs-5 fs-semibold" v-if="!chargement">
															Ajouter un patient
														</span>
														<span v-else class="d-flex align-items-center">
															<span class="mx-2 fs-semibold text-light">
																chargement ...
															</span>
															<div
																style="width: 1.5rem; height: 1.5rem"
																class="spinner-border text-light"
																role="status"
															>
																<span class="sr-only">Loading...</span>
															</div>
														</span>
              						</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
// import the library
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
import PatientService from "@/services/modules/patient.service.js";


const router = useRouter();
const route = useRoute();


//datas
const formData = reactive({
  infoGeneral: {
    fullName: "",
    dateArriver: "",
    situationMatrimoniale: "",
    adresse: "",
    sexe: "Masculin",
    typeConsultation: "Medecine generale",
    profession: "",
    nbreEnfant: 0,
    telephone: "",
    age: 20,
  },
  personneContacter: {
    nom: "",
    prenoms: "",
    relationAvecPatient: "",
    adresse: "",
    telephone: "",
    autreTelephone: "",
  },
  symptomes: {
    passage: true,
    symptomes: "",
    dateSymptomes: "",
    autreRemarque: "",
  },
  assurance: {
    estAssurer: true,
    nomCompagnie: "",
    numeroAssurance: "",
    montantAssurance: "",
    dateExpiration: "",
  },
})
const chargement = ref(false)

//methods
const toast = (message,type) => {
  createToast(message,{type:type})
}

const checkAssurance = reactive(
	{
		yes:true,
		non:false	
	}
)
const checkSymptome = reactive(
	{
		yes:true,
		non:false	
	}
)



const addPatient = () => {
  if(chargement.value == false) {
    chargement.value = true
    const data = {
    "firstname": formData.infoGeneral.fullName,
    "lastname": "..",
    "address": formData.infoGeneral.adresse,
    "consultation_type": formData.infoGeneral.typeConsultation,
    "sex": formData.infoGeneral.sexe,
    "phone": formData.infoGeneral.telephone,
    "marital_status": formData.infoGeneral.situationMatrimoniale,
    "children_count": formData.infoGeneral.nbreEnfant,
    "age": formData.infoGeneral.age,
    "profession": formData.infoGeneral.profession,
    "date_arrive": formData.infoGeneral.dateArriver,
    "contacts": [
        {
            "firstname": formData.personneContacter.nom,
            "lastName": formData.personneContacter.prenoms,
            "relation": formData.personneContacter.relationAvecPatient,
            "address": formData.personneContacter.adresse,
            "phone": formData.personneContacter.telephone,
        }
    ],
    

    }
		PatientService.create(data).then((data) => {
      const response = data.data
        chargement.value = false
   
        toast('vous avez créer un patient', 'success')
        router.go(-1)
      }).catch((e) => {
        chargement.value = false  
				toast(e, 'danger')
    })
  }
}



</script>

<style scoped>
.flex {
	display: flex;
	justify-content: center;
	align-items:center
}
</style>
