
/**
 Bài 3.5 : Tìm hiểu về Generics
 Generics : hiểu nôm na là kiểu dữ liệu mà có nhận vào tham số  và trả về kiểu dữ liệu tương ứng 
 Thường sử dụng cho kiểu định nghĩa API trả ra cái gì

  */

import { type } from "os";

{
interface Student {
  id: number;
  name : string ; 
 }

//  const numberList: Array<number> = [1, 2, 3, 4] // Array<T> : Đây cũng chính là 1 kiểu generic types
 const wordList: Array<string> = ['Easy', 'frontend']

const studentList: Array<Student> = [
  {id: 1, name : 'Bob'},
  {id: 2, name : 'Alice'}
]

// Thử định nghĩa kiểu generic tương tự Array : 
interface Student {
  id: number;
  name: string;
}

interface List<T> {
  length : number;
  [index: number ] : T;
}

const numberList : List<number> = [1, 2, 3];
const wordList_1 : List<string> = ['easy', 'frontend'];
console.log('numberList',numberList )
console.log('wordList_1',wordList_1 )


const stydentList: List<Student> = [
  {id: 1, name: 'easy'},
  {id: 2, name: 'Frontend'}
  ]
console.log('stydentList',stydentList )
console.log('stydentList[1]',stydentList[1] )

// keyof operator : keyof giúp lấy ra tất cả các key của 1 object 

interface Student {
  id: number;
  name: string ; 
}

type  StudentKeys = keyof Student ;  // 'id' | 'name'  : Tập hợp dang union key của kiểu dữ liệu đó 
const keys: StudentKeys = 'id';
const keys_1 : StudentKeys = 'name'


// typeof operator : Lấy ra kiểu dữ liệu của 1 biến
console.log(typeof 'Easy Frontend'); // string
console.log(typeof 123);  // number
console.log(typeof false); // boolean
console.log(typeof {});  // object 
console.log(typeof []);  // object 
console.log(typeof function (){});  // function 
// console.log(typeof window !== 'undefined');   // true on client , false on server


//---------  Mapped types : Tạo 1 interface mưới  Dùng 1 interface có sẵn xong lấy tất cả các key có nó gán cùng 1 kiểu dữ liệu 

interface Student {
  id: number ;
  name: string ; 
}

type MappedTypes = {
  [Key in  keyof Student ] : boolean;
}       // Tạo ra 1 kiểu dữ liệu mới với tất cả các key cùng nhận kiểu dữ liệu boolean

// Tạo ra 1 type tương đương 
type MappedTypes_1 = {
  id: boolean,
  name: boolean
}

// Sử dụng OptionsFlags để mang lại kết quả tương tự 
// Tạo OptionsFlags bằng generic type 

type OptionsFlags<Type> = {
  [Property in keyof Type ]: boolean
}

type MappedTypes_2 = OptionsFlags<Student>
}
