<template>
    <div>
        <div class="app-content content">
            <div class="content-header row">
            </div>
            <div class="content-overlay"></div>
            <div class="content-wrapper">
            <div class="content-body">
                <!-- Hospital Info cards -->
                <div class="row">
                    
                    <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                        <div class="card pull-up">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="align-self-center">
                                            <i class="la la-stethoscope font-large-2 warning"></i>
                                        </div>
                                        <div class="media-body text-right">
                                            <h5 class="text-muted text-bold-500">Consultation en attente</h5>
                                            <h3 class="text-bold-600">10</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                        <div class="card pull-up">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="align-self-center">
                                            <i class="la la-calendar-check-o font-large-2 info"></i>
                                        </div>
                                        <div class="media-body text-right">
                                            <h5 class="text-muted text-bold-500">Consultation d'aujourd'hui</h5>
                                            <h3 class="text-bold-600">30</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 col-12">
                        <div class="card pull-up">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="align-self-center">
                                            <i class="la la-bed font-large-2 danger"></i>
                                        </div>
                                        <div class="media-body text-right">
                                            <h5 class="text-muted text-bold-500">Consultation du mois de </h5>
                                            <h3 class="text-bold-600">170</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Hospital Info cards Ends -->

                <!-- Appointment Bar Line Chart -->
                <div class="row">
                    <div class="col-12">
                    
                    </div>
                </div>
                <!-- Appointment Bar Line Chart Ends -->

                <!-- Appointment Table -->
                <div class="row match-height">
                    <div class="col-12 col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Salle d'attente</h4>
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
                                <div class="table-responsive">
                                    <table id="recent-orders" class="table table-hover table-xl mb-0">
                                        <tbody>

                                            <tr>
                                                <td class="text-truncate p-1 border-top-0">
                                                    Id
                                                </td>
                                                <td class="text-truncate pl-0 border-top-0">
                                                    <div class="name"> <h6>Patients</h6> </div>
                                                    <div class="designation text-light font-small-2"></div>
                                                </td>
                                                <td class="text-right border-top-0">
                                                    <h6>Type de Consultation</h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-truncate p-1 border-top-0">
                                                    01
                                                </td>
                                                <td class="text-truncate pl-0 border-top-0">
                                                    <div class="name">Jane Andre</div>
                                                    <div class="designation text-light font-small-2"></div>
                                                </td>
                                                <td class="text-right border-top-0">
                                                    <span class="">Gynecologie</span>
                                                </td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="text-truncate p-1 border-bottom-0 ">
                                                02
                                                </td>
                                                <td class="text-truncate pl-0 border-top-0 border-bottom-0 ">
                                                    <div class="name">Colin Welch</div>
                                                    <!-- {{-- <div class="designation text-light font-small-2">Dentist</div> --}} -->
                                                </td>
                                                <td class="text-right border-bottom-0 ">
                                                    <span href="#" class="">Medecine génerale</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="recent-appointments" class="col-12 col-md-8">
                        <div class="card" style="height: 318.25px;">
                        
                            <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Traitement en cours</h4>
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
                                <div class="card-content collapse show">
                                    
                                    <div class="table-responsive">
                                        <table class="table table-bordered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Patients</th>
                                                    <th>Diagnostic</th>
                                                    <th>Soins programmés</th>
                                                    <th>Timings</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-truncate p-1">
                                                        ADOKOU BERNARD
                                                    </td>
                                                    <td>Ulcère</td>
                                                    <td>Perfusion de 1 sérum de glucose</td>
                                                    <td>22:02</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-truncate p-1">
                                                        ADOKOU BERNARD
                                                    </td>
                                                    <td>éruptions cutanées</td>
                                                    <td>Perfusion de 1 sérum de glucose</td>
                                                    <td>20:10</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-truncate p-1">
                                                        ADOKOU BERNARD
                                                    </td>
                                                    <td>douleurs musculaires</td>
                                                    <td>Perfusion de 1 sérum de glucose</td>
                                                    <td>13:30</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div id="statistique" class="col-12 col-md-12">
                        <div class="card" style="height: 318.25px;">
                            
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Statistique de santé</h4>
                                    <div class="heading-elements">
                                        <ul class="list-inline mb-0">
                                            <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                            <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                            <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                            <li><a data-action="close"><i class="ft-x"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
        
                                <form class="form">
                                    <div class="form-body">
            
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="timesheetinput3">Septembre</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="timesheetinput3">Selectionnez une date</label>
                                                    <div class="position-relative has-icon-left">
                                                        <input type="date" id="timesheetinput3" class="form-control" name="date">
                                                        <div class="form-control-position">
                                                            <i class="ft-message-square"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </form>
        
                                <div class="card-content collapse show">
                                    <div class="table-responsive">
                                        <table class="table table-bordered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Affection/Infection</th>
                                                
                                                    <th>Nombre de cas</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Paludisme</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>Anémie microcytaire</td>
                                                    <td>5</td>
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
                <!-- Appointment Table Ends -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>

<style>

</style>