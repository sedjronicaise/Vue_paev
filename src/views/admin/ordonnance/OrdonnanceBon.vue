<template>
	<div class="app-content content">
		<div class="content-overlay"></div>
		<div class="content-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-lg-10 text-center">
						<div class="row mt-3 align-self-end">
							<div class="col-lg-6">
								<router-link to="/admin/ordonnance/index">
									<div class="card pull-up" style="height: 300px; width: 400px;">

										<div class="card">
											<div class="card-header">
												<h4 class="text-center"><i class="la la-calendar-check-o font-large-2 info"
														style="font-size:12rem;"></i> ORDONNANCE</h4>
											</div>
											<div class="card-content">
												<div class="card-body text-center">
													<p>Gestion des ordonnances.</p>
													<div class="badge badge-secondary">{{ordonances.length}}</div>
												</div>
											</div>
										</div>
									</div>
								</router-link>
							</div>
							<div class="col-lg-6 ">
								<router-link to="/admin/bon/index">
									<div class="card pull-up" style="height: 300px; width: 400px;">
										<div class="card">
											<div class="card-header">
												<h4 class="text-center">
													<i class="la la-edit font-large-2 info" style="font-size:12rem;"></i> BONS D'EXAMENS
												</h4>
											</div>
											<div class="card-content">
												<div class="card-body text-center">
													<p>Gestion des bons d'examens.</p>
													<div class="badge badge-secondary">{{bonExamens.length}}</div>
												</div>
											</div>
										</div>
									</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed,onMounted } from "vue";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
import BonService from "@/services/modules/bon.examen.service.js";
import OrdonanceService from "@/services/modules/ordonance.service.js";
const ordonances = ref([]);
const bonExamens = ref([]);


//getData

const getBon = () => {
  BonService.get().then((data) => {
    const datas = data.data.data
    bonExamens.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }
	const getOrdonance = () => {
  OrdonanceService.get().then((data) => {
    const datas = data.data.data
    ordonances.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }
	onMounted(() => {
    getBon()
    getOrdonance()
  })

</script>

<style>

</style>