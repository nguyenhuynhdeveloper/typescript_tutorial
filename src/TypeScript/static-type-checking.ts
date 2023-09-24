// https://www.youtube.com/watch?v=JGFdaUUznGk&list=PLeS7aZkL6GOtUGTQ81kfm3iGlRTycKjrZ&index=6&t=168s


/**
 Bài 2.1 : Static type checking là gì ?
Phát hiện biến kiểu dữ liệu là gì :
Giúp tránh lỗi type biến

Types for Tooling
ts giúp hạn chế lỗi bằng việc hỗ trợ auto completions / suggestions .
file tsconfig.json : để có thể cài đặt các config bắt lỗi cho ts
 */


const number = 4;
function add(x: number, y: number): number {
  return x + y;
}


console.log(add(3, 5));
console.log('ádd');

