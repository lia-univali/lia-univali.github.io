import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Integrante from '../components/integrante'

export default class Team extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {integrantes : []}
  }

  async componentDidMount() {  
    fetch('http://localhost:3000/api/team').then(async (response)=>{
      this.setState({integrantes: await response.json()})
    })
    
  }

  render() {
    const integrantes = this.state.integrantes
    return(
      <div>  
        {(integrantes && integrantes.length > 0) ? 
              <div className='row'>{integrantes.map(pessoa => <Integrante pessoa={pessoa}/>)}</div> : <div><span className="loading"></span><p>nada aqui</p></div>}
        
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
