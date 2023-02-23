<template>
  <div class="input-group">
    <div class="form-outline">
      <input type="search" @input="$emit('search',$event.target.value)" placeholder="Recherche..." id="form1" class="form-control" />
     
    </div>
    
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style  scoped>

</style>