const svgWidth = 1000,
  svgHeight = 700,
  xScale = d3.scaleLinear().domain([0, 1000]).range([0, svgWidth]),
  yScale = d3.scaleLinear().domain([0, 600]).range([0, svgHeight]);

const xAxis = d3.axisBottom().scale(xScale).ticks(20),
  yAxis = d3.axisRight().scale(yScale).ticks(20),
xgridlines = d3.axisLeft().tickSize(-svgWidth).ticks(10).scale(yScale),
ygridlines = d3.axisTop().tickSize(-svgHeight).ticks(20).scale(xScale);

const svgContainer = d3
  .selectAll("main")
  .append("svg")
  .attr('id', 'mainSvgContainer')
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("style", "border: solid red; margin-left: 50px;");
svgContainer.append("g").call(xAxis);
svgContainer.append("g").call(yAxis);
svgContainer.append("g").call(xgridlines);
svgContainer.append("g").call(ygridlines);

