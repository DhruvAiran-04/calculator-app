let history = [];

function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
    addToHistory(result);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function addToHistory(result) {
  history.unshift(result);
  if (history.length > 5) history.pop();
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
