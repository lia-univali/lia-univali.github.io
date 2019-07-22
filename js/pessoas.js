var integrantes = [
    {
        "nome": "Alisson",
        "img": "https://media.licdn.com/dms/image/C5603AQFUYnpBaDP78w/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=oFKmtLQwZF0QAvAqVWbzQcFnGlEhnaCQIyCg6d1R2o0",
        "bio":"Formado em Ciência da Computação (Univali), com ênfase em educação, sistemas de computação e jogos. Gosto de programar e criar interfaces, no meu tempo livre costumo de assistir filmes, jogar videogames (principalmente os cooperativos) e ler histórias em quadrinhos. Bolsista CAPES PROSUC (Mestrando) no Laboratório de Inteligência Aplicada da Univali.",
        "links":{
            "site":"https://alissonsteffens.com/",
            "git": "https://github.com/AlissonSteffens"
        }
    },
    {
        "nome": "Alex",
        "img": "https://media.licdn.com/dms/image/C4E03AQFnLBdQgKMz3w/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=XiauclvFz9rqNHkucJUDarKc355BNhcQ__X_9DsEz-E",
        "bio":"Formado em Ciência da Computação (Univali -2015) e possui Mestrado em Computação Aplicada (Univali-2017). Atuando principalmente em Teoria da Computação, Redes Complexas, Heurísticas e Metaheurísticas. Atualmente sou docente na Univali, desenvolvedor na Treetechs e Betricks. Gosto de esportes, filmes, músicas e estudar assuntos sobre a vida e aquele um kilo e meio de massa cinzenta, que chama de cérebro. <b> Resolve </b>.",
        "links":{
            "git": "https://github.com/alexrese",
            "mail": "alexrese@univali.br"
        }
    },
    {
        "nome": "Rudson",
        "img": "https://media.licdn.com/dms/image/C4E03AQER6pVTLXQ_aQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=cl30wlzd4PrlifIjkmqBL-16OQMPSzv9hYzq8lTFjuA",
        "bio":"Além de desenvolvedor web também é acadêmico de Ciência da Computação, pesquisador no Laboratório de Inteligência Aplicada da Univali e entusiasta de teoria dos grafos e computação paralela e distribuída. Desafios são bem vindos, não mede esforços para aprender e conhecer novas tecnologias. Já superou a pestana no violão.",
        "links":{
            "site":"http://rudson.me/ndes",
            "git": "https://github.com/rudsonm",
            "mail": "rudsonfsmendes@gmail.com"
        }
    }
]
$(document).ready(()=>{
    integrantes.forEach(element => {
        let div = $('#modelo-pessoa').html()
        div = div.replace('{nome}',element.nome)
        div = div.replace('{foto}',element.img)
        let links = ""
        
        if(element.links){    
            if(element.links.site){
                links += "<a href='"+element.links.site+"' title='website' target='_blank'><i class='fas fa-globe'></i></a>"
            }
            if(element.links.git){
                links += "<a href='"+element.links.git+"' title='github' target='_blank'><i class='fab fa-github'></i></a>"
            }
            if(element.links.mail){
                links += "<a href='mailto:"+element.links.mail+"' title='email'><i class='fas fa-envelope'></i></a>"
            }
        }
        links += "<a type='button' data-toggle='modal' data-target='.bd-example-modal-sm' data-nome='"+element.nome+"' data-bio='"+element.bio+"' title='bio'><i class='fas fa-align-left'></i></a>"
        div = div.replace('{links}',links)
        
        
        $('#lista-integrantes').append(div);
    });
    $('.bd-example-modal-sm').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('bio') // Extract info from data-* attributes
    var nome = button.data('nome') // Extract info from data-* attributes
    var modal = $(this)
    modal.find('.modal-title').html(nome)
    modal.find('.bio-content').html(recipient)
    })
})