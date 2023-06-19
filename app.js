const p = document.getElementById("p");
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

// function move(){
//     const lastLi = p.lastElementChild;
//     const firstLi = p.firstElementChild;
//     p.insertBefore(lastLi,firstLi);
// }

// btn1.addEventListener('click',move)




btn1.addEventListener('click', () => {
    p.insertBefore(p.lastElementChild, p.firstElementChild)
})

btn2.addEventListener('click', () => {
    p.insertAdjacentElement('beforeend', p.firstElementChild)
} )


let btn3 = document.getElementById('btn3')
let i = document.getElementById('i')

btn3.addEventListener('click',() => {
    let pap = document.createElement('li')
    if(i.value.length > 0){
    pap.innerText = i.value;
    p.appendChild(pap)
    i.value = ''
    }
} )


