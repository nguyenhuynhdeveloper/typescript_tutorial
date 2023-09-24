// Seri video dạy TypeScript  : Easy Fontend
// https://www.youtube.com/watch?v=imuO_bactkA&list=PLeS7aZkL6GOtUGTQ81kfm3iGlRTycKjrZ&index=3&t=8s



// const number = 4;
// function add(x: number, y: number): number {
//   return x + y;
// }


// console.log(add(3, 5));
// console.log('ádd');


/**
 Bài 2.1 : Static type checking là gì ?
Phát hiện biến kiểu dữ liệu là gì :
Giúp tránh lỗi type biến

Types for Tooling
ts giúp hạn chế lỗi bằng việc hỗ trợ auto completions / suggestions .
file tsconfig.json : để có thể cài đặt các config bắt lỗi cho ts
 */


/**
 Bài 2.2 :Explicit types and Inferred types 
 Explicit types : Khai báo kiểu dữ liệu thì sử dụng dấu 2 chấm đằng sau tên biến 
 Infered types : thông minh tự detect biến thuộc kiểu dữ liệu gì ngay cả khi không khai báo thuộc kiểu dữ liệu gì

 let count: number = 123;
 let studentName: string = 'alice';
 let isActive: boolean = true ;
 const numberLisst: number[] = [1, 2, 3, 4];

 

 - Eraised types: kiểu dữ liệu sẽ bị remove khi chuyển sang javascript : sau khi compile ts sang js. tất cả các type  annotation sẽ bị xoá
- Downleveling: compile typescript về cú pháp javascript của target environement
tuỳ vào target mà code sau khi được compile ra javascript sẽ khác nhau để đảm bảo target environment có thể và thực thi được coè mình viết bên typescript 

 */

/**
 BÀi 2.3 : Strictness- Các config về strict trong tsconfig.json  : Độ khó tính của Ts

. strict flag là gì?
. Option: noImplicitAny
. Option: strictNullChecks
. Option: alwaysStrict
. Other options
. Summary
 */

/**
  Bài 2.4: Điều cần lưu ý với phép so sánh trong typescript 
  so sánh == so sánh về giá trị 
  so sánh === so sánh cả về kiểu dữ liệu và giá trị 
   2 == '2' ; //true
   fasle == 0 ; // true


   2=== '2';  // false
   false === 0;    // false

   //So sánh object 
   object , array , function là tham chiếu 
   Khi so sánh 2 tham chiếu thì địa chỉ của tham chiếu được so sánh chứ không phải giá trị thật sự 
   
   const studentA: any = {id: 1, name : 'alice'};
   const studentB = studentA;
   studentA === studentB   // true
   studentA === {id: 1, name:  'Alice'}  //false
 
 
   //Thường thường chúng ta chri só sánh id, hay giá trị key của 2 objects
 
   const studentA = {id: 1, name:  'Alice' }
   const studentB = {id : 1, name : 'Alice' }
 
   studentS.id ===studentB.id // true
 
 
   //null và underfined
 
   null == undefined // true
    null == 0 ;  // true
    null >=  0 ; // true
 
 if(typeof window !== 'undefined') {
   // nếu window object là available or not 
   // làm gì đó ở phía client side
 }
   */

/**
 Bài 2.5 : const / let và cách đặt tên biến đúng chuẩn 


// khi nào dùng const 
// dùng cho hằng số . UPPER_CASE
//dùng cho biến mà không có nhu cầu thay đổi giá trị . cameCase

// constants 
const API_URL = 'https://api.com';
const BACKGROUND_URL = 'https://image.com'

const DEFAULT_SIZE = 12;
const SECONDS_PER_HOUR = 3600;

const channelName = 'Easyy Frontend';
const studentId = 123;
const isActive = true;

 interface Student {
  name: string ;
}
const student = {name : "Alice"};
student.name = 'Bob';


const numberList : number[]= [];
numberList.push(1)

// Luôn luôn ưu tiên dùng const , Đổi sang let khi cần thiết

// Khi nào sử dụng let 
// Dùng cho những biến có nhu cầu thay đổi bằng việc thực hiện phép gán lại (re-assignment)

let count =1 ;
count ++;


for (let i =0 ; i< 10; i++) {
  console.log(i);
}

let numberList = [1, 2, 3, 4]
numberList = []


// Các quy tắc đặt tên 
// Tên biến hằng số UPPER_CASE API_URL , IMAGE_URL, PAGE_SIZE...
// Tên biến boolean camelCase hasName, isActive, show...
// Tên biến số ít  camelCase student, product, count...
// tên biến số nhiều camelCase studentList, productList ...
// Tên hàm camelCase  addProduct, convertObjectToArray... 

 */
