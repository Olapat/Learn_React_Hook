import React from 'react'
import Field from '../../../components/Field'

const FormSearchCovid = props => {
  const { values, onChange } = props
  return (
    <form className='form-serch-covid'>
      <Field label='จังหวัด' error={'dasdsad'}>
        <select
          name='provice'
          value={values.provice || ''}
          onChange={onChange}
        >
         <option value='' disabled>เลือกจังหวัด</option> 
        </select>
      </Field>
      <Field label='วันที่'>
        <span>
          <input
            type='date'
            name='start'
            value={values.start || ''}
            max={values.end || null}
            onChange={onChange}
          />
          <input
            type='date'
            name='end'
            value={values.end || ''}
            min={values.start || null}
            onChange={onChange}
          />
        </span>
      </Field>
      <Field label='จังหวัด'>
        <select
          name='provice'
          value={values.provice || ''}
          onChange={onChange}
        >
         <option value='' disabled>เลือกจังหวัด</option> 
        </select>
      </Field>
      <div className='box-btn'>
      <button type='submit'>
        ค้นหา
      </button>
      </div>
    </form>
  )
}

export default FormSearchCovid
