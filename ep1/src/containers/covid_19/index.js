import React, { useState, useEffect } from 'react';
import CardCount from './components/CardCount'
import moment from 'moment'

const Covid19 = () => {
  const [count, setCount] = useState({})
  const [timeline, setTimeline] = useState({})
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [minDate, setMinDate] = useState(null)
  const [maxDate, setMaxDate] = useState(null)

  useEffect(() => {
    async function getCount() {
      try {
        const response = await fetch('https://covid19.th-stat.com/api/open/today')
        const json = await response.json()
        setCount(json)
      } catch (error) {
        console.error(error)
      }
    }

    async function getTimeline() {
      try {
        const response = await fetch('https://covid19.th-stat.com/api/open/timeline')
        const json = await response.json()
        setTimeline(json)
        if (json?.Data) {
          const { Data } = json
          setMinDate(moment(new Date(Data[0].Date)).format('YYYY-MM-DD'))
          setMaxDate(moment(new Date(Data[Data.length - 1].Date)).format('YYYY-MM-DD'))
        }
      } catch (error) {
        console.error(error)
      }
    }

    // getCount();
    // getTimeline();
  }, [])

  const onChangeDate = event => {
    const date = event.target.value
    setDate(date)

    if (!timeline || !timeline.Data || !timeline.Data.length) return

    let newDate = new Date(date)
    // const year = newDate.getFullYear()
    // let month = newDate.getMonth() + 1 // ("0" + a.getMonth() + 1).slice(-2)
    // if (month <= 9) month = `0${month}`
    // let day = newDate.getDate() // ("0" + a.getDate()).slice(-2)
    // if (day <= 9) day = `0${day}`
    // const dateForFilter = `${month}/${day}/${year}`
    const dateForFilter = moment(newDate).format('MM/DD/YYYY')
    const countInday = timeline.Data.find(item => item.Date === dateForFilter)

    if (countInday) {
      setCount(countInday)
    }
  }

  return (
    <div className='covid-19'>
      <div className='covid-count'>
        <div className='box-input-date'>
          <label htmlFor='date'>วันที่: </label>
          <input
            type='date'
            name='date'
            id='date'
            min={minDate}
            max={maxDate}
            value={date}
            onChange={onChangeDate}
          />
        </div>
        <CardCount
          className='count-infect'
          title='ติดเชื้อสะสม'
          confirmed={count.Confirmed}
          newConfirmed={count.NewConfirmed}
        />
        <div className='count-row-bottom'>
          <CardCount
            className='count-recovered'
            title='หายแล้ว'
            confirmed={count.Recovered}
            newConfirmed={count.NewRecovered}
          />
          <CardCount
            className='count-hospitalized'
            title='รักษาอยู่ใน รพ.'
            confirmed={count.Hospitalized}
            newConfirmed={count.NewHospitalized}
          />
          <CardCount
            className='count-deaths'
            title='เสียชีวิต'
            confirmed={count.Deaths}
            newConfirmed={count.NewDeaths}
          />
        </div>
      </div>
    </div>
  )
}

export default Covid19
