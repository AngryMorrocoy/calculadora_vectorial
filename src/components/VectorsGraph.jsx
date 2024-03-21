import { useState, useEffect, useContext } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { VectorStorageContext } from "../context/VectorStorageContext";

function sketch(p) {
  const axisScale = 0.03;
  let vectors = [];
  let m;

  function drawX() {
    p.noStroke();
    // x axis
    p.push();
    p.translate(-1000, 0, 0);

    p.scale(1000, axisScale, axisScale);
    p.fill(255, 0, 0);
    p.box();
    p.pop();
    // y axis

    p.push();
    p.fill(0, 0, 255);
    p.translate(0, -1000, 0);
    p.scale(axisScale, 1000, axisScale);
    p.box();
    p.pop();

    // z axis

    p.push();
    p.fill(0, 255, 0);
    p.translate(0, 0, -1000);
    p.scale(axisScale, axisScale, 1000);
    p.box();
    p.pop();
  }

  function drawVector(x, y, z) {
    p.fill(0, 0, 0);
    p.stroke(0);
    p.strokeWeight(1);
    p.beginShape();
    p.vertex(0, 0, 0);
    p.vertex(x, y, z);
    p.endShape();
  }

  p.setup = () => {
    p.createCanvas(500, 500, p.WEBGL);
  };

  p.updateWithProps = (p) => {
    if (p.vectors) vectors = p.vectors;
    // p.resizeCanvas(...p.size);
  };

  p.draw = () => {
    p.background(100);
    p.orbitControl(0.5, 0.5,1);
    drawX();

    for (let [_, v] of Object.entries(vectors)) {
      drawVector(v.x, v.y,v.z);
    }
  };
}

const VectorsGraph = ({ }) => {
  const { state: vectors } = useContext(VectorStorageContext);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize - 10);
      setHeight(event[0].contentBoxSize[0].blockSize - 10);
    });

    resizeObserver.observe(document.getElementById("div1"));
  });

  return (
    <div id="div1" className="w-100 h-100">
      <ReactP5Wrapper
        sketch={sketch}
        size={[width, height]}
        vectors={vectors}
      />
    </div>
  );
};

export default VectorsGraph;
