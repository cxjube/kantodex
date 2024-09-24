function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nothing was found. Enter the Pokémon name, type or Dex number.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicaliza uma string vazia para armezenar os resultados
    let resultados = "";
    let titulo = "";
    let pkmnNumber = "";
    let pkmnType = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados 
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        pkmnType = dado.pkmnType.toLowerCase()
        pkmnNumber = dado.pkmnNumber.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa) || pkmnType.includes(campoPesquisa) || pkmnNumber.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.link} target="_blank">${dado.titulo}</a>
                        <a href=${dado.link} target="_blank">${dado.pkmnNumber}</a>
                    </h2>
                    <p class="type-meta">${dado.pkmnType}</p>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank" class="link-meta">More info</a>
                </div>
            `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nothing was found.</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}
