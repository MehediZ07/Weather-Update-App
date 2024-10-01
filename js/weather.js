let city;

document.getElementById("btn-1").addEventListener("click", function () {
  city = document.getElementById("input-city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9a148a83c7ba96ec31566db86c39044c`;

  loadData();

  function loadData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((error) => console.error("Error fetching users:", error));
  }
});

function displayData(data) {
  const ul = document.getElementById("users-list");
  ul.innerHTML = "";
  const li = document.createElement("h1");
  li.classList.add("style", "text-gray-900", "mx-2");
  li.innerHTML = `
 
      <h1>  Today ${data.name} city   
Temperature is </h1>
          <p class=" text-gray-900 font-semibold text-5xl mt-6">${data.main.temp}<sup>C</sup></p>
            `;
  ul.appendChild(li);
}

document.getElementById("input-city").addEventListener("input", function () {
  document
    .getElementById("input-city")
    .classList.remove("opacity-40", "bg-white");
  document.getElementById("input-city").classList.add("opacity-80");
});

function time() {
  const currentTime = `${new Date().toLocaleDateString()}, ${new Date().toLocaleDateString(
    "en-US",
    { weekday: "long" }
  )},  ${new Date().toLocaleTimeString()} `;

  document.getElementById("time").textContent = currentTime;
}

setInterval(time, 1000);

time();
