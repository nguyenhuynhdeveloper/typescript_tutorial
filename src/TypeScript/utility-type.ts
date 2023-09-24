
// /**
//  Bài 3.6 :Một số Utility Types phổ biến 
//TypeScript cung cấp một số Types tiện ích để tạo điều kiện chuyển đổi Types phổ biến.

//   Partial  : Đưa tất cả props về optional 
//   Required : Đưa tất cả props về required
//   Readonly : Đưa tất cả props về readonly 
// Record<Type, Type> : Tạo ra 1 Type mới :  với 1 type: cung cấp key, 1 type cung cấp value
// Pick<Type, Keys> : Tạo 1 Type mới bằng cách nhặt 1 vài key trong kiểy Type có sẵn 
// Omit<Type, Keys> : Tạo ra 1 Type mới bằng cách loại bỏ 1 vài key của Type có sẵn 
// ReturnType : Trả ra kiểu dữ liệu trả về của 1 hàm : Lấy được kết quả trả về của 1 hàm nào đó 




  
//   */
{
   
  type CatName =  'miffy' | 'boris' | 'mordred'  // type này chỉ nhận 1 trong 3 giá trị này 
 
  interface CatInfo {
   age: number; 
   breed: string; 
  }
 
    type aPartial =  Partial<CatInfo>   // Đưa tất cả props về optional
    type aRequired = Required<CatInfo>  // Đưa tất cả props về requited
    type aReadonly = Readonly<CatInfo>  // Đưa tất cả props về readonly

    // Record<Keys, Type> : Tạo ra 1 Type mới :  với 1 type: cung cấp key, 1 type cung cấp value
    const cats: Record<CatName, CatInfo> = {
     miffy: {age: 10 , breed : 'Persian'},
     boris: {age: 5, breed: 'Maine Coon'},
     mordred: {age: 16, breed: 'British Shorthair'}
    }

    // Pick<Type, Keys> : Tạo 1 Type mới bằng cách nhặt 1 vài key trong kiểy Type có sẵn 
   interface Todo {
     title: string ;
     description : string; 
     completed: boolean;
   }
   
   type TodoPreview = Pick<Todo, 'title' |'completed'>      // Các Keys cách nhau bởi dấu | 
   
   const todo: TodoPreview = {
     title: "Clean room",
     completed: false,
   }
   
   
   // Omit<Type, Keys> : Tạo ra 1 Type mới bằng cách loại bỏ 1 vài key của Type có sẵn 
   interface Todo {
     title: string;
     description : string ;
     completed: boolean; 
     createdAt : number ; 
   
   }
   
   type TodoPreview_1 = Omit<Todo, 'desciption'>; 
   
   const todo_1 : Todo = {
     title: 'Clean Room', 
     completed : false, 
     createdAt: 1615544252770,
     description: "description"
   }
   
   console.log('todo_1', todo_1)
   
   // ReturnType : Trả ra kiểu dữ liệu trả về của 1 hàm : Lấy được kết quả trả về của 1 hàm nào đó 
   
   type T0 = ReturnType<() => string> ;  // type T0 = string 
   
    function f1 () : {a: number, b: string } {
      return {a: 10, b: "abc"}
    };

    // declare function f1(): { a: number; b: string }; // Docs lỗi
   
   type T4 = ReturnType <typeof f1>;   // type T4 = {a: number , b: string}

    // type T5 = ReturnType<number>

   const aString : string = "abc"
   console.log('typeof aString', typeof aString)

}