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
                                        <h2 class="badge border-info info badge-border">LISTE DES PATIENTS</h2>
                                        <div class="heading-elements">
                                                <router-link to="/admin/patient/add" class="btn btn-danger round btn-sm">
                                                    <i class="la la-plus font-small-2"></i>Nouveau patient
                                                </router-link>
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
                                                    <tr v-for ="user in users" >
                                                        <td>{{user.id}}</td>
                                                        <td>{{user.nom  }} {{user.prenom}}</td>
                                                        <td>{{user.typeconsultation}}</td>
                                                        <td>{{user.age}}</td>
                                                        <td>{{user.contact}}</td>
                                                        <td>
                                                            <router-link to="/admin/patient/dossier" class="btn btn-primary round btn-sm waves-effect waves-light">
                                                                  <i class="la la-plus font-small-2"></i>Dossier Médical
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

<script>
export default {
    name: 'PatientIndex',
    data (){

        return {
                users: [
                    { id: 1, nom: 'Martin', prenom: 'Eric', typeconsultation: "Medecine generale",  age: 30, contact: "960404040" },
                    { id: 2, nom: 'ABOSSOU', prenom: 'EriJean ', typeconsultation: "Medecine generale",  age: 30, contact: "960404040" },
                    { id: 3, nom: 'Akomon', prenom: 'Jennie', typeconsultation: "Gynecologie",  age: 30, contact: "960404040" },
                    { id: 4, nom: 'Dansou', prenom: 'Firmin', typeconsultation: "Medecine generale",  age: 30, contact: "960000000" },
                    
                ]
            }
    }
}
</script>

<style>

</style>