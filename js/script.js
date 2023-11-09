function fetchData() {
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

document.querySelector("#print").addEventListener("click", function () {
  window.print();
});

fetchData();
