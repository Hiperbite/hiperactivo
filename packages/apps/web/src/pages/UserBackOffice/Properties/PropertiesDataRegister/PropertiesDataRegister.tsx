import React from 'react'
import PropertiesRegisterModal from './PropertiesDataRegisterModal'

export const PropertiesDataRegister = ({ data, show, setShow }: any) => {

    return (
        <PropertiesRegisterModal data={data} show={show} setShow={setShow} />
    )
}
