import React from 'react'

export default function GenerateResult(props) {
    return (
        <div className="p-2 m-3">
              <h2>New Password :</h2>
              {props.NewPassword? <p className="bg-info px-2 py-4 m-3 fs-4">{props.NewPassword}</p> 
              : null } 
        </div>
    )
}
