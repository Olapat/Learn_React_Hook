import React, { Component } from 'react'
import FormSearchCovid from './components/FormSearchCovid'

class SearchCovid extends Component {
  state = {
    valuesFrom: {}
  }

  onChangeValues = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState(prev => ({
      valuesFrom: {
        ...prev.valuesFrom,
        [name]: value
      }
    }))
  }

  render() {
    const { valuesFrom } = this.state
    return (
      <div className='covid-search'>
       <FormSearchCovid values={valuesFrom} onChange={this.onChangeValues} />
      </div>
    )
  }
}

// const SearchCovid = () => {
//   return (
//     <div className='covid-search'>
//       <FormSearchCovid />
//     </div>
//   )
// }

export default SearchCovid
