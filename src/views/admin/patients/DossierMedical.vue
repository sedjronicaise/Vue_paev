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
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                                <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                Enregistrer
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
                                                type="submit"
                                                class="btn btn-primary"
                                              >
                                                <i
                                                  class="la la-check-square-o"
                                                ></i>
                                                Enregistrer
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
                                        type="submit"
                                        class="btn btn-primary"
                                      >
                                        <i class="la la-check-square-o"></i>
                                        Enregistrer
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
                                    <div class="card-text">
                                      <div
                                        class="alert alert-icon-right alert-info alert-dismissible mb-2"
                                        role="alert"
                                      >
                                        <span class="alert-icon"
                                          ><i class="la la-info"></i
                                        ></span>
                                        <button
                                          type="button"
                                          class="close"
                                          data-dismiss="alert"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                        <strong
                                          >Enregistrement effectué avec
                                          succès</strong
                                        >
                                      </div>
                                    </div>
                                    <form class="form">
                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-12 mb-2">
                                            <input
                                              type="text"
                                              id="eventInput1"
                                              class="form-control round border-primary"
                                              placeholder="Entrer le motif de consultation"
                                              name="motifconsultattion"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                          type="submit"
                                          class="btn btn-primary"
                                        >
                                          <i class="la la-check-square-o"></i>
                                          Enregistrer
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
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="evolutionanamese"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                          type="submit"
                                          class="btn btn-primary"
                                        >
                                          <i class="la la-check-square-o"></i>
                                          Enregistrer
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
                                                class="form-control round border-primary"
                                                placeholder=""
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
                                                class="form-control round border-primary"
                                                placeholder=""
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
                                                class="form-control round border-primary"
                                                placeholder=""
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
                                              ><i class="la la-plus"></i>
                                              Ajouter un organe à
                                              examiner</label
                                            >
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                          type="submit"
                                          class="btn btn-primary"
                                        >
                                          <i class="la la-check-square-o"></i>
                                          Enregistrer
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
                                              name="hypothesediagnostic"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                          type="submit"
                                          class="btn btn-primary"
                                        >
                                          <i class="la la-check-square-o"></i>
                                          Enregistrer
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
                                        <strong>5-1 EXAMENS PHYSIQUES</strong>
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
                                                    <div
                                                      class="table-responsive"
                                                    >
                                                      <table
                                                        class="table table-bordered mb-0"
                                                      >
                                                        <tbody
                                                          data-select2-id="1"
                                                        >
                                                          <tr>
                                                            <td
                                                              class="width-350"
                                                              data-select2-id="15"
                                                            >
                                                              <div
                                                                class="card-body"
                                                              >
                                                                <div
                                                                  class="form-group"
                                                                >
                                                                  <select
                                                                    class="select2 form-control"
                                                                    data-select2-id="1"
                                                                    tabindex="-1"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <optgroup>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Radiographie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Scanner
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Mammographie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Echographie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        IRM
                                                                      </option>
                                                                    </optgroup>
                                                                  </select>
                                                                  <span
                                                                    class="select2 select2-container select2-container--default select2-container--open select2-container--focus select2-container--above"
                                                                    dir="ltr"
                                                                    style="
                                                                      width: 100%;
                                                                    "
                                                                  >
                                                                    <span
                                                                      class="selection"
                                                                      ><span
                                                                        class="select2-selection select2-selection--single"
                                                                        role="combobox"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="true"
                                                                        tabindex="0"
                                                                        aria-disabled="false"
                                                                        aria-labelledby="select2-gysu-container"
                                                                        aria-owns="select2-gysu-results"
                                                                        aria-activedescendant="select2-gysu-result-ziee-HI"
                                                                      >
                                                                      </span></span
                                                                    ><span
                                                                      class="dropdown-wrapper"
                                                                      aria-hidden="true"
                                                                    ></span
                                                                  ></span>
                                                                </div>
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div
                                                                class="card-content"
                                                              >
                                                                <div
                                                                  class="card-body text-center"
                                                                >
                                                                  <span
                                                                    class="alert-icon"
                                                                    ><i
                                                                      class="la la-info-circle"
                                                                      style="
                                                                        font-size: 3.2rem;
                                                                        color: red;
                                                                      "
                                                                    ></i
                                                                  ></span>
                                                                  <p
                                                                    class="text-danger"
                                                                  >
                                                                    Aucune
                                                                    donnée
                                                                    disponible
                                                                    pour le
                                                                    moment!
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </td>
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
                                                    <div
                                                      class="table-responsive"
                                                    >
                                                      <table
                                                        class="table table-bordered mb-0"
                                                      >
                                                        <tbody
                                                          data-select2-id="1"
                                                        >
                                                          <tr>
                                                            <td
                                                              class="width-350"
                                                              data-select2-id="15"
                                                            >
                                                              <div
                                                                class="card-body"
                                                              >
                                                                <div
                                                                  class="form-group"
                                                                >
                                                                  <select
                                                                    class="select2 form-control"
                                                                    data-select2-id="1"
                                                                    tabindex="-1"
                                                                    aria-hidden="true"
                                                                  >
                                                                    <optgroup>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Glycémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        NFS
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Natrémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Kaliémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Chlorémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Calcémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Magnésémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Transaminases
                                                                        TGO +
                                                                        TGP
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Amylasémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Azotémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Créatininémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Uricémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        ECG
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        TCK
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        TP/INR
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        CPK
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Cholestérolémie
                                                                        T
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Cholestérolémie
                                                                        HDL
                                                                      </option>

                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Triglycéridémie
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        PSA
                                                                        totales
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        PSA
                                                                        prostatiques/
                                                                        FPSA
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Electrophorèse
                                                                        des
                                                                        protéines
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Electrophorèse
                                                                        de l'Hb
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Ag HBs
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Ag HBc
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        G6PD
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Alpha
                                                                        foeto
                                                                        protéines
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Sérologie
                                                                        Rubéole
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Sérologie
                                                                        Toxoplasmose
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        ASLO
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Biluribine
                                                                        D
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Biluribine
                                                                        I
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        ECBU +
                                                                        Antibiogramme
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Spermoogramme
                                                                        +
                                                                        Antibiogramme
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Sérologie
                                                                        HIV
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        GSRH
                                                                      </option>
                                                                    </optgroup>
                                                                  </select>
                                                                  <span
                                                                    class="select2 select2-container select2-container--default select2-container--open select2-container--focus select2-container--above"
                                                                    dir="ltr"
                                                                    style="
                                                                      width: 100%;
                                                                    "
                                                                  >
                                                                    <span
                                                                      class="selection"
                                                                      ><span
                                                                        class="select2-selection select2-selection--single"
                                                                        role="combobox"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="true"
                                                                        tabindex="0"
                                                                        aria-disabled="false"
                                                                        aria-labelledby="select2-gysu-container"
                                                                        aria-owns="select2-gysu-results"
                                                                        aria-activedescendant="select2-gysu-result-ziee-HI"
                                                                      >
                                                                      </span></span
                                                                    ><span
                                                                      class="dropdown-wrapper"
                                                                      aria-hidden="true"
                                                                    ></span
                                                                  ></span>
                                                                </div>
                                                              </div>
                                                            </td>
                                                            <td>
                                                              <div
                                                                class="card-content"
                                                              >
                                                                <div
                                                                  class="card-body text-center"
                                                                >
                                                                  <span
                                                                    class="alert-icon"
                                                                    ><i
                                                                      class="la la-info-circle"
                                                                      style="
                                                                        font-size: 3.2rem;
                                                                        color: red;
                                                                      "
                                                                    ></i
                                                                  ></span>
                                                                  <p
                                                                    class="text-danger"
                                                                  >
                                                                    Aucune
                                                                    donnée
                                                                    disponible
                                                                    pour le
                                                                    moment!
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </td>
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
                                      <div class="form-body"></div>
                                    </form>

                                    <form class="form">
                                      <h4
                                        class="card-title"
                                        id="from-actions-top-bottom-center"
                                      >
                                        <strong>7- DIAGNOSTICS</strong>
                                      </h4>
                                      <div class="form-body">
                                        <div class="row">
                                          <div class="form-group col-12 mb-2">
                                            <input
                                              type="text"
                                              id="eventInput1"
                                              class="form-control round border-primary"
                                              placeholder=""
                                              name="hypothesediagnostic"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-actions text-right">
                                        <button
                                          type="submit"
                                          class="btn btn-primary"
                                        >
                                          <i class="la la-check-square-o"></i>
                                          Enregistrer
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
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="tab-content px-1 pt-1"
                                                            >
                                                              <div
                                                                role="tabpanel"
                                                                class="tab-pane active"
                                                                id="pill31"
                                                                aria-expanded="true"
                                                                aria-labelledby="base-pill31"
                                                              >
                                                                <div
                                                                  class="row"
                                                                >
                                                                  <div
                                                                    class="form-group col-md-3 mb-2"
                                                                  >
                                                                    <label
                                                                      for="userinput1"
                                                                      >Soin
                                                                      *</label
                                                                    >
                                                                    <select
                                                                      name=""
                                                                      id=""
                                                                      class="form-control round border-primary"
                                                                    >
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        soin1
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        soin2
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        soin3
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        soin4
                                                                      </option>
                                                                    </select>
                                                                  </div>
                                                                  <div
                                                                    class="form-group col-md-5 mb-2"
                                                                  >
                                                                    <label
                                                                      for="userinput1"
                                                                      >Produit</label
                                                                    >
                                                                    <select
                                                                      name=""
                                                                      id=""
                                                                      class="form-control round border-primary"
                                                                    >
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        produit1
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        produit1
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        produit1
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        produit1
                                                                      </option>
                                                                    </select>
                                                                    <span
                                                                      class="mb-2"
                                                                    >
                                                                      <a href=""
                                                                        >+
                                                                        Ajouter
                                                                        un
                                                                        produit</a
                                                                      ></span
                                                                    >
                                                                  </div>
                                                                  <div
                                                                    class="form-group col-md-2 mb-2"
                                                                  >
                                                                    <label
                                                                      for="userinput1"
                                                                      >Quantité</label
                                                                    >
                                                                    <input
                                                                      type="number"
                                                                      id="qte"
                                                                      class="form-control round border-primary"
                                                                      placeholder=""
                                                                      name="qte"
                                                                    />
                                                                  </div>
                                                                  <div
                                                                    class="form-group col-md-2 mb-2"
                                                                  >
                                                                    <label
                                                                      for="userinput1"
                                                                      >Dosage</label
                                                                    >
                                                                    <input
                                                                      type="text"
                                                                      id="userinput1"
                                                                      class="form-control round border-primary"
                                                                      placeholder=""
                                                                      name="dosage"
                                                                    />
                                                                    <span
                                                                      class="mb-2"
                                                                    >
                                                                      <a
                                                                        href=""
                                                                        class="text-danger"
                                                                        >x
                                                                        supprimer</a
                                                                      ></span
                                                                    >
                                                                  </div>

                                                                  <div
                                                                    class="form-group col-md-6 offset-md-3 mb-2"
                                                                  >
                                                                    <label
                                                                      for="userinput1"
                                                                      >Consommable</label
                                                                    >
                                                                    <select
                                                                      name=""
                                                                      id=""
                                                                      class="form-control round border-primary"
                                                                    >
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Consommable
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Consommable
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Consommable
                                                                      </option>
                                                                      <option
                                                                        value=""
                                                                      >
                                                                        Consommable
                                                                      </option>
                                                                    </select>
                                                                    <span>
                                                                      <a href=""
                                                                        >+
                                                                        Ajouter
                                                                        un
                                                                        consommable</a
                                                                      ></span
                                                                    >
                                                                  </div>
                                                                  <div
                                                                    class="form-group col-md-2 mb-2"
                                                                  >
                                                                    <label
                                                                      for="userinput1"
                                                                      >Quantité</label
                                                                    >
                                                                    <input
                                                                      type="number"
                                                                      id="qte"
                                                                      class="form-control round border-primary"
                                                                      placeholder=""
                                                                      name="qte"
                                                                    />
                                                                    <span
                                                                      class="mb-2"
                                                                    >
                                                                      <a
                                                                        href=""
                                                                        class="text-danger"
                                                                        >x
                                                                        supprimer
                                                                      </a></span
                                                                    >
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
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="card">
                                                    <div class="card-content">
                                                      <div class="card-body">
                                                        Constante
                                                        <form
                                                          class="form form-horizontal"
                                                        >
                                                          <div
                                                            class="form-body"
                                                          >
                                                            <div
                                                              class="form-group row"
                                                            >
                                                              <div
                                                                class="col-md-12 mx-auto"
                                                              >
                                                                <div
                                                                  class="input-group"
                                                                >
                                                                  <div
                                                                    class="d-inline-block custom-control custom-radio mr-1"
                                                                  >
                                                                    <input
                                                                      type="radio"
                                                                      name="customer1"
                                                                      class="custom-control-input"
                                                                      id="yes"
                                                                    />
                                                                    <label
                                                                      class="custom-control-label"
                                                                      for="yes"
                                                                      >Température</label
                                                                    >
                                                                  </div>
                                                                  <div
                                                                    class="d-inline-block custom-control custom-radio"
                                                                  >
                                                                    <input
                                                                      type="radio"
                                                                      name="customer2"
                                                                      class="custom-control-input"
                                                                      id="no"
                                                                    />
                                                                    <label
                                                                      class="custom-control-label"
                                                                      for="no"
                                                                      >Tension</label
                                                                    >
                                                                  </div>

                                                                  <div
                                                                    class="d-inline-block custom-control custom-radio"
                                                                  >
                                                                    <input
                                                                      type="radio"
                                                                      name="customer3"
                                                                      class="custom-control-input"
                                                                      id="three"
                                                                    />
                                                                    <label
                                                                      class="custom-control-label"
                                                                      for="three"
                                                                      >Pouls</label
                                                                    >
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </form>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <input
                                                    type="reset"
                                                    class="btn btn-secondary"
                                                    data-dismiss="modal"
                                                    value="close"
                                                  />
                                                  <input
                                                    type="submit"
                                                    class="btn btn-primary"
                                                    value="Login"
                                                  />
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
                                  <td>Médecine génerale</td>
                                  <td>18-09-2022</td>
                                  <td><i class="ft-eye"></i></td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Pédiatrie</td>
                                  <td>22-10-2022</td>
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
                                | 19-12-2022 à 14h 50 min
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <p>
                                  Patient souffrant de Lorem ipsum dolor sit
                                  amet consectetur, adipisicing elit. Non odio
                                  beatae aliquid placeat libero quae minima quis
                                  autem accusantium vo....
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info"> ANAMNESE </strong> |
                                19-12-2022 à 14h 50 min
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <p>
                                  Patient souffrant de Lorem ipsum dolor sit
                                  amet consectetur, adipisicing elit. Non odio
                                  beatae aliquid placeat libero quae minima quis
                                  autem accusantium vo....
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  EXAMENS CLINIQUES
                                </strong>
                                | 19-12-2022 à 14h 50 min
                              </h4>
                            </div>
                            <div class="card-content">
                              <div class="card-body">
                                <p>
                                  <strong>Température</strong> :<span
                                    class="float-right"
                                    >38,8 °C</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Poids</strong> :<span
                                    class="float-right"
                                    >70kg</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Taille</strong> :<span
                                    class="float-right"
                                    >172cm</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Pouls</strong> :<span
                                    class="float-right"
                                    >89 BPM</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>IMC</strong> :<span
                                    class="float-right"
                                    >2,457</span
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
                                    >12/5cmHG</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Bras droit</strong> :<span
                                    class="float-right"
                                    >12/5cmHG</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Abdomen</strong> :<span
                                    class="float-right"
                                    >Souple</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Coeur</strong> :<span
                                    class="float-right"
                                    >RAS</span
                                  >
                                </p>
                                <hr />
                                <p>
                                  <strong>Poumon</strong> :<span
                                    class="float-right"
                                    >Libre</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title">
                                <strong class="text-info">
                                  HYPOTHESE DIAGNOSTIQUE
                                </strong>
                                | 19-12-2022 à 14h 50 min
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
                                              Ici sera récupéré l'Hypothèse
                                              diagnostique émis par le Dr.
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
                                | 19-12-2022 à 14h 50 min
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
                                              Patient souffrant du Paludisme et
                                              d'une anémie microcytaire. Patient
                                              souffrant du Paludisme et d'une
                                              anémie microcytaire. Patient
                                              souffrant du Paludisme et d'une
                                              anémie microcytaire.
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
                                | 19-12-2022 à 14h 50 min
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
                                    <tr>
                                      <td>NFS</td>
                                      <td>Anémie microcytaire</td>
                                      <td><i class="ft-eye"></i></td>
                                    </tr>
                                    <tr>
                                      <td>Goutte épaisse</td>
                                      <td>GE positive avec un DP de 5000</td>
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
                                19-12-2022 à 14h 50 min
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
                                    <tr>
                                      <td>RADIOLOGIE</td>
                                      <td>Aucune</td>
                                      <td><i class="ft-eye"></i></td>
                                    </tr>
                                    <tr>
                                      <td>ECHOGRAPHIE</td>
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
                                | 19-12-2022 à 14h 50 min
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
                                  <tr>
                                    <td>1</td>
                                    <td>01-02-2022 à 12:30</td>
                                    <td>injection IM</td>
                                    <td>
                                      Arthémether 80mg, Injectable (Qté: 2)
                                    </td>
                                    <th>
                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        TA
                                      </span>
                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        T°
                                      </span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <td>2</td>
                                    <td>01-02-2022 à 12:30</td>
                                    <td>injection IM</td>
                                    <td>
                                      Arthémether 80mg, Injectable (Qté: 2)
                                    </td>
                                    <th>
                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        P
                                      </span>
                                      <span
                                        class="badge badge-info badge-square"
                                      >
                                        IMC
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
                                | 19-12-2022 à 14h 50 min
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
	const router = useRouter()
	const route = useRoute()

	const patients = ref([])
	const getData = JSON.parse(localStorage.getItem('patients'))
	if(getData !=null || getData != undefined) {
		const datas = getData
		patients.value = [...Patients,...datas]
	}else {
		patients.value = Patients
	}
	
	patients.value = patients.value.filter(patient => patient.id ==route.params.id)
	console.log(patients.value)
</script>

<style></style>
