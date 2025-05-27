let pname = document.getElementById('pname');
let price = document.getElementById('price');
let Qty = document.getElementById('Qty');
let img_url = document.getElementById('img_url')
let form = document.getElementById('form');

let products =  JSON.parse(localStorage.getItem('products')) || [];

form.addEventListener('submit',(p)=>{
    p.preventDefault();
    
    let pro = {
        id: Date.now(),
        pname : pname.value,
        price : price.value,
        Qty : Qty.value,
        img_url : img_url.value,
    }
    
    products.push(pro);
    form.reset(); 
    localStorage.setItem('products',JSON.stringify(products));   
});

