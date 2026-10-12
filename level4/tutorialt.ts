

// // const isOnline: boolean = true;
// // console.log(`User is online: ${isOnline ===  true ? 'Yes' : 'No'}`);

// // const arr:number[] = [1, 2, 3, 4, 5];
// // arr[6] = "6"; // This will cause a type error because "6" is a string, not a number
// // console.log(`Array: ${arr}`);




// const arr:[number, string, boolean] = [1, "two" , true];
// console.log(`Tuple: ${arr}`);


// enum role { 
//     "ADMIN", 
//     "USER", 
//     "GUEST"
// }

// console.log(`Role: ${role.ADMIN}`); // Output: Role: 0




// let a:any;
// a=32; 
// console.log(`Any type variable: ${typeof a}`); // Output: Any type variable: string



// let a:number[];
// let b:Array<number>;
// console.log(typeof a); // Output: object
// console.log(typeof b); // Output: object




function add(a:number, b:string="1"):boolean {
    return a+parseInt(b)  === 5 ? true : false;
}
console.log(`Add function: ${add(4, "1")}`); // Output: Add function: true
console.log(`Add function: ${add(4)}`); // Output: Add function: false