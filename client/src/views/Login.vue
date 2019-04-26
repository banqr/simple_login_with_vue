<template>
  <div>
    <form @submit.prevent="passData">
      <div class="row">
        <div class="six columns">
          <label for="exampleEmailInput">Your email</label>
          <input
            v-model="imejl"
            class="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="imejl"
          >
        </div>
        <div class="six columns">
          <label for="password">Password</label>
          <input
            v-model="sifra"
            class="u-full-width"
            type="password"
            placeholder="Password"
            id="sifra"
          >
        </div>
      </div>
      
      
      <input class="button-primary" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
const API= 'http://localhost:5000/login'
export default {
    name: 'Login',
    data(){
        return {
            imejl: 'abc',
            sifra: '123'
        }
    },
    methods: {
       passData: function(){
           const telo = {
               imejl:this.imejl,
               sifra:this.sifra
           }
           return fetch(API, {
               method:'POST',
               body:JSON.stringify(telo),
               headers:{
                   'Content-type':'application/json'
               }
           }).then(response => {
               if(response.status === 200){
                   this.$router.push('/home')
               }
               else if(response.status === 304){
                   this.$router.push('/register')
               }
           });
           
           
       } 
    },
}
</script>
