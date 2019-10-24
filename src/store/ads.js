import * as fb from 'firebase'
import { tsObjectKeyword } from '@babel/types';

class Ad {
    constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title;
        this.description = description;
        this.ownerId = ownerId;
        this.imageSrc = imageSrc;
        this.promo = promo;
        this.id = id;
    }
}

export default {
  state: {
        ads: []
  },
  mutations: {
      createAd(state, payload) {
        state.ads.push(payload);
      },
      loadAds(state, payload) {
        state.ads = payload
      }
  },
  actions: {
      async fetchAds({commit}) {
          commit('clearError')
          commit('setLoading', true)
          const resultAds = []
          try {
              const fbVal = await fb.database().ref('ads').once('value')
              const ads = fbVal.val();
              console.log(ads);
              Object.keys(ads).forEach(key => {
                  const ad = ads[key]
                  resultAds.push(ad)
              })              
              commit('loadAds', resultAds)
              commit('setLoading', false)
          } catch (error) {
              commit('setError', error.message)
              commit('setLoading', false)
              throw error
          }
      },
      async createAd({commit, getters}, payload) {
        commit('clearError')
        commit('setLoading', true)
        try {
            const newAd = new Ad(
                payload.title, 
                payload.description, 
                getters.user.id, 
                payload.imageSrc, 
                payload.promo
            )
            const ad = await fb.database().ref('ads').push(newAd);
            commit('createAd', {
                ...newAd,
                id: ad.key
            })
            commit('setLoading', false)
            
        } catch(error) {
            commit('setError', error.message)
            commit('setLoading', false)
            throw error
        }
      }
  },
  getters: {
      ads(state) {
          return state.ads
      },
      promoAds(state) {
          return state.ads.filter(ad => ad.promo);
      },
      myAds(state) {
          return state.ads
      },
      adById(state) {
          return adId => {
              return state.ads.find(ad => ad.id === adId)
          }
      }
  }
}