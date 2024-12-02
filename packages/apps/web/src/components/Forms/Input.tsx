import React from 'react'

export default function Input({ ...props }: any) {
    return (
        <input
            className="page-contact-form-text-field w-input"
            maxLength={256}
            data-name="Name"
            placeholder="Enter Your Full Name *"
            type="text"
            id="name"
            {...props}
        >
        </input>
    )
}

