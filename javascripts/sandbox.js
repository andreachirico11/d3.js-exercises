const body = d3.select("body");

// modifica elemento
const p = d3.select("p").text("gatto");

// elemento generato
const newDiv = d3.create("div");
newDiv.html("<br><br><br><span>div creato dinamicamente</span><br><br><br>");
body.node().append(newDiv.node());

// tabella
const table = d3.create("table");
const thead = table.append("thead");
const tbody = table.append("tbody");
tbody
  .append("tr")
  .append("td")
  .text("uno")
  .append("td")
  .text("due")
  .append("td")
  .text("tre");
tbody
  .append("tr")
  .append("td")
  .text("quattro")
  .append("td")
  .text("cinque")
  .append("td")
  .text("sei");
table.style("color", "red").style("border", "5px solid blue");
body.node().append(table.node());
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// grafico

const data = [4, 6, 23, 54, 2, 24];
const grafico = d3
  .create("div")
  .style("font", "10px sans-serif")
  .style("color", "white");

grafico
  .selectAll("div")
  .data(data)
  .join("div")
  .style("height", "20px")
  .style("margin", "1px")
  .style("background", (d) => {
    return d % 2 === 0 ? "red" : "blue";
  })
  .style("width", (d) => `${d * 10}px`)
  .text((d) => d);

d3.select(".grafico")
  .style("border", "3px solid grey")
  .style("padding", "5% 0")
  .html("<h3>MegaGrafico</h3>")
  .node()
  .append(grafico.node());
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// grafico con lunghezze legate a un range voluto

const grafico2 = d3
  .create("div")
  .style("font", "10px sans-serif")
  .style("color", "white");

const valueFormatter = d3
  .scaleLinear() //
  .domain([0, d3.max(data)]) // gruppo dati
  .range([0, 300]); // range che verrà usato nella view

grafico2
  .selectAll("div")
  .data(data)
  .join("div")
  .style("height", "20px")
  .style("margin", "1px")
  .style("background", (d) => {
    return d % 2 === 0 ? "red" : "blue";
  })
  //
  .style("width", (d) => `${valueFormatter(d)}px`)
  //
  .text((d) => d);

d3.select(".grafico2")
  .style("border", "3px solid grey")
  .style("padding", "5% 0")
  .html("<h3>MegaGrafico 2 con value formatter</h3>")
  .node()
  .append(grafico2.node());
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// TRANSITION

const svgContainer = d3
  .select(".transition")
  .append("svg")
  .attr("width", 800)
  .attr("height", 400);
const rect =
  svgContainer
    .append("rect")
    .attr("x", 150)
    .attr("y", 50)
    .attr("width", 200)
    .attr("fill", "#69b3a2")
    .attr("height", 50)
    .attr("stroke-width", 3)
    .attr("stroke", "green");

svgContainer.node().append(rect.node());
let animationIsOn = true;
setTimeout(() => {
  animationIsOn = false;
}, 10000);

function rectAnimation() {
  rect
    .transition()
    .duration(1000)
    .attr("width", 300)
    .transition()
    .duration(1000)
    .attr("width", 100)
    .transition()
    .duration(1000)
    .attr("height", 100)
    .transition()
    .duration(1000)
    .attr("height", 50)
    .on("end", animationIsOn ? rectAnimation : null);
}
rectAnimation();

// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// CIRCLES 
const circles = [1, 2, 3, 4, 5];
let timer = 0;

const circlesContainer = d3
  .select(".circles")
  .append("svg")
  .attr("width", 800)
  .attr("height", 400)
  .style("border", "5px solid black");

circlesContainer
  .selectAll("circle")
  .data(circles)
  .join("circle")
  .attr("r", 10)
  .attr("cy", 50)
  .attr("cx", (data) => data * 100);

const interval = setInterval(() => {
  if (timer === 350) {
    return clearInterval();
  }
  timer += 50;
  circlesContainer
    .selectAll("circle")
    .transition()
    .duration(1000)
    .attr("cy", 390)
    .transition()
    .duration(1000)
    .attr("cy", () => {
      return 50 + timer;
    });
}, 2000);



