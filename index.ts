// let a : string  = "a"

// const keyValueArr : [string, boolean] = ["open", true]

// const obj : {name: string, age: number} = {name:"JR", age:22}


// function foo(index: number) :number{
//     return index;
// }

// class person1 {
//     name:string="David";
//     age:number = 12;
//     // constructor(name:string, age:number){
//     //     this.name = name;
//     //     this.age = age;
//     // }
// }
// interface person2 extends person1{
//     job:string;
// }


// abstract class person4 extends person1{
//     job:string = "IT";
// }

// const emp: person2 = {
//     name:"JR",
//     age: 15,
//     job:"IT"
// }

// interface person3 extends person4{
//     address: string
// }

// const emp2: person3 = {
//     name:"JR",
//     age: 15,
//     job:"IT",
//     address:"VA"
// }

// type person5 = {name:string,
// age:number}

// function foo1(): void{
//     const a = 12;
// }
// console.log(foo1())

// function foo2(): never{
//     const b = 12;
//     while (true){
//         // throw new Error
//     }
// }
// console.log(foo2())

// // const nodeEles : NodeList = document.querySelectorAll('button')
// // let employer: person1 = {"name":"David"};
// // const employer = new person1("David", 30)
// // console.log(employer)

// // class Developer {
// //     static develop(app: { name: string, type: string }) {
// //       return { name: app.name, type: app.type };
// //     }
// //   }
// //   Developer.develop({ name: 'whatsapp', type: 'mobile' })

// enum roles {
//     ADMIN = 'this is admin role',
//     USER = 'this is normal user'
// }

// const randomUser = roles.ADMIN 
// console.log(randomUser)

// any 

// null/undefined
// 
// const a = null


//void never

// enum userRole {
//     ADMIN = "this is the admin",
//     NORMAL_USER = "this is the normal user",
//     SUPER_USER = "this is the super user"
// }
// const role = userRole.ADMIN
// console.log(role) 

// //generic type
// //foo1<T>
// const arr = new Array<string>()
// arr.push('str1')


interface person1 {
    name: string;
    age : number;
    // foo(): void
}

interface person1{
    address : string
}
class person2 {
    name: string = "JR";
    age: number = 20;
    // constructor(name: string, age: number){
    //     this.name = name
    //     this.age = age
    // }
}

// class person3 extends person2{
//    address: string = "Virginia";
// }
// const employer1 = new person3()

class person4 implements person1{
    name = "JR";
    age = 25;
    foo(): void {this.name = "David"}

    address = "Virginia"

}






// const employer1 = new person2("JR", 20)
// console.log(employer1)

// let nameA = "david"

// const employer2 : person1 = {
//     name: "JR",
//     age: 20,
//     foo():void {
//         this.name = "David"
//     }
// }

// console.log(employer2)



