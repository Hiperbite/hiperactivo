import React from 'react'

export default function Buttom({ ...props }: any) {
    return (
        <input
            data-wait="Please wait..."
            className="page-contact-form-button w-button"
            value="Send message"
            {...props}
        ></input>
    )
}
