// constによる再代入
const nickname = "taro"
console.log(nickname)
nickname = "Jiro"
console.log(nickname)

// 「Uncaught TypeError: Assignment to constant variable. at sample.js:4」というエラー
// エラーの内容は定数とした変数には割り当てできないというもの
// 再代入はvarとletで可能。constでは再代入ができない。
