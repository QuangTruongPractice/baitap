function loadCates(){
    fetch("data/categories.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
            h+=`<li><a href="#">${c.name}</a></li>`;
        
        let e = document.getElementById("menu");
        if(e!==null)
            e.innerHTML +=h; 
            
    })
}
function loadProducts(){
    fetch("data/products.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
            h+=`<div class="product">
            <div>
            <div><img src="${c.image}" alt="iPhone" /></div>
            <h3>${c.name}</h3>
            <p>${c.price}</p>
            <a href="javascript:;" class="del")">&times;</a>
            </div>
        </div>`;
        
        let e = document.getElementById("products");
        if(e!==null){
            e.innerHTML =h; 
            let buttons = document.getElementsByClassName("del");
            for(let b of buttons)
                b.addEventListener("click", function(){
                    if(confirm("Ban co chac chan xoa khong?")===true)
                        this.parentNode.parentNode.remove();
                })  
        }
    })
}


window.onload = function(){
    loadCates();
    loadProducts();
    let k=document.getElementById("kw");
    k.addEventListener("blur",function(){
        this.classList.remove("error");
        setTimeout(()=> {this.classList.add("error");},1000);
    })
}

