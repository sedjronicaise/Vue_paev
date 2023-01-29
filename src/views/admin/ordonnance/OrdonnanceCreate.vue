<template>
    <div>
      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2">
                    <h3 class="content-header-title">Prescription d'une ordonnance</h3>
                    <div class="row breadcrumbs-top">
                        <div class="breadcrumb-wrapper col-12">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="">Liste des ordonnances</a>
                                </li>
                                
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="content-header-right col-md-6 col-12">
                    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested">
                        
                      <div class="form-group">
                          
                          <button type="button" class="btn btn-info round  box-shadow-2 px-2 mb-1" data-toggle="modal" data-target="#success">
                            <i class="ft-edit icon-left"></i> Créer une ordonnance
                          </button>
  
                          <div class="modal fade text-left" id="success" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                              <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                      <div class="modal-header bg-success white">
                                          <h4 class="modal-title white" id=""><i class="la la-tree"></i> Prescrire une ordonnance</h4>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                          </button>
                                      </div>
                                      <div class="modal-body">
                                          <div class="alert alert-success" role="alert">
                                              <span class="text-bold-600">Bien!</span> Enregistrement effectué avec succès.
                                          </div>
                                          <h5><i class="la la-arrow-right"></i> Check First Paragraph</h5>
                                          <form>
                                              <div>
                                                  <fieldset class="form-group floating-label-form-group">
                                                      <label for="patient">Selectionnez le patient</label>
                                                      <select name="" id="" class="form-control">
                                                        <option value="">Brigite</option>
                                                        <option value="">Jean</option>
                                                        <option value="">Edguard</option>
                                                      </select>
                                                    </fieldset>
                                                 
                                                  <fieldset class="form-group floating-label-form-group">
                                                      <label for="title">Prescription</label>
                                                      <input type="text" class="form-control" id="title" placeholder="Médicament à prescrire">
                                                  </fieldset>
                                                 
                                                  <fieldset class="form-group floating-label-form-group">
                                                      <label for="title1">Posologie</label>
                                                      <textarea class="form-control" id="title1" rows="3" placeholder="Posologie"></textarea>
                                                  </fieldset>
                                              </div>
                                              
                                          </form>

                                          
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn grey btn-outline-secondary" data-dismiss="modal">Close</button>
                                          <button type="button" class="btn btn-outline-success">Save changes</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
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
                                        <img src="/hospital/app-assets/images/logo/logo.png" height="80" width="100" alt="company logo" class="mb-1 mb-sm-0" />
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-sm-6 col-12 text-center text-sm-right">
                                <h2>ORDONNANCE MEDICALE</h2>
                                
                            </div>
                        </div>
                        <!-- Invoice Company Details -->

                        <!-- Invoice Customer Details -->
                        <div id="invoice-customer-details" class="row pt-2">
                            
                            <div class="col-sm-6 col-12 text-center text-sm-left">
                                <ul class="px-0 list-unstyled">
                                    <li class="text-bold-800">Patient: <strong>DASSESI Brigitte</strong></li>
                                    <li>Sexe: Feminin</li>
                                    <li>Age: 50 ans</li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-12 text-center text-sm-right">
                                <p><span class="text-muted"> Délivrée ce, </span> 06/05/2019 à 08H</p>
                                
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
                                                <th>#</th>
                                                <th>Prescription</th>
                                                <th class="text-right">Posologie</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>
                                                    <p>Rimal 80/140mg</p>
                                                    
                                                </td>
                                                <td class="text-right">
                                                  <p class="text-muted">Simply dummy text of the printing and typesetting industry.
                                                    </p>
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    <p>Paracétamol 500mg</p>
                                                </td>
                                                <td class="text-right">
                                                  <p class="text-muted">Pellentesque maximus feugiat lorem at cursus.</p>
                                                </td>
                                                
                                            </tr>

                                            <tr>
                                                <th scope="row">3</th>
                                                <td>
                                                    <p>Paracétamol 500mg</p>
                                                </td>
                                                <td class="text-right">
                                                  <p class="text-muted">Pellentesque maximus feugiat lorem at cursus.</p>
                                                </td>
                                                
                                            </tr>

                                            <tr>
                                                <th scope="row">4</th>
                                                <td>
                                                    <p>Paracétamol 500mg</p>
                                                </td>
                                                <td class="text-right">
                                                  <p class="text-muted">Pellentesque maximus feugiat lorem at cursus.</p>
                                                </td>
                                                
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-7 col-12 text-center text-sm-left">
                                    
                                </div>
                                <div class="col-sm-5 col-12">
                                   
                                    <div class="text-center">
                                      <img src="/app-assets/images/pages/signature-scan.png" alt="signature" class="height-100" />
                                        <p class="mb-0 mt-1">Dr AYIMANDE Florentin</p> <br>
                                        <p class="text-muted">Médecin généraliste</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Invoice Footer -->
                        <div id="invoice-footer">
                            <div class="row">
                                <div class="col-sm-7 col-12 text-center text-sm-left">
                                    <h6>NB</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                      Corporis maxime at tempore minima est saepe quisquam nisi ratione error, 
                                      odio consectetur nemo, adipisci velit. Dolorum distinctio nesciunt dolores aliquid qui..</p>
                                </div>
                                <div class="col-sm-5 col-12 text-center">
                                    <button type="button" class="btn btn-info btn-print btn-lg my-1"><i class="la la-paper-plane-o mr-50"></i>
                                        Imprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Invoice Footer -->

                    </div>
                </section>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Ordonnance'
}
</script>

<style>

</style>