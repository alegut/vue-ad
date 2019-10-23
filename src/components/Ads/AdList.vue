<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
              <v-card elevation="10" v-for="ad in ads" :key="ad.id" class="mb-8">
                  <!-- <v-layout row> -->
                      <v-flex xs12>
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>My ads</v-toolbar-title>
                            </v-toolbar>
                      </v-flex>
                      <v-flex xs12>
                            <v-img :src="ad.imageSrc" height="175">
                                
                            </v-img>  
                      </v-flex>
                      <v-flex xs12>
                          <v-card-text>
                              <h2 class="text--primary">{{ad.title}}</h2>
                              <p>{{ad.description}}</p>
                          </v-card-text>
                          <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn class="info" :to="`/ad/${ad.id}`">Open</v-btn>
                          </v-card-actions>
                      </v-flex>
                  <!-- </v-layout>  -->
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
  
</template>

<script>
import {mapGetters} from 'vuex';
export default {    
    computed: {
        ...mapGetters(['ads'])        
    }
}
</script>

<style>

</style>