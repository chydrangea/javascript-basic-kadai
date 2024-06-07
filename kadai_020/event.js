// HTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
 
// btnがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
 
// text要素の内容を変更する
text.textContent = 'ボタンをクリックしました';

});