import React from 'react'

export default function Select({ children, ...props }: any) {
    return (
        <select id="field-4" name="field-3" data-name="Field 3" className="home-banner-form-select w-select" {...props}
         style={{ width: '100%', 
            border: "1px solid #c3d5de",
            backgroundColor:'#FFF'

         }}>
            {children}
        </select>
    )
}
