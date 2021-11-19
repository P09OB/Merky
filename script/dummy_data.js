
//añade mas usuarios usando esa estructura, poniendo nuevas imagenes de perfil 
const users = [
    {   
        id:1,
        userName:"Pepito",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Miguel Olivares",
        profilePicture:"https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-3-1-750x750.jpg",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Paula Ordoñez",
        profilePicture:"https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Luara Leon",
        profilePicture:"https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Camilo Jimenez",
        profilePicture:"https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Valentina Zapata",
        profilePicture:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Diana Giraldo",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Daniel Martinez",
        profilePicture:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
    }
    ,
    {   
        id:Math.random(),
        userName:"Miguel Rivera",
        profilePicture:"https://us.123rf.com/450wm/dglimages/dglimages1807/dglimages180700174/105059079-front-view-of-a-young-male-adult-looking-and-smiling-at-the-camera-while-he-gets-a-portrait-taken-.jpg?ver=6",
        
    }
]

//añade mas productos  usando esa estructura, poniendo nuevas imagenes de productos 
const products = [

    {
        title: "Papas Margarita Pollo", 
        description: "las vende el pibe", 
        id: 0, 
        img: "https://colsubsidio.vteximg.com.br/arquivos/ids/166452-1200-1200/7702189053770.jpg?v=637299796871330000", 
        rating: 5, 
        price: 4000,

    },

    {
        title: "Papa Margarita Crema y Cebolla", 
        description: "Papa Margarita Crema y Cebolla x 110 gr", 
        id: 1, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/07/23142245/7702189056719.jpg", 
        rating: 4, 
        price: 3960,

    }
    ,
    {
        title: "Atun Vancams Lomito Aceite", 
        description: "Atun Vancams Lomito Aceite x 160 gr", 
        id: 2, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/09/02133732/7702367002613.jpg", 
        rating: 4, 
        price: 6900,

    }
    ,
    {
        title: "Avena Alpina", 
        description: "Avena Alpina x 1000 ml", 
        id: 3, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/05/31164359/7702001044702.jpg", 
        rating: 3, 
        price: 6080,

    }
    ,
    {
        title: "Cereal Bonyurt Black de Alpina", 
        description: "Avena Alpina x 1000 ml", 
        id: 4, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/05/31150032/7702001086498.jpg", 
        rating: 5, 
        price: 3050,

    }
    ,
    {
        title: "Kumis Alpina Natural", 
        description: "Kumis Alpina Natural x 1750 ml", 
        id: 5, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/05/31145850/7702001048656.jpg", 
        rating: 5, 
        price: 6080,
    }
    ,
    {
        title: "Cafe Aguila Roja", 
        description: "Cafe Aguila Roja x 250 gr", 
        id: 6, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/10/19124004/7702040027001.jpg", 
        rating: 2, 
        price: 6230,
    }
    ,
    {
        title: "Colcafe Granulado", 
        description: "Colcafe Granulado x 85 gr", 
        id: 7, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/09/02185531/7702032104376.jpg", 
        rating: 5, 
        price: 8400,
    }
    ,
    {
        title: "Cereal Fitness", 
        description: "Cereal Fitness x 285 gr", 
        id: 8, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/09/14165403/7501058614032.jpg", 
        rating: 5, 
        price: 8760,
    }
    ,
    {
        title: "Chorizo Zenu Coctel Antioqueno", 
        description: "Chorizo Zenu Coctel Antioqueno x 300 gr", 
        id: 9, 
        img: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/09/01192348/7701101310052.jpg", 
        rating: 5, 
        price: 8760,
    }
]

const comunitylists = [{
    id: "14",
    name: "Comida de mar",
    userId: 1,
    products: [2, 3]

}]