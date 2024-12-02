import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

import { UserCreateForm } from './UserCreateForm';
export const UserCreate = ({ show, setShow }: any) => {


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registar novo utilizador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UserCreateForm />
            </Modal.Body>
        </Modal>

    )
}
