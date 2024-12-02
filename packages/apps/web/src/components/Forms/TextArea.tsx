import React from 'react'

export default function TextArea({ ...props }) {
    return (
        <textarea
            id="field"
            name="field"
            maxLength={5000}
            data-name="Field"
            placeholder="Enter Your Message..."
            className="page-contact-form-text-area w-input" spellCheck="false"
            {...props}
        ></textarea>
    )
}
