// console.log(1);
// setTimeout(() => {
//     console.log(3);
// }, 2000)
// console.log(4);
// console.log(5);
// console.log(6);


// let num = 1;
// const inverterId = setInterval(()=>{ 
//     num++  
// if(num >= 8){
//     clearInterval(inverterId)
// }
//     console.log(num);
    
// }, 1000)

fetch('https://jsonplaceholder.typicode.com/to/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Error:', err));

const loadData = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
}

try {
    
} 
catch (error) {
    
}
finally{

}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Return the parsed JSON data
    })
    .then(json => console.log(json))
    .catch(err => console.log('Error:', err));