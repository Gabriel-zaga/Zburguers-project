//Preloader
window.addEventListener("load", function() {
      var preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    });
   
 //Modo dark e lite
 const modoToggle = document.querySelector('#modo-toggle');
 const body = document.body;
 
 modoToggle.addEventListener('click', () => {
   body.classList.toggle('dark-mode');
 });

// Criando o array de hamburgers
const hamburgers = [
      { nome: "X-Bacon", preco: 16.00, imagem: "https://tse1.mm.bing.net/th?id=OIP.nbvoCdy6iC5_2ZNW61Z5FwHaFj&pid=Api&P=0", descricao: "Alface, Tomate, Batata Palha, Milho, Hambúrguer, Presunto, Muçarela e Bacon." },
      { nome: "Bacon Especial", preco: 16.00, imagem: "https://cdn.pixabay.com/photo/2016/01/22/20/23/burger-1156564_640.jpg", descricao: "Alface, Tomate, Batata Palha, Milho, Hambúrguer, Presunto, Muçarela, Bacon, Salsicha e Ovo." },
      { nome: "Hamburger 3", preco: 8.75, imagem: "https://tse4.mm.bing.net/th?id=OIP.BhuwAfReplxdhwbuk--wgwHaFR&pid=Api&P=0", descricao: "Um clássico hamburger com carne, queijo, cebola e picles." },
      { nome: "Hamburger 4", preco: 11.25, imagem: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F05%2FBurger-National-Hamburger-Day-FT-Blog0619.jpg", descricao: "Um saboroso hamburger com carne, queijo, cogumelos e maionese." },
      { nome: "X-Bacon", preco: 16.00, imagem: "https://tse1.mm.bing.net/th?id=OIP.nbvoCdy6iC5_2ZNW61Z5FwHaFj&pid=Api&P=0", descricao: "Alface, Tomate, Batata Palha, Milho, Hambúrguer, Presunto, Muçarela e Bacon." },
      { nome: "Bacon Especial", preco: 16.00, imagem: "https://cdn.pixabay.com/photo/2016/01/22/20/23/burger-1156564_640.jpg", descricao: "Alface, Tomate, Batata Palha, Milho, Hambúrguer, Presunto, Muçarela, Bacon, Salsicha e Ovo." },
      { nome: "Hamburger 3", preco: 8.75, imagem: "https://tse4.mm.bing.net/th?id=OIP.BhuwAfReplxdhwbuk--wgwHaFR&pid=Api&P=0", descricao: "Um clássico hamburger com carne, queijo, cebola e picles." },
      { nome: "Hamburger 4", preco: 11.25, imagem: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F05%2FBurger-National-Hamburger-Day-FT-Blog0619.jpg", descricao: "Um saboroso hamburger com carne, queijo, cogumelos e maionese." }
  
];
    
    // Obtendo a referência da div onde os hamburgers serão exibidos
    const hamburgersContainer = document.querySelector(".hamburgers-container");
    
    // Exibindo os hamburgers
    hamburgers.forEach(hamburger => {
      // Criando o elemento da div do hamburger
      const hamburgerDiv = document.createElement("div");
      hamburgerDiv.classList.add("hamburger");
    
      // Criando a imagem do hamburger
      const hamburgerImg = document.createElement("img");
      hamburgerImg.src = hamburger.imagem;
      hamburgerImg.alt = hamburger.nome;
    
      // Criando o nome do hamburger
      const hamburgerNome = document.createElement("h3");
      hamburgerNome.textContent = hamburger.nome;
    
      // Criando a descrição do hamburger
      const hamburgerDescricao = document.createElement("p");
      hamburgerDescricao.textContent = hamburger.descricao;
    
      // Criando o preço do hamburger
      const hamburgerPreco = document.createElement("strong");
      hamburgerPreco.textContent = `Preço: R$ ${hamburger.preco.toFixed(2)}`;
    
      // Criando o botão "Adicionar ao Carrinho" do hamburger
      const hamburgerBotao = document.createElement("button");
      hamburgerBotao.textContent = "Comprar";
     const btnClose = document.getElementById("closebtn");
     
      hamburgerBotao.addEventListener("click", () => {
        const nome = hamburger.nome;
        const imagem = hamburger.imagem;
        const descricao = hamburger.descricao;
        const preco = hamburger.preco;
        const input = document.querySelector('#meuInput');
        input.value = `Seu Pedido: ${nome} Detalhes: ${descricao} Preço: ${preco}`;
       // const dados = `Seu pedido:${nome} e ele vem com: ${descricao} valor: ${preco}`;
        console.log(input);
      document.getElementById('modal-nome').textContent = nome;
      document.getElementById('modal-imagem').src = imagem;
      document.getElementById('modal-descricao').textContent = descricao;
      
         document.getElementById('modal').style.display = "block";

      });
    btnClose.addEventListener("click", () =>{

      document.getElementById('modal').style.display = "none";
    });
      // Adicionando os elementos à div do hamburger
      hamburgerDiv.appendChild(hamburgerImg);
      hamburgerDiv.appendChild(hamburgerNome);
      hamburgerDiv.appendChild(hamburgerDescricao);
      hamburgerDiv.appendChild(hamburgerPreco);
      hamburgerDiv.appendChild(hamburgerBotao);
    
      // Adicionando a div do hamburger ao container
      hamburgersContainer.appendChild(hamburgerDiv);
    });
    
    // Estilizando os hamburgers com o grid-box
    hamburgersContainer.style.display = "grid";
    hamburgersContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    hamburgersContainer.style.gap = "20px";

  
