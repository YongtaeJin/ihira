<template>
  <v-container fill-height fluid> 
    <v-row  class="text-center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('../../server/upload/mainlog.jpeg')"          
          contain
          height="200"
        /> -->
        <h1>ihira</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SiteTitle from '../components/layout/SiteTitle.vue';
export default {
  components: { SiteTitle },
  
  name: "Home",
	data() {
		return {
			title : "ihira",   
      
      isLoading: false,   
		}
	},
	title() {
		return this.title;
	},
	
  methods: {
    
  },
};
</script>


<style>

</style>