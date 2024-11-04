document.addEventListener("DOMContentLoaded", function() {

    function montarCarrinho() {

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // produto selecionado
        let produtoSelecionado = document.querySelector('input[name="produto"]:checked');
        let produto = produtoSelecionado ? produtoSelecionado.value : "";

        // Cálculo direto do custo do produto
        if (produto === "Batata Frita") {
            custo += 6.00;
        } else if (produto === "Pipoca") {
            custo += 4.00;
        } else if (produto === "Amendoim") {
            custo += 3.50;
        } else if (produto === "Mix de Castanhas") {
            custo += 8.50;
        } else if (produto === "Biscoito") {
            custo += 2.50;
        } else if (produto === "Barrinha de Cereal") {
            custo += 2.00;
        } else if (produto === "Chocolate") {
            custo += 5.00;
        } else if (produto === "Bala") {
            custo += 1.50;
        } else if (produto === "Chiclete") {
            custo += 1.00;
        } else if (produto === "Pirulito") {
            custo += 1.00;
        } else if (produto === "Gelatina") {
            custo += 1.75;
        } else if (produto === "Marshmallow") {
            custo += 3.00;
        }

        // Opcionais extras
        let embalagemOpcionalCheckbox = document.querySelector('input[name="opcionais-embalagem"]:checked');
        if (embalagemOpcionalCheckbox) {
            custo += 2.50;
            extra += "<br>   - Embalagem para presente";
        }

        let cartaoOpcionalCheckbox = document.querySelector('input[name="opcionais-cartao"]:checked');
        if (cartaoOpcionalCheckbox) {
            custo += 1.00;
            extra += "<br>   - Cartão personalizado";
        }

        // Monta todo o pedido numa variável:
        descricao += "   - " + produto + extra;

        // Dados do pedido em JSON:
        const pedidoJSON = {
            "descricao": descricao,
            "total": custo.toFixed(2)
        };

        const pedidoString = JSON.stringify(pedidoJSON);

        // Redireciona para pedido.html e envia os dados do pedido:
        window.location.href = `pedido?pedido=${pedidoString}`;
    }

    // Chama a função montarCarrinho ao clicar:
    const button = document.querySelector("button");
    button.addEventListener('click', montarCarrinho);
});
