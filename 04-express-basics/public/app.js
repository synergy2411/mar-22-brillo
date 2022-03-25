window.onload = function () {
  
  const btnFetchTodos = document.getElementById("btnFetchTodos");
  const todoList = document.getElementById("todo-list");
  const btnAddTodo = document.getElementById("btnAddTodo");
  const txtTodo = document.getElementById("txtTodo");

  const fetchTodos = () => {
    todoList.innerHTML = "";
    fetch("http://localhost:9001/api/todos")
      .then((response) => response.json())
      .then((result) => {
        result.forEach((todo) => {
          const li = document.createElement("li");
          const button = document.createElement("button");
          button.textContent = "DELETE";
          li.innerHTML = `
                ${todo.label.toUpperCase()}
                `;
          li.append(button);
          todoList.append(li);
        });
      })
      .catch(console.log);
  };

  btnAddTodo.addEventListener("click", (event) => {
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ label: txtTodo.value }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        fetchTodos();
      })
      .catch(console.log);
  });

  btnFetchTodos.addEventListener("click", (event) => {
    fetchTodos();
  });
};
