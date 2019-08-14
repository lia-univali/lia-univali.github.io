import React from 'react'
import Link from 'next/link'

const Projeto = ({pessoa}) => (
    <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="pessoa">
            <div className="img-container">
                <img src={pessoa.img} className="img-fluid"/>
            </div>
            <h4>{pessoa.nome}</h4>
            <div className="links">
            
            </div>
        </div>
      <style jsx>{`
        .img-fluid{
            max-width:100%;
        }
        .pessoa{
        }
    `}</style>
  </div>
)

export default Projeto