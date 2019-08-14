import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default class Areas extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {areas : []}
  }

  async componentDidMount() {  
    fetch('http://localhost:3000/api/areas').then(async (response)=>{
      this.setState({areas: await response.json()})
    })
    
  }

  render() {
    const areas = this.state.areas
    return(
      <div>
      
          
        {(areas && areas.length > 0) ? 
              <ul class="list-group col-md-8 offset-md-2" >{areas.map(area => <li className='list-group-item d-flex justify-content-between align-items-center'> alas {area.titulo}</li>)}</ul> : <div><span className="loading"></span><p>nada aqui</p></div>}
        
        <style jsx>{`
          @keyframes Loading { 
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
          }
          .date .loading {
            max-width: 100%;
            height: 24px;
            border-radius: 4px;
            display: inline-block;
            background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
            background-size: 200% 200%;
            animation: Loading 2s ease infinite;
          }
        `}</style>
      </div>
    )
  }
}
