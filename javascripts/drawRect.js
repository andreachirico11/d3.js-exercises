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
let startPos = {
  x: 0,
  y: 0,
};
let dimensions = {
  width: 0,
  height: 0,
};



let x0 = 34 , y0 = 43, x1 = 250, y1 = 37, x2 = 250, y2 = 79, shortSide = 60;

function calculateMissingCoo() {

}





svgContainer.append('polygon').attr('points', `${x0},${y0} ${x1},${y1} ${x2},${y2}`);


// svgContainer.call(
//   d3
//     .drag()
//     .on("start", () => {
//       startPos.x = event.x;
//       startPos.y = event.y;
//     })
//     .on("drag", () => {
//       finalPos.x = event.x;
//       finalPos.y = event.y;
//       drawRect();
//     })
//     .on("end", () => {
//       finalPos.x = event.x;
//       finalPos.y = event.y;
//       drawRect();
//       createRect();
//       rectArrayCounter++;
//     })
// );

// function drawRect() {
//   d3.select("#rect" + rectArrayCounter.toString()).remove();
//   rectArray[rectArrayCounter] = svgContainer
//     .append("line")
//     .attr("id", "line" + rectArrayCounter.toString())
//     .attr("x", startPos.x)
//     .attr("y", startPos.y)
//     .attr("width", dimensions.width)
//     .attr("height", finalPos.y)
//     .attr("stroke-width", 2)
//     .attr("stroke", "black");
// }

// function createRect() {
//   rectArray[rectArrayCounter] = {
//     id: "line" + rectArrayCounter.toString(),
//     start: startPos,
//     dimensions: dimensions,
//   };
// }
