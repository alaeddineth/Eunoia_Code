<template>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/login', { email: this.email, password: this.password });
          const user = response.data;
          this.$store.dispatch('login', user);
          this.$router.push('/dashboard');
        } catch (error) {
          console.error(error);
          // handle login error
        }
      },
    },
  };
  </script>
  