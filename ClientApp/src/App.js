import { useEffect } from "react"
import { useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalContacto from "./componentes/ModalContacto"
import TablaContacto from "./componentes/TablaContacto"
import ModalError from "./componentes/ModalError"
import ModalErrorRegistro from "./componentes/ModalErrorRegistro"
import ModalEliminar from "./componentes/ModalEliminar"

const App = () => {

    const [contactos, setContantos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null)
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorModalRegistroOpen, setErrorModalRegistroOpen] = useState(false);
    const [errorModalEliminarOpen, setErrorModalEliminarOpen] = useState(false);
    const [contactoAEliminar, setContactoAEliminar] = useState([]);

    const mostrarModalConfirmacion = (contacto) => {
        setContactoAEliminar(contacto);
        setErrorModalEliminarOpen(true);
    };

    const mostrarContactos = async () => {
        const response = await fetch("api/contacto/Lista");

        if (response.ok) {
            const data = await response.json();
            setContantos(data)
        } else {
            setErrorModalOpen(true);
            console.log("Error en la lista")

        }
    }

    useEffect(() => {
        mostrarContactos();
    }, []);

    const guardarContacto = async (contacto) => {
        try {
            const response = await fetch("api/contacto/Guardar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(contacto)

            })

            if (response.ok) {
                setMostrarModal(!mostrarModal);
                mostrarContactos();
                console.log('Contacto guardado:', contacto);
            }else {
                console.log('Error, no se pudo registrar', response.status);
                setErrorModalRegistroOpen(true); // Mostrar el modal si no es válido
            }
        } catch (error) {
            console.error("Error en la solicitud de registrar:", error);
        }
    }

    const editarContacto = async (contacto) => {
        const response = await fetch("api/contacto/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarContactos();
            console.log('Contacto editado:', contacto);
        }
    }

    const eliminarContacto = async (id) => {
        console.log("Eliminando contacto con ID:", id);
        try {
            const response = await fetch("api/contacto/Eliminar/" + id, {
                method: 'DELETE',
            });

            if (response.ok) {
                mostrarContactos();
            } else {
                console.error("Error al eliminar el contacto:", response.status);
            }
        } catch (error) {
            console.error("Error en la solicitud de eliminación:", error);
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Nuevo Contacto</Button>
                            <hr></hr>
                            <TablaContacto
                                data={contactos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarContacto={eliminarContacto}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalContacto
                mostrarModal={mostrarModal}
                setMostralModal={setMostrarModal}
                guardarContacto={guardarContacto}
                editar={editar}
                setEditar={setEditar}
                editarContacto={editarContacto}
            />

            <ModalError isOpen={errorModalOpen} onClose={() => setErrorModalOpen(false)} />
            <ModalErrorRegistro isOpen={errorModalRegistroOpen} onClose={() => setErrorModalRegistroOpen(false)} />
            <ModalEliminar
                isOpen={errorModalEliminarOpen}
                eliminarContacto={mostrarModalConfirmacion}
                onClose={() => {
                    setErrorModalEliminarOpen(false);
                    setContactoAEliminar(null);
                }}
                
            />

        </Container>
        )
}

export default App;