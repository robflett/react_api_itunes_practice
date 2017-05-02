import React from 'react'
import EntryDetail from './EntryDetail'


 const MusicSelector = (props) => {
    console.log(props.entries)
   
    const music = props.entries.map(function(entry, index) {
      return (
        <li key={index}>
          <EntryDetail entry={entry} key={index}/>
        </li>
        )
    })


    return (
      <div className="entries">
        { music }
      </div>
    )
  }


export default MusicSelector
