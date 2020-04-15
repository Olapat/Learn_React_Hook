import React, { useEffect, useReducer } from 'react'

const ListView = props => {
  const { data } = props

  console.count('listView rerender')

  return (
    <ul className='listview'>
      {data && data.map((item, index) =>
        <li key={index}>
          <span>
            <label>ชื่อ:</label>
            <p>{item.fname}</p>
          </span>
          <span>
            <label>นามสกล:</label>
            <p>{item.lname}</p>
          </span>
          <span>
            <label>เบอร์โทร:</label>
            <p>{item.mobile}</p>
          </span>
          <span>
            <label>แผนก:</label>
            <p>{item.depertment}</p>
          </span>
        </li>
      )}
    </ul>
  )
}

export default ListView
