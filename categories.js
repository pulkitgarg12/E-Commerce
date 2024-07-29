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
    window.localStorage.setItem('Gen',0);
}

function fun2(a){
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
    window.localStorage.setItem('Gen',1);
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
