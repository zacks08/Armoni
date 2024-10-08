const catalogo= [
   
    { id: 1, nome: "Camiseta Básica Branca", style: "casual", gender: "masculino", occasion: "dia a dia", color: "branco" },
    { id: 2, nome: "Blusa de Manga Longa Preta", style: "casual", gender: "feminino", occasion: "inverno", color: "preto" },
    { id: 3, nome: "Camiseta Polo Azul Marinho", style: "elegante", gender: "masculino", occasion: "passeio", color: "azul marinho" },
    { id: 4, nome: "Blusa Cropped Verde", style: "casual", gender: "feminino", occasion: "passeio", color: "verde" },
    { id: 5, nome: "Camiseta Estampada Cinza", style: "casual", gender: "masculino", occasion: "dia a dia", color: "cinza" },
    { id: 6, nome: "Blusa Social Branca", style: "formal", gender: "feminino", occasion: "trabalho", color: "branco" },
    { id: 7, nome: "Camiseta Oversized Preta", style: "moda", gender: "unissex", occasion: "urbano", color: "preto" },
    { id: 8, nome: "Blusa de Alça Vermelha", style: "casual", gender: "feminino", occasion: "verão", color: "vermelho" },
    { id: 9, nome: "Camiseta Gola V Azul", style: "elegante", gender: "masculino", occasion: "encontro", color: "azul" },
    { id: 10, nome: "Blusa Ombro a Ombro Floral", style: "elegante", gender: "feminino", occasion: "evento", color: "floral" },
  
    // Calças e Bermudas
    { id: 11, nome: "Calça Jeans Skinny Azul", style: "casual", gender: "feminino", occasion: "passeio", color: "azul" },
    { id: 12, nome: "Bermuda Chino Caqui", style: "casual", gender: "masculino", occasion: "verão", color: "caqui" },
    { id: 13, nome: "Calça de Sarja Preta", style: "elegante", gender: "masculino", occasion: "trabalho", color: "preto" },
    { id: 14, nome: "Calça Pantalona Branca", style: "elegante", gender: "feminino", occasion: "evento", color: "branco" },
    { id: 15, nome: "Calça Legging Cinza", style: "esportivo", gender: "feminino", occasion: "treino", color: "cinza" },
    { id: 16, nome: "Calça Social Preta", style: "formal", gender: "masculino", occasion: "trabalho", color: "preto" },
    { id: 17, nome: "Calça Moletom Cinza", style: "casual", gender: "unissex", occasion: "conforto", color: "cinza" },
    { id: 18, nome: "Shorts Jeans Rasgado", style: "casual", gender: "feminino", occasion: "verão", color: "azul" },
    { id: 19, nome: "Bermuda Tactel Azul", style: "esportivo", gender: "masculino", occasion: "praia", color: "azul" },
    { id: 20, nome: "Calça Cargo Verde Militar", style: "moda", gender: "masculino", occasion: "urbano", color: "verde militar" },
  
    // Saias e Vestidos
    { id: 21, nome: "Saia Midi Listrada", style: "elegante", gender: "feminino", occasion: "evento", color: "preto e branco" },
    { id: 22, nome: "Saia Jeans Azul", style: "casual", gender: "feminino", occasion: "dia a dia", color: "azul" },
    { id: 23, nome: "Vestido Longo Floral", style: "casual", gender: "feminino", occasion: "verão", color: "floral" },
    { id: 24, nome: "Vestido Tubinho Preto", style: "elegante", gender: "feminino", occasion: "evento", color: "preto" },
    { id: 25, nome: "Saia Plissada Rosa", style: "elegante", gender: "feminino", occasion: "encontro", color: "rosa" },
    { id: 26, nome: "Vestido de Renda Branco", style: "formal", gender: "feminino", occasion: "evento", color: "branco" },
    { id: 27, nome: "Vestido Curto Vermelho", style: "moda", gender: "feminino", occasion: "festa", color: "vermelho" },
    { id: 28, nome: "Saia Rodada Preta", style: "casual", gender: "feminino", occasion: "encontro", color: "preto" },
    { id: 29, nome: "Vestido Chemise Listrado", style: "elegante", gender: "feminino", occasion: "trabalho", color: "listrado" },
    { id: 30, nome: "Vestido de Tricô Bege", style: "inverno", gender: "feminino", occasion: "casual", color: "bege" },
  
    // Sapatos
    { id: 31, nome: "Tênis Branco", style: "casual", gender: "unissex", occasion: "dia a dia", color: "branco" },
    { id: 32, nome: "Sapato Social Preto", style: "formal", gender: "masculino", occasion: "trabalho", color: "preto" },
    { id: 33, nome: "Sandália Rasteira Dourada", style: "casual", gender: "feminino", occasion: "verão", color: "dourado" },
    { id: 34, nome: "Tênis Esportivo Preto", style: "esportivo", gender: "unissex", occasion: "treino", color: "preto" },
    { id: 35, nome: "Bota Coturno Marrom", style: "moda", gender: "unissex", occasion: "inverno", color: "marrom" },
    { id: 36, nome: "Sapatilha Verniz Vermelha", style: "elegante", gender: "feminino", occasion: "trabalho", color: "vermelho" },
    { id: 37, nome: "Sapato Oxford Marrom", style: "formal", gender: "masculino", occasion: "evento", color: "marrom" },
    { id: 38, nome: "Chinelo Havaianas Preto", style: "casual", gender: "unissex", occasion: "praia", color: "preto" },
    { id: 39, nome: "Tênis Slip-on Azul", style: "casual", gender: "unissex", occasion: "dia a dia", color: "azul" },
    { id: 40, nome: "Sandália Salto Bloco Bege", style: "elegante", gender: "feminino", occasion: "evento", color: "bege" },
  
    // Acessórios
    { id: 41, nome: "Relógio de Pulso Prata", style: "moda", gender: "masculino", occasion: "evento", color: "prata" },
    { id: 42, nome: "Bolsa Tiracolo Preta", style: "casual", gender: "feminino", occasion: "dia a dia", color: "preto" },
    { id: 43, nome: "Boné Aba Reta Branco", style: "casual", gender: "unissex", occasion: "urbano", color: "branco" },
    { id: 44, nome: "Óculos de Sol Aviador", style: "moda", gender: "unissex", occasion: "verão", color: "dourado" },
    { id: 45, nome: "Pulseira de Couro Marrom", style: "moda", gender: "masculino", occasion: "casual", color: "marrom" },
    { id: 46, nome: "Chapéu Panamá Bege", style: "moda", gender: "unissex", occasion: "verão", color: "bege" },
    { id: 47, nome: "Brincos de Argola Dourados", style: "moda", gender: "feminino", occasion: "evento", color: "dourado" },
    { id: 48, nome: "Cachecol de Lã Cinza", style: "inverno", gender: "unissex", occasion: "inverno", color: "cinza" },
    { id: 49, nome: "Cinto de Couro Preto", style: "formal", gender: "masculino", occasion: "trabalho", color: "preto" },
    { id: 50, nome: "Lenço de Seda Vermelho", style: "moda", gender: "feminino", occasion: "evento", color: "vermelho" },
  
    // Mais Calças e Bermudas
    { id: 51, nome: "Calça Jogger Preta", style: "moda", gender: "unissex", occasion: "urbano", color: "preto" },
    { id: 52, nome: "Shorts de Moletom Cinza", style: "casual", gender: "masculino", occasion: "dia a dia", color: "cinza" },
    { id: 53, nome: "Calça de Alfaiataria Bege", style: "formal", gender: "feminino", occasion: "trabalho", color: "bege" },
    { id: 54, nome: "Calça Flare Azul", style: "elegante", gender: "feminino", occasion: "evento", color: "azul" },
      
  ];
  
  function suggestLooks() {
      const selectedStyle = document.getElementById("style").value;
      const selectedGender = document.getElementById("gender").value;
      const selectedOccasion = document.getElementById("occasion").value;
  
      const filteredItems = catalog.filter(item => 
          item.style === selectedStyle && 
          item.gender === selectedGender && 
          item.occasion === selectedOccasion
      );
  
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
  
      if (filteredItems.length === 0) {
          resultsDiv.innerHTML = "<p>Nenhum look encontrado para suas preferências.</p>";
      } else {
          filteredItems.forEach(item => {
              const itemDiv = document.createElement("div");
              itemDiv.className = "item";
              itemDiv.innerHTML = `<strong>${item.name}</strong> - ${item.color}`;
              resultsDiv.appendChild(itemDiv);
          });
      }
  }