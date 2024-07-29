let cat_title = window.localStorage.getItem("ITEM");
document.getElementById("main-page-title").innerHTML=cat_title; 
let gen = window.localStorage.getItem("Gen");


function fun1(a){
    let g = a.innerHTML;
    var f = '';
    for(i in g){
        let next = parseInt(i)+parseInt(1);
        if(g[i]=='p'&&g[next]=='>'){
            let j=2;
            while(g[parseInt(i)+parseInt(j)]!='<'){
                f=f+g[parseInt(i)+parseInt(j)];
                j=j+1;
            }
            break;
        }
    }
    window.localStorage.setItem('ITEM',f);
}

let itemcount=0;
function item(imge,str,descr,cat,prc){
    let obj={
        img:imge,
        name:str,
        desc:descr,
        catg:cat,
        price:prc
    }
    return obj;
}



// let itemarr = [item("images/03-oversizetshirtmen.jpg","Lorem abc ds","Lorem ipsum dolor sit amet consecte elit. Nobis, id?","T-shirt","599"),item("images/03-oversizetshirtmen.jpg","Lorem abc ds","Lorem ipsum dolor sit amet consecte elit. Nobis, id?","Tshirt","599"),item("images/03-oversizetshirtmen.jpg","Lorem abc ds","Lorem ipsum dolor sit amet consecte elit. Nobis, id?","T-shirts","599"),item("images/03-oversizetshirtmen.jpg","Lorem abc ds","Lorem ipsum dolor sit amet consecte elit. Nobis, id?","T-shirts","599")];
let item_tshirt=[item("images1/tshirt1.webp","Deadpool","Mens Red XI Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirt2.webp","Dunk","Mens Pink Dunk Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirt3.webp","Disney king","Mens Brown Call Me King Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirt4.webp","Lost Reality","Mens White Typography Printed T-shirt","T-shirt","599"),
item("images1/tshirt5.webp","Toji","Mens Black Toji Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirt6.webp","Gym Reaper","Mens Black Gym Reaper Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirt7.webp","Starry Night","Mens Black Starry Night Printed T-shirt","T-shirt","599"),
];
let item_ovtshirt=[item("images1/otshirt1.webp","Skull","Mens Black One piece Graphic Printed Oversized T-shirt","Oversized T-shirt","799"),
item("images1/otshirt2.webp","One Piece","Mens Black Dunk Graphic Printed OversizedOversized  T-shirt","Oversized T-shirt","699"),
item("images1/otshirt3.webp","Purple","Mens Ligtht Purple Cool Plane Oversized T-shirt","Oversized T-shirt","899"),
item("images1/otshirt4.webp","Harry Potter","Mens Brown Typography Printed Oversized T-shirt","Oversized T-shirt","1099"),
item("images1/otshirt5.webp","Loone Tones","Mens Purple Toji Graphic Printed Oversized T-shirt","Oversized T-shirt","999"),
item("images1/otshirt6.webp","Toxic","Mens Black Gym Reaper Graphic Printed Oversized T-shirt","Oversized T-shirt","799"),
item("images1/otshirt7.webp","Killer Mode","Mens Purple Starry Night Printed Oversized T-shirt","Oversized T-shirt","799")
];
let item_jeans=[item("images1/jeans1.webp","Straight Fit","Mens Black Baggy Straight Fit Jean","Jean","1599"),
item("images1/jeans2.webp","Baggy Jeans","Mens Green Baggy Straight Fit Jean","Jean","1699"),
item("images1/jeans3.webp","Baggy Straight Fit","Mens Blue Baggy Straight Fit Jean","Jean","2099"),
item("images1/jeans4.webp","Carpenter Jeans","Mens Blue Baggy Carpenter Straight Fit Jean","Jean","1999"),
item("images1/jeans5.webp","Baggy Jeans","Mens Blue Baggy Carpenter Straight Fit Jean","Jean","1599"),
item("images1/jeans6.webp","Wide Leg","Mens White Wide Leg Straight Fit Jean","Jean","1599")
];
let item_joggers=[item("images1/joggers1.webp","Joggers","Mens Black Joggers","Joggers","599"),
item("images1/joggers2.webp","Joggers","Mens Cream Joggers","Joggers","599"),
item("images1/joggers3.webp","Joggers","Mens Grey Joggers","Joggers","599"),
item("images1/joggers4.webp","Joggers","Mens White Joggers","Joggers","599"),
item("images1/joggers5.webp","Joggers","Mens White Joggers","Joggers","599")
];

