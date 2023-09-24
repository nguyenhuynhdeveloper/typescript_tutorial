/**
 * EasyFrontend
 #  https://www.youtube.com/watch?v=J8ETe5AN5Us&list=PLeS7aZkL6GOtUGTQ81kfm3iGlRTycKjrZ&index=11
 Bài 2.7: Những điều bạn cần biết về destructuring 
 Rest và Spead operator : đều là dấu ... Khác nhau : 

 Rest : gom lại thành một 
 Spread: từ một tách ra thành một danh sách , dải ra
 */
{
  interface Student {
    id: number;
    name: string;
    age: number;
    gender: string;
  }

  const bob = {
    id: 1,
    name: 'Bob',
    age: 18,
    gender: 'male',
  };

  // OBJECT DESTRUCTURING

  // Destructuring : là rải ra phá ra - Bốc ra các phần tử bên trong Object
  // //Old way
  //   const id = bob.id;
  //   const name = bob.name;

  //New way
  //   const {id, name } = bob;

  // Rest Operator : Gom lại các phần tử còn lại
  // Old way
  //   const id = bob.id;
  //   const rest = {
  //    name : bob.name,
  //    age: bob.age,
  //    gender: bob.gender,
  //   }

  // // New way
  const { id, ...rest } = bob;
  console.log('rest', rest);

  //Spread Destructuring : Dải hết 1 Object ra
  // Ứng dụng :
  // Clone object  với spread operator :

  const bob2 = { ...bob, name: 'Bob2' }; // name ở đây là gán lại key name : 'Bob2'
  bob == bob2; //false
  console.log('bob2', bob2);

  //ARRAY DESTRUCTURING

  const fullName = 'Easy Frontend hau nguyen';
  const wordList = fullName.split(' '); // ['Easy' , 'Frontend']

  // Destructuring : là rải ra phá ra : Lấy ra các phần tử của mảng
  // // Old way
  //  const firstName = wordList[0];
  //  const lastName = wordList[1];

  //  //New way
  const [firstName, lastName] = wordList;
  const [a, b] = wordList; // Sẽ lấy theo thứ tự phần tử trong array
  console.log('firstName', firstName);
  console.log('a', a); // a giờ là 1 biến bình thường

  // rest operator : Gom các phần tử còn lại của mảng --> vào 1 mảng

  const numberList = [1, 2, 3, 4];
  const [x, y, ...remaining] = numberList;
  console.log('x', x); // x giờ là 1 biến bình thường
  console.log('y', y);
  console.log(x, y, remaining); //1, 2, [3, 4]

  // spread operator : Rải ra hết phần tử của 1 mảng
  // Ứng dụng :
  // Clone array with

  const newList1 = [...numberList]; // [1, 2 , 3, 4]
  const newList2 = [...numberList, 5, 6]; //[1, 2, 3, 4, 5, 6]
  console.log('newList2', newList2);

  // TỔNG KẾT : rest- gom - trái >< spread - rải - phải

  // Clone array of object (BE CAREFFUL !!!)

  interface Student {
    id: number;
    name: string;
    age: number;
    gender: string;
  }

  const studentList: Student[] = [
    { id: 1, name: 'Alice', age: 11, gender: 'female' },
    { id: 2, name: 'Bob', age: 12, gender: 'male' },
  ];

  const newList = [...studentList];
  newList[0].name = 'Alice Alice';

  console.log(studentList[0].name); //

  // CÁCH ĐỂ Swap two items
  let x1 = 5;
  let y1 = 10;

  // // OLDW WAY
  // let temp = x;
  // x = y; //10
  // y = temp; //5

  // //NEW WAY
  [y1, x1] = [x1, y1];
  console.log('x1', x1);
  console.log('y1', y1);
}
