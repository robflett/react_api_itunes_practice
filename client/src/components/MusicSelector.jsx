import React from 'react'
import EntryDetail from './EntryDetail'


 const MusicSelector = (props) => {
    // console.log(this.props.entries)
   
    const music = props.entries.map((music, index) => {
      return <EntryDetail entry={entry} key={index}/>
    })


    return (
      <div id="entries">
        {music}
      </div>
    )
  }


export default MusicSelector
