<template>
    <div>
      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2">
                    <h3 class="content-header-title">Listes des certificats</h3>
                    
                </div>
                <div class="content-header-right col-md-6 col-12">
                    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested">
                        
                      <div class="form-group">
                          
                          <button type="button" class="btn btn-info round  box-shadow-2 px-2 mb-1" data-toggle="modal" data-target="#large">
                            <i class="ft-edit icon-left"></i> Créer un certificat
                          </button>
  
                          <div class="modal fade text-left" id="large" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                              <div class="modal-dialog modal-lg" role="document">
                                  <div class="modal-content">
                                      <div class="modal-header bg-success white">
                                          <h4 class="modal-title white" id=""><i class="la la-edit"></i> Ajouter un certificat</h4>
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
                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nom & prénom du patient</th>
                                                <th>Date et heure</th>
                                                <th>Auteur</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>John Doe</td>
                                                <td>Ce 29/01/2023 à 12h</td>
                                                <td>Dr Amoussou Florent</td>
                                                <td> 
                                                    <router-link to="/admin/certificat/read" class="btn btn-primary round btn-sm waves-effect waves-light">
                                                            <i class="la la-eye font-small-2"></i> voir
                                                    </router-link> 
                                                    
                                                    <router-link to="/admin/certificat/edit" class="btn btn-primary round btn-sm waves-effect waves-light mx-1">
                                                        
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                            
                                                    </router-link>
                                                    
                                                    <router-link to="" class="btn btn-primary round btn-sm waves-effect waves-light" title="Imprimer " >
                                                        <i class="la la-paper-plane-o"></i> 
                                                    </router-link>

                                                    <router-link to="" class="btn btn-danger round btn-sm waves-effect waves-light">
                                                        
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                        
                                                     </router-link>
                                                    
                                                     
                                                   
                                                </td>
                                            </tr>
                                            
                                           
                                        </tbody>
                                    </table>
                                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'CertificatIndex'
}
</script>

<style>

</style>