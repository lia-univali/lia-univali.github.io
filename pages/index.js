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
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-right">
            <h2>LABORATÓRIO DE INTELIGÊNCIA APLICADA.</h2>
          </div>
          <div class="col-md-6 text-left">
            <p>Fundado no ano de 2000, o LIA realiza atividades de pesquisa, aplicando artefatos computacionais em diversas áreas do conhecimento. Aqui os acadêmicos podem contar com orientação de professores e com monitores de disciplinas (Algoritmos, Estruturas de dados e Programação).</p>

          </div>
        </div>
      </div>
    </section> 
    
    <section id="projetos">
      <div class="container">
        <h2 class="">Projetos</h2>
        <span class="">Principais Projetos do Laboratório.</span>  
        <Projetos />
      </div>
    </section>
    <section id="integrantes">
      <div class="container">
        <h2 class="">Integrantes</h2>
        <Integrantes/>
      </div>
    </section>
    <section id="artigos">
      <div class="container">
        <h2 class="">Linhas de Pesquisa</h2>
        <Areas/>
        
      </div>
    </section>
    <footer class="" id="contato">
        <p><b class="code">💎</b> with <b className="heart">❤</b> by <a href="https://alissonsteffens.com/">Alisson</a></p>
    </footer>


    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="static/js/particles.js"></script>
  </div>
)

export default Home
