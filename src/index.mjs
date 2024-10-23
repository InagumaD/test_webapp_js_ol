import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteToDo(inputText);
};

// 渡された引数をもとに未完了のToDoを作成する
const createIncompleteToDo = (todo) => {
  //liの作成
  const li = document.createElement("li");

  //divの作成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグの生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  //ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = deleteButton.closest("li");

    //  削除ボタン・完了ボタンを削除する
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタンを追加する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteToDo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstChild.appendChild(backButton);

    //　完了リストに移動する
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //階層構造の作成
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
