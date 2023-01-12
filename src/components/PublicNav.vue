<template>
        <div> 
            <img alt="Vue logo" src="@/assets/logo.png">
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/contact">Contact</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/admin/dashboard">ADMIN</router-link>
            </nav>
        </div>
</template>

<script>
export default {
    name: 'PublicNav'
}
</script>

<style>

</style>