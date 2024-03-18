<template>
    <v-main>
      <v-app-bar app color="#3c82bc">
        <v-spacer></v-spacer>
        
        <v-btn icon @click="home()">
          <v-icon size="32" class="icon-color">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
  
      <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" required>
          </div>
          <v-btn type="submit">Login</v-btn>
        </form>
      </div>
      
      <footer class="footer">
        <p>Copyright&copy; 2024 </p>
      </footer>
    </v-main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async home() {
        this.$router.push('/');
      },
      login() {
        // Perform login logic here
        console.log('Login form data:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  
 
  
  .footer {
    background-color: #3c82bc;
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    position: fixed; /* Set the footer to a fixed position */
    bottom: 0; /* Position the footer at the bottom of the viewport */
  }
  
  .footer p {
    margin: 0;
  }
  
  .icon-color {
    color: white !important;
  }
  
  .title-color {
    color: white !important;
  }
  </style>
  