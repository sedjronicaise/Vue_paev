<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-6 col-12 mb-2">
            <h3 class="content-header-title">Modifier un patient</h3>

            <div class="row breadcrumbs-top">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li class="breadcrumb-item">
                    <a href="#">Liste Patients</a>
                  </li>
                  <li class="breadcrumb-item active">Modifier</li>
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
                        MISE A JOUR PATIENT
                      </h4>
                      <a class="heading-elements-toggle" href="#">
                        <i class="la la-ellipsis-h font-medium-3"> </i>
                      </a>
                    </div>
                    <div class="card-content collapse show">
                      <div class="card-body">
                        <form
                          @submit.prevent="updatePatient"
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
                                    v-model="patients[0].infoGeneral.fullName"
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
                                    v-model="patients[0].infoGeneral.dateArriver"
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
                                      patients[0].infoGeneral.situationMatrimoniale
                                    "
                                    class="custom-select"
                                    id="city"
                                  >
																		<option disabled :value="patients[0].infoGeneral.situationMatrimoniale"> {{ patients[0].infoGeneral.situationMatrimoniale }} </option>
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
                                    v-model="patients[0].infoGeneral.adresse"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="city"> Sexe  <span class="danger"> * </span> </label>
                                  <select
                                    v-model="patients[0].infoGeneral.sexe"
																		required
                                    class="custom-select"
                                    id="city"
                                  >
																	<option disabled :value="patients[0].infoGeneral.sexe"> {{ patients[0].infoGeneral.sexe }} </option>
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
                                      patients[0].infoGeneral.typeConsultation
                                    "
                                    class="custom-select"
                                    id="state"
                                  >
																		<option disabled :value="patients[0].infoGeneral.typeConsultation"> {{ patients[0].infoGeneral.typeConsultation }} </option>
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
                                    v-model="patients[0].infoGeneral.profession"
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
                                    v-model="patients[0].infoGeneral.nbreEnfant"
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
                                    v-model="patients[0].infoGeneral.telephone"
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
                                    type="date"
                                    v-model="patients[0].infoGeneral.dateNaissance"
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
                                    v-model="patients[0].personneContacter.nom"
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
                                    v-model="patients[0].personneContacter.prenoms"
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
                                      patients[0].personneContacter
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
                                    v-model="patients[0].personneContacter.adresse"
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
                                      patients[0].personneContacter.telephone
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
                                      patients[0].personneContacter.autreTelephone
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <!-- Step 3 => Symptoms -->
                          <h6>
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
                                    v-model="patients[0].symptomes.passage"
                                    type="radio"
                                  />
                                  <span class="option-n"> Non </span>
                                  <input
                                    :value="checkSymptome.non"
                                    id="previousvisit1"
                                    name="previousvisit"
                                    v-model="patients[0].symptomes.passage"
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
                                    <span v-if="patients[0].symptomes.passage" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="symptoms"
                                    name="symptoms"
																		:required="patients[0].symptomes.passage"
                                    v-model="patients[0].symptomes.symptomes"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="since">
                                    Depuis quand le patient est-il confronté à
                                    ce problème ?  <span v-if="patients[0].symptomes.passage" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="since"
                                    name="since"
                                    type="date"
																		:required="patients[0].symptomes.passage"
                                    v-model="patients[0].symptomes.dateSymptomes"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label for="history">
                                    Autres remarques ?  <span v-if="patients[0].symptomes.passage" class="danger"> * </span>
                                  </label>
                                  <textarea
                                    class="form-control"
                                    cols="10"
                                    id="remarque"
                                    v-model="patients[0].symptomes.autreRemarque"
                                    name="remarque"
																		:required="patients[0].symptomes.passage"
                                    rows="2"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </fieldset>
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
                                    v-model="patients[0].assurance.estAssurer"
                                  />
                                  <span class="option-n"> Non </span>
                                  <input
                                    class="icheck-checkbox"
                                    id="ins-no"
                                    name="ins"
                                    type="radio"
                                    :value="checkAssurance.non"
                                    v-model="patients[0].assurance.estAssurer"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="company">
                                    Nom de la compagnie d'assurance 
                                    <span v-if="patients[0].assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="company"
                                    name="degree"
                                    type="text"
																		:required="patients[0].assurance.estAssurer"
                                    v-model="patients[0].assurance.nomCompagnie"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="card">
                                    Numéro d'assurance 
																		<span v-if="patients[0].assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="card"
                                    name="card"
                                    type="number"
																		:required="patients[0].assurance.estAssurer"
                                    v-model="patients[0].assurance.numeroAssurance"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="amount">
																		
                                    Montant de l'assurance  <span v-if="patients[0].assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="amount"
                                    type="number"
																		:required="patients[0].assurance.estAssurer"
                                    v-model="
                                      patients[0].assurance.montantAssurance
                                    "
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="expirydate">
                                    Date d'expiration <span v-if="patients[0].assurance.estAssurer" class="danger"> * </span>
                                  </label>
                                  <input
                                    class="form-control"
                                    id="expirydate"
                                    name="expirydate"
                                    type="date"
																		:required="patients[0].assurance.estAssurer"
                                    v-model="patients[0].assurance.dateExpiration"
                                  />
                                </div>
                              </div>
                            </div>
                          </fieldset>
													<button class="btn btn-primary w-100 flex" type="submit">
														<span class="fs-5 fs-semibold" v-if="!chargement">
															Modifier un patient
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
	import {Patients} from "../../../api/patient"
	// import the library
	import { createToast } from "mosha-vue-toastify";
	// import the styling for the toast
	import "mosha-vue-toastify/dist/style.css";

	const router = useRouter();
	const route = useRoute();

	const patients = ref([])
	const getData = JSON.parse(localStorage.getItem('patients'))
	if(getData !=null || getData != undefined) {
		const datas = getData
		patients.value = [...Patients,...datas]
	}else {
		patients.value = Patients
	}

	patients.value = patients.value.filter(patient => patient.id ==route.params.id)
	const otherData = patients.value.filter(patient => patient.id !=route.params.id)

//datas

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

const updatePatient =  () => {
	if(chargement.value == false) {
		chargement.value = true
		const datas = [...patients.value,...otherData]
		setTimeout(() => {
      chargement.value = false
    }, 7000)
		localStorage.setItem('patients',JSON.stringify(datas))
		toast('Modification reuissie', 'success')
		router.go(-1)
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
