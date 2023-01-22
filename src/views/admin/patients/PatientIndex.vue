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
                    <h2 class="badge border-info info badge-border">
                      LISTE DES PATIENTS
                    </h2>

                    <div class="heading-elements">
                      <router-link
                        to="/admin/patient/add"
                        class="btn btn-danger round btn-sm"
                      >
                        <i class="la la-plus font-small-2"></i>Nouveau patient
                      </router-link>
                    </div>
                  </div>
                  <div class="card-body collapse show">
                    <div class="table-responsive">
                      <table
                        class="table table-striped table-bordered patients-list"
                      >
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
                          <tr v-for="(patient,index) in patients">
                            <td>{{ index }}</td>
                            <td>{{ patient.infoGeneral.fullName }} </td>
                            <td>{{ patient.infoGeneral.typeConsultation }}</td>
                            <td>{{ patient.infoGeneral.dateNaissance }} ans  </td>
                            <td>{{ patient.infoGeneral.telephone }}</td>
                            <td>
                              <router-link
                                :to="{name:'dossierMedical',params:{id:patient.id}}"
                                class="btn btn-primary round btn-sm waves-effect waves-light"
                              >
                                <i class="la la-plus font-small-2"></i>Dossier
                                Médical
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
	import {ref,reactive} from 'vue'
	import {Patients} from "../../../api/patient"
	const patients = ref([])
	const getData = JSON.parse(localStorage.getItem('patients'))
	if(getData !=null || getData != undefined) {
		const datas = getData
		patients.value = [...Patients,...datas]
	}else {
		patients.value = Patients
	}
	
</script>

<style></style>
