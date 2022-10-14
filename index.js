//async await
const ul=document.createElement('ul')
const li =document.createElement('li')


/*fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    data.forEach(function(post){
        const li=document.createElement('li')
        li.innerText=post.title
        ul.append(li);
    })
    document.body.append(ul)
}) */

async function loadData(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await response.json()
    console.log(data)
}
loadData()

console.log('linea 2')

//Ecmascript modules

//import {add,multiply,active,points,title} from './add.js'

import addModule from './add.js'
console.log(addModule)

/*
console.log(multiply(10,20))
console.log(add(10,20))
console.log(active,points,title)
*/

/*
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

//return en funciones y string literals
const background='red'
const color='white'
const isAutorized=false

const button = document.createElement('button')
button.innerText='click me'
button.style=`background:${background}; color:${color}`
button.style=`background:${isAutorized ? 'blue': 'red'};color${color}`
document.body.append(button)



button.addEventListener('click',()=>{

    if(isAutorized){
       return alert('esta autorizado')
    }else{
        alert('no esta autorizado')
    }
}) 

//array methods

const names=['ryan','joe','maria']
const cerdos=['Jazmin','Rafa','Yohander']

/*for(let i=0; i<names.length;i++){
    const element=names[i];
    console.log(element)
} */
/*

names.forEach(function(name){
  console.log(name)
})

const newNames=cerdos.map(function(names1){
return names1;
})

//console.log(newNames)
//console.log(names.concat(cerdos))

//----------------spread operator
console.log([...names, ...newNames])

const user2 ={
    name:"ryan",
    lastname:"ray"
}

const address={
    street: 'main street 123',
    city:'bogota'
}

const userInfo={
    ...user,
    ...address
}
console.log(user2)
console.log(address)
console.log(userInfo)

//ecmascript modules

*/
