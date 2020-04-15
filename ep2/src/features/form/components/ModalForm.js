import React, { useState, useEffect } from 'react'

const ModalForm = props => {
  const { open, setOpenModal, onSubmit } = props
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
    onSubmit(values)
  }

  const onResetForm = () => {
    setValues({})
  }

  console.count('modal rerender')

  return (
    <div className={`modal-form ${open ? 'open' : ''}`}>
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

        <input
          name='mobile'
          value={values.mobile || ''}
          onChange={onChangeValue}
        />

        <select
          name='depertment'
          value={values.depertment || ''}
          onChange={onChangeValue}
        >
          <option value=''>โปรดเลือกแผนก</option>
          <option value='แม่บ้าน'>แม่บ้าน</option>
          <option value='ยาม'>ยาม</option>
        </select>

        <div className='box-btn'>
          <button
            type='reset'
            onClick={onResetForm}
          >
            รีเซ็ต
          </button>
          <button
            type='submit'
          >
            เพิ่ม
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalForm
