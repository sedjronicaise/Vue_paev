<template>
    <div>
        <main id="page-content" class="d-flex nm-aic nm-vh-md-100">
		<!-- // Non-form side -->
        <div id="non-form-side" class="col-lg-6 col-xl-8 d-none d-lg-flex nm-aic nm-vh-100">
            <div class="overlay"></div>
        </div>
        <!-- Non-form Side // -->

        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 nm-st nm-st-md">             
                    <div class="nm-mb-2 nm-mb-md-2 text-center">
                        <h2>Bienvenue au </h2>

                        <img src="/hospital/app-assets/images/logo/logo.png" width="250" class="img-rounded mt-3" alt="Logo">
                    
                        <p class="mt-3">
                            <strong>
                                Veuillez vous identifier pour accéder à votre compte!
                            </strong>
                        </p>
                    </div>
                        
                    <form method="POST" action="">    
    
    <div class="form-group">
        <label for="inputEmail"><strong>Email</strong> </label>
        <input type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="" required autocomplete="email" autofocus id="inputEmail" tabindex="1" placeholder="Votre email">
       
        <span class="invalid-feedback" role="alert">
            <strong></strong>
        </span>
    </div>
    
    <div class="form-group  mx-auto">
        <label for="inputPassword">
            <span class="d-flex nm-jcb nm-aic">
                <strong>Mot de passe</strong>
                <a class="nm-lu nm-c" href="">
                    Mot de passe oublié ?
                </a>
                
            </span>
        </label>
        <input id="password" type="password"  tabindex="2" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Entrer votre mot de passe" >

       
            <span class="invalid-feedback" role="alert">
                <strong></strong>
            </span>
       
    </div>


    <div class="form-group form-check">
        <input class="form-check-input" type="checkbox" name="remember"  id="rememberMe">
        <label class="form-check-label nm-check"  for="rememberMe">Se souvenir de moi</label>
    </div>

    <button type="submit" class="btn btn-primary btn-block nm-hvr nm-btn-1"><i class="fas fa-sign-in-alt"></i> Se connecter</button>
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

<script>
export default {
   name: 'Login',
}
</script>

<style>

</style>