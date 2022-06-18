const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            inventory: 5,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        inStock()  {
            if (this.inventory >= 1) return true
            else return false
        },
        addToCart() {
            this.cart += 1
            this.inventory -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})