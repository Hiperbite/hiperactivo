import React, { useState } from 'react'
import { PropertiesRegisterForm } from './PropertiesRegisterForm'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PropertiesRegisterModal({ show, setShow }: any) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registar nova propriedade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PropertiesRegisterForm />

                </Modal.Body>

            </Modal>
        </div>

    )
}
