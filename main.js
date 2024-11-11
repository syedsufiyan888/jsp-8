//so hey lets practice synchronous and asynchronous

//synchronous
console.log('Start');

for(var i=0;i<5000;i++){
    console.log(i);
}

console.log('End');

//Asynchronous - setTimeout(), promises, fetch
// 1.setTimeout
console.log('Start');

setTimeout(() =>{
    console.log("Time Finished");
}, 3000);

console.log('Here I am before the time finished...3sec')

//2.Promise - something that comes after completion or failure of the asynchronous task and its resulting value
/* 
pending = initial state, outcome is unknown
fullfilled = operation is successfull
rejected = operation failed
*/
//creating promise using constructor

const checkNumber = new Promise((resolve,reject)=>{
    if(1>2){
        resolve('Resolved');
    }else{
        reject('Rejected, 1 is not greater than 2');
    }
});
/*
if promise is 'resolved' then ==> 'then' part is excecuted
if promise is 'rejected' then ==> 'catch' part is excecuted
*/
checkNumber.catch((message)=>{
    console.log('then',message);
}).catch((Error)=>{
    console.log('Error',Error);
});

//API

/*
Get - getting data from the database
Post - sending data to the server
Update - updating data in the server
Delete - deleting data in database

1.http request = GET, POST, PUT(update), DELETE
2.API endpoint
3.fetch to call api
-->we recieve the response in JSON format 
*/

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

fetch(apiUrl)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log('error',error))















