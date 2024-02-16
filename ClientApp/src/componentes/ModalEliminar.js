import { Modal, ModalBody, ModalFooter, Button } from "reactstrap"


const ModalEliminar = ({ isOpen, eliminarContacto, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalBody>
                <h4 style={{ textAlign: 'center' }}>Se eliminará este contacto</h4>
            </ModalBody>
            <ModalFooter>
                <Button onClick={eliminarContacto} color="danger">Aceptar</Button>
                <Button onClick={onClose} color="primary">Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
};



export default ModalEliminar;
