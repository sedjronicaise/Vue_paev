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
                                    <div class="card-body collapse show">
                                        
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered patients-list">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom & prénoms</th>
                                                        
                                                        <th>Age</th>
                                                        <th>Profession</th>
                                                        <th>Contact</th>
                                                    
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for ="user in users" >
                                                        <td>{{user.id}}</td>
                                                        <td>{{user.nom  }} {{user.prenom}}</td>
                                                        <td>{{user.profession}}</td>
                                                        <td>{{user.age}}</td>
                                                        <td>{{user.contact}}</td>                                                                                                                
                                                        <td>
                                                            <router-link to="/admin/nutrition/dossier" class="btn btn-primary round btn-sm waves-effect waves-light">
                                                                  <i class="la la-plus font-small-2"></i>DOSSIER NUTRITIONNEL
                                                            </router-link>
                                                            
                                                        </td>
                                                    </tr>     
                                              
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom & prénoms</th>
                                                        <th>Age</th>
                                                        <th>Profession</th>
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
    name: 'Nutrition',

    data(){
       return{
        users: [
                    { id: 1, nom: 'Martin', prenom: 'Eric', profession: "Agent de l'état",  age: 30, contact: "960404040" },
                    { id: 2, nom: 'ABOSSOU', prenom: 'Jean ', profession: "Agent de l'état",  age: 30, contact: "960404040" },
                    { id: 3, nom: 'Akomon', prenom: 'Jennie', profession: "Commerçante",  age: 30, contact: "960404040" },
                    { id: 4, nom: 'Dansou', prenom: 'Firmin', profession: "Agent de l'état",  age: 30, contact: "960000000" },
                ]
       }
    }
}
</script>

<style>

</style>