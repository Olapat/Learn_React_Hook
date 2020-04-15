import React, { useState, useReducer } from 'react'
import ModalForm from '../components/ModalForm'
import ListView from '../components/ListView'
import employesReducer, { initialStateEmployee } from '../reducers/employes'

const Form = () => {
  const [openModal, setOpenModal]= useState(false)
  const [state, dispatch] = useReducer(employesReducer, initialStateEmployee);

  const onOpenModalApp = () => {
    setOpenModal(true)
  }

  const onSubmit = values => {
    dispatch({
      type: 'create',
      payload: values
    })
    setOpenModal(false)
  }

  return (
    <div className='employee'>
      <div className='row'>
        <button onClick={onOpenModalApp}>เพิ่มพนักงาน</button>
      </div>
      <ModalForm open={openModal} setOpenModal={setOpenModal} onSubmit={onSubmit} />

      <ListView data={state} />
    </div>
  )
}

export default Form
