const Deuses = [
    {
        id: 0,
        figura: "img/poseidon.jpg",
        titulo: "Poseidon",
        sobre: "(grego: Ποσειδῶν) era o Deus Olímpico dos Mares, Rios, Água, Tempestades, Ventos, Furacões, Chuva, Inundações, Secas, Terremotos e Equinos..."
    },
    {
        id: 1,
        figura: "img/Zeus.jpg",
        titulo: "Zeus",
        sobre: "(grego: Ζεύς/Δίας) era o Rei do Olimpo e o governante do Panteão Grego..."
    },
    {
        id: 2,
        figura: "img/hades.jpg",
        titulo: "Hades",
        sobre: "(grego: ᾍδης) era o deus olímpico dos mortos e governante do submundo..."
    },
    {
        id: 3,
        figura: "img/kratos.jpg",
        titulo: "Kratos",
        sobre: "Kratos refere-se a duas entidades: Cratos da mitologia grega, o deus da força..."
    }
];

// Função que monta os cards na home
function mostrarmais() {
    const telinha = document.getElementById("tela");
    let strTexto = "";

    for (let i = 0; i < Deuses.length; i++) {
        strTexto += `
        <div class="card col-12 col-md-6 col-lg-2 border border-primary m-2">
            <img src="${Deuses[i].figura}" class="card-img-top" alt="${Deuses[i].titulo}">
            <div class="card-body">
                <h5 class="card-title">${Deuses[i].titulo}</h5>
                <p class="card-text">${Deuses[i].sobre.substring(0, 150)}...</p>
                <a href="detalhes.html?id=${Deuses[i].id}" class="btn btn-outline-light mt-2">Ver mais</a>
            </div>
        </div>`;
    }

    telinha.innerHTML = strTexto;
}

// Chama a função ao carregar a página home
if (document.getElementById("tela")) {
    window.onload = mostrarmais;
}