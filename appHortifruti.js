document.addEventListener("DOMContentLoaded", function() {
    function montarCarrinho() {
        let custo = 0;
        let extra = "";
        let descricao = "";

        // Obter produtos selecionados
        const produtosSelecionados = document.querySelectorAll('input[name="produto"]:checked');

        // Calcular custo para cada produto selecionado
        produtosSelecionados.forEach(produtoSelecionado => {
            let produto = produtoSelecionado.value;

            // Cálculo do custo do produto
            if (produto === "Maçã") {
                custo += 2.00;
            } else if (produto === "Banana") {
                custo += 1.50;
            } else if (produto === "Laranja") {
                custo += 1.75;
            } else if (produto === "Morango") {
                custo += 5.00;
            } else if (produto === "Uva") {
                custo += 6.00;
            } else if (produto === "Cenoura") {
                custo += 3.00;
            } else if (produto === "Batata") {
                custo += 2.50;
            } else if (produto === "Tomate") {
                custo += 4.00;
            } else if (produto === "Alface") {
                custo += 2.00;
            } else if (produto === "Cebola") {
                custo += 1.25;
            } else if (produto === "Brócolis") {
                custo += 3.50;
            }
            
            // Adiciona a descrição do produto
            descricao += "   - " + produto + "<br>";
        });

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
        descricao += extra;

        // Dados do pedido em JSON:
        const pedidoJSON = {
            "descricao": descricao,
            "total": custo.toFixed(2)
        };

        const pedidoString = encodeURIComponent(JSON.stringify(pedidoJSON));

        // Redireciona para pedido.html e envia os dados do pedido:
        window.location.href = `/pedido?pedido=${pedidoString}`;
    }

    // Chama a função montarCarrinho ao clicar:
    const button = document.querySelector("button");
    button.addEventListener('click', montarCarrinho);
});
