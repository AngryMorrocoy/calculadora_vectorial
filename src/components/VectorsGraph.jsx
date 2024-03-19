import { useState, useEffect, useContext } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { VectorStorageContext } from "../context/VectorStorageContext";

function sketch(p5) {
  let vectors = [];
  let halfWidth = () => Math.floor(p5.width / 2);
  let halfHeight = () => Math.floor(p5.height / 2);

  p5.setup = () => {
    p5.createCanvas(500, 500);
    p5.noFill();
  };

  p5.updateWithProps = (p) => {
    p5.resizeCanvas(...p.size);
    if (p.vectors) vectors = p.vectors;
  };

  p5.draw = () => {
    p5.strokeWeight(1);
    p5.background(120);

    p5.stroke(0, 0, 255);
    p5.line(halfWidth(), 0, halfWidth(), p5.height);

    p5.stroke(255, 0, 0);
    p5.line(0, halfHeight(), p5.width, halfHeight());

    p5.translate(halfWidth(), halfHeight());

    for (let [name, v] of Object.entries(vectors)) {
      p5.strokeWeight(3)
      p5.stroke(v.x, v.y, (v.x * v.y) % 255)
      p5.line(0, 0, v.x, v.y);

      p5.stroke(0)
      p5.strokeWeight(0.5)
      p5.text(name, v.x, v.y)
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
