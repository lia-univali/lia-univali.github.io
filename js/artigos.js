var artigos = [
    {
        "titulo": "Artigo 1",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    },
    {
        "titulo": "Artigo 2",
        "link": "https://lh6.googleusercontent.com/uNUgr3kunsngF1eH8KFlWgdOeRCNH5VjNlSrXmxVKnjPfq7rHIbA_Fm3O2jeMkygLDYXRV9opO0_RpDEbeQ4=w1530-h769",
    }
]
$(document).ready(()=>{
    artigos.forEach(element => {
        let line = "<li class='list-group-item d-flex justify-content-between align-items-center'>"
        line += element.titulo
        line += "<span class=''>"
        line += "<a href='"+element.link+"' target='_blank'>"
        line += "<i class='fas fa-external-link-alt'></i>"
        line += "</a></span></li>"
        $('#lista-artigos').append(line)
    });
})