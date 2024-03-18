<template>
     <v-main>
      <v-app-bar app color="#3c82bc">
        <v-app-bar-title class="title-color">Event Planner</v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon @click="home()">
          <v-icon size="32" class="icon-color">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
    <div class="notifications-page">
      <h1>Notifications</h1>
      <div class="notification-cards">
        <div v-for="(notification, index) in notifications" :key="index" class="notification-card">
          <div class="card-header">
            <h2>{{ notification.title }}</h2>
            <span>{{ notification.time }}</span>
          </div>
          <div class="card-content">
            <p>{{ notification.message }}</p>
          </div>
          <div class="card-actions">
            <button @click="markAsRead(index)" v-if="!notification.read">Mark as Read</button>
            <button @click="deleteNotification(index)">Delete</button>
          </div>
        </div>
      </div>
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
        notifications: [
          {
            title: "Event Invitation",
            message: "You are invited to the annual company party this Friday!",
            time: "2 hours ago",
            read: false
          },
          {
            title: "RSVP Confirmation",
            message: "Thank you for confirming your attendance!",
            time: "Yesterday",
            read: true
          },
          {
            title: "Event Update",
            message: "The venue for the event has been changed. Please check the updated details.",
            time: "1 week ago",
            read: false
          },
          // Add more notifications as needed
        ]
      };
    },
    methods: {
      async home() {
        this.$router.push('/');
      },
      markAsRead(index) {
        this.notifications[index].read = true;
      },
      deleteNotification(index) {
        this.notifications.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .notification-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .notification-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .card-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .card-actions button {
    padding: 5px 10px;
    cursor: pointer;
  }
  
  h1 {
    margin-bottom: 20px;
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
  