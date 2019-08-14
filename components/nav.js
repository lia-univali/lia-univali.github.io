import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top ">
    <div className="container">
      <a className="navbar-brand hvr-grow" href="#"><img src="/static/img/liablack.svg" height="32px"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse navbar-right" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link goto" href="#" data-to="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link goto" href="#" data-to="#projetos">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link goto" href="#" data-to="#integrantes">Integrantes</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link goto" href="#" data-to="#artigos">Linhas de Pesquisa</a>
          </li>
        </ul>
      </div>
      <a href="https://www.univali.br/Paginas/default.aspx" target="_blank">
        <img className="hvr-shrink" src="/static/img/univali.svg" height="50px"/>
      </a>
    </div>
  </nav>
)

export default Nav
