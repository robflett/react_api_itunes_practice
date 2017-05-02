import React from 'react'
import EntryDetail from './EntryDetail'


 const MusicSelector = (props) => {
    console.log(props.entries)
   
    const music = props.entries.map((entry, index) => {
      return <EntryDetail entry={entry} key={index}/>
    })


    return (
      <div id="entries">
        {music}
      </div>
    )
  }


export default MusicSelector
