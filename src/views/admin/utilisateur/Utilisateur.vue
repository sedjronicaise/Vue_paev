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
              @click.prevent="deleteUser"
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
            <form v-if="!isUpdate" @submit.prevent="storeUser">
              <div>
                <div>
                  <div class="row">
                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient"
                          >Fonction ou profession de l'utilisateur</label
                        >
                        <select v-model="formData.profession" required name="role_list" id="" class="form-control">
                          <option value="Médecin géneraliste">Médecin géneraliste</option>
                          <option value="Specialiste">Specialiste</option>
                          <option value="Nutritioniste">Nutritioniste</option>
                          <option value="Sage Femme">Sage Femme</option>
                          <option value="Aide soignant">Aide soignant</option>
                          <option value="Infirmier/ère">Infirmier/ère</option>
                          <option value="Receptionniste">Receptionniste</option>
                        </select>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Attribuer les permissions</label>

                        <VueMultiselect
                          v-model="permission"
                          :options="permissions"
                          :multiple="true"
                          :taggable="true"
                          :hideSelected="true"
                          :closeOnSelect="false"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          @tag="addTagType"
                          tag-placeholder="Ajouter un nouveau element"
                          placeholder="Selectionnez une (des) permissions"
                          label="name"
                          required
                          track-by="id"
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Nom et prénom </label>
                        <input
                          type="text"
                          v-model="formData.name"
                          class="form-control"
                          required
                          placeholder="Nom et prénoms de l'utilisateur"
                        />
                      </fieldset>
                    </div>

                    <!-- <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="patient"
                            >Rôle</label
                          >
                          <input
                            type="text"
                            v-model="formData.natureCertificat"
                            class="form-control"
                            placeholder="Nom et prénom de l'utilisateur"
                          />
                        </fieldset>
                      </div> -->

                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Telephone </label>
                        <input
                          type="text"
                          v-model="formData.phone"
                          class="form-control"
                          required
                          placeholder="Telephone"
                        />
                      </fieldset>
                    </div>

                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Email </label>
                        <input
                          type="email"
                          v-model="formData.email"
                          class="form-control"
                          required
                          placeholder="Email"
                        />
                      </fieldset>
                    </div>

                    <!-- <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="patient"
                            >Statut du compte</label
                          >
                          <select name="statut_user" id=""  class="form-control">
                            <option value="">Activé</option>
                            <option value="">Désactivé</option>
                          </select>
                         
                        </fieldset>
                      </div> -->

                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Définir un mot de passe</label>
                        <input
                          type="password"
                          v-model="formData.password"
                          class="form-control"
                          required
                          placeholder="Entrer un mot de passe"
                        />
                      </fieldset>
                    </div>

                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Confirmer le mot de passe</label>
                        <input
                          type="password"
                          v-model="formData.password_confirmation"
                          class="form-control"
                          required
                          placeholder="confirmer le mot de passe"
                        />
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" d-flex justify-content-center py-4  ">
                <button
                  type="button"
                  @click="close"
                  class="btn grey btn-danger btn-sm mx-3 fs-5 fs-semibold"
                  data-dismiss="modal"
                >
                  Fermer
              </button>
            <button :data-dismiss="{'modal':chargement==false}" type="submit" class="btn btn-primary flex" >
														<span class="fs-5 fs-semibold" v-if="!chargement">
															creer un utilisateur
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
              </div>
            </form>
            <form v-else @submit.prevent="updateUser">
              <div>
                <div>
                  <div class="row">
                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient"
                          >Fonction ou profession de l'utilisateur</label
                        >
                        <select v-model="saveUpdate.profession" required name="role_list" id="" class="form-control">
                          <option disabled :value="saveUpdate.profession">{{saveUpdate.profession}}</option>
                          <option value="Médecin géneraliste">Médecin géneraliste</option>
                          <option value="Specialiste">Specialiste</option>
                          <option value="Nutritioniste">Nutritioniste</option>
                          <option value="Sage Femme">Sage Femme</option>
                          <option value="Aide soignant">Aide soignant</option>
                          <option value="Infirmier/ère">Infirmier/ère</option>
                          <option value="Receptionniste">Receptionniste</option>
                        </select>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Nom et prénoms </label>
                        <input
                          type="text"
                          v-model="saveUpdate.name"
                          class="form-control"
                          required
                          placeholder="Nom et prénoms de l'utilisateur"
                        />
                      </fieldset>
                    </div>
                   

                    <!-- <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="patient"
                            >Rôle</label
                          >
                          <input
                            type="text"
                            v-model="formData.natureCertificat"
                            class="form-control"
                            placeholder="Nom et prénom de l'utilisateur"
                          />
                        </fieldset>
                      </div> -->

                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Telephone </label>
                        <input
                          type="text"
                          v-model="saveUpdate.phone"
                          class="form-control"
                          required
                          placeholder="Telephone"
                        />
                      </fieldset>
                    </div>

                    <div class="col-lg-6">
                      <fieldset class="form-group floating-label-form-group">
                        <label for="patient">Email </label>
                        <input
                          type="email"
                          v-model="saveUpdate.email"
                          class="form-control"
                          required
                          placeholder="Email"
                        />
                      </fieldset>
                    </div>

                    <!-- <div class="col-lg-6">
                        <fieldset class="form-group floating-label-form-group">
                          <label for="patient"
                            >Statut du compte</label
                          >
                          <select name="statut_user" id=""  class="form-control">
                            <option value="">Activé</option>
                            <option value="">Désactivé</option>
                          </select>
                         
                        </fieldset>
                      </div> -->

                  
                  </div>
                </div>
              </div>
              <div class=" d-flex justify-content-center py-4 ">
                <button
                  type="button"
                  @click="close"
                  class="btn grey btn-danger mx-3 btn-sm fs-5 fs-semibold"
                  data-dismiss="modal"
                >
                  Fermer
              </button>
            <button :data-dismiss="{'modal':chargement==false}" type="submit" class="btn btn-primary flex" >
														<span class="fs-5 fs-semibold" v-if="!chargement">
															modifier
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
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    <!-- modal ajout  -->

    <!-- modal update  -->

    <!-- modal update  -->
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-6 col-12 mb-2">
            <h3 class="content-header-title">Listes des utilisateurs</h3>
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
                  @click="addUsers"
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
          <div class="my-2 d-flex justify-content-end">
            <div>
              <Search @search="getSearch" />
            </div>
          </div>
          <div class="table-responsive">
            <table class="table mb-0">
             
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom & prénoms</th>
                  <th>Email</th>
                  <th>Telephone</th>
                  <th>Rôle</th>
                  <th>Droits et permissions</th>
                  <th>Ajouté le</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(data, index) in resultQuery" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.name }}</td>
                  <td>{{ data.email }}</td>
                  <td>{{ data.phone }}</td>
                  <td>{{ data.profession }}</td>

                  <td>
                    <span class="badge badge-info">
                      volet médical, messagerie
                    </span>
                  </td>
                  <td>{{ data.created_at }}</td>
                  <td>
                    <span class="badge badge-success">
                      {{ data.status }}
                    </span>
                  </td>
                  <td>
                    <div class="d-flex">
                      <button
                      title="modifier"
                      data-toggle="modal"
                      @click="modifier(data, index)"
                     
                      data-target="#large"
                      class="btn btn-primary round mx-1 btn-sm waves-effect waves-light mx-1"
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
                      @click="supprimer(index, data)"
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
                    </div>
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
import { ref, reactive, computed, onMounted } from "vue";
import VueMultiselect from "vue-multiselect";
import { createToast } from "mosha-vue-toastify";
import Search from "@/components/Search";
import UsersService from "@/services/modules/utilisateur.service.js";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

