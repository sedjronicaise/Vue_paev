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
              @click.prevent="supprimer(indexElement)"
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
            <form>
              <div>
                <div>
                  <div class="row">
                    <div class="col-lg-6">
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
                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient"
                          >Entrer la nature de certifcat</label
                        >
                        <input
                          type="text"
                          v-model="formData.natureCertificat"
                          class="form-control"
                          placeholder="Exemple: Certificat d'hospitalisation"
                        />
                      </fieldset>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="contenu">Contenu du certificat</label>

                        <textarea
                          name=""
                          id="contenu"
                          v-model="formData.contenuCertificat"
                          class="form-control"
                          cols="30"
                          rows="10"
                        >
                        </textarea>
                      </fieldset>
                    </div>
                  </div>
                </div>
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
              @click.prevent="storeCertificat"
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
              <div class="row">
                <div class="col-lg-6">
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
                <div class="col-lg-6">
                  <fieldset class="form-group floating-label-form-group">
                    <label for="patient">Entrer le nature de certifcat</label>
                    <input
                      type="text"
                      v-model="saveUpdate.natureCertificat"
                      class="form-control"
                      placeholder="Exemple: Certificat d'hospitalisation"
                    />
                  </fieldset>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <fieldset class="form-group floating-label-form-group">
                    <label for="contenu">Contenu du certificat</label>

                    <textarea
                      name=""
                      id="contenu"
                      v-model="saveUpdate.contenuCertificat"
                      class="form-control"
                      cols="30"
                      rows="10"
                    >
                    </textarea>
                  </fieldset>
                </div>
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
            <h3 class="content-header-title">Listes des certificats</h3>
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
                  @click="addCertificat"
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
                <tr v-for="(data, index) in certificats" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.patient.fullName }}</td>
                  <td>{{ data.created_at.getFullYear() }}</td>
                  <td>Dr Amoussou Florent</td>
                  <td>
                    <router-link
                      :to="{ name: 'voirCertificat', params: { id: data.id } }"
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
                      @click="openDelete(index)"
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
import { Certificats } from "../../../api/certificat";

const title = ref("Ajouter un certificat ");
const submitText = ref("AJouter");
const isUpdate = ref(false);
const saveUpdate = reactive({});
const certificats = ref([]);
const indexElement = ref(0);

//getData

const getData = JSON.parse(localStorage.getItem("certificats"));
if (getData != null || getData != undefined) {
  const datas = getData;
  certificats.value = [...Certificats, ...datas];
} else {
  certificats.value = Certificats;
}

const options = computed(() => {
  const datas = [];
  if (Patients != null) {
    Patients.forEach((patient) => {
      datas.push({
        fullName: patient.infoGeneral.fullName,
        id: patient.id,
        sexe: patient.infoGeneral.sexe,
        age: patient.infoGeneral.dateNaissance,
      });
    });
    return datas;
  }
});

const formData = reactive({
  patient: {},
  natureCertificat: "",
  contenuCertificat: "",
  created_at: new Date(),
});

const addCertificat = function () {
  isUpdate.value = false;
  title.value = "Ajouter un certificat";
  submitText.value = "Ajouter";
};
const storeCertificat = function () {
  const id = Math.floor(Math.random() * 1000000000);
  formData.id = id;
  let datas = Object.assign({}, formData);
  certificats.value.push(datas);
  //close()
  toast("Enregistrement reussie ", "success");
};
const close = function () {
  formData.patient = "";
  formData.natureCertificat = "";
  formData.contenuCertificat = "";
};

const modifier = function (data, index) {
  indexElement.value = index;
  isUpdate.value = true;
  title.value = "Modifier une ordonance";
  submitText.value = "Modifier";
  saveUpdate.id = data.id;
  saveUpdate.patient = data.patient;
  saveUpdate.natureCertificat =  data.natureCertificat;
  saveUpdate.contenuCertificat = data.contenuCertificat;
  saveUpdate.created_at = data.created_at;
};

const openDelete = function(index) {
	indexElement.value = index;
}
const supprimer = function (index) {
  certificats.value.splice(index, 1);
  toast("Suppression reussie ", "success");
};

const updateOrdonance = function () {
  certificats.value[indexElement.value] = saveUpdate;
  toast("Mise à jours effectué avec success ", "success");
};

const toast = (message, type) => {
  createToast(message, { type: type });
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style></style>
