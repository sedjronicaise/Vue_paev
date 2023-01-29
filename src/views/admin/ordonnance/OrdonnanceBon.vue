<template>
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 text-center">
                        <div class="row mt-3 text-align-center">
                            <div class="col-lg-6">
                                <router-link to="/admin/ordonnance/index">
                                    <div class="card pull-up">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="la la-calendar-check-o font-large-2 info" style="font-size:12rem;"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h5 class="text-muted text-bold-500">ORDONNANCE</h5>
                                                        <h3 class="text-bold-600">15</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-lg-6">
                                <router-link to="/admin/bon/index">
                                    <div class="card pull-up">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="la la-calendar-check-o font-large-2 info" style="font-size:12rem;"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h5 class="text-muted text-bold-500">BON D'EXAMENS</h5>
                                                        <h3 class="text-bold-600">20</h3>
                                                    </div>
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