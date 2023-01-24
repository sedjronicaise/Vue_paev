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
                              title="consulter dossier medical"
                                :to="{name:'dossierMedical',params:{id:patient.id}}"
                                class="btn btn-primary  round btn-sm waves-effect waves-light"
                              >
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
                              </router-link>
                              <router-link
                                title="modifer patient"
                                :to="{name:'patientEdit',params:{id:patient.id}}"
                                class="btn btn-primary  round btn-sm waves-effect waves-light"
                              >
                                <span>
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </span>
                                
                              </router-link>
                              <button @click="deletePatient(index)"
                                title="supprimer patient"
                                :to="{name:'dossierMedical',params:{id:patient.id}}"
                                class="btn btn-primary  round btn-sm waves-effect waves-light"
                              >
                                <span>
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                </span>
                               
                              </button>
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
  const deletePatient = (index) => {
    patients.value.splice(index, 1);
  }
	
</script>

<style></style>