let item_Shirt = [item("images1/shirt1.webp","Looney Toones","Mens Red XI Graphic Printed Shirt","Shirt","999"),
item("images1/shirt2.webp","Checked Shirt","Mens Pink Dunk Graphic Printed Shirt","Shirt","899"),
item("images1/shirt3.webp","Printed Shirt","Mens Brown Call Me King Graphic Printed Shirt","Shirt","799"),
item("images1/shirt4.webp","Printed Shirt","Mens White Typography Printed Shirt","Shirt","1099"),
item("images1/shirt5.webp","Red Checked","Mens Black Toji Graphic Printed Shirt","Shirt","1299"),
item("images1/shirt6.webp","Black Champ","Mens Black Gym Reaper Graphic Printed Shirt","Shirt","999"),
item("images1/shirt7.webp","Den Graphic","Mens Black Starry Night Printed Shirt","Shirt","799"),
];



let item_tshirtw=[item("images1/tshirtw1.webp","Deadpool","Womens Red XI Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirtw2.webp","Dunk","Womens Pink Dunk Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirtw3.webp","Disney king","Womens Brown Call Me King Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirtw4.webp","Lost Reality","Womens White Typography Printed T-shirt","T-shirt","599"),
item("images1/tshirtw5.webp","Toji","Womens Black Toji Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirtw6.webp","Gym Reaper","Womens Black Gym Reaper Graphic Printed T-shirt","T-shirt","599"),
item("images1/tshirtw7.webp","Starry Night","Womens Black Starry Night Printed T-shirt","T-shirt","599")
];
let item_ovtshirtw=[item("images1/otshirtw1.webp","Skull","Womens Black One piece Graphic Printed Oversized T-shirt","Oversized T-shirt","799"),
item("images1/otshirtw2.webp","One Piece","Womens Black Dunk Graphic Printed OversizedOversized  T-shirt","Oversized T-shirt","699"),
item("images1/otshirtw3.webp","Purple","Womens Ligtht Purple Cool Plane Oversized T-shirt","Oversized T-shirt","899"),
item("images1/otshirtw4.webp","Harry Potter","Womens Brown Typography Printed Oversized T-shirt","Oversized T-shirt","1099"),
item("images1/otshirtw5.webp","Loone Tones","Womens Purple Toji Graphic Printed Oversized T-shirt","Oversized T-shirt","999"),
item("images1/otshirtw6.webp","Toxic","Womens Black Gym Reaper Graphic Printed Oversized T-shirt","Oversized T-shirt","799"),
item("images1/otshirtw7.webp","Killer Mode","Womens Purple Starry Night Printed Oversized T-shirt","Oversized T-shirt","799")
];
let item_jeansw=[item("images1/jeansw1.webp","Straight Fit","Womens Black Baggy Straight Fit Jean","Jean","1599"),
item("images1/jeansw2.webp","Baggy Jeans","Womens Green Baggy Straight Fit Jean","Jean","1699"),
item("images1/jeansw3.webp","Baggy Straight Fit","Womens Blue Baggy Straight Fit Jean","Jean","2099"),
item("images1/jeansw4.webp","Carpenter Jeans","Womens Blue Baggy Carpenter Straight Fit Jean","Jean","1999"),
item("images1/jeansw5.webp","Baggy Jeans","Womens Blue Baggy Carpenter Straight Fit Jean","Jean","1599"),
item("images1/jeansw6.webp","Wide Leg","Womens White Wide Leg Straight Fit Jean","Jean","1599")
];
let item_joggersw=[item("images1/joggersw1.webp","Joggers","Womens Black Joggers","Joggers","599"),
item("images1/joggersw2.webp","Joggers","Womens Cream Joggers","Joggers","599"),
item("images1/joggersw3.webp","Joggers","Womens Grey Joggers","Joggers","599"),
item("images1/joggersw4.webp","Joggers","Womens White Joggers","Joggers","599"),
item("images1/joggersw5.webp","Joggers","Womens White Joggers","Joggers","599")
];

