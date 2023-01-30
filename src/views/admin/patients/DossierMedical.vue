<template>
  <div>
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-6 col-12 mb-2">
            <h3 class="content-header-title">
              Dossier Médical : {{patients[0].infoGeneral.fullName}}
            </h3>
      
          </div>
          <div class="content-header-right col-md-6 col-12">
            <div
              class="btn-group float-md-right"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button
                class="btn btn-info round dropdown-toggle dropdown-menu-right box-shadow-2 px-2 mb-1"
                id="btnGroupDrop1"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="ft-edit icon-left"></i> Modifier
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#"
                  >Profile de {{patients[0].infoGeneral.fullName}}
                </a>
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
            <div class="row">
              <div class="col-lg-12">
                <div class="card collapse show">
                  <div class="row">
                    <div class="col-6">
                      <div class="card-body">
                        <div class="media-list media-bordered">
                          <div class="media">
                            <span class="media-left">
                              <img
                                class="media-object"
                                src="/hospital/app-assets/images/portrait/small/avatar-s-19.png"
                                alt="Generic placeholder image"
                                height="64"
                                width="64"
                              />
                            </span>
                            <div class="media-body">
                              <h5 class="media-heading">
                                No Dossier :
                                <span class="badge badge-info float-right"
                                  >{{patients[0].id}}</span
                                >
                              </h5>
                              <hr />
                              <h5 class="media-heading">
                                Profession:
                                <span class="float-right content-header-title"
                                  >{{patients[0].infoGeneral.profession}}</span
                                >
                              </h5>
                              <hr />
                              <h5 class="media-heading">
                                Sexe
                                <span class="badge badge-info float-right"
                                  >{{patients[0].infoGeneral.sexe}}</span
                                >
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
                                <span class="badge badge-info float-right"
                                  >{{patients[0].infoGeneral.typeConsultation}}</span
                                >
                              </h5>
                              <hr />
                              <h5 class="media-heading">
                                Télephone
                                <span class="badge badge-info float-right"
                                  >{{patients[0].infoGeneral.telephone}}</span
                                >
                              </h5>
                              <hr />
                              <h5 class="media-heading">
                                Date Arrivée :
                                <span class="badge badge-info float-right"
                                  >{{patients[0].infoGeneral.dateArriver}}</span
                                >
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
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title" id="from-actions-top-bottom-center">
                      Fiche de consultation
                    </h4>
                    <a class="heading-elements-toggle"
                      ><i class="la la-ellipsis-v font-medium-3"></i
                    ></a>
                    <div class="heading-elements">
                      <ul class="list-inline mb-0">
                        <li>
                          <a data-action="collapse"><i class="ft-minus"></i></a>
                        </li>
                        <li>
                          <a data-action="reload"
                            ><i class="ft-rotate-cw"></i
                          ></a>
                        </li>
                        <li>
                          <a data-action="expand"
                            ><i class="ft-maximize"></i
                          ></a>
                        </li>
                        <li>
                          <a data-action="close"><i class="ft-x"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <ul class="nav nav-tabs nav-underline nav-justified">
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="linkIcon13-tab1"
                            data-toggle="tab"
                            href="#linkIcon13"
                            aria-controls="linkIcon13"
                            aria-expanded="false"
                            ><i class="ft-link"></i>
                            <strong class="text-info">Profile</strong></a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="linkIconOpt11-tab1"
                            data-toggle="tab"
                            href="#linkIconOpt11"
                            aria-controls="linkIconOpt11"
                            ><i class="ft-external-link"></i>
                            <strong class="text-info"> Antécédent </strong></a
                          >
                        </li>

                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="linkIcon12-tab1"
                            data-toggle="tab"
                            href="#linkIcon12"
                            aria-controls="linkIcon12"
                            aria-expanded="false"
                            ><i class="ft-link"></i>
                            <strong class="text-info">
                              Consultation en cours
                            </strong></a
                          >
                        </li>

                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="activeIcon12-tab1"
                            data-toggle="tab"
                            href="#activeIcon12"
                            aria-controls="activeIcon12"
                            aria-expanded="true"
                            ><i class="ft-heart"></i>
                            <strong class="text-info">
                              Historique de consultation
                            </strong></a
                          >
                        </li>
                      </ul>
                      <div class="tab-content px-1 pt-1">
                        <!-- <ProfilePatient/> -->
                        <div
                          class="tab-pane"
                          id="linkIcon13"
                          role="tabpanel"
                          aria-labelledby="linkIcon13-tab1"
                          aria-expanded="false"
                        >
                          <div class="row">
                            <div class="col-lg-12 col-md-12">
                              <div class="card" style="height: 321.7px">
                                <div class="card card-content collapse show">
                                  <div class="card-body">
                                    <h4 class="card-title">
                                      Informations personnelles et familliales
                                    </h4>
                                    <div class="media-body">
                                      

                                      <h5 class="media-heading">
                                        Lieu et date de naissance :
                                        <span
                                          class="badge badge-info float-right"
                                          >20-03-1986 à cotonou</span
                                        >
                                      </h5>
                                      <hr />
                                      <h5 class="media-heading">
                                        Nationalité
                                        <span
                                          class="badge badge-info float-right"
                                          >Béninoise</span
                                        >
                                      </h5>
                                      <hr />
                                      <h5 class="media-heading">
                                        Profession
                                        <span
                                          class="badge badge-info float-right"
                                          >{{patients[0].infoGeneral.profession}}</span
                                        >
                                      </h5>
                                      <hr />
                                    </div>
                                    <div class="media-body">
                                      <h5 class="media-heading">
                                        Situation matrimoniale:
                                        <span
                                          class="float-right content-header-title"
                                          >{{patients[0].infoGeneral.situationMatrimoniale}}</span
                                        >
                                      </h5>
                                      <hr />
                                      <h5 class="media-heading">
                                        Nom et prénom du conjoint:
                                        <span
                                          class="float-right content-header-title"
                                          >Cookie candy</span
                                        >
                                      </h5>
                                      <hr />
                                      <h5 class="media-heading">
                                        Nombre d'enfants
                                        <span
                                          class="badge badge-info float-right"
                                          >{{patients[0].infoGeneral.nbreEnfant}}</span
                                        >
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Antécédents -->
                        <div
                          class="tab-pane"
                          id="linkIconOpt11"
                          role="tabpanel"
                          aria-labelledby="linkIconOpt11-tab1"
                          aria-expanded="false"
                        >
                          <div class="row">
                            <div class="col-12">
                              <div class="card">
                                <div class="card-body">
                                  <form class="form">
                                    <div class="form-body">
                                      <div class="row">
                                        <div class="col-12">
                                          <h2 class="card-title text-center">
                                            I- ANTÉCÉDANTS PERSONNELS
                                          </h2>

                                          <h4
                                            class="card-title"
                                            id="from-actions-top-bottom-center"
                                          >
                                            I-1 Antécédants médicaux
                                          </h4>
                                          <div class="form-group">
                                            <div
                                              class="position-relative has-icon-left"
                                            >
                                           
                                              <textarea
                                                id="timesheetinput7"
                                                rows="3"
                                                v-model="formData.antecedantPersonnel.medicaux"
                                                class="form-control round border-primary"
                                                name="antecedantsmedicaux"
                                                placeholder=""
                                              ></textarea>
                                              <div
                                                class="form-control-position"
                                              >
                                                <i class="ft-file"></i>
                                              </div>
                                            </div>
                                          </div>

                                          <form class="form">
                                            <h4
                                              class="card-title"
                                              id="from-actions-top-bottom-center"
                                            >
                                              I-2 Antécédants chirurgicaux
                                            </h4>
                                            <div class="form-body">
                                              <div class="row">
                                                <div class="col-12">
                                                  <div class="form-group">
                                                    <div
                                                      class="position-relative has-icon-left"
                                                    >
                                                      <textarea
                                                        id="timesheetinput7"
                                                        rows="3"
                                                        v-model="formData.antecedantPersonnel.chirurgicaux"
                                                        class="form-control round border-primary"
                                                        name="antecedantschirurgicaux"
                                                        placeholder=""
                                                      ></textarea>
                                                      <div
                                                        class="form-control-position"
                                                      >
                                                        <i class="ft-file"></i>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </form>

                                          <form class="form">
                                            <div class="form-body">
                                              <div class="row">
                                                <div class="col-12">
                                                  <h4
                                                    class="card-title"
                                                    id="from-actions-top-bottom-center"
                                                  >
                                                    I-3 Antécédants
                                                    gynecologiques et
                                                    obstétricaux
                                                  </h4>

                                                  <div class="form-group">
                                                    <div
                                                      class="position-relative has-icon-left"
                                                    >
                                                      <textarea
                                                        id="timesheetinput7"
                                                        rows="3"
                                                        class="form-control round border-primary"
                                                        v-model="formData.antecedantPersonnel.gynecologiques"

                                                        name="antecedantsgynecologiques"
                                                        placeholder=""
                                                      ></textarea>
                                                      <div
                                                        class="form-control-position"
                                                      >
                                                        <i class="ft-file"></i>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </form>

                                          <form class="form">
                                            <div class="form-body">
                                              <div class="row">
                                                <div class="col-12">
                                                  <h4
                                                    class="card-title"
                                                    id="from-actions-top-bottom-center"
                                                  >
                                                    I-4 Antécédants
                                                    Nutritionnels
                                                  </h4>

                                                  <div class="form-group">
                                                    <div
                                                      class="position-relative has-icon-left"
                                                    >
                                                      <textarea
                                                        id="timesheetinput7"
                                                        rows="3"
                                                        class="form-control round border-primary"
                                                        name="antecedantsnutritionnels"
                                                        v-model="formData.antecedantPersonnel.nutritionnels"
                                                        placeholder=""
                                                      ></textarea>
                                                      <div
                                                        class="form-control-position"
                                                      >
                                                        <i class="ft-file"></i>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div
                                              class="form-actions text-right"
                                            >
                                              <button
                                                @click.prevent="addAntecedantPersonnel"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                              <span class="fs-5 fs-semibold" v-if="!chargementPersonel">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                              </button>
                                            </div>
                                          </form>
                                        </div>
                                        <div class="col-12">
                                          <h2 class="card-title text-center">
                                            II- ANTÉCÉDANTS FAMILIAUX
                                          </h2>
                                          <h4
                                            class="card-title"
                                            id="from-actions-top-bottom-center"
                                          >
                                            II-1 Ascendants
                                          </h4>
                                          <div class="form-group">
                                            <div
                                              class="position-relative has-icon-left"
                                            >
                                              <textarea
                                                id="timesheetinput7"
                                                rows="3"
                                                v-model="formData.antecedantFamiliaux.ascendant"
                                                class="form-control round border-primary"
                                                name="antecedantsmedicaux"
                                                placeholder=""
                                              ></textarea>
                                              <div
                                                class="form-control-position"
                                              >
                                                <i class="ft-file"></i>
                                              </div>
                                            </div>
                                          </div>
                                          <form class="form">
                                            <h4
                                              class="card-title"
                                              id="from-actions-top-bottom-center"
                                            >
                                              II-2 Colatéraux
                                            </h4>
                                            <div class="form-body">
                                              <div class="row">
                                                <div class="col-12">
                                                  <div class="form-group">
                                                    <div
                                                      class="position-relative has-icon-left"
                                                    >
                                                      <textarea
                                                        id="timesheetinput7"
                                                        rows="3"
                                                        v-model="formData.antecedantFamiliaux.colateraux"
                                                        class="form-control round border-primary"
                                                        name="antecedantschirurgicaux"
                                                        placeholder=""
                                                      ></textarea>
                                                      <div
                                                        class="form-control-position"
                                                      >
                                                        <i class="ft-file"></i>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </form>

                                          <form class="form">
                                            <div class="form-body">
                                              <div class="row">
                                                <div class="col-12">
                                                  <h4
                                                    class="card-title"
                                                    id="from-actions-top-bottom-center"
                                                  >
                                                    II-3 Descendant
                                                  </h4>

                                                  <div class="form-group">
                                                    <div
                                                      class="position-relative has-icon-left"
                                                    >
                                                      <textarea
                                                        id="timesheetinput7"
                                                        rows="3"
                                                        class="form-control round border-primary"
                                                        name="antecedantsnutritionnels"
                                                        v-model="formData.antecedantFamiliaux.descendant"
                                                        placeholder=""
                                                      ></textarea>
                                                      <div
                                                        class="form-control-position"
                                                      >
                                                        <i class="ft-file"></i>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div
                                              class="form-actions text-right"
                                            >
                                              <button
                                              @click.prevent="addAntecedantFamiliaux"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                               
                                                <span class="fs-5 fs-semibold" v-if="!chargementFamiliaux">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                              </button>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </form>

                                  <form class="form">
                                    <div class="form-body">
                                      <h4
                                        class="card-title"
                                        style="text-align: center"
                                      >
                                        Allergies, Totem et mode de vie
                                      </h4>
                                      <div class="row">
                                        <div class="col-12">
                                          <div class="form-group">
                                            <label for="timesheetinput7"
                                              >Allergies liées aux
                                              médicaments</label
                                            >
                                            <div
                                              class="position-relative has-icon-left"
                                            >
                                              <textarea
                                                id="timesheetinput7"
                                                rows="2"
                                                v-model="formData.autres.allergieMedicament"
                                                class="form-control round border-primary"
                                                name="allergiesmedicaments"
                                                placeholder=""
                                              ></textarea>
                                              <div
                                                class="form-control-position"
                                              >
                                                <i class="ft-file"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-12">
                                          <div class="form-group">
                                            <label for="timesheetinput7"
                                              >Allergies liées aux
                                              aliments</label
                                            >
                                            <div
                                              class="position-relative has-icon-left"
                                            >
                                              <textarea
                                                id="timesheetinput7"
                                                rows="2"
                                                v-model="formData.autres.allergieAliment"
                                                class="form-control round border-primary"
                                                name="allergiestotems"
                                                placeholder=""
                                              ></textarea>
                                              <div
                                                class="form-control-position"
                                              >
                                                <i class="ft-file"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-6">
                                          <div class="form-group">
                                            <label for="timesheetinput7"
                                              >Totem</label
                                            >
                                            <div
                                              class="position-relative has-icon-left"
                                            >
                                              <textarea
                                                id="timesheetinput7"
                                                rows="2"
                                                v-model="formData.autres.totem"
                                                class="form-control round border-primary"
                                                name="allergiesaliments"
                                                placeholder=""
                                              ></textarea>
                                              <div
                                                class="form-control-position"
                                              >
                                                <i class="ft-file"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-6">
                                          <div class="form-group">
                                            <label for="timesheetinput7"
                                              >Mode de vie</label
                                            >
                                            <div
                                              class="position-relative has-icon-left"
                                            >
                                              <textarea
                                                id="timesheetinput7"
                                                rows="2"
                                                v-model="formData.autres.modeVie"
                                                class="form-control round border-primary"
                                                name="modedevie"
                                                placeholder=""
                                              ></textarea>
                                              <div
                                                class="form-control-position"
                                              >
                                                <i class="ft-file"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="form-actions text-right">
                                      <button
                                        @click.prevent="addAutre"
                                        type="submit"
                                        class="btn btn-primary"
                                      >
                                      <span class="fs-5 fs-semibold" v-if="!chargementAutre">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                      </span>
                                      <span v-else class="d-flex align-items-center">
                                        <span class="mx-2 fs-semibold text-light">
                                          chargement ...
                                        </span>
                                        <div
                                          style="width: 1.5rem; height: 1.5rem"
                                          class="spinner-border text-light"
                                          role="status"
                                          >
                                          <span class="sr-only">Loading...</span>
                                          </div>
                                        </span>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Consultation -->
                        <div
                          class="tab-pane"
                          id="linkIcon12"
                          role="tabpanel"
                          aria-labelledby="linkIcon12-tab1"
                          aria-expanded="false"
                        >
                          <div class="row justify-content-md-center">
                            <div class="col-md-12">
                              <div class="card">
                                <div class="card-header">
                                  <h4
                                    class="card-title"
                                    id="from-actions-top-bottom-center text-uppercase"
                                  >
                                    <strong>1- MOTIF DE CONSULTATION</strong>
                                  </h4>
                                </div>
                                <div class="card-content collpase show">
                                  <div class="card-body">
                                    
                                    <form class="form">
                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-12 mb-2">
                                            <input
                                              type="text"
                                              id="eventInput1"
                                              v-model=consultation.motif
                                              class="form-control round border-primary"
                                              placeholder="Entrer le motif de consultation"
                                              name="motifconsultattion"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                              @click.prevent="addConsultationMotif"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                               
                                                <span class="fs-5 fs-semibold" v-if="!chargementMotif">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                        </button>
                                      </div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong>2- ANAMNESE</strong>
                                      </h4>

                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-md-6 mb-2">
                                            <label for="userinput1"
                                              >Début</label
                                            >
                                            <input
                                              type="text"
                                              id="userinput1"
                                              v-model="consultation.anamnese.debut"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="debutanamnese"
                                            />
                                          </div>
                                          <div class="form-group col-md-6 mb-2">
                                            <label for="userinput1"
                                              >Signes associés</label
                                            >
                                            <input
                                              type="text"
                                              id="userinput1"
                                               v-model="consultation.anamnese.signeAssocie"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="signeassocie"
                                            />
                                          </div>

                                          <div class="form-group col-md-6 mb-2">
                                            <label for="userinput1"
                                              >Signes négatifs</label
                                            >
                                            <input
                                              type="text"
                                              id="userinput1"
                                               v-model="consultation.anamnese.signeNegatif"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="Signesnegatifs"
                                            />
                                          </div>
                                          <div class="form-group col-md-6 mb-2">
                                            <label for="userinput1"
                                              >Traitement avant admission</label
                                            >
                                            <input
                                              type="text"
                                              id="userinput1"
                                               v-model="consultation.anamnese.traitementAvantAdmission"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="traitementavantadmission"
                                            />
                                          </div>

                                          <div class="form-group col-md-6 mb-2">
                                            <label for="userinput1"
                                              >Bilan avant admission</label
                                            >
                                            <input
                                              type="text"
                                              id="userinput1"
                                              class="form-control round border-primary"
                                              placeholder=""
                                               v-model="consultation.anamnese.bilanAvantAdmission"
                                              name="bilanavantadmission"
                                            />
                                          </div>
                                          <div class="form-group col-md-6 mb-2">
                                            <label for="userinput1"
                                              >Evolution</label
                                            >
                                            <input
                                              type="text"
                                              id="userinput1"
                                              v-model="consultation.anamnese.evolution"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="evolutionanamese"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                              @click.prevent="addConsultationAnamnese"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                               
                                                <span class="fs-5 fs-semibold" v-if="!chargementAnamnese">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                              </button>
                                      </div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong
                                          >3- DONNÉES ANTHROPOMETRIQUE</strong
                                        >
                                      </h4>

                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Taille</label
                                            >
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                v-model="consultation.donneesAnthropometrique.taille"
                                                class="form-control round border-primary"
                                                placeholder=""
                                                @change="calculIMC"
                                                name="taille"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >cm</span
                                                >
                                              </div>
                                            </div>
                                          </div>
                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Poids</label
                                            >
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                v-model="consultation.donneesAnthropometrique.poids"
                                                class="form-control round border-primary"
                                                placeholder=""
                                                @change="calculIMC"
                                                name="poids"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >Kg</span
                                                >
                                              </div>
                                            </div>
                                          </div>
                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1">IMC</label>
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                disabled
                                                readonly
                                                class="form-control round border-primary"
                                                placeholder=""
                                                v-model="consultation.donneesAnthropometrique.icm"
                                                name="imc"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >Kg/m²</span
                                                >
                                              </div>
                                            </div>
                                          </div>

                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Température</label
                                            >
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                class="form-control round border-primary"
                                                placeholder=""
                                                v-model="consultation.donneesAnthropometrique.temperature"
                                                name="temperature"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >°C</span
                                                >
                                              </div>
                                            </div>
                                          </div>
                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Pouls</label
                                            >
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                v-model="consultation.donneesAnthropometrique.pouls"
                                                class="form-control round border-primary"
                                                placeholder=""
                                                name="pouls"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >BPM</span
                                                >
                                              </div>
                                            </div>
                                          </div>
                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Etat général</label
                                            >
                                            <select
                                              name="etatgeneral"
                                              id=""
                                              v-model="consultation.donneesAnthropometrique.etatGenerl"
                                              class="form-control round border-primary"
                                            >
                                              <option value="">
                                                Choisis un état
                                              </option>
                                              <option value="">
                                                Choisis un état
                                              </option>
                                              <option value="">
                                                Choisis un état
                                              </option>
                                              <option value="">
                                                Choisis un état
                                              </option>
                                            </select>
                                          </div>

                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Bras gauche</label
                                            >
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                class="form-control round border-primary"
                                                placeholder=""
                                                v-model="consultation.donneesAnthropometrique.brasGauche"
                                                name="brasgauche"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >cmHG</span
                                                >
                                              </div>
                                            </div>
                                          </div>
                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                              >Bras droit</label
                                            >
                                            <div class="input-group mt-0">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                class="form-control round border-primary"
                                                v-model="consultation.donneesAnthropometrique.brasDroit"
                                                placeholder=""
                                                name="brasdroit"
                                              />
                                              <div class="input-group-append">
                                                <span class="input-group-text"
                                                  >cmHG</span
                                                >
                                              </div>
                                            </div>
                                          </div>

                                          <div class="form-group col-md-4 mb-2">
                                            <label for="userinput1"
                                            class="curseur"
                                              @click.prevent="addChamp"
                                              ><i class="la la-plus "></i>
                                              Autre donnée</label
                                            >
                                          </div>
                                          
                                          <div v-for="(champs,index) in consultation.donneesAnthropometrique.autres" :key=index class="form-group col-md-4 mb-2">
                                            <input type="text" class='customInput' v-model="champs.libelle" placeholder="libellé" />
                                            <span @click="supprimerChamps(index)" class="supprimer curseur">X</span>
                                            <div class="input-group mt-2">
                                              <input
                                                type="text"
                                                id="userinput1"
                                                class="form-control round border-primary"
                                                v-model="champs.data"
                                                placeholder="valeur"
                                                name="brasdroit"
                                              />
                                              
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                              @click.prevent="addConsultationAntro"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                               
                                                <span class="fs-5 fs-semibold" v-if="!chargementAntro">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                              </button>
                                      </div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong
                                          >4- HYPOTHESES DIAGNOSTICS</strong
                                        >
                                      </h4>
                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-12 mb-2">
                                            <input
                                              type="text"
                                              id="eventInput1"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              v-model="consultation.hypotheseDiagnostics"
                                              name="hypothesediagnostic"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                              @click.prevent="addConsultationDiagnostic"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                               
                                                <span class="fs-5 fs-semibold" v-if="!chargementDiagnosticsHypothese">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                              </button>
                                      </div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong
                                          >5- EXAMENS PARACLINIQUES</strong
                                        >
                                        <a data-action="reload"
                                          ><i class="ft-rotate-cw"></i
                                        ></a>
                                      </h4>

                                      <h4
                                        class="card-title text-center"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong>5-1 EXAMENS RADIOLOGIQUES</strong>
                                      </h4>

                                      <div class="form-actions top text-right">
                                        <div class="card-content">
                                          <div class="card-body text-center">
                                            <div
                                              class="row"
                                              id="select"
                                              data-select2-id="select"
                                            >
                                              <div
                                                class="col-12"
                                                data-select2-id="20"
                                              >
                                                <div
                                                  class="card"
                                                  data-select2-id="19"
                                                >
                                                  <div class="card-header">
                                                    <h4 class="card-title">
                                                      Selectionnez le ou les
                                                      types d'analyses
                                                    </h4>
                                                  </div>
                                                  <div
                                                    class="card-content collapse show"
                                                  >
                                                   <VueMultiselect
                                                      v-model="taggingSelectedType"
                                                      :options="taggingOptionsType"
                                                      :multiple="true"
                                                      :taggable="true"
                                                      :hideSelected="true" 
                                                      :closeOnSelect="false"
                                                      :selectLabel="'Appuyez sur Entrée pour sélectionner'" 
                                                      :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                                                      selectedLabel="Selectionné"
                                                      @tag="addTagType"
                                                      tag-placeholder="Ajouter un nouveau element"
                                                      placeholder="Selectionnez les types d'analyse"
                                                      label="name"
                                                      track-by="code"
                                                    />
                                                                                          
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-body"></div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title text-center"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <STrong
                                          >5-2 ANALYSES BIOLOGIQUES</STrong
                                        >
                                      </h4>
                                      <div class="form-actions top text-right">
                                        <div class="card-content">
                                          <div class="card-body text-center">
                                            <div
                                              class="row"
                                              id="select"
                                              data-select2-id="select"
                                            >
                                              <div
                                                class="col-12"
                                                data-select2-id="20"
                                              >
                                                <div
                                                  class="card"
                                                  data-select2-id="19"
                                                >
                                                  <div class="card-header">
                                                    <h4 class="card-title">
                                                      Selectionnez le ou les
                                                      types d'analyses
                                                    </h4>
                                                  </div>
                                                  <div
                                                    class="card-content collapse show"
                                                  >
                                                  <VueMultiselect
                                                      v-model="taggingSelectedBio"
                                                      :options="taggingOptionsBio"
                                                      :multiple="true"
                                                      :hideSelected="true" 
                                                      :closeOnSelect="false"
                                                      :taggable="true"
                                                      :selectLabel="'Appuyez sur Entrée pour sélectionner'" 
                                                      :deselectLabel="'Appuyez sur Entrée pour supprimer'"
                                                      selectedLabel="Selectionné"
                                                      @tag="addTagBio"
                                                      tag-placeholder="Ajouter un nouveau element"
                                                      placeholder="Selectionnez une (des) analyses biologiques"
                                                      label="name"
                                                      track-by="code"
                                                    />
                                                    
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-body"></div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong>7- DIAGNOSTIC RETENU</strong>
                                      </h4>
                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-12 mb-2">
                                            <input
                                              type="text"
                                              id="eventInput1"
                                              v-model="consultation.diagnostics"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="hypothesediagnostic"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                              @click.prevent="addDiagnostic"
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                               
                                                <span class="fs-5 fs-semibold" v-if="!chargementDiagnostics">
                                                  <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                  Enregistrer
                                                </span>
                                                <span v-else class="d-flex align-items-center">
                                                  <span class="mx-2 fs-semibold text-light">
                                                    chargement ...
                                                  </span>
                                                  <div
                                                    style="width: 1.5rem; height: 1.5rem"
                                                    class="spinner-border text-light"
                                                    role="status"
                                                  >
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                                  </span>
                                        </button>
                                      </div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong>8- PROTOCOLES DE SOINS</strong>
                                        <a data-action="reload"
                                          ><i class="ft-rotate-cw"></i
                                        ></a>
                                      </h4>
                                      <div class="form-actions top text-right">
                                        <button
                                          type="button"
                                          class="btn btn-info mr-1"
                                          data-toggle="modal"
                                          data-target="#inlineForm"
                                        >
                                          + Ajouter
                                        </button>

                                        <div
                                          class="modal fade text-left"
                                          id="inlineForm"
                                          tabindex="-1"
                                          role="dialog"
                                          aria-labelledby="myModalLabel33"
                                          aria-hidden="true"
                                        >
                                          <div
                                            class="modal-dialog modal-lg"
                                            role="document"
                                          >
                                            <div class="modal-content">
                                              <div
                                                class="modal-header bg-primary"
                                              >
                                                <label
                                                  class="modal-title white text-text-bold-600"
                                                  id="myModalLabel33"
                                                  >Protocoles de soins</label
                                                >
                                                <button
                                                  type="button"
                                                  class="close"
                                                  data-dismiss="modal"
                                                  aria-label="Close"
                                                >
                                                  <span aria-hidden="true"
                                                    >&times;</span
                                                  >
                                                </button>
                                              </div>
                                              <form action="#">
                                                <div
                                                  class="modal-body"
                                                  style="background: #f4f5fa"
                                                >
                                                  <div class="form-body">
                                                    <h4
                                                      class="text-center pt-2"
                                                    >
                                                      Protocoles de soins H(0)
                                                    </h4>

                                                    <div class="row">
                                                      <div
                                                        class="col-md-6 offset-md-3"
                                                      >
                                                        <div class="row">
                                                          <div
                                                            class="form-group col-md-6"
                                                          >
                                                            <label
                                                              for="userinput1"
                                                              >Date</label
                                                            >
                                                            <input
                                                              type="date"
                                                              id="userinput1"
                                                              class="form-control round border-primary"
                                                              placeholder=""
                                                              v-model="consultation.protocoleSoins.date"
                                                              name="protocole_date"
                                                            />
                                                          </div>
                                                          <div
                                                            class="form-group col-md-6"
                                                          >
                                                            <label
                                                              for="userinput1"
                                                              >Heure</label
                                                            >
                                                            <input
                                                              type="time"
                                                              id="userinput1"
                                                              class="form-control round border-primary"
                                                              placeholder=""
                                                              v-model="consultation.protocoleSoins.heure"
                                                              name="protocole_heure"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div
                                                      class="col-xl-12 col-lg-12"
                                                    >
                                                      <h4 class="card-title">
                                                        Admissions
                                                      </h4>
                                                      <ul
                                                        class="nav nav-pills nav-active-bordered-pill"
                                                      >
                                                        <li class="nav-item">
                                                          <a
                                                            class="nav-link active"
                                                            id="base-pill31"
                                                            data-toggle="pill"
                                                            href="#pill31"
                                                            aria-expanded="true"
                                                          >
                                                            Ambulatoire
                                                          </a>
                                                        </li>
                                                        <li class="nav-item">
                                                          <a
                                                            class="nav-link"
                                                            id="base-pill32"
                                                            data-toggle="pill"
                                                            href="#pill32"
                                                            aria-expanded="false"
                                                          >
                                                            Hospitalisation
                                                          </a>
                                                        </li>
                                                        <li class="nav-item">
                                                          <a
                                                            class="nav-link"
                                                            id="base-pill33"
                                                            data-toggle="pill"
                                                            href="#pill33"
                                                            aria-expanded="false"
                                                          >
                                                            Hospitalisation du
                                                            jour
                                                          </a>
                                                        </li>
                                                      </ul>
                                                      <div
                                                        class="card"
                                                        style="height: auto"
                                                      >
                                                        <div
                                                          class="card-content"
                                                        >
                                                          <div class="card-body">
                                                            <div class="tab-content px-1 pt-1" >
                                                              <div
                                                                role="tabpanel"
                                                                class="tab-pane active"
                                                                id="pill31"
                                                                aria-expanded="true"
                                                                aria-labelledby="base-pill31"
                                                              >
                                                                <div
                                                                  v-for="(data,index) in consultation.protocoleSoins.admissions.ambulatoire"
                                                                  :key=index
                                                                  class="row"
                                                                >
                                                                  <div class="form-group col-md-4 mb-2">
                                                                    <label for="userinput1" >Soin  *</label
                                                                    >
                                                                    <select v-model="data.soin" name=""
                                                                      id=""
                                                                      class="form-control round border-primary"
                                                                    >
                                                                      <option
                                                                        value="pansement"
                                                                      >
                                                                        Pansement
                                                                      </option>
                                                                      <option
                                                                        value="perfusion"
                                                                      >
                                                                        Perfusion 
                                                                      </option>
                                                                      <option
                                                                        value="injection en iv"
                                                                      >
                                                                        Injection en IV
                                                                      </option>
                                                                      <option
                                                                        value="injection en im"
                                                                      >
                                                                        Injection en IM
                                                                      </option>
                                                                    </select>
                                                                  </div>
                                                                  <div class="form-group col-md-7 mb-2">
                                                                    <label for="userinput1" >Description </label >
                                                                     <textarea name="" v-model="data.description" placeholder="Produit, quantité dosage consommable..." class="form-control round border-primary" id="" cols="30" rows="2"></textarea>
                                                                  </div>
                                                                  <div class="col-md-1 mb-2">
                                                                    <button @click.prevent="supprimerSoin(index)" class="btn btn-danger"> x </button>
                                                                  </div>
                                                                    
                                                                </div>
                                                              </div>

                                                      

                                                              <div
                                                                class="tab-pane"
                                                                id="pill32"
                                                                aria-labelledby="base-pill32"
                                                              >
                                                                <p>
                                                                  Sugar plum
                                                                  tootsie roll
                                                                  biscuit
                                                                  caramels.
                                                                  Liquorice
                                                                  brownie pastry
                                                                  cotton candy
                                                                  oat cake
                                                                  fruitcake
                                                                  jelly chupa
                                                                  chups. Pudding
                                                                  caramels
                                                                  pastry powder
                                                                  cake soufflé
                                                                  wafer
                                                                  caramels.
                                                                  Jelly-o pie
                                                                  cupcake.
                                                                </p>
                                                              </div>

                                                              <div
                                                                class="tab-pane"
                                                                id="pill33"
                                                                aria-labelledby="base-pill33"
                                                              >
                                                                <p>
                                                                  Biscuit ice
                                                                  cream halvah
                                                                  candy canes
                                                                  bear claw ice
                                                                  cream cake
                                                                  chocolate bar
                                                                  donut. Toffee
                                                                  cotton candy
                                                                  liquorice. Oat
                                                                  cake lemon
                                                                  drops
                                                                  gingerbread
                                                                  dessert
                                                                  caramels.
                                                                  Sweet dessert
                                                                  jujubes powder
                                                                  sweet sesame
                                                                  snaps.
                                                                </p>
                                                              </div>

                                                            </div>
                                                            <span class="mb-2">
                                                              <button @click.prevent="addSoin" class="btn btn-primary"> Ajouter un soin </button>
                                                               
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="card">
                                                    <div class="card-content">
                                                      <div class="card-body">
                                                        Constante
                                                       

                                                        <div class="form-check  my-2">
                                                          <div class="form-group col-md-6 my-2">
                                                            <label>Temperature</label>
                                                            <input v-model="consultation.protocoleSoins.constante.temperature" class="form-control mx-3" placeholder="temperature" step="0.1"  type="number"  />
                                                          </div>  
                                                          <div class="form-group col-md-6 my-2">
                                                            <label>Tension</label>
                                                            <input v-model="consultation.protocoleSoins.constante.tension" class="form-control mx-3" placeholder="tension" step="0.1" type="number"  />
                                                          </div>
                                                          <div class="form-group col-md-6 my-2">
                                                            <label>Pouls</label>
                                                            <input v-model="consultation.protocoleSoins.constante.pouls" class="form-control mx-3"  placeholder="pouls" step="0.1" type="number"  />
                                                            </div>
                                                        </div>
                                                        
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <input
                                                    type="reset"
                                                    class="btn btn-secondary"
                                                    data-dismiss="modal"
                                                    value="fermer"
                                                  />
                                                  <button 
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                    @click.prevent="saveProtocole"
                                                    class="btn btn-primary"
                                                    >Enregistrer</button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-body"></div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong>9- ORDONNANCIER</strong>
                                      </h4>
                                      <div class="form-actions top text-right">
                                        <router-link
                                          to="/admin/ordonnance/index"
                                          class="btn btn-info mr-1"
                                        >
                                          Faire une ordonnance
                                        </router-link>

                                        <div class="card-content">
                                          <div class="card-body text-center">
                                            <span class="alert-icon"
                                              ><i
                                                class="la la-info-circle"
                                                style="
                                                  font-size: 3.2rem;
                                                  color: red;
                                                "
                                              ></i
                                            ></span>
                                            <p class="text-danger">
                                              Aucune donnée disponible pour le
                                              moment!
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-body"></div>
                                    </form>

                                    <div class="form-group">
                                      <button
                                        type="button"
                                        class="btn mb-1 btn-success btn-icon btn-lg btn-block"
                                        data-toggle="modal"
                                        data-target="#slideInDown"
                                      >
                                        <i class="la la-check-circle"></i>
                                        Terminer la consultation
                                      </button>

                                      <div
                                        class="modal animated slideInDown text-left"
                                        id="slideInDown"
                                        tabindex="-1"
                                        role="dialog"
                                        aria-labelledby="myModalLabel77"
                                        style="display: none"
                                        aria-hidden="true"
                                      >
                                        <div
                                          class="modal-dialog"
                                          role="document"
                                        >
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h4
                                                class="modal-title"
                                                id="myModalLabel77"
                                              >
                                                Confimation de fin de
                                                consultation
                                              </h4>
                                              <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true"
                                                  >×</span
                                                >
                                              </button>
                                            </div>
                                            <div class="modal-body">
                                              <h5></h5>

                                              <div class="input-group">
                                                <div
                                                  class="d-inline-block custom-control custom-checkbox mr-1"
                                                >
                                                  <input
                                                    type="checkbox"
                                                    name="customer1"
                                                    class="custom-control-input"
                                                    checked=""
                                                    id="yes"
                                                  />
                                                  <label
                                                    class="custom-control-label mr-2"
                                                    for="yes"
                                                  >
                                                  </label>

                                                  Je confirme avoir pris le
                                                  patient
                                                  <strong>
                                                    AGBOLOU Marcelin</strong
                                                  >
                                                  en charge et j'aimerais
                                                  déclaré cette consultation
                                                  comme terminée.
                                                </div>
                                              </div>
                                            </div>
                                            <div class="modal-footer">
                                              <button
                                                type="button"
                                                class="btn grey btn-outline-secondary"
                                                data-dismiss="modal"
                                              >
                                                Fermer
                                              </button>
                                              <button
                                                type="button"
                                                class="btn btn-outline-success"
                                              >
                                                Valider
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Histrorique Médical -->
                        <div
                          role="tabpanel"
                          class="tab-pane active"
                          id="activeIcon12"
                          aria-labelledby="activeIcon12-tab1"
                          aria-expanded="true"
                        >
                          <h4
                            class="card-title"
                            id="from-actions-top-bottom-center"
                          >
                            <strong class="text-info"
                              >HISTORIQUE DE CONSULTATION</strong
                            >
                          </h4>
                          <div class="table-responsive">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Type de consultation</th>
                                  <th>Date</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>{{patients[0].infoGeneral.typeConsultation}}</td>
                                  <td>{{patients[0].infoGeneral.dateArriver}}</td>
                                  <td><i class="ft-eye"></i></td>
                                </tr>
                                
                              </tbody>
                            </table>
                          </div>
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  MOTIF DE CONSULTATION
                                </strong>
                                |{{patients[0].infoGeneral.dateArriver}}
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <p>
                                  {{consultation.motif}}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info"> ANAMNESE </strong> |
                                |{{patients[0].infoGeneral.dateArriver}}
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <p>
                                  <strong>Debut</strong> :<span
                                    class="float-right"
                                    >{{consultation.anamnese.debut}}</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Signe associé</strong> :<span
                                    class="float-right"
                                    >{{consultation.anamnese.signeAssocie}}</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Signe negatif</strong> :<span
                                    class="float-right"
                                    >{{consultation.anamnese.signeNegatif}}</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Traitement avant admission</strong> :<span
                                    class="float-right"
                                    >{{consultation.anamnese.traitementAvantAdmission}}</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Bilan avant admission</strong> :<span
                                    class="float-right"
                                    >{{consultation.anamnese.bilanAvantAdmission}}</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Evolution</strong> :<span
                                    class="float-right"
                                    >{{consultation.anamnese.evolution}}
                                  </span>
                                </p>
                               
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  DONNEES ANTHROPOMETRIQUE
                                </strong>
                                | {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <p>
                                  <strong>Température</strong> :<span
                                    class="float-right"
                                    > {{consultation.donneesAnthropometrique.temperature}}degré </span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Poids</strong> :<span
                                    class="float-right"
                                    >{{consultation.donneesAnthropometrique.poids}}kg</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Taille</strong> :<span
                                    class="float-right"
                                    >{{consultation.donneesAnthropometrique.taille}}cm</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Pouls</strong> :<span
                                    class="float-right"
                                    >{{consultation.donneesAnthropometrique.pouls}} BPM</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>IMC</strong> :<span
                                    class="float-right"
                                    >{{consultation.donneesAnthropometrique.icm}}</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Tension artérielle</strong> :<span
                                    class="float-right"
                                    >00,0
                                  </span>
                                </p>
                                <hr />
                                <p>
                                  <strong>Bras gauche</strong> :<span
                                    class="float-right"
                                    >{{consultation.donneesAnthropometrique.brasGauche}}cmHG</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Bras droit</strong> :<span
                                    class="float-right"
                                    >{{consultation.donneesAnthropometrique.brasDroit}}cmHG</span
                                  >
                                </p>
                                <hr />
                                <div v-for="(autre,index) in consultation.donneesAnthropometrique.autres " :key="index">
                                  <p>
                                  <strong>{{autre.libelle}}</strong> :<span
                                    class="float-right"
                                    >{{autre.data}}</span
                                  >
                                  </p>
                                  <hr />
                                </div>
                                
                               
                                
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  HYPOTHESE DIAGNOSTIQUE
                                </strong>
                                | {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="row">
                                <div class="col-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <div
                                        class="bs-callout-info callout-square callout-bordered callout-transparent mt-1"
                                      >
                                        <div class="media align-items-stretch">
                                          <div
                                            class="media-left media-middle bg-info callout-arrow-left position-relative p-2 d-flex align-items-center"
                                          >
                                            <i
                                              class="la la-send-o white font-medium-5"
                                            ></i>
                                          </div>
                                          <div class="media-body p-1">
                                            <p>
                                              {{consultation.hypotheseDiagnostics}}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">DIAGNOSTIQUE </strong>
                                | {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="row">
                                <div class="col-12">
                                  <div class="card">
                                    <div class="card-body">
                                      <div
                                        class="bs-callout-info callout-square callout-bordered callout-transparent mt-1"
                                      >
                                        <div class="media align-items-stretch">
                                          <div
                                            class="media-left media-middle bg-info callout-arrow-left position-relative p-2 d-flex align-items-center"
                                          >
                                            <i
                                              class="la la-send-o white font-medium-5"
                                            ></i>
                                          </div>
                                          <div class="media-body p-1">
                                            <p class="mt-1">
                                              {{consultation.diagnostics}}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  ANALYSES BIOLOGIQUES</strong
                                >
                                | {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                              <button class="btn btn-info btn-sm float-right">
                                <i class="ft-plus white"></i> Imprimer
                              </button>
                            </div>

                            <div class="card-content">
                              <div class="card-body">
                                <table class="table table-bordered">
                                  <thead class="bg-info white">
                                    <tr>
                                      <th>Analyse</th>
                                      <th>Interpretation</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(data,index) in taggingSelectedType" :key=index>
                                      <td>{{data.code}}</td>
                                      <td>{{data.name}}</td>
                                      <td><i class="ft-eye"></i></td>
                                    </tr>
                                    
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info"> EXAMENS </strong> |
                                {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <table class="table table-bordered">
                                  <thead class="bg-info white">
                                    <tr>
                                      <th>EXAMENS</th>
                                      <th>INTERPRETATION</th>
                                      <th>ACTION</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(data,index) in taggingSelectedBio " :key="index">
                                      <td>{{data.name}}</td>
                                      <td>Aucune</td>
                                      <td><i class="ft-eye"></i></td>
                                    </tr>
                                   
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  PROTOCOLES DE SOINS
                                  <span class="text-danger">(3 jours)</span>
                                </strong>
                                | {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                              <a class="heading-elements-toggle"
                                ><i class="la la-ellipsis-v font-medium-3"></i
                              ></a>
                              <div class="heading-elements">
                                <ul class="list-inline mb-0">
                                  <li>
                                    <a data-action="collapse"
                                      ><i class="ft-minus"></i
                                    ></a>
                                  </li>
                                  <li>
                                    <a data-action="reload"
                                      ><i class="ft-rotate-cw"></i
                                    ></a>
                                  </li>
                                  <li>
                                    <a data-action="expand"
                                      ><i class="ft-maximize"></i
                                    ></a>
                                  </li>
                                  <li>
                                    <a data-action="close"
                                      ><i class="ft-x"></i
                                    ></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="card-body">
                              <table class="table table-bordered">
                                <thead class="bg-info white">
                                  <tr>
                                    <th>No</th>
                                    <th>Date et Heure</th>
                                    <th>Soin</th>
                                    <th>Prod/Consommable</th>
                                    <th>Constante</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data,index) in consultation.protocoleSoins.admissions.ambulatoire" :key=index>
                                    <td> {{index}} </td>
                                    <td> {{consultation.protocoleSoins.date}} {{consultation.protocoleSoins.heure}} </td>
                                    <td>{{data.soin}}</td>
                                    <td>
                                      {{data.description}}
                                    </td>
                                    <th>
                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        {{consultation.protocoleSoins.constante.temperature}}
                                      </span>
                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        {{consultation.protocoleSoins.constante.tension}}
                                      </span>

                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        {{consultation.protocoleSoins.constante.pouls}}
                                      </span>
                                      
                                    </th>
                                  </tr>

                                 
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info"> ORDONNANCIER</strong>
                                | {{patients[0].infoGeneral.dateArriver}}
                              </h4>
                              <button class="btn btn-info btn-sm float-right">
                                <i class="ft-plus white"></i> Imprimer
                              </button>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <table class="table table-bordered">
                                  <thead class="bg-info white">
                                    <tr>
                                      <th>Médicaments</th>
                                      <th>Qté</th>
                                      <th>Posologie</th>
                                      <th>Pharmacie</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Artefan 80mg</td>
                                      <td>1</td>
                                      <td>2 comprimés matin et soir</td>
                                      <td>Interne</td>
                                    </tr>
                                    <tr>
                                      <td>Artefan 80mg</td>
                                      <td>1</td>
                                      <td>2 comprimés matin et soir</td>
                                      <td>Externe</td>
                                    </tr>

                                    <tr>
                                      <td>Artefan 80mg</td>
                                      <td>1</td>
                                      <td>2 comprimés matin et soir</td>
                                      <td>Externe</td>
                                    </tr>
                                    <tr>
                                      <td>Artefan 80mg</td>
                                      <td>1</td>
                                      <td>2 comprimés matin et soir</td>
                                      <td>Externe</td>
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

<script setup>
	import {ref,reactive} from 'vue'
	import {Patients} from "../../../api/patient"
	import { useRouter, useRoute } from "vue-router"
  import { createToast } from "mosha-vue-toastify";
  import VueMultiselect from 'vue-multiselect'
  import "mosha-vue-toastify/dist/style.css";

	const router = useRouter()
	const route = useRoute()

	const patients = ref([])
  const formData = ref(
    {
      antecedantPersonnel: {
       medicaux:'medicaux',
       chirurgicaux:'chirugicaux',
       gynecologiques:'gynecoloque',
       nutritionnels:'nutritionnels'
      },
      antecedantFamiliaux:{
        ascendant:'ascendant',
        colateraux:'colateraux',
        descendant:'descendant',
      },
      autres:{
        allergieMedicament:'allergie medi',
        allergieAliment:'allergie',
        totem:'totem ',
        modeVie:'mode vie'
      }
    }
  )
  const consultation = reactive({
    motif:'demo',
    anamnese:{
      debut: 'demo',
      signeAssocie:'demo',
      signeNegatif:'demo',
      traitementAvantAdmission:'demo',
      bilanAvantAdmission:'demo',
      evolution:'demo',
      
    },
    donneesAnthropometrique: {
      taille:170,
      poids:78,
      icm:26.99,
      temperature:42,
      pouls:88,
      etatGeneral:'demo',
      brasGauche:'demo',
      brasDroit:'demo',
      autres:[]
    },
    hypotheseDiagnostics :'lorem ipsum dolor ipset hypothese',
    examenParaclinique:{
      typeAnalyse:'demo',
      analyseBiologique:'demo',
    },
    diagnostics:'demo diagnostic',
    protocoleSoins:{
      date:'',
      heure:'',
      admissions:{
        ambulatoire:[
          {soin:'Pansement',description:'une description'}
        ],
        hospitalisation:[
          {description:''}
        ],
        hospitalisation:[
          {soin:'Pansement', description:''}
        ]

      },
      constante :{
        isVisible:'temperature',
        temperature:'38',
        tension:'8.5',
        pouls:'5.7'
      }
    }
  }

  )
  //multiselected option
  const  taggingSelectedType = ref(null)
  const  taggingOptionsType = ref(
   [
    { name: 'Radiographie', code:"ra" },
    { name: 'Scanner',code:'sc' },
    { name: 'Mammographie', code:'ma' },
    { name: 'Echographie',code:'ec'  },
    { name: 'IRM',code:'irm'  },
    ]
  )
  const  taggingSelectedBio = ref(null)
  const  taggingOptionsBio = ref(
   [
    { name: 'Glycémie', code:"gl" },
    { name: ' NFS',code:'nsf' },
    { name: 'Natrémie', code:'na' },
    { name: 'Kaliémie',code:'ka'  },
    { name: 'Chlorémie',code:'ch'  },
    { name: 'Calcémie',code:'ca'  },
    { name: 'Magnésémie',code:'ma'  },
    { name: 'Transaminases + TGO +TGT',code:'tr'  },
    { name: 'Amylasémie',code:'amy'  },
    { name: 'Azotémie',code:'azo'  },
    { name: 'Créatininémie',code:'cre'  },
    { name: 'Uricémie',code:'urc'  },
    { name: 'ECG',code:'ecg'  },
    { name: 'TCK',code:'tck'  },
    { name: 'TP / INR',code:'tp'  },
    { name: 'CPK',code:'cpk'  },
    { name: 'Cholestérolémie T',code:'chot'  },
    { name: 'Cholestérolémie HDL',code:'chohdl'  },
    { name: 'Triglycéridémie',code:'trig'  },
    { name: 'PSA totales ',code:'psat'  },
    { name: 'PSA prostatiques/',code:'psap'  },
    { name: 'FPSA',code:'fpsa'  },
    { name: 'Electrophorèse des protéines',code:'elecP'  },
    { name: "Electrophorèse de l'HB",code:'elech'  },
    { name: "Ag HBs",code:'ags'  },
    { name: "Ag HBc",code:'agc'  },
    { name: "G6PD",code:'g6pd'  },
    { name: "Alpha foeto protéines",code:'afp'  },
    { name: "Sérologie Rubéole",code:'seror'  },
    { name: "Sérologie Toxoplasmose ",code:'serot'  },
    { name: "ASLO ",code:'aslo'  },
    { name: "Biluribine D",code:'bild'  },
    { name: "Biluribine I",code:'bili'  },
    { name: "ECBU + Antibiogramme ",code:'ecbu'  },
    { name: "Spermoogramme + Antibiogramme ",code:'sperAn'  },
    { name: "Sérologie HVI",code:'serohvi'  },
    { name: "GSRH",code:'gsrh'  },
    ]
  )


// tag selected 
const addTagType = function (newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  taggingOptionsType.push(tag)
  taggingSelectedType.push(tag)
}
const addTagBio = function (newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  taggingOptionsBio.push(tag)
  taggingSelectedBio.push(tag)
}
  //les chargements
  const chargementPersonel = ref(false)
  const chargementFamiliaux = ref(false)
  const chargementAutre = ref(false)
  const chargementDiagnosticsHypothese = ref(false)
  const chargementDiagnostics = ref(false)
  const chargementAntro = ref(false)
  const chargementAnamnese = ref(false)
  const  chargementMotif = ref(false)
  //addConsultantDiagnostic
  //addConsultationAntro
  //addConsultationAnamnes
  //addConsultationMotif
  //chargementAntro

  //get data
	const getData = JSON.parse(localStorage.getItem('patients'))
	if(getData !=null || getData != undefined) {
		const datas = getData
		patients.value = [...Patients,...datas]
	}else {
		patients.value = Patients
	}
	
	patients.value = patients.value.filter(patient => patient.id ==route.params.id)

  const toast = (message,type) => {
    createToast(message,{type:type})
  }
  const calculIMC = function () {
    const mettre  = (consultation.donneesAnthropometrique.taille) /100
    const mettreCarre = mettre * mettre
    const poids = consultation.donneesAnthropometrique.poids
    
    const resultat = poids / mettreCarre
    consultation.donneesAnthropometrique.icm = resultat.toFixed(2)
  }
  const saveProtocole = function() {
    setTimeout(() => {
      chargementPersonel.value = false
      toast('Protocole enregistré', 'success')
    }, 2000)
  }
  const addAntecedantPersonnel = function () {
    if(chargementPersonel.value == false) {
      chargementPersonel.value = true
      setTimeout(() => {
        chargementPersonel.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
     
    }
   
  }
  const addAntecedantFamiliaux = function() {
    if(chargementFamiliaux.value == false) {
      chargementFamiliaux.value = true
      setTimeout(() => {
        chargementFamiliaux.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
      
    }
    
  }
  const addAutre  = function() {
    if(chargementAutre.value == false) {
      chargementAutre.value = true
      setTimeout(() => {
        chargementAutre.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
      
    }
    
  }
  //addConsultantDiagnostic
  //addConsultationAntro
  //addConsultationAnamnes
  const addConsultationDiagnostic = function() {
    if(chargementDiagnosticsHypothese.value == false) {
      chargementDiagnosticsHypothese.value = true
      setTimeout(() => {
        chargementDiagnosticsHypothese.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
     
    }
  }
  const addConsultationAntro = function() {
    if(chargementAntro.value == false) {
      chargementAntro.value = true
      setTimeout(() => {
        chargementAntro.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
     
    }
  }
  const addConsultationAnamnese = function() {
    if(chargementAnamnese.value == false) {
      chargementAnamnese.value = true
      setTimeout(() => {
        chargementAnamnese.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
     
    }
  }
  const addConsultationMotif = function() {
    if(chargementMotif.value == false) {
      chargementMotif.value = true
      setTimeout(() => {
        chargementMotif.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
     
    }
  }
  const addDiagnostic = function() {
    if(chargementDiagnostics.value == false) {
      chargementDiagnostics.value = true
      setTimeout(() => {
        chargementDiagnostics.value = false
        toast('Nouveau enregistrment', 'success')
      }, 7000)
     
    }
  }

  //champs 
  const addChamp = function() {
    consultation.donneesAnthropometrique.autres.push({libelle:'',data:''})
  }
  const supprimerChamps = function(index) {
    consultation.donneesAnthropometrique.autres.splice(index, 1);
  }

  //soins  modale

  const addSoin = function() {
    consultation.protocoleSoins.admissions.ambulatoire.push({soin:'',description:''})
  }

  const supprimerSoin = function(index) {
    consultation.protocoleSoins.admissions.ambulatoire.splice(index, 1);
  }



	
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
.curseur {
  cursor:pointer
}
.customInput {
  border:none;
  border-bottom:1px solid black;
  outline:none;
  margin:2px 5px;
}
.supprimer {
  color:red;
  font-size:16px;
  font-weight:bold
}
</style>
