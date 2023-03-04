<template>
  <div class="bg-img">
    <main id="page-content">
      <!-- // Non-form side -->
      <!-- <div
        id="non-form-side"
        class="col-lg-6 col-xl-8 d-none d-lg-flex nm-aic nm-vh-100"
      >
        <div class="overlay"></div>
      </div> -->
      <!-- Non-form Side // -->

      <div class="container" >
        <div class="row">
          <div
            class="bg-form col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3"
          >
            <div class="text-center mt-1">
              <h2>Bienvenue au</h2>
              <img
                src="/hospital/app-assets/images/logo/logo.png"
                width="250"
                class="img-rounded mt-3"
                alt="Logo"
              />

              <p class="mt-2">
                <strong>
                  Veuillez vous identifier pour accéder à votre compte!
                </strong>
                <strong class="text-danger fw-bold fs-4">
                 {{errors}}
                </strong>
              </p>
            </div>

            <form id="formAuthentication" class=" mb-2" @submit.prevent="login">
                <div class="mb-3">
                  <label for="email" class="form-label"> <strong>Email</strong> </label>
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
                <div class="mb-2 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password"> <strong>Mot de passe</strong> </label>
                    <a href="">
                      <small>Mot de passe oublié?</small>
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
                      <span @click="invisible" v-if="show" class="text-primary cursor-pointer position-absolute "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg></span>
                      <span @click="invisible" v-if="!show" class="text-primary cursor-pointer position-absolute"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></svg></span>
                    </div>
                    <div class="text-danger fw-semibold fs-6 py-2"  v-if="v$.password.$error" >
                      <div v-for="error in v$.password.$errors" :key="error.$uid">
                        <span v-if="error.$validator =='required'"> Ce champs est obligatoire </span>
                        <span v-if="error.$validator =='minLength'"> Mot de passe très court (6 caracteres) </span>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="mb-2">
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

      <!-- <footer class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
        <p>
          <span class="nm-fs-1 nm-tm">Pas de compte ?</span>
          <a class="nm-fs-1 nm-fw-bd" href="">Créer un compte</a>
        </p>
      </footer> -->
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
import UsersService from "@/services/modules/utilisateur.service.js";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";


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
			UsersService.login(state).then((data) => {
        const response = data.data
            chargement.value = false
            const usersInfo = {
            token:response.data.token,
            users:response.data.user,
            }
            localStorage.setItem('paevcliniqueInfo',JSON.stringify(usersInfo))
            toast('vous est connecté', 'success')
            router.push("/admin/dashboard");
          }).catch((e) => {
            chargement.value = false  
						toast('Identifiant incorrect', 'danger')
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

<style scope="scoped">
.bg-form{
	background: #ffffff;
	border: 2px solid black;
  	
  	color: #222;
  	font-size: 16px;
	border-radius: 5px;
}
/* .bg-img:after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
} */
      
h2 {
	color: #1e2022;
	font-size: 1.25rem;
	font-weight: 600;
}

h3 {
	font-size: 0.875rem;
	font-weight: 400;
	color: #677788;
}

a {
	text-decoration: none;
    background-color: transparent;
}

a:hover {
    color: #0069d9;
    text-decoration: none;
}

label {
    display: block;
    color: #1e2022;
    font-size: 0.975rem;

	margin-bottom: .5rem;
}

/*****************************/
/*  02. PRELOADER            */
/*****************************/

#nm-preloader {
	display: flex;
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0px;
	left: 0px;
	z-index: 11;
	background-color: #fff;
	justify-content: center;
}

.nm-ripple {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}

.nm-ripple div {
	position: absolute;
	border: 4px solid #007bff;
	opacity: 1;
	border-radius: 50%;
	animation: nm-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.nm-ripple div:nth-child(2) {
	animation-delay: -0.5s;
}

@keyframes nm-ripple {
	0% {
	  	top: 36px;
	  	left: 36px;
	  	width: 0;
	  	height: 0;
	  	opacity: 1;
	}
	100% {
	  	top: 0px;
	  	left: 0px;
	  	width: 72px;
	  	height: 72px;
	  	opacity: 0;
	}
}

/*****************************/
/*  03. LAYOUT               */
/*****************************/

	/*****************************/
	/*  03.01 NON-FORM SIDE      */
	/*****************************/

	#non-form-side {
		position: relative;
		background-image: url("");
		background-size: cover;
		background-position: center;
	}
	
	#non-form-side .overlay{
		position: absolute;
		top: 0px; 
		left: 0px;
		width: 100%;
		height: 100%;
		background-image: url('../../assets/overlay.png');
		background-repeat: no-repeat;
		/* opacity: 30%; */
	}

	


	#form-side {
		background-color: #ffffff;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.nm-mb-0 {
		margin-bottom: 0rem !important;
	}

	.nm-mb-1 {
		margin-bottom: 1rem !important;
	}

	.nm-mb-2 {
		margin-bottom: 2rem !important;
	}

	.nm-aic {
		align-items: center;
	}

	.nm-jcb {
		justify-content: space-between !important;
	}

	.nm-vh-100 {
		height: 100vh;
	}

	.nm-st {
		padding-top: 8rem !important;
		padding-bottom: 8rem !important;
	}

	.nm-spcr {
		margin-top: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}
	
	footer {
		position: fixed !important;
		text-align: center;
		background-color: #ffffff;
		bottom: 0px;
		padding: 0.75rem 1rem;
		width: 100%;
	}

