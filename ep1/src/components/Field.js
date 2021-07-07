import React from 'react'

const Field = props => {
  const { label, children, error } = props
  return (
    <span className={`field ${!!error ? 'on-error' : ''}`}>
      <label>{label}</label>
      {children}
      {error && <p className='error-field'>{error}</p>}
    </span>
  )
}

export default Field
