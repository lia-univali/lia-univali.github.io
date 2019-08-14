import React from 'react'
import Link from 'next/link'

const Projeto = ({project}) => (
    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
      <div className="projeto">
        <img src={project.logo} className="img-fluid"/>
        <h3>{project.projeto}</h3>
        <p>{project.desc}</p>
        <a className="btn hvr-icon-forward myproject" href={project.btnlink} target="_blank">Saiba Mais <i className="fas fa-arrow-right hvr-icon"></i></a>
      </div>
      <style jsx>{`
      .img-fluid{
        max-width:100%;
      }
      a{
        color: ${project.cor};
      }
    `}</style>
  </div>
)

export default Projeto