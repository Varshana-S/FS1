function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));

const obj={
    name: 'Varsh',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());

//map-return new array
const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum)

//filter-return new array with elements satisfying the condition
const posNum=numbers.filter((n)=>n>0)
console.log(posNum)

const num=numbers.filter((n)=>n%2!=0)
console.log(num)

//reduce-reduced to single element
const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total)

const products=[
    {name:'tv',price:20000},
    {name:'phone',price:10000},
    {name:'laptop',price:50000},
    {name:'tab',price:4000}
]
const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totalPrice)

const nums=products.filter((n)=>n.price>5000);
console.log(nums);


//Destructuring
const user={name:'Jungkook',password:'Jeon'}
const {name,password}=user
console.log(password);
const number=[1,2,3,4,5,6]
const[first,second,third,...spread]=number
console.log(third);
console.log(spread);

//spread
const arr1=[1,2,3]
const copy=[...arr1,4,5,6]
const arr2=[7,8,9]
const copy1=[...copy,...arr2]
console.log(copy1);


//rest
function add2(...arguments){
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5))

function call(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return `${name} from outside callback`
}
console.log(fun('function',()=>{console.log(`from inside callback`) }))


async function fetchuser() {
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
    const data=await response.json()
    console.log(data);
    data.map((a)=>console.log(a.name))
    } catch(error){
        console.log(error)

    }
}
fetchuser()