const Deuses = [
  {
    id: 0,
    figura: "img/poseidon.jpg",
    titulo: "Poseidon",
    sobre: "(grego: Ποσειδῶν) era o Deus Olímpico dos Mares, Rios, Água, Tempestades, Ventos, Furacões, Chuva, Inundações, Secas, Terremotos e Equinos..."
  },
  {
    id: 1,
    figura: "img/zeus.jpg",
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

// Mostra os cards na home
function mostrarmais() {
  const telinha = document.getElementById("tela");
  if (!telinha) return;

  let strTexto = "";
  for (let i = 0; i < Deuses.length; i++) {
    strTexto += `
      <div class="card col-12 col-md-6 col-lg-2 border border-primary m-2 bg-secondary text-white">
        <img src="${Deuses[i].figura}" class="card-img-top" alt="${Deuses[i].titulo}">
        <div class="card-body">
          <h5 class="card-title">${Deuses[i].titulo}</h5>
          <p class="card-text">${Deuses[i].sobre.substring(0, 100)}...</p>
          <a href="detalhes.html?id=${Deuses[i].id}" class="btn btn-outline-light mt-2">Ver mais</a>
        </div>
      </div>
    `;
  }
  telinha.innerHTML = strTexto;
}

// Mostra os detalhes na página de detalhes
function mostrarDetalhe() {
  const detalhe = document.getElementById("detalhe");
  if (!detalhe) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const deus = Deuses.find(d => d.id == id);

  if (deus) {
    detalhe.innerHTML = `
      <h1>${deus.titulo}</h1>
      <img src="${deus.figura}" class="img-fluid rounded mb-3" alt="${deus.titulo}">
      <p>${deus.sobre}</p>
      <a href="index.html" class="btn btn-outline-light mt-3">Voltar</a>
    `;
  } else {
    detalhe.innerHTML = `<h2>Deus não encontrado 😕</h2>`;
  }
}

// Executa automaticamente o que for necessário
window.onload = function() {
  mostrarmais();
  mostrarDetalhe();
};
