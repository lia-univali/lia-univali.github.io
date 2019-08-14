import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Projeto from '../components/projeto'

export default class ProjectLists extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {projetos : []}
  }

  async componentDidMount() {  
    fetch('http://localhost:3000/api/projects').then(async (response)=>{
      this.setState({projetos: await response.json()})
    })
    
  }

  render() {
    const projetos = this.state.projetos
    return(
      <div>
      
        <div id='lista-projetos'>
          
        {(projetos && projetos.length > 0) ? 
              <div className='row'>{projetos.map(projeto => <Projeto project={projeto}/>)}</div> : <div><span className="loading"></span><p>nada aqui</p></div>}
        
        </div>
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
