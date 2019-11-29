import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default class Areas extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {areas : []}
  }

  async componentDidMount() {  
    fetch('/api/areas').then(async (response)=>{
      this.setState({areas: await response.json()})
    })
    
  }

  render() {
    const areas = this.state.areas
    return(
      <div>
      
          
        {(areas && areas.length > 0) ? 
              <ul class="list-group col-md-8 offset-md-2" id="lista-artigos">
              {areas.map((area, key) => 
                <li key={key} className='list-group-item d-flex justify-content-between align-items-center'>
                  {area.titulo}
                  <a href={area.link} target="_blank">🔗</a>
                </li>
                )}
              </ul> :<div className="loading-frame">
                      <span className="loading"></span>
                      <span className="loading"></span>
                      <span className="loading"></span>
            </div>}
        
        <style jsx>{`
          @keyframes Loading { 
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
          }
          .loading-frame{
            margin-top:100px;
          }
          .loading {
            width: 100%;
            margin-bottom: 10px;
            height: 100px;
            min-height: 100px;
            border-radius: 4px;
            display: inline-block;
            background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
            background-size: 200% 200%;
            animation: Loading .4s ease infinite;
          }
        `}</style>
      </div>
    )
  }
}
