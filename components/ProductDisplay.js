app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <a :href='url'>
                    <img v-bind:src='image'>
                </a>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="onSale">{{ saleMessage }}</p>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }} </p>

                <product-details v-bind:details="details"></product-details>

                <div 
                    v-for="(variant, index) in variants" 
                    v-bind:key="variant.id" 
                    v-on:mouseover="updateVariant(index)" 
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                </div>

                <button 
                    class="button" 
                    v-bind:class="{ disabledButton: !inStock }"
                    v-bind:disabled="!inStock"
                    v-on:click="addToCart">
                    Add to Cart
                </button>
                <button 
                    class="button" 
                    @click="removeFromCart">
                    Remove Item
              </button>
            </div>
        </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 5 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
            this.variants[this.selectedVariant].quantity -= 1
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
            this.variants[this.selectedVariant].quantity += 1
          },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }

})