import React from "react"
import './Input.css'

export default function Input(props){
    return (
        <div>
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
            <input 
            type= {props.type} 
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
            aria-label={props.arialabel}
            />
        </div>
    )
}