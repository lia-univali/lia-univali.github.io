import React from 'react'
import Link from 'next/link'

const Projeto = ({project}) => (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
      <div className="projeto">
        <img src={project.logo} className="img-fluid"/>
        <h3>{project.projeto}</h3>
        <p>{project.desc}</p>
        <a className="btn hvr-icon-forward myproject" href={project.btnlink} target="_blank">Saiba Mais</a>
      </div>
      <style jsx>{`
      .img-fluid{
        max-width:100%;
      }
      .icon{
        width:20px;
      }
      .btn{
        background-color: #fff;
        color: ${project.cor};
      }
      .btn:hover{
        background-color: ${project.cor};
        color: #fff;
      }
      .projeto{
        padding: 20rem;
      }
    `}</style>
  </div>
)

export default Projeto