<template>
  <div>
    <main id="page-content" class="d-flex nm-aic nm-vh-md-100">
      <!-- // Non-form side -->
      <div
        id="non-form-side"
        class="col-lg-6 col-xl-8 d-none d-lg-flex nm-aic nm-vh-100"
      >
        <div class="overlay"></div>
      </div>
      <!-- Non-form Side // -->

      <div class="container">
        <div class="row">
          <div
            class="col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 nm-st nm-st-md"
          >
            <div class="nm-mb-2 nm-mb-md-2 text-center">
              <h2>Bienvenue au</h2>
              <button @click="toast">Toast it!</button>

              <img
                src="/hospital/app-assets/images/logo/logo.png"
                width="250"
                class="img-rounded mt-3"
                alt="Logo"
              />

              <p class="mt-3">
                <strong>
                  Veuillez vous identifier pour accéder à votre compte!
                </strong>
                <strong class="text-danger fw-bold fs-4">
                 {{errors}}
                </strong>
              </p>
            </div>


            <form id="formAuthentication" class="mb-3" @submit.prevent="login">
                <div class="mb-3">
                  <label for="email" class="form-label">Votre email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="state.email"
                    name="email-username"
                    placeholder="Entrez votre email"
                    autofocus
                  />
                  <div class="text-danger fw-semibold fs-6 py-2"  v-if="v$.email.$error" >
                    <div v-for="error in v$.email.$errors" :key="error.$uid">
                      <span v-if="error.$validator =='required'"> Ce champs est obligatoire </span>
                      <span v-if="error.$validator =='email'"> Email invalide </span>
                    </div>
                  </div>
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Votre mots de passe</label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Mots de passe oublié?</small>
                    </a>
                  </div>
                  <div class=" ">
                    <div class="input-group input-group-merge position-relative">
                      <input
                        :type="statePassword"
                        id="password"
                        class="form-control"
                        name="password"
                        v-model.trim='state.password'
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span @click="invisible" v-if="show" class="text-primary cursor-pointer position-absolute top-0 end-0 "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg></span>
                      <span @click="invisible" v-if="!show" class="text-primary cursor-pointer position-absolute top-0 end-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></svg></span>
                    </div>
                    <div class="text-danger fw-semibold fs-6 py-2"  v-if="v$.password.$error" >
                      <div v-for="error in v$.password.$errors" :key="error.$uid">
                        <span v-if="error.$validator =='required'"> Ce champs est obligatoire </span>
                        <span v-if="error.$validator =='minLength'"> Mot de passe très court (6 caracteres) </span>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-me" />
                    <label class="form-check-label" for="remember-me"> Se souvenir de moi </label>
                  </div>
                </div>
                <button class="btn btn-primary w-100" type="submit">
                <span class="fs-5 fs-semibold" v-if="!chargement">
                  Se connecter
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
            </form>
          </div>
        </div>
      </div>

      <footer class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
        <p>
          <span class="nm-fs-1 nm-tm">Pas de compte ?</span>
          <a class="nm-fs-1 nm-fw-bd" href="">Créer un compte</a>
        </p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
import {Users} from "../../api/users"


const router = useRouter();
const route = useRoute();

//datas
const chargement = ref(false);
const errors = ref('');
const statePassword = ref("password");
const show = ref(false);
const state = reactive({
  email: "",
  password: "",
});

//methods

const toast = (message,type) => {
  createToast(message,{type:type})
}

const login = () => {
  
  v$.value.$validate(); // checks all inputs
  if (!v$.value.$error) {
    if(chargement.value == false) {
      chargement.value = true

      Users.forEach(user => {
      if(user.email == state.email && user.password == state.password) {
        setTimeout(() => {
          chargement.value = false
        }, 3000)
        toast('vous est connecté', 'success')
        
					const infosUsers = {
						//token:response.data.access_token,
						//expirationToken:response.data.expired_at,
						users:user
					}
          localStorage.setItem('gestClinique',JSON.stringify(infosUsers))
        router.push("/admin/dashboard");
      }else {
        setTimeout(() => {
          chargement.value = false
        }, 3000)
        errors.value = "Identifiant incorrect"
      }
    })

    
   
    }
   
    
    
      
  }
}

const invisible = ()=> {
    statePassword.value = !show.value ? 'text' : 'password'
    show.value = !show.value
  }

  //validations
  const rules = {
    password: {required,minLength: minLength(6)},
    email: {required,email},
  }

  const v$ = useVuelidate(rules, state)
</script>

<style></style>
