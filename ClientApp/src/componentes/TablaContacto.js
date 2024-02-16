import { Table, Button } from "reactstrap";
import React, { useState } from 'react';
import ModalEliminar from "./ModalEliminar";


const TablaContacto = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarContacto }) => {

    const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
    const [contactoAEliminar, setContactoAEliminar] = useState([]);

    const mostrarModalConfirmacion = (contacto) => {
        setContactoAEliminar(contacto);
        setMostrarModalEliminar(true);
    };

    const handleConfirmarEliminar = () => {
        
        eliminarContacto(contactoAEliminar);
        
        setMostrarModalEliminar(false);
        setContactoAEliminar(null);
    };

    const handleCancelarEliminar = () => {
        setMostrarModalEliminar(false);
        setContactoAEliminar(null);
    };


    const enviarDatos = (contacto) => {
        setEditar(contacto);
        setMostrarModal(!mostrarModal);
    };

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th></th>
                </tr>
            </thead>
            
            <tbody>
                {
                    (data.leng < 1) ? (
                        <tr>
                            <td colSpan="4" >Sin registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.idContacto}>
                                    <td>{item.nombre}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.telefono}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={() => enviarDatos(item)}
                                        >Editar</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => mostrarModalConfirmacion(item.idContacto) }
                                        >Eliminar</Button>
                                    </td>

                                </tr>
                                ))
                            )
                }

            </tbody>

            <ModalEliminar
                isOpen={mostrarModalEliminar}
                eliminarContacto={handleConfirmarEliminar}
                onClose={handleCancelarEliminar}
            />
        </Table>

        )
}

export default TablaContacto;