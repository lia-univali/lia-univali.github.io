import React from 'react'
import Link from 'next/link'

const Hero = () => (
    <div>
      <div id="particles-js">
        <canvas className="particles-js-canvas-el partic" width="937" height="769"></canvas>
      </div>
      <section className="jumbotron" id="header">
        <div className="container">
          <h1 className="display-3"><img src="/static/img/lialines.svg" className="img-fluid"/></h1>
          <p className="hero-subtitle">Laboratório de Inteligência Aplicada</p>
        </div>
      </section>
      <style jsx>{`
      .partic{
        width: 100%;
        height: 100%;
      }
    `}</style>
    </div>
)

export default Hero
