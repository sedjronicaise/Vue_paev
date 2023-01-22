<template>

  <div>
      <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light bg-info navbar-shadow">
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                    <li class="nav-item">
                        <img class="brand-logo" alt="modern admin logo" style="width: 180px;" src="/hospital/app-assets/images/logo/logo.png">
                    </li>
                    <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="material-icons mt-50">more_vert</i></a></li>
                </ul>
            </div>
            <div class="navbar-container content">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle" href="#"><i class="ft-menu"></i></a></li>
                        
                        <li class="nav-item"><a class="nav-link nav-link-expand mx-md-1 mx-0" href="#"><i class="ficon ft-maximize"></i></a></li>
                        
                    </ul>
                    <ul class="nav navbar-nav float-right">
                       
                        <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="material-icons">notifications_none</i>
                            <span class="badge badge-pill badge-danger badge-up badge-glow">2</span></a>
                            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                <li class="dropdown-menu-header">
                                    <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span>
                                    </h6><span class="notification-tag badge badge-danger float-right m-0">02</span>
                                </li>
                                <li class="scrollable-container media-list w-100"><a href="javascript:void(0)">

                                        <div class="media">
                                            <div class="media-left align-self-center"><i class="material-icons icon-bg-circle bg-cyan mr-0">check_circle</i></div>
                                            <div class="media-body">
                                                <h6 class="media-heading">Complete the task</h6><small>
                                                    <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last week</time></small>
                                            </div>
                                        </div>
                                    </a><a href="javascript:void(0)">
                                        <div class="media">
                                            <div class="media-left align-self-center"><i class="material-icons icon-bg-circle bg-teal mr-0">insert_drive_file</i></div>
                                            <div class="media-body">
                                                <h6 class="media-heading">Generate monthly report</h6><small>
                                                    <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last month</time></small>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a></li>
                            </ul>
                        </li>
                        <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="material-icons">mail_outline</i></a>
                            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                <li class="dropdown-menu-header">
                                    <h6 class="dropdown-header m-0"><span class="grey darken-2">Messages</span></h6><span class="notification-tag badge badge-warning float-right m-0">04</span>
                                </li>
                                <li class="scrollable-container media-list w-100"><a href="javascript:void(0)">
                                       
                                       
                                        <div class="media">
                                            <div class="media-left"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="/hospital/app-assets/images/portrait/small/avatar-s-3.png" alt="avatar"><i></i></span></div>
                                            <div class="media-body">
                                                <h6 class="media-heading">Carie Berra</h6>
                                                <p class="notification-text font-small-3 text-muted">Can we have call in this week ?</p><small>
                                                    <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Friday</time></small>
                                            </div>
                                        </div>
                                    </a><a href="javascript:void(0)">
                                        <div class="media">
                                            <div class="media-left"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="/hospital/app-assets/images/portrait/small/avatar-s-6.png" alt="avatar"><i></i></span></div>
                                            <div class="media-body">
                                                <h6 class="media-heading">Eric Alsobrook</h6>
                                                <p class="notification-text font-small-3 text-muted">We have project party this saturday.</p><small>
                                                    <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">last month</time></small>
                                            </div>
                                        </div>
                                    </a></li>
                                <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">Lire tous les messages</a></li>
                            </ul>
                        </li>
                        <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"><span class="mr-1 user-name text-bold-700"> {{ users.name }} {{ users.username }} ({{ users.role }})  </span><span class="avatar avatar-online"><img src="/hospital/app-assets/images/portrait/small/avatar-s-19.png" alt="avatar"><i></i></span></a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#"><i class="material-icons"></i> Mon profil</a>
                                <a class="dropdown-item" href="#"><i class="material-icons">playlist_add_check</i>Consultation</a>
                                <a class="dropdown-item" href="#"><i class="material-icons">content_paste</i> Mes Rendez vous</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item"  @click.prevent="logout">
                                    <i class="material-icons">power_settings_new</i>
                                     Déconnexion
                                </a>
                                <form id="logout-form" action="" method="POST" class="d-none">
                                   
                                </form>                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>

      <div class="main-menu material-menu menu-fixed menu-light menu-accordion   menu-shadow " style="padding-top:10px;"  data-scroll-to-active="true">     
          <div class="main-menu-content">
              <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

                  <li class="active">
                     <router-link to="/admin/patient/stats">
                        <i class="la la-home"></i><span class="menu-title" data-i18n="Dashboard Hospital">Tableau de bord</span>
                    </router-link>
                    
                  </li>

                  <li class=" navigation-header">
                      <span data-i18n="Professional"><em>Volet Médical</em></span>
                  </li>

                  <div class="dropdown-divider"></div>

                  <li class=" nav-item">
                    <router-link to="/admin/patient/index">
                          <i class="la la-users"></i><span class="menu-title" data-i18n="Patients">Patients</span>
                    </router-link>
                      
                  </li>
                  
                  <li class=" nav-item">
                        <router-link to="/admin/praticien/index">
                          <i class="la la-stethoscope"></i><span class="menu-title" data-i18n="Doctors">Praticiens</span>
                        </router-link>
                  </li>
                  
                

                  <li class=" nav-item">
                        <router-link to="/admin/ordonnance/index">
                            <i class="la la-clipboard"></i><span class="menu-title" data-i18n="Report">Ordonnance</span>
                        </router-link> 
                  </li>
                  

                  
                  <li class=" nav-item"><a href="#"><i class="la la-edit"></i><span class="menu-title" data-i18n="Invoice">Certificats médicales</span></a>
                      <ul class="menu-content">
                        <li><a class="menu-item" href=""><i class="material-icons"></i><span data-i18n="Invoice Summary">Certificat de repos</span></a>
                          </li>
                          <li><a class="menu-item" href=""><i class="material-icons"></i><span data-i18n="Invoice Template">Certificat de travail</span></a>
                          </li>
                          <li><a class="menu-item" href=""><i class="material-icons"></i><span data-i18n="Invoice List">Certificat de bonne santé</span></a>
                          </li>
                      </ul>
                  </li>
                  
                  <li class=" navigation-header"><span data-i18n="Apps"><em>Volet Nutritionnel</em></span><i class="la la-ellipsis-h" data-toggle="tooltip" data-placement="right" data-original-title="Apps"></i>
                  </li>
                  <div class="dropdown-divider"></div>

                  <li class=" nav-item">
                        <router-link to="/admin/nutrition">
                            <i class="la la-server"></i><span class="menu-title" data-i18n="Components">Nutrition</span>
                        </router-link>
                  </li>

                  <li class=" navigation-header">
                      <span data-i18n="Professional"><em>Outils et Services</em></span>
                  </li>

                  <div class="dropdown-divider"></div>

                  <li class=" nav-item">
                    <a href=""><i class="la la-comments"></i><span class="menu-title" data-i18n="Chat">Messagerie</span></a>
                  </li>
                
                
                  <!-- <li class=" nav-item"><a href="#"><i class="la la-dollar"></i><span class="menu-title" data-i18n="Payments">Comptabilité</span></a>
                      <ul class="menu-content">
                          <li><a class="menu-item" href=""><i class="material-icons"></i><span>Caisse</span></a>
                          </li>
                          <li><a class="menu-item" href=""><i class="material-icons"></i><span>Factures</span></a>
                          </li>
                      </ul>
                  </li> -->

              </ul>
          </div>
      </div>


      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <!-- BEGIN: Footer-->
      <footer class="footer footer-static footer-light navbar-border navbar-shadow">
          <p class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2"><span class="float-md-left d-block d-md-inline-block">Copyright &copy; 
              <a class="text-bold-800 grey darken-2" href="#" target="_blank">Réalisé par Nicuxgroup</a></span>
              <span class="float-md-right d-none d-lg-block">Programme de l'Augmentation de l'Espérance de Vie<i class="ft-heart pink"></i><span id="scroll-top"></span></span>
          </p>
      </footer>
  </div>
</template>

<script setup>
    import { onMounted,reactive } from 'vue';
    import { useRouter, useRoute } from "vue-router";
    import { createToast } from "mosha-vue-toastify";
    // import the styling for the toast
    import "mosha-vue-toastify/dist/style.css";
    const router = useRouter();
    const route = useRoute();

  const users = reactive({})
  onMounted(() => {
    const usersInfo = JSON.parse(localStorage.getItem('gestClinique'))
    if(usersInfo != null || usersInfo != undefined ) {
      users.name = usersInfo.users.name
      users.username = usersInfo.users.username
      users.role = usersInfo.users.role
    }
    
  })
  const toast = (message,type) => {
    createToast(message,{type:type})
  }
  const logout = function() {
    localStorage.removeItem('gestClinique')
    toast('vous est déconnecté  ', 'success')
    router.push('/login')
  }
</script>

<style>

</style>