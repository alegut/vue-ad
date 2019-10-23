<template>
  <div>
    <v-container fluid class="pa-0">
        <v-layout row>
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item 
                    v-for="ad in promoAds"
                    :key="ad.id"
                    :src="ad.imageSrc"
                    :to="`/ad/${ad.id}`"
                    >                    
                    </v-carousel-item>
                    
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container>
        <h1>SELECT AD</h1>
    </v-container>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
                <v-card class="mx-auto" max-width="344" hover>
                    <v-img :src="ad.imageSrc" height="200px"></v-img>

                    <v-card-title>
                    {{ad.title}}
                    </v-card-title>

                    <v-card-subtitle>
                    {{ad.description}}
                    </v-card-subtitle>

                    <v-card-actions>
                        <!-- <v-spacer></v-spacer> -->
                        <div class="my-2">
                            <v-btn :to="`/ad/${ad.id}`" left>
                            <v-icon left>mdi-open-in-new</v-icon>
                            Open
                            </v-btn>
                        </div>
                        <div class="my-2 ml-5">
                            <v-btn raised class="primary">
                                <v-icon left>mdi-cart</v-icon>
                                Buy
                            </v-btn>
                        </div>
                        <!-- <v-btn text raised>Open</v-btn>
                        <v-btn text raised class="primary">Buy</v-btn> -->
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = show === ad.id ? null : ad.id">
                            <v-icon>{{ show === ad.id? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition mode="out-in">
                        <div v-show="show === ad.id">
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>  
</template>

<script>
import {mapGetters} from 'vuex';
export default {    
    data: () => ({
        show: null
    }),
    computed: {
        ...mapGetters(['promoAds', 'ads'])        
    }
}
</script>

<style scoped>
   
</style>