/**
 Bài 2.6 : Những điều cần lưu ý khi làm việc với truthy vs falsy

 Falsy : bao gồm các giá trị : false, null, undefined, 0, -0 , 0n , "" , NaN
 Truthy : là các giá trị còn lại (bao gồm cả {}, [])

 // Check if truthy 
 if(student) {}
 if(studentId) {}
 if(isStudent) {}

 // Check if falsy 
 if(!student) {}
 if(!studentId) {}
 if(!isStudent) {}


 // Cách viết dễ hiểu 

 if(studentList.length){}
 if(studentList.length > 0) {}
 
 */


/**
 Bài 2.7: Những điều bạn cần biết về destructuring 

 Rest và Spead operator : đều là dấu ...
 Rest : gom lại thành một 
 Spread: từ một tách ra thành một danh sách , dải ra


 // Object Destructuring : là rải ra phá ra 

 interface Student {
  id: number; 
  name: string ; 
  age: number; 
  gender: string ; 
 }

 const bob = {
  id: 1,
  name: 'Bob', 
  age: 18,
  gender: 'male'
 }


// Destructuring 
 //Old way
//  const id = bob.id; 
//  const name = bob.name;

//  //NEW way 
//  const {id, name } = bob;


//  // Rest Operator
//  // OLD WAY
//  const id = bob.id;
//  const rest = {
//   name : bob.name,
//   age: bob.age,
//   gender: bob.gender,
//  }


// // NEW WAY WITH REST OPERATOR
// const {id, ...rest} = bob;


 //Spread Destructuring : Clone object  với spread operator

 const bob2 = {...bob, name : "Bob2"};  // name ở đây là gán lại key name : 'Bob2'
 bob == bob2 ; //false


 // Array destructuring 

 const fullName = 'Easy Frontend';
 const wordList = fullName.split(' ');  // ['Easy' , 'Frontend']


 //OLD WAy
//  const firstName = wordList[0];
//  const lastName = wordList[1];

//  //NEW WAY 
//  const [firstName, lastName] = wordList;

 // Array with rest operator 
 const [x, y, ...remaining ] = [1, 2, 3, 4];
 console.log(x, y, remaining);    //1, 2, [3, 4]

 // Clone array with spread operator 
 const numberList = [1, 2, 3, 4];
 const newList1 =[...numberList];  // [1, 2 , 3, 4]
 const newList2 = [...numberList, 5, 6]; //[1, 2, 3, 4, 5, 6]

 // Clone array of object (BE CAREFFUL !!!)

 interface Student{
  id: number;
  name: string ;
  age: number ;
  gender: string; 
 }

 const studentList: Student[] = [
  {id: 1, name: 'Alice', age : 11 , gender: 'female'},
  {id: 2, name :  'Bob' , age : 12, gender : 'male'}
 ]

 const newList = [...studentList];
 newList[0].name = 'Alice Alice' ;

 console.log(studentList[0].name);  // 


 // CÁCH ĐỂ Swap two items 
  // let x= 5; 
  // let y= 10 ;
  
  // // OLDW WAY 
  // let temp = x;
  // x = y; //10
  // y = temp; //5

  // //NEW WAY
  // [y, x] = [x, y];

   */ 

