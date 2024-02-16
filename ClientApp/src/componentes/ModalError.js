//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';

import { Modal, ModalBody, ModalFooter, Button } from "reactstrap"


const ModalError = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalBody>
                <h4 style={{ textAlign: 'center' }}>Todos los campos son obligatorios!</h4>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose} color="primary">Close</Button>
            </ModalFooter>
        </Modal>
    );
};

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



export default ModalError;

//function App() {
//    const [modalShow, setModalShow] = React.useState(false);

//    return (
//        <>
//            <Button variant="primary" onClick={() => setModalShow(true)}>
//                Launch vertically centered modal
//            </Button>

//            <MyVerticallyCenteredModal
//                show={modalShow}
//                onHide={() => setModalShow(false)}
//            />
//        </>
//    );
//}

//render(<App />);



//import React from 'react';
//import { Modal, Button } from "reactstrap"

//const modalErrorStyles = {
//    overlay: {
//        display: 'flex',
//        alignItems: 'center',
//        justifyContent: 'center',
//        backgroundColor: 'rgba(0, 0, 0, 0.5)',
//        zIndex: 9999, // Asegura que el modal de error esté en la parte superior
//    },
//    content: {
//        width: '200px', // Ajusta el ancho según tus necesidades
//        borderRadius: '8px',
//        padding: '20px',
//        backgroundColor: 'white',
//        textAlign: 'center',
//        display: 'flex',
//        flexDirection: 'column',
//        alignItems: 'center', // Centra el contenido verticalmente
//    },
//};

//const h2Styles = {
//    fontSize: '16px', // Ajusta el tamaño de la fuente según tus necesidades
//    fontFamily: 'Arial, sans-serif', // Cambia la fuente según tus preferencias
//    fontWeight: 'bold', // Agrega negrita al texto
//};

//const ModalError = ({ isOpen, message, onClose }) => {
//    return (
//        <Modal isOpen={isOpen} onRequestClose={onClose} style={modalErrorStyles} contentLabel="Error Modal">
//            <div>
//                <h2 style={h2Styles}>No es posible agregar este registro</h2>
//                <p>Existen campos vacios!</p>
//                <button onClick={onClose} style={{ marginTop: '10px' }}>Cerrar</button>
//            </div>
//        </Modal>
//    );
//};

//export default ModalError;