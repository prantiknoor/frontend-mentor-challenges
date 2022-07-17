const chart = document.querySelector(".chart");

const chartBar = document.createElement("div");
chartBar.classList.add("chart__bar");

function fetchData(url) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return { data: JSON.parse(xmlHttp.responseText) };
}

response = fetchData("./data.json");

console.log(response.data);

const maxAmount = Math.max(...response.data.map((el) => el.amount));

response.data.forEach((el, i) => {
  const barHeight = (el.amount / maxAmount) * 100;
  const positionTop = 100 - barHeight;
  const highlight =
    (new Date().getDay() + 6) % 7 == i ? "chart__bar--highlight" : "";

  chart.innerHTML += `
    <div class="chart__bar ${highlight}" style="height: ${barHeight}%; top: ${positionTop}%" >
      <div class="tooltip">$${el.amount}</div>
      <div class="chart__bar__date">${el.day}</div>
    </div>
  `;
});
