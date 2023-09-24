
/**
 BÀi 3.1: Tổng quan về type system 
 Primitive: number, boolean, string, null, undefined, symbol
 Reference: array, object, function

 Với các kiểu dữ liệu kiểu number , string , boolean .. Hoàn toàn có thể bỏ đi phần khai báo kiếu dữ liệu , mà chỉ cần gán giá trị ban đầu 
Typescript : bạn sẽ bắt gặp : any , unknown, void , never...


 */
{

let count : number = 10;
let channelName : string = 'Easy Frontend';
let isActive : boolean = true;
// Chúng ta có thể bỏ qua phần  khai báo kiểu dữ liệu 

// let count = 10 ;
// let channelName = 'Easy Frontend';
// let isActive = true;

//------ Literial types : chỉ định giá trị cụ thể làm kiểu dữ liệu : Không khác gì khai báo với const 
// một giá trị cụ thể nào đó làm kiểu dữ liệu luôn 

let value : number;  // Đây mới chỉ là phần khai báo kiểu dữ liệu : chưa gán giá trị 

let channelName_2: 'easy';   // chuỗi 'easy' là 1 tập con của kiểu dữ liệu string 
let isActive_2: false;
let student_2: null;

let count_1: 1;  // Chỉ cho phép nhận giá trị là 1 
count_1 = 1; 

//  let count: 1 = 2;   // Lỗi Type '2' is not assignable to type '1'
// Biến count chỉ có thể nhận kiểu dũ liệu là số 1

// Suy luận kiểu dữ liệu 

// Với  const , khi omit type annotation . literal type sẽ được sử dụng , Vì const chỉ nhận được 1 giá trị và không thể thay thế được 
const count_3 = 1;  // const count: 1 Khi dùng const thì kiểu dữ liệu sẽ được suy biến là kiểu 1
const channelName_3 = 'Easy Frontend' ; // const channelName: 'Easy Frontend
const isActive_3 = false ; // const isActive: false


let count_4 = 1 ;   // let count : number 
let channelName_4 = 'Easy Frontend' ;  // let channelName: string 
let isActive_4 = false; //let isActive: boolean 


const student = {
  id: 1,
  name: 'Easy Frontennd'
}

student.name = 'Typescript is easy! '  // works : vì chỉ là thay đổi giá trị bên trong chứ không phải là thay đổi địa chị ô nhớ của nó 

console.log('student', student)

// NẾU trong trường hợp mà không muốn thay đổi giá trị bên trong object
interface Student {
  id: number,
  name: string
}
const student_1 : Student = {
  id: 1, 
  name : 'Easy Frontend',
} as const     // Không cho phép nó thay đổi giá trị 

student_1.name = 'Typescript is easy really !' ;   // Not work : // error: Cannot assign to 'name' because it is a read-only property 
console.log('student_1', student_1)

// Tương tự như object, array cũng có behavior tương tự  
const numberList = [1, 2, 3]   // ts understand: const numberList: number[]
const numberListAsConst = [1, 2, 3] as const   // ts understand: const numberListAsConst: readonly [1, 2, 3]




// Kiểu dữ liệu cụ thể 
// Type Assertion  : Xác định lại kiểu cụ thể cho 1 biến bằng as
function getStatusName(state: 'active') {
console.log(state);
}
// let s = 'active'; // let s: string
// getStatusName(s)  // Sẽ bị lỗi 

// // ts error: Argument of type 'string' is not assignable to parameter of type '"active"'.ts(2345)

//// solution 1 : Khai báo kiểu dữ liệu là 'active'  cho s
// let s: 'active' = 'active'; // tương đương với cách viết const s = 'active'
// getStatusName(s);

// solution 2 : Sử dụng các khai báo biến const --> sẽ tự hiển s: 'active'
const s = 'active'; // or const s = 'active'
getStatusName(s);

// solution 3 : Gán cứng cho TS hiểu s là 'active'
// let s = 'active';
// getStatusName(s as 'active')

}
