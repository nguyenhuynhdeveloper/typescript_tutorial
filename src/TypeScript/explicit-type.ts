/**
 //https://www.youtube.com/watch?v=CbCuD_CL548&list=PLeS7aZkL6GOtUGTQ81kfm3iGlRTycKjrZ&index=6

 Bài 2.2 :Explicit types and Inferred types 
 
 */
// Explicit types : Khai báo tường mình  Khai báo kiểu dữ liệu thì sử dụng dấu 2 chấm đằng sau tên biến 
{

    let count: number = 123;
    let studentName: string = 'alice';
    let isActive: boolean = true ;
    const numberList : number[] = [1, 2, 3, 4];
    
    // Infered types : Khai báo suy luận  :thông minh tự detect biến thuộc kiểu dữ liệu gì ngay cả khi không khai báo thuộc kiểu dữ liệu gì
    
    let count_1 = 123;
    let studentName_1 = 'alice';
    let isActive_1 = true ;
    const numberList_1 = [1, 2, 3, 4];
}




// - Eraised types: kiểu dữ liệu sẽ bị remove khi chuyển sang javascript : 
// sau khi compile ts sang js. tất cả các type  annotation sẽ bị xoá
// - Downleveling: compile typescript về cú pháp javascript của target environement
// tuỳ vào target mà code sau khi được compile ra javascript sẽ khác nhau
// để đảm bảo target environment có thể và thực thi được code mình viết bên typescript 