import React, { useState } from 'react'

const Form = props => {
    const { onAdd } = props
    const [values, setValues] = useState({})

    const onChangeValue = event => {
        const name = event.target.name
        const value = event.target.value
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmitForm = event => {
        event.preventDefault()
        onAdd(values)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                name='fname'
                value={values.fname || ''}
                onChange={onChangeValue}
            />
            <input
                name='lname'
                value={values.lname || ''}
                onChange={onChangeValue}
            />
            <button type='submit'>เพิ่ม</button>
        </form>
    )
}

export default Form
