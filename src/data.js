const banner_01 = require('../src/images/side-1.webp').default
const banner_02 = require('../src/images/side-2.webp').default
const banner_03 = require('../src/images/side-3.webp').default
const banner_04 = require('../src/images/side-4.webp').default
const banner_05 = require('../src/images/side-5.webp').default
const banner_06 = require('../src/images/side-6.webp').default
const banner_07 = require('../src/images/side-7.webp').default
const banner_08 = require('../src/images/side-8.webp').default
const banner_09 = require('../src/images/side-9.webp').default


const product1 =  require('../src/images/p-1.webp').default
const product2 =  require('../src/images/p-2.webp').default
const product3 =  require('../src/images/p3.webp').default
const product4 =  require('../src/images/p-4.webp').default
const product5 =  require('../src/images/p-5.webp').default
const product6 =  require('../src/images/p-6.webp').default
const product7 =  require('../src/images/p-7.webp').default
const product8 =  require('../src/images/p-8.webp').default
const product9 =  require('../src/images/p-9.webp').default

export const Category = [
    {
        id:1,
        title:"Đồ gia dụng",
        image:banner_01,
        number_of_products:5
    },

    {
        id:2,
        title:"Nước uống, nước giải khát",
        image:banner_02,
        number_of_products:5
    },

    {
        id:3,
        title:"Thực phẩm từ sữa và trứng",
        image:banner_03,
        number_of_products:5
    },

    {
        id:4,
        title:"Rau, củ, quả",
        image:banner_04,
        number_of_products:5
    },

    {
        id:5,
        title:"Đồ ngọt các loại",
        image:banner_05,
        number_of_products:5
    },

    {
        id:6,
        title:"Gia vị và nước chấm",
        image:banner_06,
        number_of_products:5
    },

    {
        id:7,
        title:"Đồ điện tử",
        image:banner_07,
        number_of_products:5
    },

    {
        id:8,
        title:"Ngũ cốc dinh dưỡng",
        image:banner_08,
        number_of_products:5
    },

    {
        id:9,
        title:"Các loại thịt",
        image:banner_09,
        number_of_products:5
    }
]

export const Product = [
    {
        id:1,
        title: "Bắp",
        image:product1,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:2,
        title: "Khoai tây",
        image:product2,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:3,
        title: "Đu đủ",
        image:product3,
        main_price:"$18",
        sub_price:"$14",
    },


    {
        id:4,
        title: "Nho không hạt",
        image:product4,
        main_price:"$18",
        sub_price:"$14",
    },


    {
        id:5,
        title: "Nho xanh không hạt",
        image:product5,
        main_price:"$18",
        sub_price:"$14",
    },


    {
        id:6,
        title: "Cà chua bi",
        image:product6,
        main_price:"$18",
        sub_price:"$14",
    },


    {
        id:7,
        title: "Bông cải xanh",
        image:product7,
        main_price:"$18",
        sub_price:"$14",
    },


    {
        id:8,
        title: "Đậu Hà Lan",
        image:product8,
        main_price:"$18",
        sub_price:"$14",
    },


    {
        id:9,
        title: "organic parsley",
        image:product9,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:10,
        title: "ngò tây",
        image:product9,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:11,
        title: "Ngò tây",
        image:product9,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:12,
        title: "Ngò tây",
        image:product9,
        main_price:"$18",
        sub_price:"$14",
    }


]

export const Sale_Product = [

    {
        id:1,
        title: "Bắp",
        image:product1,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:2,
        title: "Khoai tây",
        image:product2,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:3,
        title: "Ngò tây",
        image:product9,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:4,
        title: "Nho không hạt",
        image:product4,
        main_price:"$18",
        sub_price:"$14",
    },

    {
        id:5,
        title: "Nho xanh không hạt",
        image:product5,
        main_price:"$18",
        sub_price:"$14",
    },

    

]

export const Cart = []

export const addCart = (id) =>{
    const {products,Cart} = {...this.state};
    const data = products.filter(product =>{
        return product.id === id
    })
    console.log(data);
}
