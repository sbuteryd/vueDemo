var app = new Vue({
    el:'#app',
    data:{
        product:'socks',
        image:'./assets/vmSocks-green-onWhite.jpg',
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
        updateProduct(variantImage){
            console.log(variantImage)
            this.image = variantImage
        }
    }
})