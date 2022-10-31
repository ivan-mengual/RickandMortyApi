<template>
    <div v-if="character" class="page-home">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <a href="/">Link a Home</a>
        {{ $route.query.id}}
        {{character.name}}
        {{character.origin.name}} 
    </div>
    <div v-else>
        loading...
    </div>
</template>
<script>

export default {
    components: {},
    data() {
      return {
        character: null
      }
    },    
    mounted(){
     fetch('https://rickandmortyapi.com/api/character/'+ this.$route.query.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.character = data
      }
        );   
    },
}
</script>