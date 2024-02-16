import { Modal, ModalBody, ModalFooter, Button } from "reactstrap"


const ModalErrorRegistro = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalBody>
                <h4 style={{ textAlign: 'center' }}>Ya existe este contacto!</h4>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose} color="primary">Close</Button>
            </ModalFooter>
        </Modal>
    );
};



export default ModalErrorRegistro;
