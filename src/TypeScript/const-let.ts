/**
 Bài 2.5 : const / let và cách đặt tên biến đúng chuẩn 
 */

// khi nào dùng const 
// dùng cho hằng số . UPPER_CASE
//dùng cho biến mà không có nhu cầu thay đổi giá trị . cameCase

{
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

let numberList_1 = [1, 2, 3, 4]
numberList_1 = []

}

// Các quy tắc đặt tên 
// Tên biến hằng số UPPER_CASE API_URL , IMAGE_URL, PAGE_SIZE...
// Tên biến boolean camelCase hasName, isActive, show...
// Tên biến số ít  camelCase student, product, count...
// tên biến số nhiều camelCase studentList, productList ...
// Tên hàm camelCase  addProduct, convertObjectToArray... 

