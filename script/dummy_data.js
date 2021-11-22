
//añade mas usuarios usando esa estructura, poniendo nuevas imagenes de perfil 
const users = [
    {
        id: 1,
        userName: "Isabella",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    }
    ,
    {
        id: 2,
        userName: "Miguel Olivares",
        profilePicture: "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-3-1-750x750.jpg",

    }
    ,
    {
        id: 3,
        userName: "Paula Ordoñez",
        profilePicture: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",

    }
    ,
    {
        id: 4,
        userName: "Luara Leon",
        profilePicture: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",

    }
    ,
    {
        id: 5,
        userName: "Camilo Jimenez",
        profilePicture: "https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg",

    }
    ,
    {
        id: 6,
        userName: "Valentina Zapata",
        profilePicture: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",

    }
    ,
    {
        id: 7,
        userName: "Diana Giraldo",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    }
    ,
    {
        id: 8,
        userName: "Daniel Martinez",
        profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    }
    ,
    {
        id: 9,
        userName: "Miguel Rivera",
        profilePicture: "https://us.123rf.com/450wm/dglimages/dglimages1807/dglimages180700174/105059079-front-view-of-a-young-male-adult-looking-and-smiling-at-the-camera-while-he-gets-a-portrait-taken-.jpg?ver=6",

    },
    {
        id: 10,
        userName: "éxito",
        profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Almacenes_exito_logo.svg/1200px-Almacenes_exito_logo.svg.png",
    }
    
]

//añade mas productos  usando esa estructura, poniendo nuevas imagenes de productos 
const products = [

    {
        title: "Papas Margarita Pollo",
        description: "Papas Margarita Pollo",
        id: 0,
        img: "http://cdn.shopify.com/s/files/1/0349/9376/6459/products/PapasMargaritaPollo105_f4fdc6b4-a4be-41f2-b104-446775e0b04d.png?v=1594628009",
        rating: 3.5,
        price: 4000,

    },
    {
        title: "Granola Tosh Chocolate",
        description: "Granola Tosh Chocolate 300g",
        id: 15,
        img: "https://tosh.com.co/wp-content/uploads/2021/03/Chocolate-Granolas-Tosh-new.png",
        rating: 3.5,
        price: 4000,

    }
    ,

    {
        title: "Papa Margarita Crema y Cebolla",
        description: "Papa Margarita Crema y Cebolla x 110 gr",
        id: 1,
        img: "http://web.superboom.net/web/image/product.template/23419/image",
        rating: 2.4,
        price: 3960,

    }
    ,
    {
        title: "Atun Vancams Lomito Aceite",
        description: "Atun Vancams Lomito Aceite x 160 gr",
        id: 2,
        img: "https://i2.wp.com/www.casagamovi.cl/wp-content/uploads/2021/06/atun-lomitos-van-camps.png?fit=1000%2C1000&ssl=1",
        rating: 3.5,
        price: 6900,

    }
    ,
    {
        title: "Avena Alpina",
        description: "Avena Alpina x 1000 ml",
        id: 3,
        img: "https://locatelcolombia.vtexassets.com/arquivos/ids/192984/7702001044504.png?v=636125789479970000",
        rating: 3,
        price: 6080,

    }
    ,
    {
        title: "Cereal Bonyurt Black",
        description: "Cereal Bonyurt Black 173 ml",
        id: 4,
        img: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3702140-1000-1000/7702001086498.png?v=637503912776230000",
        rating: 4.5,
        price: 3050,

    }
    ,
    {
        title: "Kumis Alpina Natural",
        description: "Kumis Alpina Natural x 1750 ml",
        id: 5,
        img: "https://servialgusto.com/wp-content/uploads/2021/05/7702001048113.png",
        rating: 5,
        price: 6080,
    }
    ,
    {
        title: "Cafe Aguila Roja",
        description: "Cafe Aguila Roja x 250 gr",
        id: 6,
        img: "https://citymercao.com/wp-content/uploads/2020/09/cafe-aguila-roja-250-g.png",
        rating: 2,
        price: 6230,
    }
    ,
    {
        title: "Colcafe Granulado",
        description: "Colcafe Granulado x 85 gr",
        id: 7,
        img: "https://www.privun.com/pub/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/h/t/httpsstorage.googleapis.comfotos-novaventaprivun1014989.png",
        rating: 5,
        price: 8400,
    }
    ,
    {
        title: "Cereal Fitness",
        description: "Cereal Fitness x 285 gr",
        id: 8,
        img: "https://www.nestle-cereals.com/co/sites/g/files/fawtmp386/files/styles/scale_992/public/d7/fitness_330g_co_lego_a_1.png?itok=CLUeYhjH",
        rating: 5,
        price: 8760,
    }
    ,
    {
        title: "Chorizo Zenu Coctel Antioqueño",
        description: "Chorizo Zenu Coctel Antioqueño x 300 gr",
        id: 9,
        img: "https://www.zenu.com.co/wp-content/uploads/2019/07/chorizo-antioqueno-zenu.png",
        rating: 5,
        price: 8760,
    },

    {
        title: "Gaseosa Pepsi 3L",
        description: "Gaseosa Pepsi 3L",
        id: 10,
        img: "https://boticajunin.com.co/wp-content/uploads/2020/12/624140-1-2-570x570.png",
        rating: 5,
        price: 5000,
    }
    ,
    {
        title: "Palomitas Actii",
        description: "Palomitas Actii 100g",
        id: 11,
        img: "https://actii.com.mx/wp-content/uploads/2020/10/palomitas-microondas-extra-mantequilla.png",
        rating: 5,
        price: 4000,
    }
]

const comunitylists = [{
    id: "14",
    name: "Comida de mar",
    userId: 1,
    products: [2, 3]

},
{
    id: "20",
    name: "Fiesta con amigos",
    userId: 10,
    products: [0, 1,9,10,11]
},{
    id: "25",
    name: "Desayunos saludables",
    userId: 8,
    products: [8, 5,3,15
    ]
}


]