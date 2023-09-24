
/**
Bài 3.4 : Tất tần tật về Enum trong Typescript 
*/
{


//1 . Number  enum 

enum  Status {
  PENDING, // 0
  IN_PROGRESS,  // 1
  DONE,   // 2
  CANCELLED, // 3
}

// // Có thể gán giá trị bắt đầu đếm của các phần tử trong enum
//  enum Status {
//   PENDING = 2, 
//   IN_PROGRESS, 
//   DONE, 
//   CANCELLED, 
//  }

//  // Có thể gán từng giá trị cho phần tử của enum
//  enum Status {
//   PENDING = 3, 
//   IN_PROGRESS= 5, 
//   DONE  = 8, 
//   CANCELLED = 10 ,
//  }

 console.log('Status.PENDING', Status.PENDING)
 console.log('Status.IN_PROGRESS', Status.IN_PROGRESS)
 console.log('Status.DONE', Status.DONE)
 console.log('Status.CANCELLED', Status.CANCELLED)

 // Khi mà khai báo không gán giá trị thì nó sẽ nhận từ 0 và tăng dần , giá trị sau = giá trị trước + 1 

 // Có thể gán bất kỳ số cho enum variable 
 const status1: Status = Status.PENDING;
 const status2: Status = 3; 
 const status3: Status = -1;  // Gán cho nó giá trị nào cũng được , mặc dù enum chỉ có giá trị 0, 1, 2, 3

 // number enum ---> hỗ trợ đảo ngược mapping 
 console.log(Status[0])   // 'PENDING'
 console.log(Status['DONE'])  // 2

 // 2. String enum 
 // Không hỗ trợ reverse mapping 
  enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
  }

  console.log('MediaTypes.JSON', MediaTypes.JSON)
  console.log('MediaTypes.XML', MediaTypes.XML)

//   fetch('https://ẽample.com.api/endpoint', {
//     headers: {
//       Appcept: MediaTypes.JSON,
//     }
//   }).then(response => {
//     //... response là giá trị mà API trả về
//   })

  //3, When to use enum 
  // static dât on Frontend, not the data from API response
  // Không yêu cầu reverse map 
  // Tốt hơn nên sử dụng union types cho data return từ API 
}
