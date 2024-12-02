import React from 'react'
import PropertiesRegisterModal from './PropertiesRegisterModal'

export const PropertiesRegister = ({ property, setProperty }: any) => {


    const handleShowModal = (y: boolean) => setProperty(null)
    return (
        <PropertiesRegisterModal show={property !== null} setShow={handleShowModal} />
    )
}
