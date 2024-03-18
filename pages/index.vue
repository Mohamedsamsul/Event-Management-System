<template>
  <v-app>
    <v-app-bar :style="{ background: appBarGradient}">
        <v-app-bar-title class="title-color">Event Planner</v-app-bar-title>
        <v-spacer></v-spacer>
        <button class="login-btn" @click="login()">Login</button>
        <button class="signup-btn" @click="signup()">Signup</button>
    </v-app-bar>
    <div class="landing-page">
      <div class="landing-content">
        <h1 style="color: #00008B;">Event Management System</h1>
        <h2 style="color: #00008B;">Elevate Your Events with Expert Management!</h2>
        <h3 style="color: #00008B;">From Concept to Celebration, We've Got You Covered.</h3>
        <button class="event-list-btn" @click="eventlist()">List of Events</button>
        <button class="event-create-btn" @click="eventcreate()">Create Event</button>
        <button class="user-profile-btn" @click="userprofile()">User Profile</button>
        <button class="notify-btn" @click="notify()">Notifications</button>
      </div>
      <footer class="landing-footer">
        <p>&copy; Event Management System {{ new Date().getFullYear() }}</p>
      </footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      appBarGradient: 'linear-gradient(to right, #735DA5, #D3C5E5)',
    }
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    signup() {
      this.$router.push('/usersignup');
    },
    eventlist() {
      this.$router.push('/eventlist');
    },
    eventcreate() {
      this.$router.push('/eventcreate');
    },
    userprofile() {
      this.$router.push('/userprofilepage');
    },
    notify() {
      this.$router.push('/notification');
    }
  }
};
</script>

<style scoped>
.landing-page { 
  background: url('https://t4.ftcdn.net/jpg/06/70/47/83/360_F_670478365_rendlVf707cLCLdBEb2yM5EPW8xUL8bt.jpg') center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.landing-content {
  text-align: center;
  color: #fff;
}

.landing-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.landing-content h2 {
  font-size: 24px;
  margin-bottom: 30px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  color: #080808;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 10px;
}

button:hover {
  background-color: #3c82bc;
  color: #fff;
}

.landing-footer {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
}

.landing-footer p {
  margin: 0;
}

.title-color {
  color: white !important;
}
</style>
