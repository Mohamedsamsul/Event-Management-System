<template>
  <v-main>
      <v-app-bar app color="#3c82bc">
        <v-app-bar-title class="title-color">Event Planner</v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon @click="home()">
          <v-icon size="32" class="icon-color">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
  <div class="profile-page" :style="{ background: pageGradient }">
    <h1 class="profile-heading">User Profile</h1>
    <div class="user-card">
      <label for="profile-picture" class="card-avatar" @click="triggerFileInput">
        <img :src="user.avatar" alt="User Avatar">
        <input type="file" id="profile-picture" accept="image/*" style="display: none" @change="changeProfilePicture">
      </label>
      <div class="card-details">
        <h2>{{ user.name }}</h2>
        <p><i class="material-icons">email</i> {{ user.email }}</p>
        <p><i class="material-icons">phone</i> {{ user.phone }}</p>
        <p><i class="material-icons">location_on</i> {{ user.address }}</p>
      </div>
    </div>
    <h2 class="events-heading">Upcomming Events</h2>
    <div class="events-list">
      <div v-for="event in user.events" :key="event.id" class="event-card" :style="{ background: eventCardGradient }">
        <router-link :to="'/events/' + event.id" class="event-link">
          <div class="event-icon">
            <i class="material-icons">event</i>
          </div>
          <div class="event-details">
            <h3>{{ event.name }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </v-main> 
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
        avatar: 'https://via.placeholder.com/150',
        events: [
          { id: 1, name: 'Conference A' },
          { id: 2, name: 'Seminar B' },
          { id: 3, name: 'Workshop C' }
        ]
      }
    };
  },

  computed: {
    pageGradient() {
      return 'linear-gradient(135deg, #667db6, #0082c8)';
    },
    eventCardGradient() {
      return 'linear-gradient(135deg, #feac5e, #c779d0)';
    },
    async home() {
        this.$router.push('/');
      },
  },
  methods: {
    triggerFileInput() {
      document.getElementById('profile-picture').click();
    },
    changeProfilePicture(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.user.avatar = reader.result;
        };
      }
    }
  }
};
</script>

<style scoped>
.profile-page {
  padding: 20px;
}

.profile-heading, .events-heading {
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
}

.user-card {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
}

.card-avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.card-details p {
  margin-bottom: 5px;
  font-size: 16px;
}

.card-details i {
  margin-right: 10px;
  font-size: 18px;
}

.events-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.event-card {
  border-radius: 10px;
  padding: 15px;
}

.event-link {
  text-decoration: none;
  color: inherit;
}

.event-icon {
  text-align: center;
  margin-bottom: 10px;
}

.event-icon i {
  font-size: 24px;
}

.event-details h3 {
  margin: 0;
  font-size: 18px;
}
  
.icon-color {
    color: white !important;
}
  
.title-color {
    color: white !important;
}
</style>