/**
 BÀi 3.1: Tổng quan về type system 
 Primitive: number, boolean, string, null, undefined, symbol
 Với các kiểu dữ liệu kiểu number , string , boolean .. Hoàn toàn có thể bỏ đi phần khai báo kiếu dữ liệu , mà chỉ cần gán giá trị ban đầu 
 
 Reference: array, object, function
 
 Typescript : bạn sẽ bắt gặp : any , unknown, void , never...

let count : number = 10;
let channelName : string = 'Easy Frontend';
let isActive : boolean = true;
// Chúng ta có thể bỏ qua phần  khai báo kiểu dữ liệu 

let count = 10 ;
let channelName = 'Easy Frontend';
let isActive = true;

//------ Literial types : chỉ định giá trị cụ thể làm kiểu dữ liệu 
// một giá trị cụ thể nào đó làm kiểu dữ liệu luôn 

let count: 1;  
count = 1; 

//  let count: 1 = 2;   // Lỗi Type '2' is not assignable to type '1'
// Biến count chỉ có thể nhận kiểu dũ liệu là số 1

let channelName: 'easy';   // chuỗi 'easy' là 1 tập con của kiểu dữ liệu string 
let isActive: false;
let student: null;

// Với  const , khi omit type annotation . literal type sẽ được sử dụng , Vì constt chỉ nhận được 1 giá trị và không thể thay thế được 

const count1 = 1;  // const count: 1 Khi dùng const thì kiểu dữ liệu sẽ được suy biến là kiểu 1
const channelName = 'Easy Frontend' ; // const channelName: 'Easy Frontend
const isActive = false ; // const isActive: false


let count = 1 ;   // let count : number 
let channelName = 'Easy Frontend' ;  // let channelName: string 
let isActive = false; //let isActive: boolean 


const student = {
  id: 1,
  name: 'Easy Frontennd'
}

student.name = 'Typescript is easy! '  // works : vì chỉ là thay đổi giá trị bên trong chứ không phải là thay đổi địa chị ô nhớ của nó 

// NẾU trong trường hợp mà không muốn thay đổi giá trị bên trong object
const student = {
  id: 1, 
  name : 'Easy Frontend',
} as const

student.name = 'Typescript is easy really !' ;   // Not work : // error: Cannot assign to 'name' because it is a read-only property 

// Tương tự như object, array cũng có behavior tương tự  
const numberList = [1, 2, 3]   // ts understand: const numberList: number[]
const numberListAsConst = [1, 2, 3] as const   // ts understand: const numberListAsConst: readonly [1, 2, 3]





// Type Assertion  : Xác định kiểu cụ thể cho 1 biến 

function getStatusName(state: 'active') {
console.log(state);
}
// let s = 'active'; // let s: string
// getStatusName(s)  // Sẽ bị lỗi 

// // ts error: Argument of type 'string' is not assignable to parameter of type '"active"'.ts(2345)

//// solution 1
// let s: 'active' = 'active'; // tương đương với cách viết const s = 'active'
// getStatusName(s);

// solution 2
const s = 'active'; // or const s = 'active'
getStatusName(s);

// solution 3
// let s = 'active';
// getStatusName(s as 'active')

 */


/**
 Bài 3.2: Type Alias và Interface
// Định nghĩa: constructor cho các object : khai báo object đó sẽ có những trường gì? trường nào bắt buộc trường nào không ?  Trường nào chỉ có thể đọc , không thể thay đổi ?



//  Primitive type
// Chỉ đơn giản là tạo 1 cái tên khác cho các kiểu Primitive 
// Cái này ít hữu dụng , vì cơ bản mình có thể dùng trực tiếp primitive type luôn cho khoẻ
type StudentName = string ;
type StudentAge = number;
type IsTopStudent = boolean;

const studentName : StudentName = 'Bob';



//Object type 
// ?:  đưa về dạng optional props 
// readonly : props đó chỉ có thể đọc không thể thay đổi được 
 type Student = {
  readonly id: number;  // chỉ có thể đọc không thể thay đổi giá trị
  name: string ;
  age?: number ; // optional
 }

 const studentA: Student = {
  id: 1,
  name: 'Alice'
 }

 interface Student {
  readonly id: number;
  name: string ;
  age?: number; // optional 
 }

 const studentB: Student = {
  id: 2,
  name: 'Bob',
  age: 18, 
 }


 // Union type : là kiểu dữ liệu mà nhận vào từ 2 type trở lên , giá trị có kiểu dữ liệu có thể nhận 1 trong số kiểu dữ liệu đó
// Kết hợp 2 hoặc nhiều kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới 
// Cho phép giá trị có thể chấp nhận hoặc kiểu dữ liệu này hoặc kiểu dữ liệu kia


type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string ;

interface Student {
  id : number | string ;
  name: string ;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}


let x: number | string = 1;

x= 'super'; //works
x= 123; // works

x= false;   // ts error : Type 'boolean' is not assignable to type 'string | number' .ts(2322)

// Intersection type : Các kiểu dữ liệu giao nhau 
interface BusinessParrtner {
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

//type way

// type Employee = Identity & Contact ; 

type Customer = BusinessParrtner & Contact;
let c: Customer = {
  name: 'ABC Inc',
  credit : 1000000, 
  email : 'sales@sbcinc.com',
  phone: '(408)-897-5735'
}

type Employee = Identity & BusinessParrtner & Contact ;    // Với những kiểu type mà có key trùng nhau thì key đó phải trùng kiểu dữ liệu thì mới có thể hợp nhất , khác sẽ báo lỗi 
let e: Employee = {
  id: 100,
  name : 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)- 897- 5684',
  credit: 10000,
}

// interface way 
interface Employee extends Identity, Contact {};
interface Customer extends BusinessParrtner , Contact {};


// Add new Props : có thể thêm props cho kiểu interface nhưng type thì không được phép
interface Student {
  id: number ;
  name: string ;

}

interface Student {
  age?: number 
}     // Cái này không phải là ghi đè mà là viết thêm props 

const alice: Student = {
  id: 1, 
  name : 'ALice',
  age: 12
}

// Type thì không thể có thực hiện điều này 
type Student = {
  id: number;
  name: string;
}

type Student = {
  age?: number;   //ts error : Duplicate identifier 'Student'
}


// Cách đặt tên type vs interface : PascalCase 
// Nên dùng interface hay type : tuỳ thói quen thích cái nào cũng được , cái này không dùng được thì dùng cái khác 

 */


