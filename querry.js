function collor(){
    let cont = document.getElementsByClassName('container')
    console.log(cont);

    cont[0].classList.toggle('colorr')

}


//querySelection
//querySlector all


// let b= document


let c = document.querySelectorAll('.container')
console.log(c);
c[1].style.color="yellow"

let btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
    alert('add event fire')
})

