var app = new Vue({
    el:'#app',
    data:{
        product:'Socks',
        brand:'Vue Mastery',
        selectedVariant:0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                varianImage:'./assets/vmSocks-green-onWhite.jpg',
                variantQuantity:10,
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                varianImage:'./assets/vmSocks-blue-onWhite.jpg',
                variantQuantity:0
            },
        ],
        cart:0,
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        updateProduct(index){
            this.selectedVariant = index
        }
    },
    computed:{
        title(){
            return this.brand + '' + this.product
        },
        image(){
            console.log(this.selectedVariant,'varianImage')
            return this.variants[this.selectedVariant].varianImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});