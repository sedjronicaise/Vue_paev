<template>
    <div>
        Patient Edit
        Patient EditPatient EditPatient EditPatient EditPatient EditPatient EditPatient Edit
       <div style="text-align:center;">
        {{id}}
       </div>
    </div>
</template>

<script>
export default {
    name: 'PatientEdit',
    props: ['id'],
    data (){
        return {
            test: ''
        }
    },
    // mounted(){
    //     console.log(this.$route.params.id)
    //     this.test = this.$route.params.id
    // },
    // updated(){
    //     console.log(this.$route.params.id)
    //     this.test = this.$route.params.id
    // }
}
</script>

<style>

</style>