/**
 Bài 3.3 : Điều cần lưu ý khi làm việc với function 



 //Default function return type 

 // sử dụng return keyword, 


 function sayHello() {
  console.log('Hi Easy Frontend'); 
 }   // ts: function sayHello(): void

  function sum(a: number, b: number) {
    return a+b;
  }  // ts: function sum(a: number, b: number) : number

  //Explicit return type 

  function sum(a: number , b: number ) : number {
    return a+b
  }   // ts: function sum(a: number , b: number ): number 

  function sum(a: number , b: number) : number {
    return a+b.toString();
  }    // ts: error: Type 'string' is not assignable to type 'number'

  // Option and default parammeter 
  // Thêm ?: để nói tham số đó là optional 
  // 1 tham số không thể vừa optional vừa có default params

  // optional parameter : tham số có thể không có
  function getLength(numberList?: number[]){
    return Array.isArray(numberList)  ? numberList.length : 0;
  }

  //default parameter

  function getLength (numberList: number [] = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
  }

  // ERROR : ts error : Parameter cannot have question  mark and initializir. ts (1015)

  function getLength(numberList?: number[] = []){
    return Array.isArray(numberList) ? numberList.length : 0;
  }


  // Function Overload
  //Orther type: void and never 
  // function noop(): void
  function noop() {
    return ;
  }

  //function noop(): void 
  function noop(){
  }


  // never type là đại diện cho kiểu dữ liệu mà không thể quan sát , Nghĩa function sẽ throws ra 1 lỗi 

  type NewType = number & string ;  //never

  function fail(msg: string ) : never {
    throw new Error(msg)
  }

  fucntion fn(x: string | number ) {
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

function createStudent (student : {id : number , name : string , age: number}){
  const {id, name , age} = student ; 
  console.log(id, name, age)
}


createStudent({
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

function createStudent({id, name, age}: Student){   // destructuring 1 đối tượng có kiểu Student
   console.log(id, name, age)
}

// Bảng type compatible 

string , number, boolean : 3 kiểu primitive phổ biến 
null : unavaiable
undefined : Không được khởi tạo 
any : Bỏ qua check kiểu 
unknown : Không có hợp pháp để làm gì cả
void : function không trả ra giá trị 
never : Không trả ra giá trị gì cả

 */

/**
Bài 3.4 : Tất tần tật về Enum trong Typescript 


//1 . Number  enum 

enum  Status {
  PENDING, // 0
  IN_PROGRESS,  // 1
  DONE,   // 2
  CANCELLED, // 3
}

 enum Status {
  PENDING = 3, 
  IN_PROGRESS, 
  DONE, 
  CANCELLED, 
 }

 enum Status {
  PENDING = 3, 
  IN_PROGRESS= 5, 
  DONE  = 8, 
  CANCELLED = 10 ,
 }


 // Khi mà khai báo không gán giá trị thì nó sẽ nhận từ 0 và tăng dần , giá trị sau = giá trị trước + 1 

 // Có thể gán bất kỳ số cho enum variable 
 const status1: Status = Status.PENDING;
 const status2: Status = 1; 
 const status3: Status = -1;

 // number enum ---> hỗ trợ đảo ngược mapping 
 console.log(Status[0])   // 'PENDING'
 console.log(Status['DONE'])  // 2

 //2. String enum 
 // Không hỗ trợ reverse mapping 
  enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
  }

  fetch('https://ẽample.com.api/endpoint', {
    headers: {
      Appcept: MediaTypes.JSON,
    }
  }).then(response => {
    //... response là giá trị mà API trả về
  })

  //3, When to use enum 
  // static dât on Frontend, not the data from API response
  // Không yêu cần reverse map 
  // Tốt hơn nên sử dụng union types cho data return từ API 

*/

