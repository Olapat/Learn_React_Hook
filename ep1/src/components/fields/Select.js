import React from 'react'

const Select = props => (
  <select {...deleteProps(props)}>
    {props.options && props.options.map((item, index) =>
      <option key={index}>{item}</option>
    )}
  </select>
)

function deleteProps(props) {
  const newProps = Object.assign({}, props)
  delete newProps.options
  return newProps
}

export default Select
