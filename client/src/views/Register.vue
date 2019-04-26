<template>
  <div>
    <form @submit.prevent="registerUser">
      <div class="row">
        <div class="six columns">
          <label for="exampleEmailInput">Unesite Ime</label>
          <input
            v-model="ime"
            class="u-full-width"
            type="text"
          >
          <label for="exampleEmailInput">Unesite Prezime</label>
          <input
            v-model="prezime"
            class="u-full-width"
            type="text"
          >
          <label for="exampleEmailInput">Unesite broj telefona</label>
          <input
            v-model="broj_telefona"
            class="u-full-width"
            type="text"
          >
          <label for="exampleEmailInput">Unesite Adresu</label>
          <input
            v-model="adresa"
            class="u-full-width"
            type="text"
          >
          <label for="exampleEmailInput">Unesite Username</label>
          <input
            v-model="username"
            class="u-full-width"
            type="email"
          >
          <label for="exampleEmailInput">Unesite Password</label>
          <input
            v-model="pass"
            class="u-full-width"
            type="password"
          >
        </div>

        <!-- <div class="six columns">
          <label for="password">Password</label>
          <input
            v-model="sifra"
            class="u-full-width"
            type="password"
            placeholder="Password"
            id="sifra"
          >
        </div>-->
      </div>

      <input class="button-primary" style="float:left;" type="submit" value="Registruj se Klosaru">
    </form>
  </div>
</template>

<script>
const API='http://localhost:5000/register'

export default {
  name: "Register",
  data() {
    return {
      ime: "abc",
      prezime: "123",
      broj_telefona: "011/688471",
      adresa: "5 Savska",
      username: "abc",
      pass: "123"
    };
  },
  methods: {
    registerUser: function() {
      const userData = {
        ime: this.ime,
        prezime: this.prezime,
        broj_telefona: this.broj_telefona,
        adresa: this.adresa,
        username: this.username,
        pass: this.pass
      }
      return fetch(API, {
          method:'POST',
          body:JSON.stringify(userData),
          headers:{
              'Content-Type': 'application/json'
          }
      }).then(response =>{
       console.log(response);
       this.$router.push('/')
      })

    }
  }
};
</script>