const title = ref("Ajouter un utilisateur ");
const submitText = ref("AJouter");
const isUpdate = ref(false);
const search = ref("");
const saveUpdate = reactive({});
const deleteData = reactive({});
const users = ref([]);
//multiselected option
const permission = ref(null);
const permissions = ref([]);
const chargement = ref(false)
const updateId = ref(0)
const resultQuery = computed(() => {
  if (search.value) {
    return users.value.filter((item) => {
      return (
        search.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.profession.toLowerCase().includes(v)) ||
        search.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.name.toLowerCase().includes(v)) ||
        search.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.email.toLowerCase().includes(v)) ||
        search.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.phone.toLowerCase().includes(v)) ||
        search.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.status.toLowerCase().includes(v)) ||
        search.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.created_at.toLowerCase().includes(v))
      );
    });
  } else {
    return users.value;
  }
});
//getData
const getSearch = function (data) {
  search.value = data;
};
const getData = () => {
  UsersService.get()
    .then((data) => {
      const datas = data.data.data;
      users.value = datas.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  const userInfo = JSON.parse(localStorage.getItem("paevcliniqueInfo"));
  if (userInfo) {
    permissions.value = userInfo.users.permissions;
  }
  getData();
});

const formData = reactive({
  name: "",
  email: "",
  password: "123456789",
  password_confirmation: "123456789",
  profession: "Doctor",
  country: "",
  address: "",
  city: "",
  phone: "",
  permissions: [],
});

const addUsers = function () {
  isUpdate.value = false;
  title.value = "Ajouter un utilisateur";
  submitText.value = "Ajouter";
};

const close = function () {
  formData.name = "";
  formData.email = "";
  formData.phone = "";
  formData.profession = "";
  formData.permissions = [];
  permission.value = [];
  formData.password = "";
  formData.password_confirmation = "";
};

const modifier = function (data, index) {
  isUpdate.value = true;
  updateId.value = data.id
  
  title.value = "Modifier un utilisateur";
  submitText.value = "Modifier";
  saveUpdate.name = data.name;
  saveUpdate.email = data.email;
  saveUpdate.phone = data.phone;
  saveUpdate.profession = data.profession;
 /*  saveUpdate.country = data.country
  saveUpdate.address = data.address
  saveUpdate.city = data.city */

};

function storeUser() {
      if(chargement.value == false) {
        const permissions = []
        chargement.value = true
       
        permission.value.forEach(element => {
          permissions.push(element.id)
        })
        
        formData.permissions = permissions
        UsersService.create(formData).then((data) => {
          toast("Nouveau utilisateur creer", "success");
          close()
          getData()
          chargement.value = false  
        }).catch((e) => {
          chargement.value = false  
          if (error.response) {
            // Requête effectuée mais le serveur a répondu par une erreur.
            const message = error.response.data.message
            toast(message, "success");
          } else if (error.request) {
            // Demande effectuée mais aucune réponse n'est reçue du serveur.
            //console.log(error.request);
          } else {
            // Une erreur s'est produite lors de la configuration de la demande
            //console.log('dernier message', error.message);
          }
        })
      }
}

function updateUser() {
      if(chargement.value == false) {
        
        chargement.value = true
       
       
        
        
        UsersService.update(updateId.value,saveUpdate).then((data) => {
          toast("Utilisateur modifier", "success");
          close()
          getData()
          chargement.value = false  
        }).catch((e) => {
          chargement.value = false  
          if (error.response) {
            // Requête effectuée mais le serveur a répondu par une erreur.
            const message = error.response.data.message
            toast(message, "success");
          } else if (error.request) {
            // Demande effectuée mais aucune réponse n'est reçue du serveur.
            //console.log(error.request);
          } else {
            // Une erreur s'est produite lors de la configuration de la demande
            //console.log('dernier message', error.message);
          }
        })
      }
}

const supprimer = function (index, data) {
  deleteData.id = data.id;
  deleteData.nom = data.nom;
  deleteData.index = index;
};
const deleteUser = function () {
  users.value.splice(users.value.indexOf(deleteData.index), 1);
  UsersService.destroy(deleteData.id)
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

const toast = (message, type) => {
  createToast(message, { type: type });
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style></style>
