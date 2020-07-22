
const svgContainer = d3.select("#svgContainer");
const connString = "http://localhost:3200/coo";
let circleCoo = {
  x: undefined,
  y: undefined,
};

let circle;

(function() {
  getCoo().then(() => {
    circle = svgContainer
      .append("circle")
      .attr("fill", "red")
      .attr("r", "50px")
      .call(
        d3
          .drag()
          .on("drag", () => {
            if (verifyCoo(event.x, event.y)) {
              circleCoo.x = event.x;
              circleCoo.y = event.y;
              moveCircle();
            }
          })
          .on("end", () => {
            saveCoo();
          })
      );
    moveCircle()
  })
})()


function verifyCoo(x, y) {
  return x < 950 && x > 50 && y > 50 && y < 650 ? true : false;
}

function getCoo() {
  return fetch(connString)
    .then((r) => {
      if (r.ok) {
        return r.json();
      }
    })
    .then((data) => {
      circleCoo = data;
      // return data;
    })
    .catch((error) => console.error(error));
}

function saveCoo() {
  fetch(connString, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(circleCoo),
  }).then((response) => {
  });
}

function moveCircle() {
  d3.select("circle")
    .attr("cx", `${circleCoo.x}px`)
    .attr("cy", `${circleCoo.y}px`);
}
