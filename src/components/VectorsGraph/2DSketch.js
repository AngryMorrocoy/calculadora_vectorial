export default function sketch(p) {
  const axisSize = 3500;
  const panSensitivity = 15;
  const zoomSensitivity = 1000;
  let camView = {
    zoom: 1,
    panStart: { x: 0, y: 0 },
    position: { x: 0, y: 0 },
  };
  let vectors = [];

  function drawAxis() {
    p.strokeWeight(1.5);
    p.stroke(255, 0, 0);
    // x axis
    p.line(-axisSize, p.height / 2, axisSize, p.height / 2);
    // y axis
    p.stroke(0, 0, 255);
    p.line(p.width / 2, -axisSize, p.width / 2, axisSize);
  }

  function drawVector(x, y) {
    const midW = p.width / 2
    const midH = p.height / 2
    p.stroke(0);
    p.strokeWeight(2);
    p.line(midW, midH, midW + x, midH - y);
  }

  p.setup = () => {
    p.createCanvas(500, 500);
    p.noFill();
  };

  p.updateWithProps = (props) => {
    if (props.vectors) vectors = props.vectors;
    p.resizeCanvas(...props.size);
  };

  p.draw = () => {
    p.background(100);
    p.translate(camView.position.x, camView.position.y);
    p.scale(camView.zoom);

    drawAxis();
    for (let [_, v] of Object.entries(vectors)) {
      drawVector(v.x, v.y);
    }
  };

  p.mouseWheel = (evt) => {
    if (evt.target.className !== "p5Canvas") return;
    camView.zoom += -(evt.delta / zoomSensitivity);
  };

  p.mousePressed = (evt) => {
    if (evt.target.className !== "p5Canvas") return;
    camView.panStart = { x: p.mouseX, y: p.mouseY };
  };

  p.mouseDragged = (evt) => {
    if (evt.target.className !== "p5Canvas") return;

    const deltaX = p.mouseX - camView.panStart.x;
    const deltaY = p.mouseY - camView.panStart.y;

    camView.position.x += deltaX / panSensitivity;
    camView.position.y += deltaY / panSensitivity;
  };
}
