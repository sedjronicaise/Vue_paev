<template>
    <div>
        
        <router-view/>
        <AdminSidebar/>
        <!-- <AdminHeader/> -->
            
    </div>
</template>

<script>
// import AdminHeader from '@/components/AdminHeader.vue'
import AdminSidebar from '@/components/AdminSidebar.vue'

export default {
    name: 'AdminLayout',  
    components: {
     AdminSidebar
    }
}
</script>

<style>

</style>