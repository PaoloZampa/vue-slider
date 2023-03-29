const { createApp } = Vue

createApp({
  data() {
    return {
      myMessage: 'Hello Vueeeeee!',
      imgLink: 'https://picsum.photos/1000/600'
    }
  }
}).mount('#app')