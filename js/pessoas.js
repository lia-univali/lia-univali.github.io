var integrantes = [
    {
        "nome": "Alisson",
        "img": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
        "bio":"Formado em Ciência da Computação (Univali), com ênfase em educação, sistemas de computação e jogos. Gosto de programar e criar interfaces, no meu tempo livre costumo de assistir filmes, jogar videogames (principalmente os cooperativos) e ler histórias em quadrinhos. Bolsista CAPES PROSUC (Mestrando) no Laboratório de Inteligência Aplicada da Univali.",
        "links":{
            "site":"https://alissonsteffens.com/",
            "git": "https://github.com/AlissonSteffens"
        }
    },
    {
        "nome": "Rudson",
        "img": "https://d15mvavv27jnvy.cloudfront.net/gqngx/5ceabd865e47dc2dda4296f73181fef0.jpg",
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