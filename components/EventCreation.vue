<!-- event-management-system/components/EventCreation.vue -->
<template>
    <v-main>
      <v-app-bar app color="#3c82bc">
        <v-app-bar-title class="title-color">Event Planner</v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon @click="home()">
          <v-icon size="32" class="icon-color">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
  
    <v-container  class="personalform">
        <v-form v-model="formValid">
            <h4 class="text-center">Enter Your Event Details</h4>
            <br/><br/><br/>
            <v-alert border="top" color="red lighten-1" dismissible  v-if="fail"> Data insertion failed</v-alert>
            <v-row>
                <v-col cols="12" sm="6">
              <v-text-field label="Category" outlined v-model="title" prepend-icon="mdi-notebook" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
              <v-text-field label="Description" outlined v-model="description" prepend-icon="mdi-message-processing"></v-text-field>
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
              <v-text-field label="Location" outlined v-model="location" prepend-icon="mdi-map-marker"></v-text-field>
            </v-col>
              <v-col cols="12" sm="6">
              <v-text-field input type="date" label="Date" outlined v-model="date" prepend-icon="mdi-calendar"></v-text-field>
            </v-col>
            </v-row>

            <v-container class="text-center">
            <v-btn text  @click="submit()"  class="button" color="blue lighten-1"> Create Event</v-btn>
        </v-container>
        </v-form>
    </v-container>
    <footer class="footer">
        <p>Copyright&copy; 2024 </p>
      </footer>
    </v-main>
</template>
  
  <script>
  export default {
    async mounted () {
    this.$vuetify.theme.dark = false
  },
    data() {
      return {
        newEvent: {
          title: '',
          description: '',
          date: '',
          location: ''
        }
      }
    },
    methods: {
        async home() {
        this.$router.push('/');
      },
      createEvent() {
        // Here you can implement logic to send the new event data to your backend API
        console.log('Creating event:', this.newEvent);
        // Example: You can send an HTTP POST request to your backend API
        // axios.post('/api/events', this.newEvent).then(response => {
        //   console.log('Event created successfully:', response.data);
        // }).catch(error => {
        //   console.error('Error creating event:', error);
        // });
      }
    }
  }
  </script>
  <style scoped class>
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