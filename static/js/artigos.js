var artigos = [
    {
        "titulo": "Data Science e Analytics",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    },
    {
        "titulo": "Desenvolvimento de Jogos",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    },
    {
        "titulo": "IA aplicada a saúde, educação e meio ambiente",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    },
    {
        "titulo": "Otimização e Meta Heurística",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    },
    {
        "titulo": "IA aplicada a Smart Cities",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    },
    {
        "titulo": "Visão Computacional",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    }
]
$(document).ready(()=>{
    artigos.forEach(element => {
        let line = "<li class='list-group-item d-flex justify-content-between align-items-center'>"
        line += element.titulo
        line += "<span class=''>"
        line += "<a href='"+element.link+"' target='_blank'>"
        line += "<i class='fas fa-link'></i>"
        line += "</a></span></li>"
        $('#lista-artigos').append(line)
    });
})