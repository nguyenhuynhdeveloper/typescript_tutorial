

 Bắt đầu 1 dự án typescript trong Node JS
 Để bắt đầu 1 dự án với Typescript 

# tại folder chứa dự án
#   yarn init
 Sẽ tạo ra các file 
.editorconfig
.gitignore
package.json
README.md
yarn.lock

 
#  yarn add --dev typescript ts-node
sẽ tạo ra 1 folder .yarn 

 Để bắt đầu khởi tạo 

#  tsc --init
Sẽ khởi tạo những thứ cần thiết cho dự án 
tsconfig.json : 
.pnp.cjs
 



chạy node index.ts thì sẽ không chạy được : nó sẽ báo lỗi là đọc không hiểu gì hết 



Bài 3: Làm sao để thực thi được file typescript 

 VScode Extension 
 Bracket Pair Colorizer
 Code Runner
 JavaScript ES6
 Prettier - Code formatter
 Material Icon Theme

cài đặt các thư viện cần thiết 
# yarn global add typescript ts-node ts-lib @types/node

typescript : chuyển từ ts sang js
ts-node: giống như kiểu nodejs dành cho ts thực thi luôn file : chứ không phải làm 2 bước 
ts-lib @types/node : có thể cần thiét 

### có 2 cách để chạy được file .ts 

# Cách 1 : build ra 1 file javascript rồi chạy file js 
 yarn tsc index.ts
--- sau khi có file index.js rồi thì có thể chạy
 node index.js 
 
 //  nếu đã cài typescript ở global 
 chạy tsc index.ts  --> chuyển từ ts sang js
 node index.js dùng node để chạy file js

# Cách 2 : chạy luôn file ts bằng thư viện ts-node
 ts-node là 1 thư viện giúp chạy code trực tiếp luôn , thường thường nó sẽ build ra 1 bản .js

# Nếu đã cài ts-node ở global
để có thể sử dụng ts-node index.ts mà không cần tiền tố npx thì cần cài đặt ts-node ở global 
npm install -g ts-node
Cách 1 : ts-node index.ts 

Cách 2
extension ; Code Runner để chạy nhanh gọn ts
để chạy được js - cần node
để chạy được ts - cần ts-node 

# Nếu không cài global thì cần gõ 
npx ts-node index.ts 
yarn ts-node index.ts





#  Cách chỉnh định dạng format 
vào command pallete --> tìm format --> chọn prettier 






// clone về thì yarrn  lại thư viện