import React from 'react'

import Nav from '../components/nav'
import Hero from '../components/hero'
import Head from '../components/head'
import Projetos from '../components/lista-projetos'
import Integrantes from '../components/lista-integrantes'
import Areas from '../components/lista-areas'
import Projeto from '../components/projeto'

const Home = () => (
  <div>
    <Head>
    </Head>
    <Nav />

    <Hero />
    <section id="sobre">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-right">
            <h2>LABORATÓRIO DE INTELIGÊNCIA APLICADA.</h2>
          </div>
          <div className="col-md-6 text-left">
            <p>Fundado no ano de 2000, o LIA realiza atividades de pesquisa, aplicando artefatos computacionais em diversas áreas do conhecimento. Aqui os acadêmicos podem contar com orientação de professores e com monitores de disciplinas (Algoritmos, Estruturas de dados e Programação).</p>

          </div>
        </div>
      </div>
    </section> 
    
    <section id="projetos">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <span className="">Principais Projetos do Laboratório.</span>  
        <Projetos />
      </div>
    </section>
    <section id="integrantes">
      <div className="container">
        <h2 className="section-title">Integrantes</h2>
        <Integrantes/>
      </div>
    </section>
    <section id="artigos">
      <div className="container">
        <h2 className="section-title">Linhas de Pesquisa</h2>
        <Areas/>
        
      </div>
    </section>
    <footer className="" id="contato">
        <p><b className="code">💎</b> with <b className="heart">❤</b> by <a href="https://alissonsteffens.com/">Alisson</a></p>
    </footer>


    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="static/js/particles.js"></script>

    <style jsx>{`
      .section-title{
        font-size: 3rem;
      }
    `}</style>
  </div>
)

export default Home
