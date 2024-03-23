import { useState, useEffect, useContext } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { VectorStorageContext } from "../../context/VectorStorageContext";
import sketch3D from './3DSketch';
import Button from 'react-bootstrap/Button';

const VectorsGraph = ({ }) => {
  const { state: vectors } = useContext(VectorStorageContext);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize - 10);
      setHeight(event[0].contentBoxSize[0].blockSize - 10);
    });

    resizeObserver.observe(document.getElementById("div1"));
  });

  return (
    <div id="div1" className="w-100 h-100">
      <ReactP5Wrapper
        sketch={sketch3D}
        size={[width, height]}
        vectors={vectors}
      />
    </div>
  );
};

export default VectorsGraph;
