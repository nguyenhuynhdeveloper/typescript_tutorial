// Phạm Huy Hoàng : Tự học TypeScript cơ bản trong 15 phút - Code cùng Code Dạo 

// # typescript_tutorial
// type phổ biến : number , string , boolean , object , array 

//number : --------------
const num : number = 5


// string : ---------------
const str :  string = "hello world"
console.log(str)

// boolean
const Bool : boolean = true

// Array : -----------------
const people : Array<Person> = []
people.push({deptrai : true, age: 18})
people.push({deptrai : true, age: 19})

const array : Array<string> = ['a', 'b', 'c']
console.log('array', array)

const list : string[] = [];
const list1 : number[] = [1, 2, 3]
console.log(` Cách khai báo array  ${list1}`)


for (const person of people) {
    console.log(person.deptrai)
    console.log(person.age)
}



// //  Ts hay ở chỗ có thể tự nhận type của 1 biến  : Có thể tự hiểu kiểu của biến 
const num1 = 5
const str1 = "Hello world" + "From code dạo"

const hoang = {
    age : 30 ,
    deptrai : true
}

// Object : ---------------------
//  thay vào đó có thể dùng type hoặc interface : Định nghĩa 1 kiểu dữ liệu cho 1 Object
//type : ------------
type Person = {
    age : number 
    deptrai ?: boolean  // Bảo có thể chấp nhận undefined
}

type Status = "active" | "inactive";

const status1 : Status = "active";
 console.log(`uniontype ${status1}`)

const huynh:Person ={
    age : 2,   //Nếu ghi thiếu trường nó sẽ báo lỗi ngay 
    deptrai: true
}

// interface : ---------------
interface Student {
    id: number | string; 
    name : string ;
    gender: 'male' | 'female';
    grade: 'A' | "B" | 'c'
}

const studentA : Student = { id: 12, name : 'huynh', gender: "female", grade: "A"};

interface Coder  {
    skill ?: string;
    year ?: number
}

//  Viết code viết thiếu trường nào thì nó báo lỗi , không cần chạy mới biết
//  Ngoài type còn có thể dùng interface , người ta khuyên object thì dùng interface

//  Khai báo 1 array mà chỉ chứa 1 đối tượng quy định 




// js không có 
//  enum :------------------- 
enum PersonType {Student, Gamer, Coder}  // Biểu thị PersonType có thể . tới các giá trị Student, Gamer, Coder

const coder1 : PersonType.Coder = { skill: "React Native", year: 1 } as unknown as PersonType.Coder

// any : --------------
//  khuyên k nên dùng , any : không quan tâm là type gì


const str2 : any = 'Hello World' + "From Thái bình"

//  Trong trường hợp không biết 1 obj chứa những trường nào . khi parse từ 1 JSON

const obj = JSON.parse('{"hello": "world"}')  //Đây cũng sẽ hiểu là dạng any 
console.log(obj.hello)

//  Nhưng nếu để viết cẩn thận thì nên viết

const obj1: {hello: string}  = JSON.parse('{"hello": "world"}')

console.log(obj1.hello)


//  Function , input, output : 


 //// Với cách viết bình thường 
// function add (a, b) {
//     return a+b
// }      // Sẽ không biết tham số nhận vào là kiểu gì

 function add1 ( a: number, b: number) : number {
     return a+b;
 }

function add2( a: number, b: number) {
    return a+b;
}    //Vẫn tự hiểu trả ra giá trị gì

add1(3, 5)