<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-6 col-12 mb-2">
            <h3 class="content-header-title">Aperçu du certificat</h3>
            <div class="row breadcrumbs-top">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/admin/certificat/index">
                      Retour à la liste des certificats
                    </router-link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="content-header-right col-md-6 col-12">
            <div
              class="btn-group float-md-right"
              role="group"
              aria-label="Button group with nested"
            >
              <div class="form-group">
                <router-link
                  to=""
                  class="btn btn-info round box-shadow-2 px-2 mb-1"
                >
                  <i class="la la-paper-plane-o mr-50"></i> Imprimer
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="content-body">
          <section class="card">
            <div id="invoice-template" class="card-body p-4">
              <!-- Invoice Company Details -->
              <div id="invoice-company-details" class="row">
                <div class="col-sm-6 col-12 text-center text-sm-left">
                  <div class="media row">
                    <div class="col-12 col-sm-3 col-xl-2">
                      <img
                        src="/hospital/app-assets/images/logo/logo.png"
                        height="80"
                        width="100"
                        alt="company logo"
                        class="mb-1 mb-sm-0"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-12 text-center text-sm-right">
                  <h2>CERTIFICAT MEDICAL</h2>
                </div>
              </div>
              <!-- Invoice Company Details -->

              <!-- Invoice Customer Details -->
							<div id="invoice-customer-details" class="row pt-2">
                <div class="col-sm-6 col-12 text-center text-sm-left">
                  <ul class="px-0 list-unstyled">
                    <li class="text-bold-800">
                      Patient: <strong v-if="certificats.patient">{{certificats.patient.firstname}}</strong>
                    </li>
                    <li v-if="certificats.patient">Sexe: {{certificats.patient.sex}}</li>
                    <li v-if="certificats.patient">Age: {{certificats.patient.age}} ans</li>
                  </ul>
                </div>
                  
                <p></p>

                <div class="col-sm-6 col-12 text-center text-sm-right">
                  <p>
                    <span class="text-muted"> Délivrée ce, </span> {{ certificats.created_at }}
                  </p>
                </div>

                

              </div>
              <!-- Invoice Customer Details -->
              	<!-- Invoice Items Details -->
							<div id="invoice-items-details" class="pt-2">
								<div class="row">
									<div class="table-responsive col-12">
										<table class="table">
											<thead>
												<tr>
													
													<th>Contenu</th>
													<th>Nature</th>
												
												</tr>
											</thead>
											<tbody>
												<tr >
													<td>
														<p>{{ certificats.nature }}</p>
													</td>

													<td>
														<p>{{ certificats.contenu }}</p>
													</td>
													
													
												</tr>

											</tbody>
										</table>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-7 col-12 text-center text-sm-left"></div>
									<div class="col-sm-5 col-12">
										<div class="text-center">
											<img src="/app-assets/images/pages/signature-scan.png" alt="signature" class="height-100" />
											<p class="mb-0 mt-1">Dr</p>
											<br />
											<p class="text-muted">Médecin généraliste</p>
										</div>
									</div>
								</div>
								<div></div>
							</div>
              <!-- Invoice Footer -->

              <!-- Invoice Footer -->
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
	import { ref, reactive, computed,onMounted } from "vue";
	import { useRouter, useRoute } from "vue-router";
  import CertificateService from "@/services/modules/certificate.service.js";
	const certificats = ref([]);
	const router = useRouter();
	const route = useRoute();
	//getData
	//getData

	const getData = () => {
    CertificateService.get(route.params.id).then((data) => {
    const datas = data.data
    certificats.value = datas.data
  }).catch((e) => {
      console.log(e)
    })
  }
	
		onMounted(() => {
			getData()
		
		})

</script>

<style></style>
