
//creando una funcion
function hello(name){
    return 'Hola' + name
}

console.log(hello('Ryan'))

//objetos
const user={
    name:'ryan',
    lastname:'holm',
    age:30,
    address:{
        country:'Venezuela',
        city:'Barquisimeto',
        street:'main street 123'
    },
    friends:['Rafa','Jazmin'],
    active:true,
    sendMail: function(){
        return 'sending email...'
    }
}

console.log(user)

//Objetos simplicados

const name='lapto'
const price=300

const newProducto={
    name:name,
    price:price
}

console.log(newProducto)

//Manipular el Dom

 

//objetos con parametros

const user1={
    name:'joe',
    age:30
}

function printInfo(user1){
    return '<h1>hola '+user1.name + '</h1>'
}



document.body.innerHTML=printInfo(user)

//destructurando un objeto
function printInfo2({age}){
    return '<h1>hola '+age+ '</h1>'
}

console.log(printInfo2(user1))

//funciones anonimas

console.log(function start(){
 return 'Starting...'
}())
//----------------------------------------------------






//Inline arrow functions

const showText = () => 'Hola Mundo'
const showNumber = () => 22
const showBoolean = () => true
const showArray= () => [1,2,3]
const showObject= () => ({name:'ryan'})

console.log(showText())
console.log(showArray())
console.log(showObject())

//return en funciones
const button = document.createElement('button')
button.innerText='click me'
document.body.append(button)

const isAutorized=false

button.addEventListener('click',()=>{

    if(isAutorized){
       return alert('esta autorizado')
    }else{
        alert('no esta autorizado')
    }
})