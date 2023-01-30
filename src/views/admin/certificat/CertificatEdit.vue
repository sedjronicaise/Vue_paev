<template>
    <div>
      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2">
                    <h3 class="content-header-title">Aperçu du Certificat</h3>
                    <div class="row breadcrumbs-top">
                        <div class="breadcrumb-wrapper col-12">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/admin/certificat/index" >
                                             Retour à la liste des Certificats
                                    </router-link> 
                                </li>
                                
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="content-header-right col-md-6 col-12">
                    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested">
                        
                      <div class="form-group">
                        <button type="button" class="btn btn-info round  box-shadow-2 px-2 mb-1" data-toggle="modal" data-target="#large">
                            <i class="ft-edit icon-left"></i> Modifier le certificat médical
                        </button>
                        <div class="modal fade text-left" id="large" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                              <div class="modal-dialog modal-lg" role="document">
                                  <div class="modal-content">
                                      <div class="modal-header bg-success white">
                                          <h4 class="modal-title white" id=""><i class="la la-edit"></i> Modifier le certificat médical</h4>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                          </button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                              <div>
                                                  <div class="row">
                                                        <div class="col-lg-6">
                                                            <fieldset class="form-group floating-label-form-group">
                                                                <label for="patient">Rechercher le patient</label>
                                                                <select name="" id="" class="form-control">
                                                                    <option value="">Brigite</option>
                                                                    <option value="">Jean</option>
                                                                    <option value="">Edguard</option>
                                                                </select>
                                                            </fieldset> 
                                                        </div>
                                                        <!-- <div class="col-lg-4">
                                                            <fieldset class="form-group floating-label-form-group">
                                                                <label for="patient">Selectionnez le type de certificat</label>
                                                                <select name="" id="" class="form-control">
                                                                    <option value="">Certificat médical de repos</option>
                                                                    <option value="">Certificat de viste et de contre visite</option>
                                                                    <option value="">Certificat d'hospitalisation</option>
                                                                    <option value="">Certificat d'aptitude au travail</option>
                                                                    <option value="">Certificat prénuptial</option>
                                                                    <option value="">Certificat prénuptial</option>
                                                                </select>
                                                            </fieldset> 
                                                        </div> -->
                                                        <div class="col-lg-6">
                                                            <fieldset class="form-group floating-label-form-group">
                                                                <label for="patient">Entrer le nature de certifcat</label>
                                                                <input type="text" class="form-control" placeholder="Exemple: Certificat d'hospitalisation">
                                                            </fieldset> 
                                                        </div>
                                                  </div>
                                                 
                                                 <div class="row">
                                                    <div class="col-lg-12" >
                                                        <fieldset class="form-group floating-label-form-group">
                                                            <label for="contenu">Contenu du certificat</label>
                                                          
                                                            <textarea  name="" id="contenu"  class="form-control" cols="30" rows="10" >
                                                               
                                                            </textarea>
                                                        </fieldset>   
                                                    </div>
                                                 
                                            
                                                 </div> 

                                              </div>
                                              
                                          </form>
                                          
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn grey btn-outline-secondary btn-sm" data-dismiss="modal">Fermer</button>
                                          <button type="button" class="btn btn-outline-success btn-sm">Enregistrer</button>
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
                                <h2>CERTIFICAT MEDICAL</h2>
                                
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

                        

                        <!-- Invoice Footer -->
                        
                        <!-- Invoice Footer -->

                    </div>
                </section>

            </div>
        </div>
    </div>
    </div>
</template>



<style>

</style>