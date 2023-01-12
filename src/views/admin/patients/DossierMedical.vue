<template>
    <div>
          <div class="app-content content">
        
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2">
                    <h3 class="content-header-title">Dossier Médical : AMOUSSOU Wilfried</h3>
                   
                </div>
                <div class="content-header-right col-md-6 col-12">
                    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
                        <button class="btn btn-info round dropdown-toggle dropdown-menu-right box-shadow-2 px-2 mb-1" id="btnGroupDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ft-edit  icon-left"></i> Modifier</button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a class="dropdown-item" href="#">Profile de AMOUSSOU Wilfried </a>
                            <a class="dropdown-item" href="#">Consultation en cours</a>
                            <a class="dropdown-item" href="#">Consultations antérieures</a>
                            <a class="dropdown-item" href="#">Historique Médical</a>
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
                                                        <img class="media-object" src="/hospital/app-assets/images/portrait/small/avatar-s-19.png" alt="Generic placeholder image" height="64" width="64">
                                                    </span>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">
                                                            No Dossier :
                                                            <span class="badge badge-info float-right">10-09-2022.BJ</span>
                                                        </h5><hr>
                                                        <h5 class="media-heading">
                                                            Profession:
                                                            <span class="float-right content-header-title">Fonctonnaire de l'état</span>
                                                        </h5> <hr>
                                                        <h5 class="media-heading">
                                                            Sexe
                                                            <span class="badge badge-info float-right">Masculin</span>
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
                                                            <span class="badge badge-info float-right">Medecine Générale</span>
                                                        </h5> 
                                                        <hr>
                                                        <h5 class="media-heading ">
                                                            Télephone
                                                            <span class="badge badge-info float-right">+229 96030244</span>
                                                        </h5>
                                                        <hr>
                                                        <h5 class="media-heading">
                                                            Date Arrivée :
                                                            <span class="badge badge-info float-right">16-09-2022 à 12:30</span>
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
                        
                        <div class="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
                            <div class="card" >
                                <div class="card-header">
                                    <h4 class="card-title" id="from-actions-top-bottom-center">Fiche de consultation</h4>
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
                                                <a class="nav-link" id="linkIcon13-tab1" data-toggle="tab" href="#linkIcon13" aria-controls="linkIcon13" aria-expanded="false"><i class="ft-link"></i> 
                                                    <strong class="text-info">Profile</strong></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="linkIconOpt11-tab1" data-toggle="tab" href="#linkIconOpt11" aria-controls="linkIconOpt11"><i class="ft-external-link"></i>
                                                    <strong class="text-info"> Antécédent </strong></a>
                                            </li>

                                            

                                            <li class="nav-item">
                                                <a class="nav-link" id="linkIcon12-tab1" data-toggle="tab" href="#linkIcon12" aria-controls="linkIcon12" aria-expanded="false"><i class="ft-link"></i>
                                                    <strong class="text-info"> Consultation en cours </strong></a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link active" id="activeIcon12-tab1" data-toggle="tab" href="#activeIcon12" aria-controls="activeIcon12" aria-expanded="true"><i class="ft-heart"></i>
                                                    <strong class="text-info"> Historique de consultation </strong></a>
                                            </li>
                                            

                                        </ul>
                                        <div class="tab-content px-1 pt-1">
<!-- 
                                            @include('partials.profilepatient')

                                            @include('partials.antecedent')

                                            @include('partials.consultation')

                                            @include('partials.historiqueconsultation') -->
                                                
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

<script>
export default {
    name: 'DossierMedical'
}
</script>

<style>

</style>