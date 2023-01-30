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
					<button type="button" @click.prevent="deletePraticien(dataIndex)" data-dismiss="modal" class="btn btn-outline-danger">Supprimer</button>
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
					<form v-if="!isUpdate" key="ajouter" class="modal-body">
						<div class="form-body">
            	<div class="row my-2">
                <div class="col-md-6">
                  <div class="form-group">
                  	<label for="contact"> Nom </label>
                    <input
                      class="form-control"
                      id="nom"
                      name="nom"
											placeholder="Votre nom"
                      v-model="formData.nom"
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="prenoms"> Prenoms </label>
                  	<input
                      class="form-control"
                      id="prenoms"
                      name="prenoms"
											placeholder="Votre prenoms"
                      v-model="formData.prenoms"
                      type="text"
                      />
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
                      name="telephone"
											placeholder="90000000"
                      v-model="formData.telephone"
                      type="number"
                      />
                    </div>
                </div>
              </div>

							<div class="row my-2">
                <div class="col-md-6">
                  <div class="form-group">
                  	<label for="nbreOdre"> Numero d'odre  </label>
                    <input
                      class="form-control"
                      id="nbreOrdre"
                      name="nbreOdre"
                      v-model="formData.numeroOrdre"
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="adresse"> Adresse  </label>
                    <input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="formData.adresse"
											placeholder="lot 480 kpankpan cotonou "
                      type="text"
                      />
                	</div>
                </div>
              </div>

							<div class="d-flex justify-content-end my-2 ">
								<button @click="addJours" class="btn btn-primary ">AJOUTER UNE GARDE </button>
							</div>
							<div class="row my-2">
								
                <div class="col-md-4">
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
								
              	<div class="col-md-8">
								
									<div 
										v-for="(garde,index) in formData.garde" 
										:key="index" 
										class="row"
										>
										<div class="col-md-4">
											<div class="form-group">
												<label for="jours"> Jours de la semaine   </label>
												<select
													required
											
													v-model="garde.jours" 
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
										<div class="col-md-8">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label for="adresse"> Debut de garde </label>
														<input
															class="form-control"
															id="date"
															name="date"
															v-model="garde.debut"
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
															v-model="garde.fin"
															type="time"
															/>
                					</div>
												</div>
											</div>
										</div>
									</div>

                </div>
              </div>

							<div class="d-flex justify-content-end my-2 ">
								<button type="submit" @click.prevent="storePraticien"  data-dismiss="modal"
									class="btn btn-primary"> {{ submitText }} </button>
							</div>
            </div>
					</form>
					<form v-else key="modifier" class="modal-body">
						<div class="form-body">
            	<div class="row my-2">
                <div class="col-md-6">
                  <div class="form-group">
                  	<label for="contact"> Nom </label>
                    <input
                      class="form-control"
                      id="nom"
                      name="nom"
											placeholder="Votre nom"
                      v-model="saveUpdate.nom"
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="prenoms"> Prenoms </label>
                  	<input
                      class="form-control"
                      id="prenoms"
                      name="prenoms"
											placeholder="Votre prenoms"
                      v-model="saveUpdate.prenoms"
                      type="text"
                      />
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
                      name="telephone"
											placeholder="90000000"
                      v-model="saveUpdate.telephone"
                      type="number"
                      />
                    </div>
                </div>
              </div>

							<div class="row my-2">
                <div class="col-md-6">
                  <div class="form-group">
                  	<label for="nbreOdre"> Numero d'odre  </label>
                    <input
                      class="form-control"
                      id="nbreOrdre"
                      name="nbreOdre"
                      v-model="saveUpdate.numeroOrdre"
                      type="text"
                      />
                	</div>
              	</div>
              	<div class="col-md-6">
                  <div class="form-group">
                  	<label for="adresse"> Adresse  </label>
                    <input
                      class="form-control"
                      id="adresse"
                      name="adresse"
                      v-model="saveUpdate.adresse"
											placeholder="lot 480 kpankpan cotonou "
                      type="text"
                      />
                	</div>
                </div>
              </div>

							<div class="d-flex justify-content-end my-2 ">
								<button @click="addJours" class="btn btn-primary ">AJOUTER UNE GARDE </button>
							</div>
							<div class="row my-2">
								
                <div class="col-md-4">
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
								
              	<div class="col-md-8">
								
									<div 
										v-for="(garde,index) in saveUpdate.garde" 
										:key="index" 
										class="row"
										>
										<div class="col-md-4">
											<div class="form-group">
												<label for="jours"> Jours de la semaine   </label>
												<select
													required
											
													v-model="garde.jours" 
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
										<div class="col-md-8">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label for="adresse"> Debut de garde </label>
														<input
															class="form-control"
															id="date"
															name="date"
															v-model="garde.debut"
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
															v-model="garde.fin"
															type="time"
															/>
                					</div>
												</div>
											</div>
										</div>
									</div>

                </div>
              </div>

							<div class="d-flex justify-content-end my-2 ">
								<button type="submit" @click.prevent="updatePraticien"  data-dismiss="modal"
									class="btn btn-primary"> {{ submitText }} </button>
							</div>
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
					<div id="doctors-list">
						<div class="row match-height">
							
							<div v-for="(praticien,index) in praticiens" class="col-lg-4">
								<div class="card">
									<img src="https://previews.123rf.com/images/afe207/afe2071602/afe207160200158/52329668-photo-de-profil-d-avatar-masculin-ombre-l%C3%A9g%C3%A8re-de-silhouette.jpg" alt=""
										class="card-img-top img-fluid rounded-circle w-25 mx-auto mt-1" />
									<div class="card-body">
										<div class="text-center">
											<strong>
												{{praticien.nom}} {{ praticien.prenoms }}  
												{{ praticien.numeroOrdre }}
											</strong>
										</div>
										<p class="text-center mt-1">
											<span class="badge badge-info">{{praticien.specialite}}</span> 
										</p>
										<!-- <p class="card-text card font-medium-1 text-center mb-0">
										 Adresse:	{{praticien.adresse}}
										</p> -->
										
										<p class="card-text card font-medium-1 text-center mb-0">
											{{praticien.email}} ~ {{ praticien.telephone }}
										</p>
										<hr/>
										<div class="card-text card  ">
											<p v-for="(garde, index) in praticien.garde">
												<span class="fw">{{ garde.jours }}</span> ~ de <span class="fs">{{ garde.debut }} à {{ garde.fin }}</span>
											</p>
										</div>
										
									</div>
									<div class="card-footer mx-auto">
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
										@click="getIndex(index)"
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
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import { createToast } from "mosha-vue-toastify";
	// import the styling for the toast
	import "mosha-vue-toastify/dist/style.css";
	import {Praticiens} from "../../../api/praticien"
	const praticiens = ref([])
	const dataIndex = ref(null)
	const saveUpdate = reactive({})
	//getData
	const getData = JSON.parse(localStorage.getItem('praticiens'))
	if(getData !=null || getData != undefined) {
		const datas = getData
		praticiens.value = [...Praticiens,...datas]
	}else {
		praticiens.value = Praticiens
	}
	const title = ref('"Ajouter un praticien"')
	const submitText = ref('AJouter')
	const isUpdate = ref(false)

	const formData = reactive({
		nom:'',
		prenoms:'',
		specialite:'',
		telephone:'',
		email:'',
		adresse:'',
		numeroOrdre:'',
		garde:[
			{jours:'',debut:'',fin:''}
		]
		
	})

	const close = function() {
		formData.nom = ''
		formData.prenoms = ''
		formData.specialite = ''
		formData.telephone = ''
		formData.email = ''
		formData.adresse = ''
		formData.numeroOrdre = ''
		formData.garde = [{jours:'',debut:'',fin:''}]

	}

	const addJours = function() {
		formData.garde.push({jours:'',date:''})
	}
	const addPraticien = function() {
		close()
		isUpdate.value = false
		title.value = "Ajouter un praticien"
		submitText.value = "Ajouter"
	}
	const storePraticien = function() {
		isUpdate.value = false
		toast('Nouveau enregistrment', 'success')
		praticiens.value.push(formData)
		
	}

	const modifier  = function(data) {
		console.log(data)
		title.value = "Modifier un praticien"
		submitText.value = "Modifier"
		isUpdate.value = true
		saveUpdate.nom = data.nom
		saveUpdate.prenoms = data.prenoms
		saveUpdate.specialite = data.specialite
		saveUpdate.telephone = data.telephone
		saveUpdate.email = data.email
		saveUpdate.adresse = data.adresse
		saveUpdate.numeroOrdre = data.numeroOrdre
		saveUpdate.garde = data.garde
	}

	const deletePraticien = (index) => {
    praticiens.value.splice(index, 1);
    toast('Supression éffectué avec succèss', 'success')
  }

	const updatePraticien = (index) => {
    
    toast('Mise à jours  éffectué avec succèss', 'success')
  }
  
  const getIndex = function(index) {
    dataIndex.value = index
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
</style>
