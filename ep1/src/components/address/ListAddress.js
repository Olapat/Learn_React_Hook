import React, { useState } from 'react'
import ListAddressItem from './ListAddressItem'
import Input from '../fields/Input'

const ListAddress = props => {
  const [listLength, setListLength] = useState(1)
  const [list, setList] = useState(() => props.initialList || [1])

  const onAddList = () => {
    setListLength(prev => prev + 1)
    setList(prev => [...prev, {}])
  }

  const onDelList = () => {
    if (listLength > 1) {
      setListLength(prev => prev - 1)
      const newList = list
      newList.pop()
      setList([...newList])
    }
  }

  return (
    <div>
      <div>
        <button onClick={onDelList} disabled={listLength <= 1}>-</button>
        <input className='list-length' type='number' readOnly value={listLength} />
        <button onClick={onAddList}>+</button>
      </div>
      <ul>
        {list.map((item, index) =>
          <ListAddressItem key={index} data={item} />
        )}
      </ul>
    </div>
  )
}

export default ListAddress
