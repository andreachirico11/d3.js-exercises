const svgContainer = d3.select("#svgContainer");
const lineArray = [];
let lineArrayCounter = 0;
let startPos = {
  x: 0,
  y: 0,
};
let finalPos = {
  x: 0,
  y: 0,
};
let eventCounter = 0;

svgContainer.call(
  d3
    .drag()
    .on("start", () => {
      startPos.x = event.x;
      startPos.y = event.y;
    })
    .on("drag", () => {
      finalPos.x = event.x;
      finalPos.y = event.y;
      drawLine();
    })
    .on("end", () => {
      finalPos.x = event.x;
      finalPos.y = event.y;
      drawLine();
      createLine();
      lineArrayCounter++;
      console.log(lineArray);
    })
);

function drawLine() {
  d3.select("#line" + lineArrayCounter.toString()).remove();
  lineArray[lineArrayCounter] = svgContainer
    .append("line")
    .attr("id", "line" + lineArrayCounter.toString())
    .attr("x1", startPos.x)
    .attr("y1", startPos.y)
    .attr("x2", finalPos.x)
    .attr("y2", finalPos.y)
    .attr("stroke-width", 2)
    .attr("stroke", "black");
}

function createLine() {
  lineArray[lineArrayCounter] = {
    id: "line" + lineArrayCounter.toString(),
    start: startPos,
    end: finalPos,
  };
}
