<template>
  <div>
      <!-- Modal -->
      <div class="modal animated bounce text-left" id="bounce" tabindex="-1" role="dialog" aria-labelledby="myModalLabel36" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title text-danger" id="myModalLabel36">
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
                                      <button type="button" @click.prevent="deletePatient" data-dismiss="modal" class="btn btn-outline-danger">Supprimer</button>
                                  </div>
                              </div>
                          </div>
      </div>

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
                    <div class="mt-2 d-flex justify-content-end ">
                      <div> 
                        <Search @search="getSearch" />
                      </div>
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
                          <tr v-for="(patient,index) in resultQuery">
                            <td>{{ index }}</td>
                            <td>{{ patient.firstname }}  </td>
                            <td>{{ patient.consultation_type }}</td>
                            <td>{{ patient.age}} ans  </td>
                            <td>{{ patient.phone }}</td>
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
                                class="btn btn-primary mx-1 round btn-sm waves-effect waves-light"
                              >
                                <span>
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </span>
                                
                              </router-link>
                              <button 
                                data-toggle="modal" data-target="#bounce"
                                title="supprimer patient"
                                @click="supprimer(index,data)"
                                class="btn btn-danger  round btn-sm waves-effect waves-light"
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
	import {ref,reactive,onMounted,computed} from 'vue'
  import { createToast } from "mosha-vue-toastify";
  import Search from "@/components/Search"
  import PatientService from "@/services/modules/patient.service.js";
  // import the styling for the toast
  import "mosha-vue-toastify/dist/style.css";

  const search = ref('')
  const saveUpdate = reactive({})
  const deleteData = reactive({})
  const patients = ref([])

	const resultQuery = computed(()=> {
    if(search.value){
      return patients.value.filter((item)=>{
        return search.value.toLowerCase().split(' ').every(v => item.firstname.toLowerCase().includes(v)) ||
        search.value.toLowerCase().split(' ').every(v => item.age.toLowerCase().includes(v)) ||
        search.value.toLowerCase().split(' ').every(v => item.consultation_type.toLowerCase().includes(v)) ||
        search.value.toLowerCase().split(' ').every(v => item.created_at.toLowerCase().includes(v)) 
      })

      }else{
        return patients.value;
      }
  }) 
  //getData
  const getSearch = function(data) {
    search.value = data
  }
  const getData = () => {
  PatientService.get().then((data) => {
    const datas = data.data.data
    patients.value = datas.data 
  }).catch((e) => {
      console.log(e)
    })
  }

  onMounted(() => {
    getData()
  })
  
  const supprimer = function(index,data) {
    deleteData.id = data.id
    deleteData.nom = data.firstname + ' ' + data.lastname
    deleteData.index = index
  }
  const deletePatient = (index) => {
    patients.value.splice(users.value.indexOf(deleteData.index), 1);
      PatientService.destroy(deleteData.id).then((data) => {
        toast('Suppression effectué avec succèss', 'success')
        getData()
      }).catch((error) => {
        
        if (error.response) {
          // Requête effectuée mais le serveur a répondu par une erreur.
          const erreurs = error.response.data.message
          toast(erreurs, 'danger')
        } else if (error.request) {
        // Demande effectuée mais aucune réponse n'est reçue du serveur.
        //console.log(error.request);
        } else {
          // Une erreur s'est produite lors de la configuration de la demande
        }
      })
  }
  


  const toast = (message,type) => {
  createToast(message,{type:type})
}
	
</script>

<style></style>
