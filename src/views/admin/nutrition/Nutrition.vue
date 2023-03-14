<template>
	<div>
		<div class="app-content content">
			<div class="content-overlay"></div>
			<div class="content-wrapper">
				<div class="content-body">
					<!-- List Of All Patients -->
					<section id="patients-list">
						<div class="row">
							<div class="col-12">
								<div class="card">
									<div class="card-header">
										<h2 class="badge border-info info badge-border">PATIENTS EN NUTRITION</h2>
										<!-- <div class="heading-elements">
                          <router-link to="/admin/patient/add" class="btn btn-danger round btn-sm">
                                                    <i class="la la-plus font-small-2"></i>Nouveau patient
                                                </router-link>
                      </div> -->
									</div>
									<div class="mt-2 d-flex justify-content-end ">
                      <div> 
                        <Search @search="getSearch" />
                      </div>
                    </div>
									<div class="card-body collapse show">

										<div class="table-responsive">
											<table class="table table-striped table-bordered patients-list">
												<thead>
													<tr>
														<th>#</th>
														<th>Nom & prénoms</th>
														<th>Type de Consultation</th>
														<th>Age</th>
														<th>Contact</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="(patient, index) in resultQuery">
														<td>{{ index }}</td>
														<td>{{ patient.firstname }} </td>
														<td>{{ patient.consultation_type }}</td>
														<td>{{ patient.age }} ans </td>
														<td>{{ patient.phone }}</td>
														<td>

															<router-link :to="{ name: 'dossierMedicalNutrition', params: { id: patient.id } }"
																class="btn btn-primary round btn-sm waves-effect waves-light">
																<i class="la la-plus font-small-2"></i>DOSSIER NUTRITIONNEL
															</router-link>
														</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<th>#</th>
														<th>Nom & prénoms</th>
														<th>Type de Consultation</th>
														<th>Age</th>
														<th>Contact</th>
														<th>Actions</th>
													</tr>
												</tfoot>
											</table>
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
import { ref, reactive, onMounted, computed } from 'vue'
import { createToast } from "mosha-vue-toastify";
import Search from "@/components/Search"
import PatientService from "@/services/modules/patient.service.js";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

const search = ref('')
const patients = ref([])

const resultQuery = computed(() => {
	if (search.value) {
		return patients.value.filter((item) => {
			return search.value.toLowerCase().split(' ').every(v => item.firstname.toLowerCase().includes(v)) ||
				search.value.toLowerCase().split(' ').every(v => item.age.toLowerCase().includes(v)) ||
				search.value.toLowerCase().split(' ').every(v => item.consultation_type.toLowerCase().includes(v)) ||
				search.value.toLowerCase().split(' ').every(v => item.created_at.toLowerCase().includes(v))
		})

	} else {
		return patients.value;
	}
})
//getData
const getSearch = function (data) {
	search.value = data
}
const getData = () => {
	PatientService.get().then((data) => {
		const datas = data.data.data
		const nutritions = datas.data
		nutritions.forEach((item) => {
			if(item.consultation_type === "nutrition") {
				patients.value.push(item)
			}
		})
		
	}).catch((e) => {
		console.log(e)
	})
}

onMounted(() => {
	getData()
})





const toast = (message, type) => {
	createToast(message, { type: type })
}

</script>
<style></style>