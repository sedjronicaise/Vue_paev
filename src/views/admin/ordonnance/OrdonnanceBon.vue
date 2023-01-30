<template>
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 text-center">
                        <div class="row mt-3 align-self-end">
                            <div class="col-lg-6">
                                <router-link to="/admin/ordonnance/index">
                                    <div class="card pull-up" style="height: 300px; width: 400px;">

                                        <div class="card" >
                                            <div class="card-header">
                                                <h4 class="text-center"><i class="la la-calendar-check-o font-large-2 info" style="font-size:12rem;"></i> ORDONNANCE</h4>
                                            </div>
                                            <div class="card-content">
                                                <div class="card-body text-center">
                                                    <p>Gestion des ordonnances.</p>
                                                    <div class="badge badge-secondary">15</div>
                                                </div>
                                            </div>
                                        </div>                              
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-lg-6 ">
                                <router-link to="/admin/bon/index">
                                    <div class="card pull-up" style="height: 300px; width: 400px;">
                                        <div class="card" >
                                            <div class="card-header">
                                                <h4 class="text-center">
                                                    <i class="la la-edit font-large-2 info" style="font-size:12rem;"></i> BONS D'EXAMENS</h4>
                                            </div>
                                            <div class="card-content">
                                                <div class="card-body text-center">
                                                    <p>Gestion des bons d'examens.</p>
                                                    <div class="badge badge-secondary">15</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrdonnanceBon'
}
</script>

<style>

</style>