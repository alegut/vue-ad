<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 offset-sm-3>
              <v-toolbar color="primary" dark class="mt-50">
                <v-toolbar-title>Orders</v-toolbar-title>
              </v-toolbar>
              <v-list two-line flat>
                <v-list-item-group>
                    <v-list-item v-for="order in orders" :key="order.id">
                    <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                        <v-checkbox
                            :input-value="order.done"
                            color="primary"
                            @click="markDone(order)"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{order.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn color="primary" :to="`/ad/${order.adId}`">
                                OPEN
                            </v-btn>
                        </v-list-item-action>
                    </template>
                    </v-list-item>
                    
                </v-list-item-group>
            </v-list>
            <v-subheader>Total: 2</v-subheader>

             <!-- <v-toolbar color="primary" dark>
                <h4>Total: 2</h4>
              </v-toolbar> -->
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            orders: [
                {
                    id: '1',
                    name: 'Alex',
                    phone: '+38-050-453-68-06',
                    adId: '123',
                    done: false
                }
            ]
        }
    },
    methods: {
        markDone(order) {
            order.done = true
        }
    }
}
</script>

<style>

</style>