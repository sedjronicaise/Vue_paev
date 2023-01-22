<template>
    <div>
        <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2">
                    <h3 class="content-header-title">Enregistrer un patient</h3>
                    <div class="row breadcrumbs-top">
                        <div class="breadcrumb-wrapper col-12">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Accueil</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Liste Patients</a>
                                </li>
                                <li class="breadcrumb-item active">Ajout
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="content-header-right col-md-6 col-12">
                    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested ">
                        <router-link to="/admin/patient/index" class="btn btn-info round  box-shadow-2 px-2 mb-1" id="btnGroupDrop1" type="button" aria-haspopup="true" aria-expanded="false">
                            <i class="ft-arrow-left "></i> Liste des patients
                        </router-link>
                      
                    </div>
                </div>
            </div>
            <div class="content-body">
                <!-- Add Patient Form Wizard -->
                <section id="add-patient">
                    <div class="icon-tabs">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h4 class="badge border-info info badge-border" >
                                             NOUVEAU PATIENT
                                        </h4>
                                        <a class="heading-elements-toggle" href="#">
                                            <i class="la la-ellipsis-h font-medium-3"> </i>
                                        </a>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <form action="#" class="add-patient-tabs steps-validation wizard-notification">
                                                <!-- step 1 => Personal Details -->
                                                <h6>
                                                    <i class="step-icon la la-user font-medium-3"> </i>
                                                     Details Personnel
                                                </h6>
                                                <fieldset>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="firstName">
                                                                    Nom et Prénom du patient:
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control " id="firstName" name="firstname" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                
                                                                <label for="dateA">
                                                                    Date  d'arrivée
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control " id="dateArrivee" name="dateArrivee" type="date" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                <label for="city">
                                                                    Situation Matrimoniale
                                                                </label>
                                                                <select class="custom-select" id="city">
                                                                    
                                                                    <option value="Mariee">
                                                                        Marié(e)
                                                                    </option>
                                                                    <option value="célibataire">
                                                                        célibataire
                                                                    </option>
                                                                    <option value="Concubinage">
                                                                        Concubinage
                                                                    </option>
                                                                    <option value="Veuf">
                                                                        Veuf (ve)
                                                                    </option>
                                                               
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="address">
                                                                    Adresse:
                                                                </label>
                                                                <input class="form-control" id="address" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                <label for="city">
                                                                    Sexe
                                                                </label>
                                                                <select class="custom-select" id="city">
                                                                    
                                                                    <option value="masculin">
                                                                        Masculin
                                                                    </option>
                                                                    <option value="feminin">
                                                                        Feminin
                                                                    </option>
                                                               
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                <label for="state">
                                                                    Type de consultation
                                                                </label>
                                                                <select class="custom-select" id="state">
                                                                    <option value="">
                                                                       Médecine Génerale
                                                                    </option>
                                                                    <option value="washingtondc">
                                                                       Nutrition
                                                                    </option>
                                                                    <option value="newyork">
                                                                       Gynécologie
                                                                    </option>
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="contact">
                                                                    Profession
                                                                    
                                                                </label>
                                                                <input class="form-control " id="profession" name="profession" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="contact">
                                                                   Nombre d'enfant
                                                                    
                                                                </label>
                                                                <input class="form-control " id="contact" name="contact" type="number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="contact">
                                                                    Numéro de télephone:
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control " id="contact" name="contact" type="number" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="dob">
                                                                    Date de naissance:
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control " id="dob" name="dateofbirth" type="date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <!-- Step 2 => Emergency Details-->
                                                <h6>
                                                    <i class="step-icon la la-ambulance font-medium-3"> </i>
                                                    Personne à contacter en cas d'urgence
                                                </h6>
                                                <fieldset>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="fnemergency">
                                                                    Nom :
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control" id="fnemergency" name="fnemergency"  type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="lnemergency">
                                                                    Prénom:
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control" id="lnemergency" name="lnemergency"  type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="relation">
                                                                    Relation avec le patient:
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control" id="relation" name="relation"  type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="relativeadd">
                                                                    Adresse:
                                                                </label>
                                                                <input class="form-control" id="relativeadd" name="relativeadd" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="cn">
                                                                    Télephone:
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control" id="cn" name="cn"  type="number" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="alternate">
                                                                    Autre numéro:
                                                                </label>
                                                                <input class="form-control" id="alternate" name="alternate" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <!-- Step 3 => Symptoms -->
                                                <h6>
                                                    <i class="step-icon font-medium-3 ft-thermometer"> </i>
                                                    Symptômes 
                                                </h6>
                                                <fieldset>
                                                    <div class="row icheck_minimal skin">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label>
                                                                    Le patient était déjà de passage ?
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <span class="option-y">
                                                                    Oui
                                                                </span>
                                                                <input checked="" id="previousvisit" name="previousvisit"  type="radio" />
                                                                <span class="option-n">
                                                                    Non
                                                                </span>
                                                                <input id="previousvisit1" name="previousvisit"  type="radio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="symptoms">
                                                                    À quels symptômes le patient est-il confronté?
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control" id="symptoms" name="symptoms"  type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="since">
                                                                    Depuis quand le patient est-il confronté à ce problème ?
                                                                </label>
                                                                <input class="form-control" id="since" name="since"  type="date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label for="history">
                                                                    Autres remarques ?
                                                                </label>
                                                                <textarea class="form-control" cols="10" id="remarque" name="remarque" rows="2"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <!-- Step 4 => Insaurance Details -->
                                                <h6>
                                                    <i class="step-icon font-medium-3 ft-file-text"> </i>
                                                    Détails de l'assurance
                                                </h6>
                                                <fieldset>
                                                    <div class="row icheck_minimal skin">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="pr-1">
                                                                    Le patient a-t-il une assurance ?
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <span class="option-y">
                                                                    Oui
                                                                </span>
                                                                <input checked="" class="icheck-checkbox" id="ins-yes" name="ins"  type="radio" />
                                                                <span class="option-n">
                                                                    Non
                                                                </span>
                                                                <input class="icheck-checkbox" id="ins-no" name="ins"  type="radio" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="company">
                                                                    Nom de la compagnie d'assurance :
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control " id="company" name="degree"  type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="card">
                                                                    Numéro d'assurance :
                                                                    <span class="danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input class="form-control " id="card" name="card" type="number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="amount">
                                                                    Montant de l'assurance :
                                                                </label>
                                                                <input class="form-control" id="amount" type="number" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="expirydate">
                                                                    Date d'expiration:
                                                                </label>
                                                                <input class="form-control" id="expirydate" name="expirydate" type="date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
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
    name: 'PatientAdd',
}
</script>

<style>

</style>