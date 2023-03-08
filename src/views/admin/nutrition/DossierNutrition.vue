<template>
	<div>
		<div class="modal animated bounce text-left" id="resultat" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel36" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title " id="myModalLabel36">
							Resultat analyse
						</h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div v-if="(totalStresseur >= 18 && totalStresseur < 28) && (totalStress >= 30 && totalStress < 45)"
							key="cas1">
							<ul>
								<li>Vous êtes un sujet tendu et fortement stressé.</li>
								<li>Les risques principaux sont l’état d’épuisement, les problèmes de santé dont les plus fréquents sont
									les maladies cardio-vasculaires</li>
								<li>
									Plus le score est élevé, plus les risques sont importants. il est urgent d’approfondir votre bilan de
									stress et d’apprendre à gérer votre stress
								</li>

							</ul>
						</div>
						<div v-if="(totalStress >= 19 && totalStress < 30) && (totalStresseur >= 14 && totalStresseur < 18)"
							key="cas2">
							<ul>
								<li>Vous êtes plutôt serein, peu stressé.</li>
								<li>
									Ce cas de figure est bénéfique sauf si des stresseurs trop
									importants apparaissent. votre manque « d’entrainement »
									pour affronter une situation stressante risque d’aboutir à un
									état de crise émotionnelle et ou un manque d’efficacité
								</li>

							</ul>
						</div>
						<div v-if="(totalStresseur >= 18 && totalStresseur < 28) && (totalStress >= 19 && totalStress < 30)"
							key="cas3">
							<ul>
								<li>
									Ce cas de figure est plutôt bénéfique et montre que malgré de nombreuses
									sollicitations, votre niveau de stress reste bas</li>
								<li>
									Toute fois attention de pas sous évaluer votre état de stress
									car dans ce cas les problèmes seront les mêmes que dans la
									situation du cas n°1
								</li>

							</ul>
						</div>
						<div v-if="(totalStresseur >= 14 && totalStresseur < 18) && (totalStress >= 30 && totalStress < 45)"
							key="cas4">
							<ul>
								<li>
									Il est important à apprendre à gérer son stress afin d’adapter au mieux la réponse aux stimulations
									extérieures
								</li>
								<li>
									Si un peu de stresseurs provoquent un stress élevé, votre réponse est inadaptée et votre état de santé
									n’est po préservé
								</li>
							</ul>
						</div>
						<div v-else>
							<p class="text-danger">Veuillez remplir la fiche d'evaluation et reesayer !!!!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="app-content content">
			<div class="content-overlay"></div>
			<div class="content-wrapper">
				<div class="content-header row">
					<div class="content-header-left col-md-6 col-12 mb-2">
						<h3 class="content-header-title">Dossier Nutritionnel : AMOUSSOU Wilfried</h3>

					</div>
					<div class="content-header-right col-md-6 col-12">
						<div class="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
							<button class="btn btn-info round dropdown-toggle dropdown-menu-right box-shadow-2 px-2 mb-1"
								id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
									class="ft-edit  icon-left"></i> Modifier</button>
							<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
								<a class="dropdown-item" href="#">Profile de AMOUSSOU Wilfried </a>
								<a class="dropdown-item" href="#">Menu habituel</a>
								<a class="dropdown-item" href="#">Rappel des 24H</a>
								<a class="dropdown-item" href="#">Fiche stresseur</a>
							</div>
						</div>
					</div>
				</div>
				<div class="content-body">
					<!-- Tabs with Icons start -->
					<section id="tabs-with-icons">
						<div class="row ">
							<div class="col-lg-12">

								<div class="card collapse show">
									<div class="row">
										<div class="col-6">

											<div class="card-body">
												<div class="media-list media-bordered">
													<div class="media">
														<span class="media-left">
															<img class="media-object" src="/hospital/app-assets/images/portrait/small/avatar-s-19.png"
																alt="Generic placeholder image" height="64" width="64">
														</span>
														<div class="media-body">
															<h5 class="media-heading">
																No Dossier :
																<span class="badge badge-info float-right">10-09-2022.BJ</span>
															</h5>
															<hr>
															<h5 class="media-heading">
																Profession:
																<span
																	class="float-right content-header-title">{{ patients[0].infoGeneral.profession }}</span>
															</h5>
															<hr>
															<h5 class="media-heading">
																Sexe
																<span class="badge badge-info float-right">{{ patients[0].infoGeneral.sexe }}</span>
															</h5>

														</div>
													</div>

												</div>
											</div>

										</div>
										<div class="col-6">
											<div class="card-body">
												<div class="media-list media-bordered">
													<div class="media">

														<div class="media-body">
															<h5 class="media-heading">
																Type de Consultation:
																<span
																	class="badge badge-info float-right">{{ patients[0].infoGeneral.typeConsultation }}</span>
															</h5>
															<hr>
															<h5 class="media-heading ">
																Télephone
																<span class="badge badge-info float-right">{{ patients[0].infoGeneral.telephone }}</span>
															</h5>
															<hr>
															<h5 class="media-heading">
																Date Arrivée :
																<span class="badge badge-info float-right">{{ patients[0].infoGeneral.dateArriver }} </span>
															</h5>


														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row match-height">

							<div class="col-xl-12 col-lg-12 ">
								<div class="card">
									<div class="card-header">
										<h4 class="card-title" id="from-actions-top-bottom-center">Fiche de consultation en nutrition</h4>
										<a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
										<div class="heading-elements">
											<ul class="list-inline mb-0">
												<li><a data-action="collapse"><i class="ft-minus"></i></a></li>
												<li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
												<li><a data-action="expand"><i class="ft-maximize"></i></a></li>
												<li><a data-action="close"><i class="ft-x"></i></a></li>
											</ul>
										</div>
									</div>
									<div class="card-content">
										<div class="card-body">
											<ul class="nav nav-tabs nav-underline nav-justified">
												<li class="nav-item">
													<a class="nav-link" id="linkIcon13-tab1" data-toggle="tab" href="#linkIcon13"
														aria-controls="linkIcon13" aria-expanded="false">
														<i class="ft-link"></i>
														<strong class="text-info">Profile</strong></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" id="linkIconOpt11-tab1" data-toggle="tab" href="#linkIconOpt11"
														aria-controls="linkIconOpt11">
														<i class="ft-external-link"></i>
														<strong class="text-info"> Menu habituel </strong></a>
												</li>



												<li class="nav-item">
													<a class="nav-link" id="linkIcon12-tab1" data-toggle="tab" href="#linkIcon12"
														aria-controls="linkIcon12" aria-expanded="false">
														<i class="ft-link"></i>
														<strong class="text-info"> Composante Nutritionnel </strong></a>
												</li>

												<li class="nav-item">
													<a class="nav-link active" id="activeIcon12-tab1" data-toggle="tab" href="#activeIcon12"
														aria-controls="activeIcon12" aria-expanded="true">
														<i class="ft-heart"></i>
														<strong class="text-info"> Fiche stresseur</strong></a>
												</li>

											</ul>
											<div class="tab-content px-1 pt-1">
												<!-- <ProfilePatient/> -->
												<div class="tab-pane" id="linkIcon13" role="tabpanel" aria-labelledby="linkIcon13-tab1"
													aria-expanded="false">
													<div class="row">
														<div class="col-lg-12 col-md-12">
															<div class="card" style="height: 321.7px;">

																<div class="card card-content collapse show">

																	<div class="card-body">
																		<h4 class="card-title">Informations personnelles et familliales</h4>
																		<div class="media-body">

																			<h5 class="media-heading">
																				Email :
																				<span class="badge badge-info float-right">joedow@gmail.com</span>
																			</h5>
																			<hr>

																			<h5 class="media-heading">
																				Lieu et date de naissance :
																				<span class="badge badge-info float-right">20-03-1986 à cotonou</span>
																			</h5>
																			<hr>
																			<h5 class="media-heading">
																				Nationalité
																				<span class="badge badge-info float-right">Béninoise</span>
																			</h5>
																			<hr>
																			<h5 class="media-heading">
																				Profession
																				<span
																					class="badge badge-info float-right">{{ patients[0].infoGeneral.profession }}</span>
																			</h5>
																			<hr>

																		</div>
																		<div class="media-body">
																			<h5 class="media-heading">
																				Situation matrimoniale:
																				<span class="float-right content-header-title">Marié</span>
																			</h5>
																			<hr>
																			<h5 class="media-heading">
																				Nom et prénom du conjoint:
																				<span class="float-right content-header-title">Cookie candy</span>
																			</h5>
																			<hr>
																			<h5 class="media-heading">
																				Nombre d'enfants
																				<span class="badge badge-info float-right">03</span>
																			</h5>
																		</div>
																	</div>


																</div>

															</div>

														</div>

													</div>
												</div>
												<!-- Menu habituel -->
												<div class="tab-pane" id="linkIconOpt11" role="tabpanel" aria-labelledby="linkIconOpt11-tab1"
													aria-expanded="false">
													<div class="row">
														<div class="col-12">
															<div class="card">
																<div class="card-body">
																	<form class="form">
																		<div class="form-body">

																		</div>
																	</form>



																	<form class="form">


																		<div class="form-body">


																			<div class="row">
																				<div class="col-lg-8 col-md-8 offset-md-2 offset-lg-2 ">
																					<div class="form-group">

																						<button type="button" class="btn btn-outline-success block btn-lg"
																							data-toggle="modal" data-target="#xlarge">
																							Menu habituel
																						</button>

																						<!-- Modal -->
																						<div class="modal fade text-left" id="xlarge" tabindex="-1" role="dialog"
																							aria-labelledby="myModalLabel16" aria-hidden="true">
																							<div class="modal-dialog modal-xl" role="document">
																								<div class="modal-content">
																									<div class="modal-header">
																										<h4 class="modal-title" id="myModalLabel16">Formulaire du menu
																											habituel</h4>
																										<button type="button" class="close" data-dismiss="modal"
																											aria-label="Close">
																											<span aria-hidden="true">&times;</span>
																										</button>
																									</div>
																									<div class="modal-body">
																										<form >
																											<div v-for="(data,index) in menuHabituel ">
																												<div class="row">
																													<div class="col-lg-4">
																														<label for="type_ratio">Type ratio</label>
																														<select name="" v-model="data.type" id="" class="form-control">
																															<option value="Petit dejeuner">Petit dejeuner</option>
																															<option value="Dejeuner">Dejeuner</option>
																															<option value="Collation">Collation</option>
																															<option value="Souper">Souper</option>
																															<option value="Diner">Diner</option>
																														</select>
																													</div>
																													<div class="col-lg-4">
																														<label for="Aliment">Aliment</label>
																														<input v-model="data.aliment" type="text" class="form-control" placeholder="Aliment">
																													</div>
																													<div class="col-lg-4">
																														<label for="lieu">Lieu</label>
																														<input v-model="data.lieu" type="text" class="form-control">
																													</div>
																												</div>

																												<div class="row">
																													
																													<div class="col-lg-4">
																														<label for="heure">L'heure</label>
																														<input v-model="data.heure" type="time" class="form-control">
																													</div>
																													<div class="col-lg-4">
																													<label for="vol_poids">Vol./poids</label>
																													<input type="text" v-model="data.poids_vol" class="form-control">
																													</div>

																													<div class="col-lg-4 ">
																														<label for="Description">Description</label>
																														<textarea v-model="data.description" name="description" id="" class="form-control"
																															rows="1"></textarea>
																													</div>
																												</div>

																												<div class="d-flex justify-content-end my-2">
																													<button type="button" class="btn btn-danger" @click="deleteMenu(index)" >x</button>
																												</div>

																												<hr>
																												
																												
																											</div>
																											<div>
																												<button type="button" @click="addMenu" class="btn btn-primary">+ Ajouter nouveau</button>
																											</div>
																										</form>
																									</div>
																									<div class="modal-footer">
																										<button type="button" class="btn grey btn-outline-secondary"
																											data-dismiss="modal">Fermer</button>
																										<button @click="saveMenu" type="button" data-dismiss="modal"
																											class="btn btn-outline-primary">Enregister</button>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>

																			<div class="row">
																				<table class="table table-bordered table-responsive-lg">
																					<thead>
																						<tr>
																							<th scope="col">Type de ratio</th>
																							<th scope="col">Aliments</th>
																							<th scope="col">Lieu</th>
																							<th scope="col">Heure</th>
																							<th scope="col">Vol./Poids</th>
																							<th scope="col">Description</th>
																						

																						</tr>
																					</thead>
																					<tbody>
																						<tr v-for="(data,index) in menus" :key="index">
																							<th scope="row">{{data.type}}</th>
																							<td> {{ data.aliment }} </td>
																							<td> {{ data.lieu }} </td>
																							<td> {{data.heure}} </td>
																							<td>  {{ data.poids_vol }} </td>
																							<td>
																								{{data.description}}
																							</td>

																						</tr>
																						
																					</tbody>
																				</table>
																			</div>
																		</div>


																	</form>

																</div>
															</div>
														</div>
													</div>
												</div>
												<!-- Rappel des 24H -->
												<div class="tab-pane" id="linkIcon12" role="tabpanel" aria-labelledby="linkIcon12-tab1"
													aria-expanded="false">
													<div class="row justify-content-md-center">
														<div class="col-md-12">
															<div class="card">
																<div class="card-header">
																	<h4 class="card-title" id="from-actions-top-bottom-center text-uppercase">
																		<strong>Caractéristiques nutritionnelles</strong>
																	</h4>
																</div>

																<div class="row">
																	<div class="col-lg-8 col-md-8 offset-md-2 offset-lg-2 ">
																		<button type="button" class="btn btn-outline-primary block btn-lg" data-toggle="modal"
																			data-target="#large">
																			Composantes nutritionnelles
																		</button>
																		<div class="col-lg-4 col-md-6 col-sm-12">
																			<div class="form-group">

																				<!-- Modal -->
																				<div class="modal fade text-left" id="large" tabindex="-1" role="dialog"
																					aria-labelledby="myModalLabel17" aria-hidden="true">
																					<div class="modal-dialog modal-lg" role="document">
																						<div class="modal-content">
																							<div class="modal-header">
																								<h4 class="modal-title" id="myModalLabel17">Formulaire composantes
																									nutritionnelles</h4>
																								<button type="button" class="close" data-dismiss="modal"
																									aria-label="Close">
																									<span aria-hidden="true">&times;</span>
																								</button>
																							</div>
																							<div class="modal-body">

																								<div v-for="(data,index) in composanteNutritionnelles " :key="index" class="row my-1">

																									<div class="col-lg-4">
																										<label for="Composante">Composantes</label>
																										<input v-model="data.composantes" type="text" class="form-control">
																									</div>
																									<div class="col-lg-4">
																										<label for="resultat">Résultat</label>
																										<input v-model="data.resultats" type="resultat" class="form-control">
																									</div>


																									<div class="col-lg-3 ">
																										<label for="Observation">Observation</label>
																										<textarea v-model="data.observations" name="Observation" id="" class="form-control"
																											rows="1"></textarea>
																									</div>
																									<div class=" col-lg-1">
																											<button type="button" class="btn btn-danger" @click="deleteComposante(index)" >x</button>
																									</div>
																								</div>

																								<div class="my-2">
																									<button @click="addComponent" class="btn btn-primary">+ Ajouter nouveau</button>
																								</div>


																							</div>
																							<div class="modal-footer">
																								<button type="button" class="btn grey btn-outline-secondary"
																									data-dismiss="modal">Annuler</button>
																								<button data-dismiss="modal"  @click="saveComponent" type="button" class="btn btn-outline-primary">Enregistrer</button>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>

																	</div>
																</div>

																<div class="table-responsive">
																	<table class="table">
																		<thead class="thead-dark">
																			<tr>
																				<th class="text-left">#</th>
																				<th class="text-left">Composantes </th>
																				<th class="text-left">Resultats</th>
																				<th class="text-left">Observation </th>


																			</tr>
																		</thead>
																		<tbody>
																			<tr v-for="(data,index) in composantes" :key="index">
																				<th scope="row"> {{ index }} </th>
																				<td> {{ data.composantes }} </td>
																				<td> {{ data.resultats }} </td>
																				<td> {{ data.observations }} </td>

																			</tr>
																			

																		</tbody>
																	</table>
																</div>

															</div>

														</div>
													</div>
												</div>
												<!-- FICHE STRESSEUR -->
												<div role="tabpanel" class="tab-pane active" id="activeIcon12" aria-labelledby="activeIcon12-tab1"
													aria-expanded="true">
													<div class="d-flex justify-content-end mb-4">
														<button data-toggle="modal" data-target="#resultat"
															class="btn btn-primary d-flex justify-content-between align-items-center ">
															<span class="px-2">Voir le resultat</span>
															<span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
																	height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
																	<circle cx="256" cy="256" r="64"></circle>
																	<path
																		d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z">
																	</path>
																</svg></span>
														</button>
													</div>
													<h2 class="card-title text-center">
														<strong class="text-danger">Evaluation des éléments stresseurs</strong>
													</h2>

													<div class="table-responsive">
														<pre>

																											</pre>
														<table class="table table-bordered table-striped">
															<thead>
																<tr>
																	<th># </th>
																	<th>Pas du tout</th>
																	<th>Faiblement </th>
																	<th>Un peu</th>
																	<th>Assez</th>
																	<th>Beaucoup</th>
																	<th>Extremement</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<th scope="row">Cote</th>
																	<th scope="row">1</th>
																	<th scope="row">2</th>
																	<th scope="row">3</th>
																	<th scope="row">4</th>
																	<th scope="row">5</th>
																	<th scope="row">6</th>

																</tr>

																<tr v-for="(data, index) in elementStresseurs" :key="index">
																	<th scope="row" class="whiteSpace"> {{ data.name }} </th>
																	<td>
																		<input type="radio" :name="`stresseurs ${index}`" id="pasDuTout"
																			v-model="data.pasDuTout" @change="changeCheck(data, 'pasDuTout')"
																			:value="data.pasDuTout">
																	</td>
																	<td>
																		<input type="radio" :name="`stresseurs ${index}`" id="faiblement"
																			v-model="data.faiblement" @change="changeCheck(data, 'faiblement')"
																			:value="data.faiblement">
																	</td>
																	<td>
																		<input type="radio" :name="`stresseurs ${index}`" id="unPeu" v-model="data.unPeu"
																			@change="changeCheck(data, 'unPeu')" :value="data.unPeu">
																	</td>
																	<td>
																		<input type="radio" :name="`stresseurs ${index}`" v-model="data.assez" id="assez"
																			@change="changeCheck(data, 'assez')" :value="data.assez">
																	</td>
																	<td>
																		<input type="radio" :name="`stresseurs ${index}`" v-model="data.beaucoup"
																			id="beaucoup" @change="changeCheck(data, 'beaucoup')" :value="data.beaucoup">
																	</td>
																	<td>
																		<input type="radio" :name="`stresseurs ${index}`" id="extremement"
																			v-model="data.extremement" @change="changeCheck(data, 'extremement')"
																			:value="data.extremement">
																	</td>
																</tr>



																<tr>
																	<th scope="row" class="text-right ">
																		Total géneral
																	</th>
																	<td colspan="6" class="text-center"> <strong>{{ totalStresseur }}</strong> </td>

																</tr>

																<tr>
																	<th scope="row" class="text-right">
																		Interpretation
																	</th>
																	<td colspan="6" class="text-center">
																		<strong v-if="totalStresseur >= 8 && totalStresseur < 14" key="entre8_14">Niveau de
																			stresseurs très bas</strong>
																		<strong v-if="totalStresseur >= 14 && totalStresseur < 18" key="entre14_18">Niveau de
																			stresseurs bas</strong>
																		<strong v-if="totalStresseur >= 18 && totalStresseur < 28" key="entre18_28">Niveau de
																			stresseurs élevé</strong>
																		<strong v-if="totalStresseur >= 28" key="plus28">Niveau de stresseurs très
																			élevé</strong>

																	</td>
																</tr>

															</tbody>
														</table>
													</div>


													<h2 class="card-title mt-5 text-center">
														<strong class="text-danger">Evaluation du niveau de stress</strong>
													</h2>

													<div class="table-responsive">
														<table class="table table-bordered table-striped">
															<thead>
																<tr>
																	<th># </th>
																	<th>Pas du tout</th>
																	<th>Faiblement </th>
																	<th>Un peu</th>
																	<th>Assez</th>
																	<th>Beaucoup</th>
																	<th>Extremement</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<th scope="row">Cote</th>
																	<th scope="row">1</th>
																	<th scope="row">2</th>
																	<th scope="row">3</th>
																	<th scope="row">4</th>
																	<th scope="row">5</th>
																	<th scope="row">6</th>

																</tr>

																<tr v-for="(data, index) in niveauDeStress" :key="index">
																	<th class="whiteSpace" scope="row"> {{ data.name }}
																	</th>
																	<td>
																		<input type="radio" :name="`stress ${index}`" id="pasDuTout" v-model="data.pasDuTout"
																			@change="changeCheck(data, 'pasDuTout')" :value="data.pasDuTout">
																	</td>
																	<td>
																		<input type="radio" :name="`stress ${index}`" id="faiblement"
																			v-model="data.faiblement" @change="changeCheck(data, 'faiblement')"
																			:value="data.faiblement">
																	</td>
																	<td>
																		<input type="radio" :name="`stress ${index}`" id="unPeu" v-model="data.unPeu"
																			@change="changeCheck(data, 'unPeu')" :value="data.unPeu">
																	</td>
																	<td>
																		<input type="radio" :name="`stress ${index}`" v-model="data.assez" id="assez"
																			@change="changeCheck(data, 'assez')" :value="data.assez">
																	</td>
																	<td>
																		<input type="radio" :name="`stress ${index}`" v-model="data.beaucoup" id="beaucoup"
																			@change="changeCheck(data, 'beaucoup')" :value="data.beaucoup">
																	</td>
																	<td>
																		<input type="radio" :name="`stress ${index}`" id="extremement"
																			v-model="data.extremement" @change="changeCheck(data, 'extremement')"
																			:value="data.extremement">
																	</td>

																</tr>
																<tr>
																	<th scope="row" class="text-right ">
																		Total géneral
																	</th>
																	<td colspan="6" class="text-center"> <strong> {{ totalStress }} </strong> </td>

																</tr>

																<tr>
																	<th scope="row" class="text-right">
																		Interpretation
																	</th>
																	<td colspan="6" class="text-center">
																		<strong v-if="totalStress >= 11 && totalStress < 19" key="entre11_19">Stress très
																			bas</strong>
																		<strong v-if="totalStress >= 19 && totalStress < 30" key="entre19_30">Stress
																			bas</strong>
																		<strong v-if="totalStress >= 30 && totalStress < 45" key="entre30_45">Stress
																			élevé</strong>
																		<strong v-if="totalStress >= 45" key="plus45">Stress très élevé</strong>
																	</td>
																</tr>

															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

					</section>
					<!-- Tabs with Icons end -->

				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { Patients } from "../../../api/patient"
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()
const patients = ref([])
const getData = JSON.parse(localStorage.getItem('patients'))
if (getData != null || getData != undefined) {
	const datas = getData
	patients.value = [...Patients, ...datas]
} else {
	patients.value = Patients
}

