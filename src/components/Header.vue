<template>
<div>
  <!-- chnage this to v-toolbar -->
    <v-navigation-drawer fixed clipped app v-model="navBar" class="navdrawer, application theme--light" data-app="true">
      <v-list dense class="pt-0">
        <router-link to="/Signin" v-if="!logined"  class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Signin</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/" class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>  
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/Words"  class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Words</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>


                <router-link to="/Hangul" class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Hangul</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>


                <router-link to="/Numbers" class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Numbers</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>


                <router-link to="/About" class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>


        <router-link to="/Protected" v-if="logined"  class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Protected Page</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/Signout" v-if="logined"  class="btn--active btn btn--flat btn--router">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Signout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app  data-app="true" data-booted="true" class="cyanBlue toolbar theme--dark" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);">
      <v-toolbar-side-icon @click.stop="updateNaviBar"></v-toolbar-side-icon>
      <v-toolbar-title class="toolbar__title" >
        <span>ihaehada</span>
      </v-toolbar-title>
      <v-spacer class="spacer"></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down  v-toolbar__content" style="height: 64px">
        <router-link to="/" class="btn--active btn btn--flat btn--router" style="position: relative;"><v-btn flat style="color: white" >Home</v-btn></router-link>
        <router-link to="/Hangul"  class="btn--active btn btn--flat btn--router" style="position: relative;"> <v-btn flat style="color: white">Hangul<i aria-hidden="true" class="icon icon--right theme--dark material-icons">palette</i></v-btn></router-link>
        <router-link to="/Words"  class="btn--active btn btn--flat btn--router" style="position: relative;"> <v-btn flat style="color: white">Words<i aria-hidden="true" class="icon icon--right theme--dark material-icons">gavel</i></v-btn></router-link>
        <router-link to="/Numbers"  class="btn--active btn btn--flat btn--router" style="position: relative;"> <v-btn flat style="color: white">Numbers<i aria-hidden="true" class="icon icon--right theme--dark material-icons">gavel</i></v-btn></router-link>
        <router-link to="/About"  class="btn--active btn btn--flat btn--router" style="position: relative;"> <v-btn flat style="color: white">About<i aria-hidden="true" class="icon icon--right theme--dark material-icons">help_outline</i></v-btn></router-link>
      </v-toolbar-items>
    </v-toolbar>

    <v-content style="padding: 0px">
      <router-view v-if="loaded" />
    </v-content>
  </div>
</template>

<script>
import firebase from 'firebase/app' 
import "firebase/auth"
import "firebase/firestore"
import "firebase/messaging"

import firebaseConfig from '@/firebase/firebase';

import store from '@/store/index.js';

export default {
  name: 'Header',
  data () {
    return {
      navBar: false,
    }
  },
  created() {
    firebase.initializeApp(firebaseConfig);

    // for messaging
    if (firebase.messaging.isSupported() && firebaseConfig.messageKey) {
      const messaging = firebase.messaging();
      messaging.usePublicVapidKey(firebaseConfig.messageKey);

      // Request Permission of Notifications
      messaging.requestPermission().then(() => {
        console.log('Notification permission granted.');
        
        // Get Token
        messaging.getToken().then((token) => {
          console.log(token)
        })
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    store.dispatch('setUser', { }) 
  },
  computed: {
    logined() {
      return !!this.$store.getters.getUser;
    },
    loaded() {
      return !this.$store.getters.getUserLoading;
    },
  },
  methods: {
    updateNaviBar: function() {
      this.navBar =  !this.navBar;
    },

  },
}
</script>

<style>
</style>
