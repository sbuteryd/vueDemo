var app = new Vue({
    el:'#app',
    data:{
        product:'socks',
        brand:'Vue Master',
        // image:'./assets/vmSocks-green-onWhite.jpg',
        selectedVariant:0,
        inStock:true,
        details:["80% cotton","20% polyester","Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg'

            }
        ],
        cart:0,
    },
    methods: {
        addToCart:function(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed:{
        title() {
            return `${this.brand} ${this.product}`
        }
    }
})