patients.value = patients.value.filter(patient => patient.id == route.params.id)
const composanteNutritionnelles = ref([
	{
		composantes:'',
		resultats:'',
		observations:'',
	}
])

const composantes = ref([
	
])

const menus = ref([
	
])

const menuHabituel = ref([
{
		type:'Dejeuner',
		aliment:'',
		lieu:'',
		heure:'',
		poids_vol:'',
		description:'',

	}
]
	
)

const elementStresseurs = ref([
	{ name: "Ai-je subi, tout au cours de ma vie, des situations  traumatiques (Décès, perte d’emploi ; déception amoureuse ; etc...)", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Suis-je entrain de vivre une situation traumatique ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Est-ce que je subis une surcharge de travail  fréquente ou permanente ? Ou/et suis souvent pris dans l’urgence  ou /et existe-t-il une ambiance très compétitive dans mon emploi ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Mon travail ne me convient pas, il ne correspond pas  à ce que je souhaiterais faire   ou est source d’insatisfaction ; me donne l’impression de perdre mon temps.  Au maximum me déprime.", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je des soucis familiaux importants ?  (Couple, enfants, parents etc.) ? ", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "suis-je endetté, ai-je un revenu trop faible   par rapport à mon mode de vie, est ce que cela me cause du souci ? ", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je une maladie ? : Sa gravité  ou l’importance de la gêne pour vous ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
])

const niveauDeStress = ref([
	{ name: "Suis-je émotif, sensible aux remarques, aux critiques d’autrui ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Suis-je colérique ou rapidement irritable ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Suis-je perfectionniste, ai-je tendance à ne pas être satisfait de ce que j’ai fait ou de ce que les autres ont fait ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je le cœur qui bat vite, de la transpiration des tremblements, des secousses musculaires, par exemple au niveau du visage, des paupières ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Est-ce que je me sens tendu au niveau des muscles, ai-je une sensation de crispation au niveau des mâchoires du visage, du corps en général ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je des problèmes de sommeil ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Suis-je anxieux, est ce que je me fais souvent du souci ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je des manifestations corporelles comme un trouble digestif, des douleurs, des maux de tête, des allergies, de l’eczéma", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Est-ce que je suis fatigué(e)", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je des problèmes de santé plus importants comme un ulcère d’estomac, une maladie de peau, un problème de cholestérol, de l’hypertension artérielle, un trouble cardio vasculaire ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Est-ce que je fume ou bois de l’alcool pour me stimuler ou me calmer ? est-ce que j’utilise d’autres produits ou des médicaments dans ce but ?", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
	{ name: "Ai-je des manifestations corporelles comme un trouble digestif, des douleurs, des maux de tête, des allergies, de l’eczéma", pasDuTout: false, faiblement: false, unPeu: false, assez: false, beaucoup: false, extremement: true },
])

function changeCheck(data, element) {
	if (element === 'pasDuTout') {
		data.pasDuTout = true
		data.faiblement = false

		data.unPeu = false
		data.assez = false
		data.beaucoup = false
		data.extremement = false
	}
	else if (element === 'faiblement') {
		data.pasDuTout = false
		data.faiblement = true
		data.unPeu = false
		data.assez = false
		data.beaucoup = false
		data.extremement = false
	}
	else if (element === 'unPeu') {
		data.pasDuTout = false
		data.faiblement = false
		data.unPeu = true
		data.assez = false
		data.beaucoup = false
		data.extremement = false
	}
	else if (element === 'assez') {
		data.pasDuTout = false
		data.faiblement = false
		data.unPeu = false
		data.assez = true
		data.beaucoup = false
		data.extremement = false
	}
	else if (element === 'beaucoup') {
		data.pasDuTout = false
		data.faiblement = false
		data.unPeu = false
		data.assez = false
		data.beaucoup = true
		data.extremement = false
	}
	else if (element === 'extremement') {
		data.pasDuTout = false
		data.faiblement = false
		data.unPeu = false
		data.assez = false
		data.beaucoup = false
		data.extremement = true
	}
}

const totalStresseur = computed(() => {
	let totalPasDuTout = elementStresseurs.value.filter(e => e.pasDuTout === true)
	totalPasDuTout = totalPasDuTout.length
	let totalBeaucoup = elementStresseurs.value.filter(e => e.beaucoup === true)
	totalBeaucoup = (totalBeaucoup.length) * 5
	let totalExtremement = elementStresseurs.value.filter(e => e.extremement === true)
	totalExtremement = (totalExtremement.length) * 6
	let totalUnPeu = elementStresseurs.value.filter(e => e.unPeu === true)
	totalUnPeu = (totalUnPeu.length) * 3
	let totalAssez = elementStresseurs.value.filter(e => e.assez === true)
	totalAssez = (totalAssez.length) * 4
	let totalFaiblement = elementStresseurs.value.filter(e => e.faiblement === true)
	totalFaiblement = (totalFaiblement.length) * 2

	return totalPasDuTout + totalBeaucoup + totalExtremement + totalUnPeu + totalAssez + totalFaiblement
})

const totalStress = computed(() => {
	let totalPasDuTout = niveauDeStress.value.filter(e => e.pasDuTout === true)
	totalPasDuTout = totalPasDuTout.length
	let totalBeaucoup = niveauDeStress.value.filter(e => e.beaucoup === true)
	totalBeaucoup = (totalBeaucoup.length) * 5
	let totalExtremement = niveauDeStress.value.filter(e => e.extremement === true)
	totalExtremement = (totalExtremement.length) * 6
	let totalUnPeu = niveauDeStress.value.filter(e => e.unPeu === true)
	totalUnPeu = (totalUnPeu.length) * 3
	let totalAssez = niveauDeStress.value.filter(e => e.assez === true)
	totalAssez = (totalAssez.length) * 4
	let totalFaiblement = niveauDeStress.value.filter(e => e.faiblement === true)
	totalFaiblement = (totalFaiblement.length) * 2

	return totalPasDuTout + totalBeaucoup + totalExtremement + totalUnPeu + totalAssez + totalFaiblement
})

function addComponent() {
	composanteNutritionnelles.value.push({
		composantes:'',
		resultats:'',
		observations:''
	})
}

function addMenu() {
	menuHabituel.value.push({
		type:'Dejeuner',
		aliment:'',
		lieu:'',
		heure:'',
		poids_vol:'',
		description:'',
	})
}

function saveComponent() {
	composantes.value = {...composanteNutritionnelles.value}
	composanteNutritionnelles.value = [
		{
			composantes:'',
			resultats:'',
			observations:''
		}
	]
}

function saveMenu() {
	menus.value = {...menuHabituel.value}
	menuHabituel.value = [
		{
			type:'Dejeuner',
			aliment:'',
			lieu:'',
			heure:'',
			poids_vol:'',
			description:'',
		}
	]
}

function deleteMenu(index) {
	menuHabituel.value.splice(index, 1);
}

function deleteComposante(index) {
	composanteNutritionnelles.value.splice(index, 1);
}

</script>

<style scoped>
.whiteSpace {
	white-space: normal;
}
</style>