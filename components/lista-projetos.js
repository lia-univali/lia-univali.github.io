import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Projeto from '../components/projeto'

export default class ProjectLists extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {projetos : []}
  }

  async componentDidMount() {  
    fetch('/api/projects').then(async (response)=>{
      this.setState({projetos: await response.json()})
    })
    
  }

  render() {
    const projetos = this.state.projetos
    return(
      <div>
      
        <div id='lista-projetos'>
          
        {(projetos && projetos.length > 0) ? 
            <div className='row'>
              {projetos.map(projeto => <Projeto project={projeto}/>)}
            </div> : <div className="loading-frame">
              <span className="loading"></span>
              <span className="loading"></span>
              <span className="loading"></span>
              <span className="loading"></span>
            </div>}
        
        </div>
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
            width: 20%;
            margin-right: 2%;
            height: 350px;
            min-height: 350px;
            border-radius: 20px;
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