let item_dress = [item("images1/dress1.webp","Looney Toones","Womens Red XI Graphic Printed Dress","Dress","999"),
item("images1/dress2.webp","Checked Shirt","Womens Pink Dunk Graphic Printed Dress","Dress","899"),
item("images1/dress3.webp","Printed Shirt","Womens Brown Call Me King Graphic Printed Dress","Dress","799"),
item("images1/dress4.webp","Printed Shirt","Womens White Typography Printed Dress","Dress","1099"),
item("images1/dress5.webp","Red Checked","Womens Black Toji Graphic Printed Dress","Dress","1299")
];


if(cat_title=="Shirt"){
    for(i of item_Shirt){
        cretdiv(i);
    }
}
if(cat_title=="Dress"){
    for(i of item_dress){
        cretdiv(i);
    }
}
if(gen=='0'){
    if(cat_title=="T-shirts"){
        for(i of item_tshirt){
            cretdiv(i);
        }
    }
    else if(cat_title=="Oversized T-shirts"){
        for(i of item_ovtshirt){
            cretdiv(i);
        }
    }
    else if(cat_title=="Joggers"){
        for(i of item_joggers){
            cretdiv(i);
        }
    }
    else if(cat_title=="Jeans"){
        for(i of item_jeans){
            cretdiv(i);
        }
    }
}
else{
    if(cat_title=="T-shirts"){
        for(i of item_tshirtw){
            cretdiv(i);
        }
    }
    else if(cat_title=="Oversized T-shirts"){
        for(i of item_ovtshirtw){
            cretdiv(i);
        }
    }
    else if(cat_title=="Joggers"){
        for(i of item_joggersw){
            cretdiv(i);
        }
    }
    else if(cat_title=="Jeans"){
        for(i of item_jeansw){
            cretdiv(i);
        }
    }
    
}




function cretdiv(obj){
    const a = document.createElement("a");
    a.className="items";
    a.href="#";
    const imge = document.createElement("img");
    imge.className="img-item";
    imge.src=obj.img;
    a.appendChild(imge);


    const div1 = document.createElement("div");
    div1.className="item-box";

    const p1 = document.createElement("h2");
    p1.className="title-category";
    p1.innerText=obj.name;
    div1.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText=obj.desc;
    div1.appendChild(p2);

    const img1 = document.createElement("img");
    img1.className="star";
    img1.src="images/5-star.png"
    div1.appendChild(img1);

    const p3 = document.createElement("p");
    p3.className="price";
    p3.innerText="₹ "+obj.price;
    div1.appendChild(p3);

    const div2 = document.createElement("div");
    const bttn = `<button class="add-to-cart" onclick="storetocart('${obj.img}','${obj.name}','${obj.desc}','${obj.price}')"><i class="fa fa-shopping-cart"> </i> Add to cart</button>`;
    div2.innerHTML=bttn;
    div1.appendChild(div2);

    a.appendChild(div1);
    document.getElementById("content-box").appendChild(a);
}


function storetocart(imglin, title, description, price) {
    var item = {
        il: imglin,
        title: title,
        description: description,
        price: price
    };

    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];



    cartItems.push(item);

    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert('Item added to cart!');
}



function searchbar(){
    let searchval = document.getElementById('search').value.toUpperCase();
    
    let box = document.getElementById('content-box');
    let objs = box.getElementsByTagName('a');
    
    for(i of objs){
        let par = i.getElementsByTagName('h2');
        let title = par[0].innerText;

        if (title.toUpperCase().indexOf(searchval)>-1){
            i.style.display="block"
        }
        else{
            i.style.display="none"
        }
        
    }
}