fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((err) => {
    console.error("ヘッダーの読み込みに失敗しました:", err);
  });
