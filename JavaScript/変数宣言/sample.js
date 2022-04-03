// letによる再宣言
let nickname = "taro"
console.log(nickname)
let nickname = "ichiro"
console.log(nickname)

// letniによる再宣言では「Uncaught SyntaxError: Identifier 'nickname' has already been declared」と、エラーが出る。
// これは「'nickname'という変数は既に宣言されている」というエラー
// letでは再宣言はできない