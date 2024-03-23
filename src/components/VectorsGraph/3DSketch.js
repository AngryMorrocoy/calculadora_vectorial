export default function sketch(p) {
  const axisSize = 3500;
  let vectors = [];

  function drawAxis() {
    p.strokeWeight(3);
    // x axis
    p.beginShape();
    p.stroke(255, 0, 0);
    p.vertex(-axisSize, 0, 0);
    p.vertex(axisSize, 0, 0);
    p.endShape();
    // y axis

    p.beginShape();
    p.stroke(0, 0, 255);
    p.vertex(0, -axisSize, 0);
    p.vertex(0, axisSize, 0);
    p.endShape();

    // z axis

    p.beginShape();
    p.stroke(0, 255, 0);
    p.vertex(0, 0, -axisSize);
    p.vertex(0, 0, axisSize);
    p.endShape();
  }

  function drawVector(x, y, z) {
    p.fill(0, 0, 0);
    p.stroke(0);
    p.strokeWeight(1);
    p.beginShape();
    p.vertex(0, 0, 0);
    p.vertex(x, -y, -z);
    p.endShape();
  }

  p.setup = () => {
    p.createCanvas(500, 500, p.WEBGL);
    p.camera(1200, -1200, 1200)
  };

  p.updateWithProps = (props) => {
    if (props.vectors) vectors = props.vectors;
    // console.log("Resize", p.resizeCanvas)
    p.resizeCanvas(...props.size);
  };

  p.draw = () => {
    p.background(100);
    p.orbitControl(0.5, 0.5, 1);
    drawAxis();

    for (let [_, v] of Object.entries(vectors)) {
      drawVector(v.x, v.y, v.z);
    }
  };
}
