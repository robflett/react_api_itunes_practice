import React from 'react'

const EntryDetail = (props) => {
  

    return (
      <div id='music-details' >
        <h3>
          {props.entry.title.label}
        </h3>
      </div>
    
  )
}
        
       
export default EntryDetail
