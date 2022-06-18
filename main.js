const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            inventory: 0,
            onSale: true
        }
    }
})