export default {
  state: {
        ads: [
            {
                title: 'First ad',
                description: 'Planet',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '1'
            },
            {
                title: 'Second ad',
                description: 'Sky',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '2'
            },
            {
                title: 'Third ad',
                description: 'Squirrel',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '3'
            },
            {
                title: 'First ad',
                description: 'Planet',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '4'
            },
            {
                title: 'Second ad',
                description: 'Sky',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '5'
            },
            {
                title: 'Third ad',
                description: 'Squirrel',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '6'
            },
        ]
  },
  mutations: {
      createAd(state, payload) {
        state.ads.push(payload);
      }
  },
  actions: {
      createAd({commit}, payload) {
        payload.id = 'dfsdfsdgfasfd';
        commit('createAd', payload)
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