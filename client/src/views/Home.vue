<template>
  <div class="home">
    <h4>Naslovna</h4>
    <router-link to="/login">Login</router-link>
    <br>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home"
};
</script>
