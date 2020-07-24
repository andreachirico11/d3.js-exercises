const svgWidth = 1000,
  svgHeight = 700,
  xScale = d3.scaleLinear().domain([0, 1000]).range([0, svgWidth]),
  yScale = d3.scaleLinear().domain([0, 600]).range([0, svgHeight]);

const xAxis = d3.axisBottom().scale(xScale).ticks(20),
  yAxis = d3.axisRight().scale(yScale).ticks(20);
xgridlines = d3.axisLeft().tickSize(-svgWidth).ticks(10).scale(yScale);
ygridlines = d3.axisTop().tickSize(-svgHeight).ticks(20).scale(xScale);

const svgContainer = d3
  .selectAll("main")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("style", "border: solid red; margin-left: 50px;");
svgContainer.append("g").call(xAxis);
svgContainer.append("g").call(yAxis);
svgContainer.append("g").call(xgridlines);
svgContainer.append("g").call(ygridlines);

const rectArray = [];
let rectArrayCounter = 0;


// x2-x0 = -s cos β = -s cos (arctan [(x1-x0) / (y1-y0)])
// y2-y0 = s sin β = s sin (arctan [(x1-x0) / (y1-y0)])

let 
  x0,
  y0,
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  shortSide = 100;

  
  
svgContainer.call(
  d3
  .drag()
    .on("start", () => {
      x0 = event.x;
      y0 = event.y;
    })
    .on("drag", () => {
      x1 = event.x;
      y1 = event.y;
      calculateMissingCoo();
      drawRect();
    })
    .on("end", () => {
      x1 = event.x;
      y1 = event.y;
      calculateMissingCoo()
      drawRect();
      rectArrayCounter++;
    })
);

function drawRect() {
  d3.select("#rect" + (rectArrayCounter).toString()).remove();
  rectArray[rectArrayCounter] =
  svgContainer
  .append("polygon")
  .attr("points", `${x0},${y0} ${x1},${y1} ${x2},${y2}`)
  .attr("id", "rect" + rectArrayCounter.toString())
  .attr("fill", "none")
  .attr("stroke", "black");  
}
  
  function calculateMissingCoo() {
    const angle = Math.atan((x0 - x1) / (y0 - y1));
    x2 = x1 + -shortSide * Math.cos(angle);
    y2 = y1 + shortSide * Math.sin(angle);
    x3 = (x2*x1) / x0;  
    y3 = (y2*y1) / y0;  
  };
