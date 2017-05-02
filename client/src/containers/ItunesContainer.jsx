import React from 'react'
import MusicSelector from '../components/MusicSelector'


class ItunesContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      entries: [],
    }
  }


  componentDidMount () {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      if (request.status === 200) {
        // console.log(request.responseText)
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({entries: data})
      }
    }
    request.send()
  }

  render () {
    return (
      <div>
        <h2>iTunes Music</h2>
        <MusicSelector entries={ this.state.entries }  />
      </div>
    )
  }
}

export default ItunesContainer
