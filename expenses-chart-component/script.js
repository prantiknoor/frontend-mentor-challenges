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

response.data.forEach((el, i) => {
  var highlight = "";
  const bound = 55.0;
  const marginTop =  43 - (el.amount / bound * 43);
  console.log(marginTop);
  if (new Date().getDay() - 1 == i) {
    highlight = "chart__bar--highlight"
  }
  chart.innerHTML += `
    <div class="chart__bar ${highlight}" style="margin-top: ${marginTop}%" >
      <div class="tooltip">$${el.amount}</div>
      <div class="chart__bar__date">${el.day}</div>
    </div>
  `;
});
