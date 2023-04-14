document.addEventListener("DOMContentLoaded", function() {
  const operations = {
    add: {
      buttonId: "add-btn",
      endpoint: "/add/",
    },
    subtract: {
      buttonId: "subtract-btn",
      endpoint: "/subtract/",
    },
    multiply: {
      buttonId: "multiply-btn",
      endpoint: "/multiply/",
    },
    divide: {
      buttonId: "divide-btn",
      endpoint: "/divide/",
    },
  };

  for (const operation in operations) {
    document.querySelector(`#${operations[operation].buttonId}`).addEventListener("click", function() {
      const num1 = document.querySelector("#num1").value;
      const num2 = document.querySelector("#num2").value;
      fetch(operations[operation].endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({
          A: num1,
          B: num2,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if ("result" in data) {
            document.querySelector("#result").value = data.result;
            document.querySelector("#result").style.backgroundColor = "green";
            document.querySelector("#result").style.color = "black";
          } else if ("error" in data) {
            document.querySelector("#result").value = "data is not numeric or it is an error occurs during calculation";
            document.querySelector("#result").style.backgroundColor = "red";
            document.querySelector("#result").style.color = "black";
          }
        })
        .catch(error => console.error(error));
    });
  }

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + "=")) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
});
