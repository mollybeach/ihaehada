<template>
  <v-app>
    <Header/>
    <Footer/> 
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      navBar: false,
    }
  },

}
</script>
<style>
  p {
  margin-bottom: 2px;
  }
  v-toolbar{
    font-size: 1.5rem;
    color: hotpink;
  }
</style>
