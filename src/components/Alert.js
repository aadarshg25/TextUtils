import React from 'react'

function Alert(props) {
    const captilize = (word)=>{
        const strLower = word.toLowerCase();
        return strLower.charAt(0).toUpperCase() + strLower.slice(1); 
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captilize(props.alert.type)}</strong> {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert
