function fetchData() {
  var currentURL = window.location.pathname;
  var currentPageName = currentURL.substring(currentURL.lastIndexOf("/") + 1);
  console.log("Current page name: " + currentPageName);
  if (currentPageName === "print.html") {
    const container = document.querySelector("tbody");

    fetch("./assets/projects.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const html = `<tr>
                      <th scope="row">${item.id}</th>
                      <td>${item.name}</td>
                      <td>${item.description}</td>
                    </tr>`;
          container.insertAdjacentHTML("beforeend", html);
        });
        // window.print();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    document.addEventListener("DOMContentLoaded", function () {
      var myModal = new bootstrap.Modal(document.getElementById("printModal"));
      myModal.show();
    });
    document.querySelectorAll(".print").forEach((btn) => {
      btn.addEventListener("click", function () {
        window.print();
      });
    });
  } else {
    const container = document.querySelector(".row");
    fetch("./assets/projects.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const html = `<div class="col">
                            <div class="card" style="width: 18rem; height:100%">
                                    <img src="${item.src}" class="card-img-top" alt="image">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text">${item.description}</p>
                                    </div>
                            </div>
                        </div>`;
          container.insertAdjacentHTML("beforeend", html);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

fetchData();
