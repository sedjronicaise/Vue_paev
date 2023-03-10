<template>
  <div>
    <!-- Modal -->
    <div
      class="modal animated bounce text-left"
      id="delete"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel36"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-danger" id="myModalLabel36">
              <span class="alert-icon text-danger"
                ><i class="la la-warning"></i
              ></span>
              Confirmation de la suppression
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5 class="text-danger text-center">
              Attention! Cette action est irresvocable, êtes vous sur de vouloir
              continuer ?
            </h5>

            <p>.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn grey btn-outline-primary"
              data-dismiss="modal"
            >
              Annuler
            </button>
            <button
              type="button"
              @click.prevent="deleteOrdonance"
              data-dismiss="modal"
              class="btn btn-outline-danger"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal ajout  -->
    <div
      class="modal fade text-left"
      id="large"
      tabindex="-1"
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-success white">
            <h4 class="modal-title white" id="">
              <i class="la la-edit"></i>
              {{ title }}
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form  @submit.prevent="storeOrdonance">
              <div>
                <div>
                  <div class="row">
                    <div class="col-md-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Selectionnez le medecin</label>

                        <VueMultiselect
                          v-model="formData.doctor_id"
                          label="name"
                          track-by="id"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un medecin"
                          placeholder="Selectionnez un medecin"
                          :options="docteurs"
                        >
                        </VueMultiselect>
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Selectionnez le patient </label>

                        <VueMultiselect
                          v-model="formData.patient_id"
                          label="firstname"
                          track-by="id"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un patient"
                          placeholder="Selectionnez un patient"
                          :options="patients"
                        >
                        </VueMultiselect>
                      </fieldset>
                    </div>
                  </div>

                  <hr />
                  <div v-for="(autre, index) in formData.lignes" :key="index">
                    <div class="d-flex justify-content-end">
                      <button @click="deleteItem(index)" class="bt btn-danger">
                        X
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title">Médicament & dosage</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="autre.name"
                            id="title"
                            placeholder="Médicament et dosage"
                          />
                        </fieldset>
                      </div>

                      

                      <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title1"
                            >Posologie et durée du traitement</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="autre.posologie"
                            placeholder="Posologie et durée du traitement"
                          />
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <button  type="button" @click.stop="addForm" class="btn btn-primary">
                  Ajouter une nouvelle prescription
                </button>
              </div>
              <button class="btn btn-success w-100 my-4 flex" type="submit">
                <span class="fs-5 fs-semibold" v-if="!chargement">
                  {{ submitText }}
                </span>
                <span v-else class="d-flex justify-content-center align-items-center">
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
    <!-- modal ajout  -->

    <!-- modal update  -->
    <div
      class="modal fade text-left"
      id="update"
      tabindex="-1"
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-success white">
            <h4 class="modal-title white" id="">
              <i class="la la-edit"></i>
              {{ title }}
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form  @submit.prevent="updateOrdonance">
              <div>
                <div>
                  <div class="row">
                    <div class="col-md-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Selectionnez le medecin</label>
                        <input
                        class="form-control"
                        id="name"
                        readonly
                        name="name"
                        v-if="!showSelectDoctor"
                        @click="showSelectDoctor = true"
                        v-model="saveUpdate.doctor_id"
                        type="text"
                        />
                        <VueMultiselect
                        v-else
                          v-model="saveUpdate.doctor_id"
                          label="name"
                          track-by="id"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un medecin"
                          placeholder="Selectionnez un medecin"
                          :options="docteurs"
                        >
                        </VueMultiselect>
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Selectionnez le patient </label>
                        <input
                        class="form-control"
                        id="name"
                        readonly
                        name="name"
                        v-if="!showSelectPatient"
                        @click="showSelectPatient = true"
                        v-model="saveUpdate.patient_id"
                        type="text"
                        />
                        <VueMultiselect
                          v-else
                          v-model="saveUpdate.patient_id"
                          label="firstname"
                          track-by="id"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un patient"
                          placeholder="Selectionnez un patient"
                          :options="patients"
                        >
                        </VueMultiselect>
                      </fieldset>
                    </div>
                  </div>

                  <hr />
                  <div v-for="(autre, index) in saveUpdate.lignes" :key="index">
                    <div class="d-flex justify-content-end">
                      <button @click="deleteItem(index)" class="bt btn-danger">
                        X
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title">Médicament & dosage</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="autre.name"
                            id="title"
                            placeholder="Médicament et dosage"
                          />
                        </fieldset>
                      </div>

                      

                      <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title1"
                            >Posologie et durée du traitement</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="autre.posologie"
                            placeholder="Posologie et durée du traitement"
                          />
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <button  type="button" @click.stop="addForm" class="btn btn-primary">
                  Ajouter une nouvelle prescription
                </button>
              </div>
              <button class="btn btn-success w-100 my-4 flex" type="submit">
                <span class="fs-5 fs-semibold" v-if="!chargement">
                  {{ submitText }}
                </span>
                <span v-else class="d-flex justify-content-center align-items-center">
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn grey btn-outline-secondary btn-sm"
              data-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              data-dismiss="modal"
              @click.prevent="updateOrdonance"
              class="btn btn-outline-success btn-sm"
            >
              {{ submitText }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal update  -->
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-6 col-12 mb-2">
            <h3 class="content-header-title">Listes des Ordonnances</h3>
          </div>
          <div class="content-header-right col-md-6 col-12">
            <div
              class="btn-group float-md-right"
              role="group"
              aria-label="Button group with nested"
            >
              <div class="form-group">
                <button
                  type="button"
                  @click="addOrdonance"
                  class="btn btn-info round box-shadow-2 px-2 mb-1"
                  data-toggle="modal"
                  data-target="#large"
                >
                  <i class="ft-edit icon-left"></i> ajouter
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="content-body">
          <div class="table-responsive">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom & prénom du patient</th>
                  <th>Docteur</th>
                  <th>Date et heure</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(data, index) in ordonances" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td v-if="data.patient"> {{ data.patient.firstname }} </td>
                  <td v-if="data.doctor"> {{ data.doctor.name }} </td>
                  <td>{{data.created_at}}</td>
                  <td>
                    <router-link
                      :to="{ name: 'voirOrdonance', params: { id: data.id } }"
                      class="btn btn-primary round btn-sm waves-effect waves-light"
                    >
                      <i class="la la-eye font-small-2"></i> voir
                    </router-link>

                    <button
                      title="modifier"
                      data-toggle="modal"
                      @click="modifier(data, index)"
                      data-target="#update"
                      class="btn btn-primary round btn-sm waves-effect waves-light mx-1"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1.3em"
                        width="1.3em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                        ></path>
                        <path
                          d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                        ></path>
                      </svg>
                    </button>

                    <button
											data-toggle="modal"
                  		data-target="#delete"
											@click="supprimer(index,data)"
                      class="btn btn-danger round btn-sm waves-effect waves-light"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1.3em"
                        width="1.3em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--fin  modal update  -->
  </div>
</template>

<script setup>
import { ref, reactive, computed,onMounted } from "vue";
import VueMultiselect from "vue-multiselect";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
import PraticienService from "@/services/modules/praticien.service.js";
import OrdonanceService from "@/services/modules/ordonance.service.js";
import PatientService from "@/services/modules/patient.service.js";

const title = ref("Ajouter une ordonance ");
const submitText = ref("AJouter");
const isUpdate = ref(false);
const saveUpdate = reactive({});
const ordonances = ref([]);
const patients = ref([]);
const docteurs = ref([]);
const deleteData = reactive({});
const chargement = ref(false)
const updateId = ref(0)
const showSelectPatient = ref(false)
const showSelectDoctor = ref(false)
const oldData = reactive({})
//getData

const getData = () => {
  OrdonanceService.get().then((data) => {
    const datas = data.data.data
    ordonances.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }
  const getDocteurs = () => {
    PraticienService.get().then((data) => {
    const datas = data.data.data
    docteurs.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }
  const getPatients = () => {
    PatientService.get().then((data) => {
    const datas = data.data.data
    patients.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }

  onMounted(() => {
    getData()
    getPatients()
    getDocteurs()
  })

const formData = reactive({
  lignes: [],
  patient_id: null,
  doctor_id: null
}
 );

const addOrdonance = function () {
  isUpdate.value = false;
  title.value = "Ajouter une ordonance";
  submitText.value = "Ajouter";
};
const storeOrdonance = function () {
  if(chargement.value == false) {
    chargement.value = true
		formData.patient_id = formData.patient_id.id
		formData.doctor_id = formData.doctor_id.id
		OrdonanceService.create(formData).then((data) => {
      const response = data.data
			if(response.status === 'error') {
				chargement.value = false  
				toast(response.message, 'danger')
			}
			else {
				chargement.value = false
				getData()
				close()
        toast('vous avez créer une ordonances', 'success')
			}
        
      })
  }
};

const updateOrdonance = function () {
  if(chargement.value == false) {
    chargement.value = true
    if(showSelectDoctor.value) {
		  saveUpdate.doctor_id = saveUpdate.doctor_id.id
      saveUpdate.patient_id  = oldData.patient_id
    }

    if(showSelectPatient.value) {
      saveUpdate.patient_id = saveUpdate.patient_id.id
      saveUpdate.doctor_id  = oldData.doctor_id
    }
   
    if(showSelectPatient.value && showSelectDoctor.value) {
      saveUpdate.patient_id = saveUpdate.patient_id.id
      saveUpdate.doctor_id = saveUpdate.doctor_id.id
    }
    if(showSelectPatient.value === false && showSelectDoctor.value == false) {
      saveUpdate.doctor_id  = oldData.doctor_id
      saveUpdate.patient_id  = oldData.patient_id
    }


		OrdonanceService.update(updateId.value,saveUpdate).then((data) => {
      const response = data.data
			if(response.status === 'error') {
				chargement.value = false  
				toast(response.message, 'danger')
			}
			else {
				chargement.value = false
				getData()
				close()
        toast('vous avez effectué une mise à jours', 'success')
			}
        
      })
  }
};

const close = function () {
  formData.patient_id = null;
  formData.doctor_id = null;
  formData.lignes = [];
  
};
const supprimer = function (index, data) {
		deleteData.id = data.id;
		deleteData.nom = data.nom;
		deleteData.index = index;
	};
	const deleteOrdonance = function () {
		ordonances.value.splice(ordonances.value.indexOf(deleteData.index), 1);
		OrdonanceService.destroy(deleteData.id)
			.then((data) => {
				toast("Suppression effectué avec succèss", "success");
				getData();
			})
			.catch((error) => {
				if (error.response) {
					// Requête effectuée mais le serveur a répondu par une erreur.
					const erreurs = error.response.data.message;
					toast(erreurs, "danger");
				} else if (error.request) {
					// Demande effectuée mais aucune réponse n'est reçue du serveur.
					//console.log(error.request);
				} else {
					// Une erreur s'est produite lors de la configuration de la demande
				}
			});
	};


const addForm = function () {
  formData.lignes.push({
    name: "",
    posologie: "",
  });
};

const addFormUpdate = function () {
  saveUpdate.lignes.push({
    name: "",
    posologie: "",
  });
};



const modifier = function (data, index) {
  console.log(data)
  isUpdate.value = true;
  title.value = "Modifier une ordonance";
  oldData.patient_id = data.patient.id
  oldData.doctor_id = data.doctor.id
  submitText.value = "Modifier";
  saveUpdate.lignes= data.lignes
  saveUpdate.patient_id= data.patient.firstname
  saveUpdate.doctor_id= data.doctor.name
};

const deleteItem = function (index) {
  formData.lignes.splice(index, 1);
};
const deleteItemUpdate = function (index) {
  saveUpdate.lignes.splice(index, 1);
};

const toast = (message, type) => {
  createToast(message, { type: type });
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style></style>
