<template>
	<div>
		 <!-- Modal delete  -->
		<div class="modal animated bounce text-left" id="delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel36" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title " id="myModalLabel36">
					<span class="alert-icon text-danger"><i class="la la-warning"></i></span>
					Confirmation de la suppression
					</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<h5 class="text-danger text-center">Attention! Cette action est irresvocable, êtes vous sur de vouloir continuer ?</h5>     
					<p>.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn grey btn-outline-primary" data-dismiss="modal">Annuler</button>
					<button type="button" @click.prevent="deletePraticien" data-dismiss="modal" class="btn btn-outline-danger">Supprimer</button>
				</div>
				</div>
			</div>
		</div>
		<!-- Modal add -->
		<div class="modal animated bounce text-left" id="bounce" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel36" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title " id="myModalLabel36">
							{{title}}
						</h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form v-if="!isUpdate" key="ajouter" @submit.prevent="storePraticien" class="modal-body">
						<div class="form-body">
            	<div class="row my-2">
                <div class="col-md-12">
                  <div class="form-group">
                  	<label for="contact"> Nom et Prenoms </label>
                    <VueMultiselect
                          v-model="formData.name"
                          label="name"
                          track-by="id"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un utilisateur"
                          placeholder="Selectionnez un utilisateur"
                          :options="users"
                        >
                        </VueMultiselect>
											
                	</div>
              	</div>
              	
              </div>

							<div class="row my-2">
                <div class="col-md-6">
                  <div class="form-group">
                  	<label for="email"> Email </label>
                    <input
                      class="form-control"
                      id="email"
											required
                      name="email"
											placeholer="Votre email"
											placeholder="ex: demo@gmail.com	"
                      v-model="formData.email"
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="telephone"> Telephone </label>
                  	<input
                      class="form-control"
                      id="telephone"
											required
                      name="telephone"
											placeholder="90000000"
                      v-model="formData.phone"
                      type="number"
                      />
                    </div>
                </div>
              </div>

							<div class="row my-2">
                <div class="col-md-6">
									<div class="form-group">
                  	<label for="specialite"> Spécialité  </label>
                    <select
											required
                      v-model="formData.specialite" 
											class="custom-select"
                      id="state"
                    >
                  		<option value="medecine generale">Médecine Génerale</option>
                      <option value="nutritioniste">Nutritioniste</option>
                      <option value="Gynécologue">Gynécologue</option>
                      <option value="Dermatologue">Dermatologue</option>
                    </select>
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="adresse"> Adresse  </label>
                    <input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="formData.address"
											placeholder="lot 480 kpankpan cotonou "
                      type="text"
                      />
                	</div>
                </div>
              </div>

							<div class="row my-2">
                <div class="col-md-6">
									<div class="form-group">
                  	<label for="specialite"> Ville   </label>
										<input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="formData.city"
											placeholder=""
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="adresse"> Pays </label>
                    <input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="formData.country"
											placeholder="l"
                      type="text"
                      />
                	</div>
                </div>
              </div>

							<div class="d-flex justify-content-end my-2 ">
								<span class="curseur" @click="addJours">AJOUTER UNE GARDE </span>
							</div>
							<div class="row my-2">
								
              	<div class="col-md-12">
								
									<div 
										v-for="(garde,index) in formData.gardes" 
										:key="index" 
										class="row"
										>
										<pre>
											{{ formData.gardes }}
										</pre>
										<div class="col-md-4">
											<div class="form-group">
												<label for="jours"> Jours de la semaine   </label>
												<select
													required
											
													v-model="garde.day" 
													class="custom-select"
													id="state"
												>
													<option value="lundi">Lundi</option>
													<option value="mardi">Mardi</option>
													<option value="mercredi">Mercredi</option>
													<option value="jeudi">Jeudi</option>
													<option value="vendredi">Vendredi</option>
													<option value="samedi">Samedi</option>
													<option value="dimance">Dimanche</option>
												</select>
											</div>
              			</div>
										<div class="col-md-7">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label for="adresse"> Debut de garde </label>
														<input
															class="form-control"
															id="date"
															name="date"
															v-model="garde.start"
															type="time"
															/>
                					</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label for="adresse"> Fin de garde  </label>
														<input
															class="form-control"
															id="date"
															name="date"
															v-model="garde.end"
															type="time"
															/>
                					</div>
												</div>
											</div>
										</div>
										<div class="col-md-1 mb-2">
                      <span @click="supprimerGrade(index)" class="btn btn-danger"> x </span>
                    </div>
									</div>

                </div>
              </div>

							<button class="btn btn-primary w-100 flex" type="submit">
									<span class="fs-5 fs-semibold" v-if="!chargement">
										{{ submitText }}
									</span>
										<span v-else class="d-flex justify-content-center  align-items-center">
												<span class="mx-2 fs-semibold text-light">
														chargement ...
													</span>
													<div
														style="width: 1.5rem; height: 1.5rem"
														class="spinner-border text-light"
														role="status">
														<span class="sr-only">Loading...</span>
													</div>
										</span>
              </button>

            </div>
					</form>
					<form v-else key="modifier" @submit.prevent="updatePraticien" class="modal-body">
						<div class="form-body">
            	<div class="row my-2">
                <div class="col-md-12">
                  <div class="form-group">
                  	<label for="contact"> Nom et Prenoms </label>
										<input
                      class="form-control"
                      id="name"
											readonly
                      name="name"
											v-if="!showSelect"
											@click="showSelect = true"
                      v-model="saveUpdate.name"
                      type="text"
                      />
                    <VueMultiselect
													v-else
                          v-model="saveUpdate.name"
                          label="name"
                          track-by="id"
                          :selectLabel="'Appuyez sur Entrée pour sélectionner'"
                          :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                          selectedLabel="Selectionné"
                          tag-placeholder="Selectionnez un utilisateur"
                          placeholder="Selectionnez un utilisateur"
                          :options="users"
                        >
                        </VueMultiselect>
											
                	</div>
              	</div>
              	
              </div>

							<div class="row my-2">
                <div class="col-md-6">
                  <div class="form-group">
                  	<label for="email"> Email </label>
                    <input
                      class="form-control"
                      id="email"
											required
                      name="email"
											placeholer="Votre email"
											placeholder="ex: demo@gmail.com	"
                      v-model="saveUpdate.email"
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="telephone"> Telephone </label>
                  	<input
                      class="form-control"
                      id="telephone"
											required
                      name="telephone"
											placeholder="90000000"
                      v-model="saveUpdate.phone"
                      type="number"
                      />
                    </div>
                </div>
              </div>

							<div class="row my-2">
                <div class="col-md-6">
									<div class="form-group">
                  	<label for="specialite"> Spécialité  </label>
                    <select
											required
                      v-model="saveUpdate.specialite" 
											class="custom-select"
                      id="state"
                    >
                  		<option value="medecine generale">Médecine Génerale</option>
                      <option value="nutritioniste">Nutritioniste</option>
                      <option value="Gynécologue">Gynécologue</option>
                      <option value="Dermatologue">Dermatologue</option>
                    </select>
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="adresse"> Adresse  </label>
                    <input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="saveUpdate.address"
											placeholder="lot 480 kpankpan cotonou "
                      type="text"
                      />
                	</div>
                </div>
              </div>

							<div class="row my-2">
                <div class="col-md-6">
									<div class="form-group">
                  	<label for="specialite"> Ville   </label>
										<input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="saveUpdate.city"
											placeholder=""
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="adresse"> Pays </label>
                    <input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="saveUpdate.country"
											placeholder="l"
                      type="text"
                      />
                	</div>
                </div>
              </div>

							<div class="d-flex justify-content-end my-2 ">
								<span class="curseur" @click="addJours">AJOUTER UNE GARDE </span>
							</div>
							<div class="row my-2">
								
              	<div class="col-md-12">
								
									<div 
										v-for="(garde,index) in formData.gardes" 
										:key="index" 
										class="row"
										>
										<pre>
											{{ formData.gardes }}
										</pre>
										<div class="col-md-4">
											<div class="form-group">
												<label for="jours"> Jours de la semaine   </label>
												<select
													required
													v-model="garde.day" 
													class="custom-select"
													id="state"
												>
													<option value="lundi">Lundi</option>
													<option value="mardi">Mardi</option>
													<option value="mercredi">Mercredi</option>
													<option value="jeudi">Jeudi</option>
													<option value="vendredi">Vendredi</option>
													<option value="samedi">Samedi</option>
													<option value="dimance">Dimanche</option>
												</select>
											</div>
              			</div>
										<div class="col-md-7">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label for="adresse"> Debut de garde </label>
														<input
															class="form-control"
															id="date"
															name="date"
															v-model="garde.start"
															type="time"
															/>
                					</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label for="adresse"> Fin de garde  </label>
														<input
															class="form-control"
															id="date"
															name="date"
															v-model="garde.end"
															type="time"
															/>
                					</div>
												</div>
											</div>
										</div>
										<div class="col-md-1 mb-2">
                      <span @click="supprimerGrade(index)" class="btn btn-danger"> x </span>
                    </div>
									</div>

                </div>
              </div>

							<button class="btn btn-primary w-100 flex" type="submit">
									<span class="fs-5 fs-semibold" v-if="!chargement">
										{{ submitText }}
									</span>
										<span v-else class="d-flex justify-content-center  align-items-center">
												<span class="mx-2 fs-semibold text-light">
														chargement ...
													</span>
													<div
														style="width: 1.5rem; height: 1.5rem"
														class="spinner-border text-light"
														role="status">
														<span class="sr-only">Loading...</span>
													</div>
										</span>
              </button>

            </div>
					</form>
					
				</div>
			</div>
		</div>

		<div class="app-content content">
			<div class="content-overlay"></div>
			<div class="content-wrapper">
				<div class="content-header row">
					<div class="content-header-left col-md-6 col-12 mb-2">
						<h3 class="content-header-title">Listes des praticiens</h3>
						
					</div>
					
					<div class="content-header-right col-md-6 col-12">
						<div class="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
							<button
								data-toggle="modal" 
								data-target="#bounce"
								@click="addPraticien"
								class="btn btn-info round  box-shadow-2 px-2 mb-1" id="btnGroupDrop1"
								type="button" aria-haspopup="true" aria-expanded="false">
								Ajouter un praticien
							</button>
						</div>
						
					</div>
				</div>
				<div class="content-body">
					<div class="mt-2 mb-4 d-flex justify-content-end ">
            <div> 
              <Search @search="getSearch" />
            </div>
          </div>
					<div id="doctors-list">
						<div class="row match-height">
							
							<div v-for="(praticien,index) in resultQuery" class="col-lg-4">
								<div class="card">
									<img src="https://previews.123rf.com/images/afe207/afe2071602/afe207160200158/52329668-photo-de-profil-d-avatar-masculin-ombre-l%C3%A9g%C3%A8re-de-silhouette.jpg" alt=""
										class="card-img-top img-fluid rounded-circle w-25 mx-auto mt-1" />
									<div class="card-body">
										<div class="text-center">
											<strong>
												{{praticien.name}} 
												<!-- {{ praticien.numeroOrdre }} -->
											</strong>
										</div>
										<p class="text-center mt-1">
											<span class="badge badge-info">{{praticien.specialite}}</span> 
										</p>
										<!-- <p class="card-text card font-medium-1 text-center mb-0">
										 Adresse:	{{praticien.adresse}}
										</p> -->
										
										<p class="card-text card font-medium-1 text-center mb-0">
											{{praticien.email}} ~ {{ praticien.phone }}
										</p>

										<hr/>

										<div class="card-text card  ">
											<p v-for="(garde, index) in praticien.garde">
												<span class="fw">{{ garde.jours }}</span> ~ de <span class="fs">{{ garde.debut }} à {{ garde.fin }}</span>
											</p>
										</div>

										<div class="my-2 d-flex justify-content-center align-items-center">
											<button data-toggle="modal" data-target="#bounce" @click.prevent="modifier(praticien)"
											title="modifer un praticien"
											class="btn btn-primary  round btn-sm waves-effect waves-light"
										>
										<span>
											<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
										</span>        
										</button>
										<button 
											data-toggle="modal" data-target="#delete"
											title="supprimer un praticien"
											@click="supprimer(index,praticien)"
											class="btn btn-danger mx-1 round btn-sm waves-effect waves-light"
										>
											<span>
												<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
											</span>    
										</button>
										</div>
									</div>
									
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref,reactive,onMounted,computed} from 'vue'
	import Search from "@/components/Search"
	import UsersService from "@/services/modules/utilisateur.service.js";
	import VueMultiselect from "vue-multiselect";
	import { createToast } from "mosha-vue-toastify";
	// import the styling for the toast
	import "mosha-vue-toastify/dist/style.css";
	import PraticienService from "@/services/modules/praticien.service.js";
	const praticiens = ref([])
	const deleteData = ref(null)
	const saveUpdate = reactive({})
	const chargement = ref(false)
	const users = ref([])
	const showSelect = ref(false)
	const title = ref('"Ajouter un praticien"')
	const search = ref('')
	const submitText = ref('AJouter')
	const isUpdate = ref(false)
	const updateId = ref(0)
	
	//getData
  const getSearch = function(data) {
    search.value = data
  }
	const resultQuery = computed(()=> {
    if(search.value){
      return praticiens.value.filter((item)=>{
        return search.value.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v)) ||
        search.value.toLowerCase().split(' ').every(v => item.email.toLowerCase().includes(v)) ||
        search.value.toLowerCase().split(' ').every(v => item.specialite.toLowerCase().includes(v)) 
      })

      }else{
        return praticiens.value;
      }
  }) 
  const getData = () => {
  	PraticienService.get().then((data) => {
			const datas = data.data.data
			praticiens.value = datas.data 
  	}).catch((e) => {
      console.log(e)
    })
  }
	const getUsers = () => {
    UsersService.get().then((data) => {
    const datas = data.data.data
    users.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }

  onMounted(() => {
    getData()
		getUsers()
  })

	const formData = reactive({
    "email": "",
    "name": "",
    "phone": "",
    "address": "",
    "city": "",
		"specialite":'',
    "country": "",
		"user_id":null,
    "gardes": []
})

	const close = function() {
		formData.name = ''
		formData.phone = ''
		formData.email = ''
		formData.address = ''
		formData.city = ''
		formData.country = ''
		formData.gardes = []
	}

	const addJours = function() {
		formData.gardes.push({day:'',start:'',end:''})
	}
	const addPraticien = function() {
		close()
		isUpdate.value = false
		title.value = "Ajouter un praticien"
		submitText.value = "Ajouter"
	}

	const storePraticien = () => {
  if(chargement.value == false) {
    chargement.value = true
		formData.name = formData.name.name
		formData.user_id = formData.name.id
		PraticienService.create(formData).then((data) => {
      const response = data.data
			if(response.status === 'error') {
				chargement.value = false  
				toast(response.message, 'danger')
			}
			else {
				chargement.value = false
				getData()
				close()
        toast('vous avez créer un praticien', 'success')
			}
        
      })
  }
}
	const modifier  = function(data) {
		console.log(data)
		isUpdate.value = true
		title.value = "Modifier un praticien"
		submitText.value = "Modifier"
		updateId.value = data.id
		saveUpdate.email = data.email
    saveUpdate.name = data.name
    saveUpdate.phone = data.phone
    saveUpdate.address = data.address
    saveUpdate.city = data.city
    saveUpdate.country = data.country
		saveUpdate.specialite = data.specialite

	}


	const supprimer = function (index, data) {
		deleteData.id = data.id;
		deleteData.nom = data.nom;
		deleteData.index = index;
	};
	const deletePraticien = function () {
		praticiens.value.splice(praticiens.value.indexOf(deleteData.index), 1);
		PraticienService.destroy(deleteData.id)
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

	const updatePraticien = () => {
		if(chargement.value == false) {
    chargement.value = true
		if(showSelect.value) {
			saveUpdate.name = saveUpdate.name.name
			saveUpdate.user_id = saveUpdate.name.id
		}
		PraticienService.update(updateId.value,saveUpdate).then((data) => {
      const response = data.data
			if(response.status === 'error') {
				chargement.value = false  
				toast(response.message, 'danger')
			}
			else {
				chargement.value = false
				getData()
				close()
        toast('vous avez mise à jours praticien', 'success')
			} 
      })
  	}
  }
  
  const getIndex = function(index) {
    dataIndex.value = index
  }

	const supprimerGrade = function(index) {
    formData.gardes.splice(index, 1);
  }
	const toast = (message,type) => {
  	createToast(message,{type:type})
	}



</script>

<style scoped>
.fw {
	font-weight: bold;
	text-transform: uppercase;
	font-size:12px;
}
.fs {
	font-size:12px;
}
.curseur {
  cursor:pointer
}
</style>
