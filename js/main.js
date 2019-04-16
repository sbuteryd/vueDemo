Vue.component('product', {
    props:{
        price:{
            type:Boolean,
            required:true
        }
    },
    template: `
    <div class="product">

        <div class="product-image">
            <img :src="image" alt="">
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <p>User is premium:{{shipping}}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else="inStock">Out of Stock</p>
            <ul>
                 <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div class="color-box"
                  v-for="(variant,index) in variants"
                  :key="variant.variantId"
                  :style="{backgroundColor:variant.variantColor}"
                  @mouseover="updateProduct(index)"
                 >
            </div>
            <button @click="addToCart"
                    :disabled="!inStock"
                    :class ="{disabledButton:!inStock}"
            >Add to cart</button>

        </div>
        <product-review @review-submitted="addReview"></product-review>
        
    </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    varianImage: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    varianImage: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                },
            ],
            reviews:[]
        }
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + '' + this.product
        },
        image() {
            console.log(this.selectedVariant, 'varianImage')
            return this.variants[this.selectedVariant].varianImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if(this.price){
                return 'Free'
            }else {
                return  2.99
            }
        }
    }
});

Vue.component('product-review',{
    template: `
     <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
    `,
    data(){
        return {
            name:null,
            review:null,
            rating:null
        }
    },
    methods:{
        onSubmit(){
            let productReview = {
                name: this.name,
                review: this.review,
                rating :this.rating
            }
            this.$emit('review-submitted',productReview)
            this.name= null
            this.review = null
            this.rating = null
        }
    }
})

var app = new Vue({
    el: '#app',
    data:{
        premium:true,
        cart:[]
    },
    methods: {
        updateCart(id) {
            console.log(id)
            this.cart.push(id)
        }
    }
});