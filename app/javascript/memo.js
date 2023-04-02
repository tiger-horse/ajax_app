function post (){
  // idのsabmitを取得して代入
  const submit = document.getElementById("submit");
  // クリックしたら
  submit.addEventListener("click", (e) => {
    // eに対して無効化している。
    e.preventDefault();
    // idのformを取得して変数に代入
    const form = document.getElementById("form");
    // formに入力された値と取得して代入
    const formData = new FormData(form);
    // 新たに生成したXMLHttpRequestオブジェクトを変数XHR
    const XHR = new XMLHttpRequest();
    // リクエストの内容を指定するためのメソッド(XHR.open)
    XHR.open("POST", "/posts", true);
    // リクエスト時のデータフォーマットの指定
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);