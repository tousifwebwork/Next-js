

// // // // const isOnline: boolean = true;
// // // // console.log(`User is online: ${isOnline ===  true ? 'Yes' : 'No'}`);

// // // // const arr:number[] = [1, 2, 3, 4, 5];
// // // // arr[6] = "6"; // This will cause a type error because "6" is a string, not a number
// // // // console.log(`Array: ${arr}`);




// // // const arr:[number, string, boolean] = [1, "two" , true];
// // // console.log(`Tuple: ${arr}`);


// // // enum role { 
// // //     "ADMIN", 
// // //     "USER", 
// // //     "GUEST"
// // // }

// // // console.log(`Role: ${role.ADMIN}`); // Output: Role: 0




// // // let a:any;
// // // a=32; 
// // // console.log(`Any type variable: ${typeof a}`); // Output: Any type variable: string



// // // let a:number[];
// // // let b:Array<number>;
// // // console.log(typeof a); // Output: object
// // // console.log(typeof b); // Output: object




// // // function add(a:number, b:string="1"):boolean {
// // //     return a+parseInt(b)  === 5 ? true : false;
// // // }
// // // console.log(`Add function: ${add(4, "1")}`); // Output: Add function: true
// // // console.log(`Add function: ${add(4)}`); // Output: Add function: false



// // type tousif = number | string 

// // let a:tousif="ferfre";
// // console.log(`Type alias variable: ${typeof a}`); // Output: Type alias variable: undefined



// // let status = "success" | "error" | "loading";
// // let b:status;
// // b="error"
// // console.log(`Union type variable: ${b}`); // Output: Union type variable: undefined


// type User = {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }
// let a:User;
//  a ={
//     name:"tousif",
//     age: 22,
//     isAdmin: true
// }
// console.log(`User object: ${JSON.stringify(a)}`); // Output: User object: {"name":"tousif","age":22,"isAdmin":true



// type Mathfun=(a:number,b:number)=>number;

// let addFun:Mathfun = (a,b)=>{
//     return a+b
// }
// let mulFun:Mathfun = (a,b)=>{
//     return a*b
// }
// console.log(addFun(2,3))
// console.log(mulFun(2,3))


// type A={
//     a:number
// }
// type B={
//     b:number
// }
// type AB=A&B;

// interface A{
//     a:number
// }
// interface B extends A{
//     b:number
// } 
// let obj : A ={
//     a:90
// }
// let obj2 : B ={
//     a:90,
//     b:4
// }



