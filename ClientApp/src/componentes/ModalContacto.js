import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, ModalFooter, Input, Button } from "reactstrap"
import ModalError from "./ModalError";

const modeloContacto = {
    idContacto: 0,
    nombre: "",
    correo: "",
    telefono: "",

}

const ModalContacto = ({ mostrarModal, setMostralModal, guardarContacto, editar, setEditar, editarContacto }) => {

    const [contacto, setContacto] = useState(modeloContacto);
    const [errorModalOpen, setErrorModalOpen, errorMessage] = useState(false);
    const [error, setError] = useState('');

    const actualizarDato = (e) => {

        console.log(e.target.name + ":" + e.target.value)
        setContacto(
            {
                ...contacto,
                [e.target.name]: e.target.value
            }
        );

        setTimeout(() => {
            setError({
                ...error,
                [e.target.name]: '', // Limpiar el mensaje de error cuando se actualiza el campo
            });
        }, 10);
    }

    const validarCampos = () => {
        try {
            if (!contacto.nombre || !contacto.correo || !contacto.telefono) {
                setErrorModalOpen(true); // Mostrar el modal si no es válido
                console.log('Todos los campos son obligatorios.');
                return false;

                //setErrorMessage('Hay campos obligatorios sin completar.');
            }
            return true;
        } catch {
            console.log("Error los campos")
        }
    };

    const enviarDatos = () => {
            if (validarCampos()) {
                if (contacto.idContacto == 0) {
                    guardarContacto(contacto);
                } else {
                    editarContacto(contacto);
                }
            }
            setContacto(modeloContacto);
    } 
            
    
       

    useEffect(() => {
        if (editar != null) {
            setContacto(editar);
        } else {
            setContacto(modeloContacto);
        }
    }, [editar]);

    const cerrarModal = () => {
        setMostralModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {contacto.idContacto == 0 ? "Nuevo contacto" : "Editar contacto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label><strong>Nombre</strong></Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={contacto.nombre}/>
                    </FormGroup>
                    <FormGroup>
                        <Label><strong>Correo</strong></Label>
                        <Input name="correo" onChange={(e) => actualizarDato(e)} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label><strong>Telefono</strong></Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={contacto.telefono}  />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
            <ModalError isOpen={errorModalOpen} message={errorMessage} onClose={() => setErrorModalOpen(false)} />
        </Modal>
        )
}

export default ModalContacto;