/*****************************/
/* 04. ELEMENTS              */
/*****************************/

	/*****************************/
	/*  04.00 TEXT-RELATED       */
	/*****************************/

	.nm-lu {
		color: #8c98a4;
		border-bottom: 0.0625rem dashed #97a4af;
	}

	.nm-lu:hover {
		border-color: #0052ea;
	}

	.nm-ct {
		text-transform: capitalize !important;
	}

	.nm-fs-1 {
		font-size: 0.875rem;
	}

	.nm-tm {
		color: #8c98a4 !important;
	}

	.nm-fw-bd {
		font-weight: 600 !important;
	}

	.nm-fal {
		margin-right: 0.25rem !important;
		font-size: .875em;
	}

	.nm-hvr {
		transition: all 0.2s ease-in-out;
	}
	
	.nm-hvr:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 11px rgba(0,123,255, 0.35);
	}

	/*****************************/
	/*  04.01 LOGO               */
	/*****************************/

	#logo-container {
		position: absolute;
		top: 24px;
		z-index: 10;
	}
	
	#logo-container img{
		height: 50px;
	}


	.form-control {
		background-color: #ffffff;
		border: 0.0625rem solid #eeeeff;
		border-radius: 0.3125rem;
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.6;
		color: #1e2022;
		padding: 0.5rem 1rem;
		height: 2.5rem;
	}
	
	.form-control:focus {
		color: #1e2022;
		background-color: #fff;
		outline: 0;
		box-shadow: 0 0 10px rgba(0,123,255,.1);
	}
	
	.form-control::-webkit-input-placeholder {
		color: #97a4af;
		opacity: 1;
	}
	
	.form-control::-moz-placeholder {
		color: #97a4af;
		opacity: 1;
	}
	
	.form-control:-ms-input-placeholder {
		color: #97a4af;
		opacity: 1;
	}
	
	.form-control::-ms-input-placeholder {
		color: #97a4af;
		opacity: 1;
	}
	
	.form-control::placeholder {
		color: #97a4af;
		opacity: 1;
	}

	/*****************************/
	/*  04.03 FORM CHECK         */
	/*****************************/

	.form-check {
		position: relative;
	}
	
	.form-check input[type='checkbox'] {
		position: absolute;
		left: 0;
		z-index: -1;
		width: 1rem;
		height: 1.3rem;
		opacity: 0;
	}
	
	.nm-check {
		cursor: pointer;
	}
	
	.nm-check::before {
		border-radius: 0.25rem;
		transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		position: absolute;
		top: 0.1875rem;
		left: 0rem;
		display: block;
		width: 1rem;
		height: 1rem;
		pointer-events: none;
		content: "";
		background-color: #fff;
		border: #d6dbeb solid 0.0625rem;
	}
	
	.nm-check::after {
		position: absolute;
		top: 0.1875rem;
		left: 0rem;
		display: block;
		width: 1rem;
		height: 1rem;
		content: "";
		background: no-repeat 50% / 50% 50%;
	}
	
	.form-check input:checked ~ .nm-check::before {
		color: #fff;
		border-color: #007bff;
		background-color: #007bff;
	}
	
	.form-check input:checked ~ .nm-check::after {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
	}

	/*****************************/
	/*  04.04 BUTTON             */
	/*****************************/

	.nm-btn-1 {
		display: inline-block;
		font-weight: 600;
		text-align: center;
		vertical-align: middle;
		user-select: none;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.6;
		border-radius: 0.3125rem;
		width: 100%;
	}
	
	.nm-btn-1:focus,.nm-btn-1:active {
		box-shadow: none;
	}
	
	.btn-primary:not(:disabled):not(.disabled):active:focus {
		box-shadow: none;
	}

	/*****************************/
	/*  04.05 SOCIAL             */
	/*****************************/

	.social-buttons,
	.social-buttons li {
		display: flex;
		padding: 0;
		margin: 0;
	}

	.social-buttons {
		width: 100%;
		list-style: none;
		flex-wrap: wrap;
	}

	ul.social-buttons {
		justify-content: center;
		text-align: center;
	}

	.social-buttons li {
		flex-basis: 20%;
		flex-shrink: 0;
		margin: 2px; 
	}

	.social-buttons li:first-child {
		margin-left: 0px; 
	}

	.social-buttons li:last-child {
		margin-right: 0px; 
	}

	.social-buttons a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.5rem 1rem;
		font-weight: 500;
		text-decoration: none;
		color: #fff;
		border-radius: 0.3125rem;
	}

	.social-buttons a:hover{
		color: #fff;
	}

	/* TWITTER */
	.social-buttons [href*="twitter.com"] {
		background: #1da1f2;
	}

	/* FACEBOOK */
	.social-buttons [href*="facebook.com"] {
		background: #3b5998;
	}

	/* INSTAGRAM */
	.social-buttons [href*="instagram.com"] {
		background: #304d63;
	}

	/* GOOGLE */
	.social-buttons [href*="google.com"] {
		background: #e6162d;
	}

	/* LINKEDIN */
	.social-buttons [href*="linkedin.com"] {
		background: #0077b5;
	}

	/* APPLE */
	.social-buttons [href*="apple.com"] {
		background: #000000;
	}

	/* AMAZON */
	.social-buttons [href*="amazon.com"] {
		background: #FF9900;
	}

	/* YAHOO */
	.social-buttons [href*="yahoo.com"] {
		background: #720e9e;
	}


/*****************************/
/*  05. MEDIA QUERIES        */
/*****************************/

@media (min-width: 576px){	
	.nm-sm-tr {
		text-align: right !important;
	}
	
	.nm-mb-sm-0 {
		margin-bottom: 0rem !important;
	}
}

@media (min-width: 768px){
	.nm-mb-md-2 {
		margin-bottom: 3rem !important;
	}
	
	.nm-vh-md-100 {
		height: 100vh;
	}
	
	.nm-st-md {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}

	#logo-container {
		position: fixed;
	}

	footer {
		position: fixed !important;
	}
}

</style>
