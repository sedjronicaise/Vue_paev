<template>
  <div>
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
            <form>
              <div>
                <div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Rechercher le patient</label>

                        <VueMultiselect
                          v-model="formData.patient"
                          label="fullName"
                          track-by="fullName"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un patient"
                          placeholder="Selectionnez un patient"
                          :options="options"
                        >
                        </VueMultiselect>
                      </fieldset>
                    </div>
                  </div>

                  <hr />
                  <div v-for="(autre, index) in formData.autre" :key="index">
                    <div class="d-flex justify-content-end">
                      <button @click="deleteItem(index)" class="bt btn-danger">
                        X
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title">Médicament & dosage</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="autre.medicamentDosage"
                            id="title"
                            placeholder="Médicament et dosage"
                          />
                        </fieldset>
                      </div>

                      <div class="col-lg-4">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title">Quantité</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            v-model="autre.quantite"
                            placeholder="Quantité"
                          />
                        </fieldset>
                      </div>

                      <div class="col-lg-4">
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

                <button @click.prevent="addForm" class="btn btn-primary">
                  Ajouter une nouvelle prescription
                </button>
              </div>
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
              @click.prevent="storeOrdonance"
              class="btn btn-outline-success btn-sm"
            >
              {{ submitText }}
            </button>
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
            <form>
              <div>
                <div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Rechercher le patient</label>

                        <VueMultiselect
                          v-model="saveUpdate.patient"
                          label="fullName"
                          track-by="fullName"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un patient"
                          placeholder="Selectionnez un patient"
                          :options="options"
                        >
                        </VueMultiselect>
                      </fieldset>
                    </div>
                  </div>

                  <hr />
                  <div v-for="(autre, index) in saveUpdate.autre" :key="index">
                    <div class="d-flex justify-content-end">
                      <button @click="deleteItemUpdate(index)" class="bt btn-danger">
                        X
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title">Médicament & dosage</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="autre.medicamentDosage"
                            id="title"
                            placeholder="Médicament et dosage"
                          />
                        </fieldset>
                      </div>

                      <div class="col-lg-4">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="title">Quantité</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            v-model="autre.quantite"
                            placeholder="Quantité"
                          />
                        </fieldset>
                      </div>

                      <div class="col-lg-4">
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

                <button @click.prevent="addFormUpdate" class="btn btn-primary">
                  Ajouter une nouvelle prescription
                </button>
              </div>
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
                  <th>Date et heure</th>
                  <th>Auteur</th>
                  <th>Actions</th>
                </tr>
              </thead>


              <tbody>
                <tr v-for="(data, index) in ordonances" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.patient.fullName }}</td>
                  <td>{{ data.created_at.getFullYear() }}</td>
                  <td>Dr Amoussou Florent</td>
                  <td>
                    <router-link
                      :to="{name:'voirOrdonance',params:{id:data.id}}"
                      class="btn btn-primary round btn-sm waves-effect waves-light"
                    >
                      <i class="la la-eye font-small-2"></i> voir
                    </router-link>

                    <button
                      title="modifier"
                      data-toggle="modal"
                      @click="modifier(data,index)"
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
                      @click="supprimer(index)"
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
import { ref, reactive, computed } from "vue";
import VueMultiselect from "vue-multiselect";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
import { Patients } from "../../../api/patient";
import { Ordonances } from "../../../api/ordonance";

const title = ref("Ajouter une ordonance ")
const submitText = ref("AJouter")
const isUpdate = ref(false)
const saveUpdate = reactive({})
const ordonances = ref([])
const indexElement = ref(0)

//getData

const getData = JSON.parse(localStorage.getItem("ordonances"));
if (getData != null || getData != undefined) {
  const datas = getData;
  ordonances.value = [...Ordonances, ...datas];
} else {
  ordonances.value = Ordonances;
}

const options = computed(() => {
  const datas = [];
  if (Patients != null) {
    Patients.forEach((patient) => {
      datas.push({ fullName: patient.infoGeneral.fullName, id: patient.id,sexe:patient.infoGeneral.sexe, age: patient.infoGeneral.dateNaissance});
    });
    return datas;
  }
});

const formData = reactive({
  patient: {},
  autre: [
    {
      medicamentDosage: "",
      quantite: "",
      posologie: "",
    },
  ],
  created_at: new Date(),
});

const addOrdonance = function () {
  isUpdate.value = false;
  title.value = "Ajouter une ordonance";
  submitText.value = "Ajouter";
};
const storeOrdonance = function () {
	const id = (Math.floor(Math.random() * 1000000000))
	formData.id = id
  let datas = Object.assign({}, formData);
  ordonances.value.push(datas);
  //close()
  toast("Enregistrement reussie ", "success");
};
const close = function () {
  formData.patient = "";
  formData.autre = [
    {
      medicamentDosage: "",
      quantite: "",
      posologie: "",
    },
  ];
};

const addForm = function () {
  formData.autre.push({
    medicamentDosage: "",
    quantite: "",
    posologie: "",
  });
}


const addFormUpdate = function () {
  saveUpdate.autre.push({
    medicamentDosage: "",
    quantite: "",
    posologie: "",
  });
}

const modifier = function (data,index) {
	
	indexElement.value = index
  isUpdate.value = true
  title.value = "Modifier une ordonance"
  submitText.value = "Modifier"
	saveUpdate.id = data.id
  saveUpdate.patient = data.patient
  saveUpdate.autre = data.autre
	saveUpdate.created_at = data.created_at
}

const deleteItem = function (index) {
  formData.autre.splice(index, 1);
}
const deleteItemUpdate = function (index) {
  saveUpdate.autre.splice(index, 1);
}
const supprimer = function (index) {
  ordonances.value.splice(index, 1);
  toast("Suppression reussie ", "success");
}

const updateOrdonance = function() {
	ordonances.value[indexElement.value] = saveUpdate
	toast("Mise à jours effectué avec success ", "success");
}

const toast = (message, type) => {
  createToast(message, { type: type });
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style></style>
