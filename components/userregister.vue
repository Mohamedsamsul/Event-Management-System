<template>
    <v-main>
      <v-app-bar app color="#3c82bc">
        <v-spacer></v-spacer>
        
        <v-btn icon @click="home()">
          <v-icon size="32" class="icon-color">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
  
      <div class="signup-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="signup">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" v-model="formData.phone" pattern="[0-9]{10}" required>
            <small>Format: 10-digit number</small>
          </div>
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" required>
            <small>Minimum length: 8 characters</small>
          </div>
          <v-btn type="submit">Sign Up</v-btn>
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
          name: '',
          phone: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async home() {
        this.$router.push('/');
      },
      signup() {
        // Validation rules
        const phonePattern = /^[0-9]{10}$/;
        const passwordMinLength = 8;
  
        if (!phonePattern.test(this.formData.phone)) {
          alert('Please enter a valid 10-digit phone number.');
          return;
        }
  
        if (this.formData.password.length < passwordMinLength) {
          alert(`Password must be at least ${passwordMinLength} characters long.`);
          return;
        }
  
        // If validation passes, you can proceed with form submission
        // For simplicity, I'm just logging the form data here
        console.log('Form data:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
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
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
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
  