/**
 Bài 3.5 : Tìm hiểu về Generics
 Generics : hiểu nôm na là kiểu dữ liệu mà có nhận vào tham số  và trả về kiểu dữ liệu tương ứng 

 

//  interface Student {
//   id: number;
//   name : string ; 
//  }

// //  const numberList: Array<number> = [1, 2, 3, 4]
//  const wordList: Array<string> = ['Easy', 'frontend']

// const studentList: Array<Student> = [
//   {id: 1, name : 'Bob'},
//   {id: 2, name : 'Alice'}
// ]

// // Thử định nghĩa kiểu generic tương tự Array : 
// interface Student {
//   id: number;
//   name: string;
// }

// interface List<T> {
//   length : number;
//   [index: number ] : T;
// }

// const numberList : List<number> = [1, 2, 3];
// const wordList : List<string> = ['easy', 'frontend'];

// const stydentList: List<Student> = [
//   {id: 1, name: 'easy'},
//   {id: 2, name: 'Frontend'}
// ]

// // keyof operator : keyof giúp lấy ra tất cả các key của 1 object 

// interface Student {
//   id: number;
//   name: string ; 
// }

// type  StudentKeys = keyof Student ;
// const keys: StudentKeys = 'id';


// // typeof operator 
// console.log(typeof 'Easy Frontend'); // string
// console.log(typeof 123);  // number
// console.log(typeof false); // boolean
// console.log(typeof {});  // object 
// console.log(typeof []);  // object 
// console.log(typeof function (){});  // function 
// console.log(typeof window !== 'undefined');   // true on client , false on server


// // Mapped types : Tạo 1 interface mưới  Dùng 1 interface có sẵn xong lấy tất cả các key có nó gán cùng 1 kiểu dữ liệu 

// interface Student {
//   id: number ;
//   name: string ; 
// }

// type MappedTypes = {
//   [Key in  keyof Student ] : boolean;
// }       // Tạo ra 1 kiểu dữ liệu mới với tất cả các key cùng nhận kiểu dữ liệu boolean
  */


// /**
//  Bài 3.6 :Một số Utillity Types phổ biến 
//   Partial  : Đưa tất cả props về optional 
//   Required : Đưa tất cả props về required
//   Readonly : Đưa tất cả props về readonly 

  
//   */
//  // Record<Keys, Type> : Tạo ra 1 Type với key là Keys và có value là Type

//  type aPartial =  Partial<CatInfo>
//  type aRequired = Required<CatInfo>
//  type aReadonly = Readonly<CatInfo>

//  interface CatInfo {
//   age: number; 
//   breed: string; 
//  }

//  type CatName =  'miffy' | 'boris' | 'mordred'

//  const cats: Record<CatName, CatInfo> = {
//   miffy: {age: 10 , breed : 'Persian'},
//   boris: {age: 5, breed: 'Maine Coon'},
//   mordred: {age: 16, breed: 'British Shorthair'}
//  }
//  // Pick<Type, Keys> : Tạo 1 Type mới bằng cách nhặt 1 vài key trong kiểy Type có sẵn 
// interface Todo {
//   title: string ;
//   description : string; 
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, 'title' |'completed'>

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// }


// // Omit<Type, Keys> : Tạo ra 1 Type mới bằng cách loại bỏ 1 vài key của Type có sẵn 
// interface Todo {
//   title: string;
//   description : string ;
//   completed: boolean; 
//   createdAt : number ; 

// }

// type TodoPreview = Omit<Todo, 'desciption'>; 

// const todo: TodoPreview = {
//   title: 'Clean Room', 
//   completed : false, 
//   createdAt: 1615544252770,
// }


// // ReturnType : Trả ra kiểu dữ liệu trả về của 1 hàm : Lấy được kết quả trả về của 1 hàm nào đó 

// type T0 = ReturnType<() => string> ;  // type T0 = string 

// declare function f1() : {a: number, b: string };

// type T4 = ReturnType <typeof f1>;   // type T4 = {a: number , b: string}