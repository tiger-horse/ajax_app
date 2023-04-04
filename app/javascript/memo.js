const buildHTML = (XHR) => {
  // レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    // リクエストの送信
    XHR.send(formData);
    // リクエストが送信が成功したら
    XHR.onload = () => {
      // リクエストに失敗したとき
      if (XHR.status != 200) {
        // エラー文が出る
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      // フォームのidを取得する
      const formText = document.getElementById("content");
      // insertAdjacentHTMLメソッドの第一引数にafterendを指定することで、変数listに格納された要素の直後に生成したHTMLを挿入しています
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      // 入力フォームを空にする。
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);