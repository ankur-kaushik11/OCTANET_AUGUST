const items=document.getElementById("todo-items")
const submit=document.getElementById("sub");
const aot=document.getElementById("items")
submit.addEventListener('click',additems);
aot.addEventListener("click",deleteitems)


function additems(e){
    e.preventDefault();
    let newitem=items.value;
    let li=document.createElement("li")
    li.className="flex justify-between newitmes border-2 border-gray-300 w-[40rem] h-19 bg-gray-100 no-underline font-serif text-[20px] mt-2";
    li.appendChild(document.createTextNode(`${newitem}`))
    aot.appendChild(li);

   
    let del=document.createElement("button");
    del.className="m-1 mr-2 btn h-7 w-24 ml-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-800 text-center font-serif";
    
    del.appendChild(document.createTextNode("Delete"))
    li.appendChild(del);

}

function deleteitems(e){
    if(e.target.classList.contains("btn")){
            let li=e.target.parentElement;
            aot.removeChild(li);
        }

    }