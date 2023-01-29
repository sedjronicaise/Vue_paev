<template>
    <div>
      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2">
                    <h3 class="content-header-title">Listes des ordonnances</h3>
                    
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
                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nom & prénom du patient</th>
                                                <th>Date et heure d'émission</th>
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
                                                    <router-link to="/admin/ordonnance/create" class="btn btn-primary round btn-sm waves-effect waves-light">
                                                            <i class="la la-eye font-small-2"></i> voir
                                                    </router-link> 
                                                    
                                                    <router-link to="" class="btn btn-primary round btn-sm waves-effect waves-light mx-1">
                                                        
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                            
                                                    </router-link> 

                                                    <router-link to="" class="btn btn-danger round btn-sm waves-effect waves-light">
                                                        
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                        
                                                     </router-link> 
                                                   
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td>02</td>
                                                <td>Bernard Dupond</td>
                                                <td>Ce 29/01/2023 à 12h</td>
                                                <td>Dr Amoussou Florent</td>
                                                <td> 
                                                    <router-link to="/admin/ordonnance/create" class="btn btn-primary round btn-sm waves-effect waves-light">
                                                            <i class="la la-eye font-small-2"></i> voir
                                                    </router-link> 
                                                    
                                                    <router-link to="" class="btn btn-primary round btn-sm waves-effect waves-light mx-1">
                                                        
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                            
                                                    </router-link> 

                                                    <router-link to="" class="btn btn-danger round btn-sm  waves-effect waves-light">
                                                        
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
    name: 'Ordonnance'
}
</script>

<style>

</style>