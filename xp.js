
//Exercise: Promises
//Instructions
//Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise1 = new Promise((resolve, reject) =>{
	setTimeout(resolve, 4000, 'Success')
})
console.log(promise1)


//------------------------------------------------------------------------------------------->
//Exercise: Resolve & Reject
//Instructions
//Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise1 = Promise.resolve(3);
promise1.then((value) =>{
	console.log(value);
});


function resolved(result){
	console.log('Resolved');
}

function rejected(result){
	console.log(result);
}

Promise.reject(new Error('Boo!!')).then(resolved, rejected);











































