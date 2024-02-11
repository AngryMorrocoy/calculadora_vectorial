import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const YesNoModal = ({ show, onHide, title, onYes, onNo }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={onNo}>
          No
        </Button>
        <Button variant="success" onClick={onYes}>
          Si
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default YesNoModal;
