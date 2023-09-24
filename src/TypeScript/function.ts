
/**
 Bài 3.3 : Điều cần lưu ý khi làm việc với function 

 */

{
 //Default function return type 
 // sử dụng return keyword, 


 function sayHello() {
  console.log('Hi Easy Frontend'); 
 }   // ts: function sayHello(): void

  function sum(a: number, b: number) {
    return a+b;
  }  // ts: function sum(a: number, b: number) : number

  //Explicit return type : Hàm có chỉ định kiểu dữ liệu trả ra 
  function sum_1(a: number , b: number ) : number {
    return a+b
  }   // ts: function sum(a: number , b: number ): number 

  function sum_2(a: number , b: number) : string {
    return a+b.toString();
  }    // ts: error: Type 'string' is not assignable to type 'number'

  // Tham số có thể không có , tham số default 
  // Option and default parammeter 
  // Thêm ?: để nói tham số đó là optional 
  // 1 tham số không thể vừa optional vừa có default params

  // optional parameter : tham số có thể có hoặc không
  function getLength(numberList?: number[]){    // ERROR
    return Array.isArray(numberList)  ? numberList.length : 0;
  }

   // Tham số bắt buộc không thể viết theo sau tham số tuỳ chọn được 
  //  function getLength_1 (numberList?: number[], name: string){    // ERROR
  //   console.log('name', name)
  //   return Array.isArray(numberList)  ? numberList.length : 0;
  // }

  interface Parameter {
    numberList ?:  number[],
    name: string
  }
  function getLength_1 (params : Parameter){    // ERROR
    console.log('name', params.name)
    return Array.isArray(params.numberList)  ? params.numberList.length : 0;
  }

  //default parameter

  function getLength_2 (numberList: number [] = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
  }

  // !!!!  Không thể sử dụng đồng thời ?. và initializer
  // ERROR : ts error : Parameter cannot have question  mark and initializir. ts (1015)
  // Tham số không thể có dấu chấm hỏi và trình khởi tạo
  
  // function getLength_2 (numberList ?: number[] = []){
  //   return Array.isArray(numberList) ? numberList.length : 0;
  // }


  // Function Overload
  //Orther type: void and never 
  // function noop(): void
  function noop() {
    return ;
  }

  //function noop(): void 
  function noop_1(){
  }


  // never type là đại diện cho kiểu dữ liệu mà không thể quan sát , Nghĩa function sẽ throws ra 1 lỗi 

  type NewType = number & string ;  //never

  function fail(msg: string ) : never {
    throw new Error(msg)
  }

  function fn (x: string | number ) {
    if(typeof x === 'string'){
      //do something
    } else if ( typeof x === 'number'){
      //do something else
    } else {
      x;  // has type never 
    }
  }


  //DESTRUTURING PARAMETER

  function createStudent(id: number, name : string, age : number  ){
    console.log(id, name , age )
  }
  createStudent(1, "Bob" , 18);

  // Ý tưởng là truyền vào tham số dạng là 1 object 

function createStudent_1 (student : {id : number , name : string , age: number}){
  const {id, name , age} = student ; 
  console.log(id, name, age)
}


createStudent_1({
  id: 1,
  name: 'Bob',
  age: 18,
});

// Cách viết khác 
interface Student{
  id: 1, 
  name: 'Bob',
  age: 18,
} // Khai báo 1 interface ra trước 

function createStudent_ ({id, name, age}: Student){   // destructuring 1 đối tượng có kiểu Student
   console.log(id, name, age)
}

// Bảng type compatible 

// string , number, boolean : 3 kiểu primitive phổ biến 
// null : unavaiable
// undefined : Không được khởi tạo 
// any : Bỏ qua check kiểu 
// unknown : Không có hợp pháp để làm gì cả
// void : function không trả ra giá trị 
// never : Không trả ra giá trị gì cả

}
