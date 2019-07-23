var projetos = [
    {
        "projeto": "e-c.a.s.s.i.e.",
        "desc":"Ferramenta para análise e mapeamento de regiões costeiras.",
        "logo": "ecassie.svg",
        "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
        "cor": "#077B5C"
    },
    {
        "projeto": "Turing Machine",
        "desc":"Ferramenta para análise e mapeamento de regiões costeiras.",
        "logo": "projetob.svg",
        "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
        "cor": "#EF9208"
    },
    {
        "projeto": "Carros",
        "desc":"Ferramenta para análise e mapeamento de regiões costeiras.",
        "logo": "projetoc.svg",
        "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
        "cor": "#9F24F3"
    }    
]
$(document).ready(()=>{
    projetos.forEach(element => {
        let div = $('#modelo-projeto').html()
        div = div.replace('{projeto}',element.projeto)
        div = div.replace('{desc}',element.desc)
        div = div.replace('{btnlink}',element.btnlink)
        div = div.replace('#000',element.cor)
        div = div.replace('img/liablack.svg','img/projetos/'+element.logo)
        $('#lista-projetos').append(div);
    });
})