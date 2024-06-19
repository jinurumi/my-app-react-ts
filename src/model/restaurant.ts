// let data ={ //타입만들어주기
//     name:'누나네 식당',
//     category:'western',
//     address:{
//       city:'incheon',
//       detail:'somewhere',
//       zipCode:23425634
//     },
//     menu:[{name:"rose pasta", price:2000,category:"PASTA"},{name:"garlic steak",price:3000,category:"STEAK"}]
//   }

export type Restaurant = {
    name:string;
    category:string;
    address:{
        city:string;
        detail:string;
        zipCode:number;
    };
    menu:{
        name:string;
        price:number;
        category:string;
    }[]

}

type Address = {
    city:string;
    detail:string;
    zipCode:number;
}