<template>
  <v-container>
      <v-layout row class="mt-10">
          <v-flex xs12 sm6 offset-sm-3>
              <v-toolbar color="primary" dark >
                  <v-toolbar-title>Create New Ad</v-toolbar-title>
              </v-toolbar>
              
              <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
                  <v-text-field
                    label="Title"
                    name="title"
                    type="text"
                    v-model="title"
                    :rules="[v => !!v || 'Title is required']"
                    required
                  ></v-text-field>

                  <v-textarea                   
                    label="Description"
                    name="description"
                    type="text"
                   :rules="[v => !!v || 'Description is required']"
                    v-model="description"
                    required
                  ></v-textarea>
                </v-form>
                <v-layout row>
                    <v-flex xs12 class="pl-2 mb-6">
                        <v-btn class="warning" @click="loader = 'loading3'">
                            Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 class="pl-2 pr-2">
                        <v-img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" max-height="150" alt=""></v-img>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 class="pl-2 pr-2">
                        <v-switch v-model="promo" label="Add to promo?" color="primary"></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 class="pl-2 pr-2">
                        <v-spacer></v-spacer>
                        <v-btn class="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
                    </v-flex>
                </v-layout>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: '',
            description: '',
            promo: false,
            valid: false
        }
    },
    methods: {
        createAd() {
            if(this.$refs.form.validate()) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    imageSrc: 'https://images.ctfassets.net/nj2caiz7hkjw/5SdA2VBLpKUsAeumA2EsMa/537af179a90aba7a0ce3f823d9d69408/form-with-vuejs.jpg'
                }
                console.log(ad);
                this.$store.dispatch('createAd', ad)
                
            }
        }
    }
}
</script>

<style>

</style>