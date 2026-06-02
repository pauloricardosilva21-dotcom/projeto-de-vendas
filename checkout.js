const produtosData = {
    "MacBook-Pro": {
        nome: 'MacBook Pro 16"',
        preco: "R$ 12.999,00",
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2070"
    },
    "Samsung-Galaxy": {
        nome: "Samsung Galaxy S24",
        preco: "R$ 5.499,00",
        img: "https://images.samsung.com/br/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true"
    },
    "PlayStation-5": {
        nome: "PlayStation 5 Slim",
        preco: "R$ 4.299,00",
        img: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/939944/xlarge/Console-Playstation-5-Slim-Digital-Edition-825GB-USB-HDMI-Branco_1772549611.png"
    },
    "AirPods": {
        nome: "Fone de Ouvido AirPods",
        preco: "R$ 1.299,00",
        img: "https://m.media-amazon.com/images/I/416ZUxb5TiL.jpg"
    },
    "iPhone-15": {
        nome: "iPhone 15 Pro",
        preco: "R$ 7.999,00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBD-jm1ymIROh24T61p8TB2ax7dctWI_CPA&s"
    },
    "Kindle-Oasis": {
        nome: "Kindle Oasis E-reader",
        preco: "R$ 1.499,00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMamjdRq3sEVV5BumQ_YXlmjIBgiumWqfxRg&s"
    },
    "Smart-TV": {
        nome: "Smart TV 4K 55\"",
        preco: "R$ 2.899,00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDA96jehM8hHoax2oxNRQu8vhilGkUL_IxA&s"
    },
    "Garmin": {
        nome: "Relógio Garmin Forerunner",
        preco: "R$ 2.199,00",
        img: "https://cdn.awsli.com.br/2500x2500/2202/2202388/produto/256381259/garmin-forerunner-165-preto-5-61d1lwuk55.png"
    },
    "ASUS": {
        nome: "Notebook Gamer ASUS",
        preco: "R$ 6.499,00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKxY7WU1zpfQZ7F-2cyMKNRxLeiqC4ixwxg&s"
    },
    "JBL": {
        nome: "Caixa de Som JBL Boombox",
        preco: "R$ 2.399,00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0IqDXTx8mxBlkl9fVXdbGnCKo7lSVdk2pA&s"
    }
};

const params = new URLSearchParams(window.location.search);
const idProduto = params.get('produto');

if (idProduto && produtosData[idProduto]) {
    const produto = produtosData[idProduto];
    document.getElementById('img-produto').src = produto.img;
    document.getElementById('img-produto').alt = produto.nome;
    document.getElementById('nome-produto').innerText = produto.nome;
    document.getElementById('preco-produto').innerText = produto.preco;
    document.getElementById('total-produto').innerText = produto.preco;
    
    document.getElementById('parcelas-select').innerHTML = `
        <option>1x de ${produto.preco} sem juros</option>
        <option>10x de R$ ${(parseFloat(produto.preco.replace('R$', '').replace('.', '').replace(',', '.')) / 10).toFixed(2).replace('.', ',')} sem juros</option>
    `;
} else {
    document.querySelector('.container-checkout').innerHTML = `<h2>Produto não encontrado. <a href="index.html">Voltar para a loja</a></h2>`;
}

function mudarMetodo(metodo) {
    const botoes = document.querySelectorAll('.btn-metodo');
    botoes.forEach(b => b.classList.remove('ativo'));

    if (metodo === 'pix') {
        botoes[0].classList.add('ativo');
        document.getElementById('checkout-pix').classList.remove('escondido');
        document.getElementById('checkout-cartao').classList.add('escondido');
    } else {
        botoes[1].classList.add('ativo');
        document.getElementById('checkout-pix').classList.add('escondido');
        document.getElementById('checkout-cartao').classList.remove('escondido');
    }
}

function finalizarCompra() {
    alert('Compra simulada com sucesso!');
    window.location.href = 'index.html';
}