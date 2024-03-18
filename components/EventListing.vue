<template>
    <v-app>
      <v-app-bar app color="#3c82bc">
        <v-toolbar-title class="title-color">Event Planner</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon @click="home()">
          <v-icon size="32" class="icon-color">mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-card>
            <div class="event-list">
              <v-card-title color="#080808">Event List</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-select v-model="selectedCategory" :items="categoryOptions" label="Filter by Category" outlined></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-select v-model="selectedLocation" :items="locationOptions" label="Filter by Location" outlined></v-select>
                  </v-col>
                </v-row>
              </v-card-text>
  
              <v-list>
                <v-list-item v-for="event in filteredEvents" :key="event.id">
                  <v-list-item-content>
                    <v-list-item-title>{{ event.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Date: {{ event.date }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Location: {{ event.location }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Category: {{ event.category }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action class="actions">
                    <v-btn icon small @click="showEventDetails(event)">
                      <v-icon small color="primary">mdi-information</v-icon>
                    </v-btn>
                    <v-btn icon small @click="showEditForm(event)">
                      <v-icon small color="primary">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon small @click="deleteEvent(event)">
                      <v-icon small color="error">mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon small @click="rsvpEvent(event)">
                      <v-icon small color="success">mdi-check-circle</v-icon>
                    </v-btn>
                    <v-btn icon small @click="viewEventLocation(event)">
                      <v-icon small color="info">mdi-map-marker</v-icon>
                    </v-btn>
                    <v-btn icon small @click="shareEvent(event)">
                      <v-icon small color="orange">mdi-share-variant</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
  
              <!-- Event Details Modal -->
              <v-dialog v-model="dialog" max-width="600">
                <v-card v-if="selectedEvent">
                  <v-card-title>{{ selectedEvent.name }}</v-card-title>
                  <v-card-text>
                    <p><strong>Description:</strong> {{ selectedEvent.description }}</p>
                    <p><strong>Date:</strong> {{ selectedEvent.date }}</p>
                    <p><strong>Location:</strong> {{ selectedEvent.location }}</p>
                    <p><strong>Category:</strong> {{ selectedEvent.category }}</p>
                    <p><strong>Attendees:</strong> {{ selectedEvent.attendees }}</p>
                    <p><strong>RSVP Status:</strong> {{ selectedEvent.rsvpStatus }}</p>
                    <!-- Placeholder for map -->
                    <div class="map-placeholder">
                      Map will be shown here
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                    <v-btn color="success" text @click="rsvpEvent(selectedEvent)">RSVP</v-btn>
                    <v-btn color="info" text @click="viewEventLocation(selectedEvent)">View Location</v-btn>
                    <v-btn color="orange" text @click="shareEvent(selectedEvent)">Share</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
  
              <!-- Edit Event Form -->
              <div v-if="editMode" class="modal">
                <div class="modal-content">
                  <span class="close" @click="editMode = false">&times;</span>
                  <h2>Edit Event</h2>
                  <!-- Include your edit form here -->
                  <!-- For simplicity, you can just display input fields with existing event data -->
                  <input type="text" v-model="editedEvent.name" />
                  <!-- Include other fields as needed -->
                  <button @click="updateEvent">Save</button>
                </div>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-main>
      <footer class="footer">
        <p>&copy; 2024 Event Management System</p>
      </footer>
    </v-app>
  </template>
  
  <script>
  export default {
    async mounted(){
      this.$vuetify.theme.dark=false;
    },
  
    data() {
      return {
        selectedCategory: '',
        selectedLocation: '',
        categoryOptions: ['All', 'Music', 'Conference', 'Workshop'],
        locationOptions: ['All', 'New York', 'London', 'Paris'],
        events: [
          { id: 1, name: 'Event 1', description: 'Description of Event 1', date: '2024-03-17', location: 'New York', category: 'Music', attendees: ['User1', 'User2'], rsvpStatus: 'Going' },
          { id: 2, name: 'Event 2', description: 'Description of Event 2', date: '2024-03-18', location: 'London', category: 'Conference', attendees: ['User3', 'User4'], rsvpStatus: 'Interested' }
        ],
        selectedEvent: null,
        editMode: false,
        editedEvent: {},
        dialog: false // For displaying event details modal
      };
    },
    computed: {
      filteredEvents() {
        let filteredEvents = this.events;
        if (this.selectedCategory && this.selectedCategory !== 'All') {
          filteredEvents = filteredEvents.filter(event => event.category === this.selectedCategory);
        }
        if (this.selectedLocation && this.selectedLocation !== 'All') {
          filteredEvents = filteredEvents.filter(event => event.location === this.selectedLocation);
        }
        return filteredEvents;
      }
    },
    methods: {
      showEventDetails(event) {
        if (event) {
          this.selectedEvent = event;
          this.dialog = true; // Show event details modal
        }
      },
      showEditForm(event) {
        this.editedEvent = { ...event }; // Copy event object for editing
        this.editMode = true;
      },
      updateEvent() {
        // Update event logic goes here
        console.log('Event updated:', this.editedEvent);
        this.editMode = false;
      },
      deleteEvent(event) {
        // Find index of event to delete
        const index = this.events.findIndex(e => e.id === event.id);
        if (index !== -1) {
          // Remove event from events array
          this.events.splice(index, 1);
          console.log('Event deleted:', event);
        }
      },
      rsvpEvent(event) {
        // RSVP logic goes here
        console.log('RSVP for event:', event);
      },
      viewEventLocation(event) {
        // View event location logic goes here
        console.log('View location for event:', event);
      },
      shareEvent(event) {
        // Share event logic goes here
        console.log('Share event:', event);
      },
      async home() {
        this.$router.push('/');
      },
    }
  };
  </script>
  
  <style scoped>
  .event-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .event {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .actions {
    margin-top: 10px;
  }
  
  button {
    margin-right: 5px;
    cursor: pointer;
  }
  
  .map-placeholder {
    height: 200px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Modal Styles */
  .modal {
    display: block;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  
  .modal-content {
    background-color: #fff;
    margin: 20% auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 50%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .title-color {
    color: #f9f5f5 !important;
  }
  
  .footer {
    background-color: #3c82bc;
    color: white;
    text-align: center;
  }
  .icon-color {
    color: white !important;
  }
  
  </style>
  