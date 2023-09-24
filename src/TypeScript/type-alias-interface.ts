/**
 Bài 3.2: Type Alias và Interface
// Định nghĩa: constructor cho các object :
 khai báo object đó sẽ có những trường gì?
  trường nào bắt buộc trường nào không ? 
   Trường nào chỉ có thể đọc , không thể thay đổi ?

 */
{
//  Primitive type : Kiểu định nghĩa tham trị 
// Chỉ đơn giản là tạo 1 cái tên khác cho các kiểu Primitive : Kiểu tham trị
// Cái này ít hữu dụng , vì cơ bản mình có thể dùng trực tiếp primitive type luôn cho khoẻ
type StudentName = string ;
type StudentAge = number;
type IsTopStudent = boolean;

const studentName : StudentName = 'Bob';



// Object type : Kiểu định nghĩa của 1 Object 

// ?:  đưa về dạng optional props 
// readonly : props đó chỉ có thể đọc không thể thay đổi được 
 type Student = {
  readonly id: number;  // chỉ có thể đọc không thể thay đổi giá trị
  name: string ;
  age?: number ; // optional
 }

 const studentA: Student = {
  id: 1,
  name: 'Alice',
  age: 18, 
 }


 const studentB: Student = {
  id: 2,
  name: 'Bob',  // Vì age là optional : nên có thể có hoặc không 
 }


 // Union type : Kiểu dữ liệu liên hiệp 
 // là kiểu dữ liệu mà nhận vào từ 2 type trở lên , giá trị có kiểu dữ liệu có thể nhận 1 trong số kiểu dữ liệu đó
// Kết hợp 2 hoặc nhiều kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới 
// Cho phép giá trị có thể chấp nhận hoặc kiểu dữ liệu này hoặc kiểu dữ liệu kia


type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string ;

interface Student_1 {
  id : number | string ;
  name: string ;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

const student_1 : Student_1 = {
  id: 18, 
  name: "huynh",
  gender: 'male',
  grade: 'A'
}
console.log('student_1.id', student_1.id)

let x: number | string = 1;

x= 'super'; //works
x= 123; // works

// x = false;   // ts error : Type 'boolean' is not assignable to type 'string | number' .ts(2322)

// Intersection type : Các kiểu dữ liệu giao nhau 
interface BusinessPartner {
  name : string ;
  credit: number;
}

interface Identity {
  id: number;
  name : string ;
}

interface Contact {
  email: string;
  phone: string;
}

//  Cách viết với type 
//type way
// type Employee = Identity & Contact ; 

type Customer = BusinessPartner & Contact;  // Tức kiểu dữ liệu Customer có đầy đủ các trường của BusinessPartner + Contact 
let c: Customer = {
  name: 'ABC Inc',
  credit : 1000000, 
  email : 'sales@sbcinc.com',
  phone: '(408)-897-5735'
}

// BusinessPartner + Identity : trùng trường name : string 
type Employee = Identity & BusinessPartner & Contact ;    // Với những kiểu type mà có key trùng nhau thì key đó phải trùng kiểu dữ liệu thì mới có thể hợp nhất , khác sẽ báo lỗi 
let e: Employee = {
  id: 100,
  name : 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)- 897- 5684',
  credit: 10000,
}

// Cách viết với interface
// interface way 
interface Employee_1 extends Identity, Contact {};
interface Customer_1 extends BusinessPartner , Contact {};

// KHÁC NHAU GIỮA interface và  type 
// Add new Props : có thể thêm props cho kiểu interface nhưng type thì không được phép
interface Student_2 {
  id: number ;
  name: string ;

}

interface Student_2 {
  age?: number 
}     // Cái này không phải là ghi đè mà là viết thêm props 

const alice: Student = {
  id: 1, 
  name : 'ALice',
  age: 12
}

// Type thì không thể có thực hiện điều này 
type Student_3 = {
  id: number;
  name: string;
}

// type Student_3 = {
//   age?: number;   //ts error : Duplicate identifier 'Student'
// }


// Cách đặt tên type vs interface : PascalCase 
// Nên dùng interface hay type : tuỳ thói quen thích cái nào cũng được , cái này không dùng được thì dùng cái khác 

}
