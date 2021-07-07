import React from 'react'

const CardCount = props => {
  const { className, confirmed, newConfirmed, title } = props
  return (
    <div className={`card-count ${className}`}>
      <p className='title'>{title}</p>
      {confirmed
        ? <p className='count'>{confirmed}</p>
        : <p className='count-no-data'>ไม่พบข้อมูล</p>}
      <p className='new-count'>{`(เพิ่มขึ้น ${newConfirmed || 'ไม่พบข้อมูล'})`}</p>
    </div>
  )
}

export default CardCount








// const CardCount = props => {
//   const { className, confirmed, newConfirmed, title } = props
//   return (
//     <div className={`card-count ${className}`}>
//       <p className='title'>{title}</p>
//       {confirmed
//         ? <p className='count'>{confirmed}</p>
//         : <p className='count-no-data'>ไม่พบข้อมูล</p>}
//       <p className='new-count'>{`(เพิ่มขึ้น ${newConfirmed || 'ไม่พบข้อมูล'})`}</p>
//     </div>
//   )
// }

// class CardCount extends Component {
//   render() {
//     const { className, confirmed, newConfirmed, title } = this.props
//     return (
//       <div className={`card-count ${className}`}>
//         <p className='title'>{title}</p>
//         {confirmed
//           ? <p className='count'>{confirmed}</p>
//           : <p className='count-no-data'>ไม่พบข้อมูล</p>}
//         <p className='new-count'>{`(เพิ่มขึ้น ${newConfirmed || 'ไม่พบข้อมูล'})`}</p>
//       </div>
//     )
//   }
// }