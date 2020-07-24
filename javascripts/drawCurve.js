import trail from "/trailFn.js";

let trailData = [
    //   [10, 10, 1],
    //   [100, 100, 15],
    //   [200, 100, 10],
    //   [290, 200, 0.1],
    //   [300, 200, 0.1],
    //   [400, 50, 20],
  ],
  trailArray = [],
  trailIdUnderDrawing = "",
  trailCounter = 0,
  startR = 50,
  endR = 10;

const svgContainer = d3.select("#mainSvgContainer").call(
  d3
    .drag()
    .on("start", () => {
      trailIdUnderDrawing = `#trail${trailCounter}`;
      trailData.push([event.x, event.y, startR]);
    })
    .on("drag", () => {
      trailData.push([event.x, event.y, startR]);
      removeTrailGroup(trailIdUnderDrawing);
      createTrailGroup(trailIdUnderDrawing);
      drawTrail();
    })
    .on("end", () => {
      trailData.push([event.x, event.y, startR]);
      removeTrailGroup(trailIdUnderDrawing);
      createTrailGroup(trailIdUnderDrawing);
      trailData = correctScale(trailData, endR, startR);
      drawTrail();
      saveNewTrail();
    })
);

function drawTrail() {
  d3.select(trailIdUnderDrawing)
    .append("path")
    .attr("fill", "transparent")
    .style("stroke", "red")
    
    .attr("d", () => {
      return trail.context(null)(trailData);
    });
}

function saveNewTrail() {
  trailArray.push({
    id: trailIdUnderDrawing,
    data: [...trailData],
  });
  trailCounter++;
  trailData = [];
}

function createTrailGroup(id) {
  //   trailIdUnderDrawing = `trail${trailCounter}`;
  svgContainer.append("g").attr("id", trailIdUnderDrawing.substring(1));
}

function removeTrailGroup(trailId) {
  d3.select(trailId).remove();
}

function correctScale(arr, end, start) {
  let correctedArray = [...arr];
  const increment = (end - start) / correctedArray.length;
  let r = start;
  correctedArray.forEach((trailData) => {
    trailData[2] = r;
    r += increment;
  });
  return correctedArray;
}
