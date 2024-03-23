import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState, useEffect, useContext } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { VectorStorageContext } from "../../context/VectorStorageContext";
import sketch3D from './3DSketch';
import sketch2D from './2DSketch';

const VectorsGraph = ({ }) => {
  const { state: vectors } = useContext(VectorStorageContext);
  const [graphMode, setGraphMode] = useState("2D")
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
      <ButtonGroup className="position-absolute bottom-0 end-0 mb-3 me-3">
        <ToggleButton
          type="radio"
          variant="outline-primary"
          value="2D"
          checked={graphMode === "2D"}
          onClick={(e) => setGraphMode("2D")}
        >
          2D
        </ToggleButton>
        <ToggleButton
          type="radio"
          variant="outline-danger"
          value="3D"
          checked={graphMode === "3D"}
          onClick={(e) => setGraphMode("3D")}
        >
          3D
        </ToggleButton>
      </ButtonGroup>
      <ReactP5Wrapper
        sketch={graphMode === "2D" ? sketch2D : sketch3D}
        size={[width, height]}
        vectors={vectors}
      />
    </div>
  );
};

export default VectorsGraph;
