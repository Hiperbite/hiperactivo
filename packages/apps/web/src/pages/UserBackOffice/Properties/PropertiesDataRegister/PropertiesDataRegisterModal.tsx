import Modal from 'react-bootstrap/Modal';
import { PropertiesDataRegisterForm } from './PropertiesDataRegisterForm';

export default function PropertiesDataRegisterModal({ show, setShow, data }: any) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes da propriedade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PropertiesDataRegisterForm propertyData={data} />

                </Modal.Body>

            </Modal>
        </div>

    )
}
