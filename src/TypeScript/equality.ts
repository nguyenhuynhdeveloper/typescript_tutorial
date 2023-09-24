/**
  Bài 2.4: Điều cần lưu ý với phép so sánh trong typescript 
  so sánh == so sánh về giá trị - có gán kiểu nếu khác kiểu
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
 
 
   //Thường thường chúng ta chỉ só sánh id, hay giá trị key của 2 objects
 
   const studentA = {id: 1, name:  'Alice' }
   const studentB = {id : 1, name : 'Alice' }
 
   studentS.id ===studentB.id // true
 
 
   //null và underfined
   null == undefined // true  // null chỉ duy nhất == undefined
    null == 0 ;  // false
    null >=  0 ; // true
 
 if(typeof window !== 'undefined') {
   // nếu window object là available or not 
   // làm gì đó ở phía client side
 }
   */