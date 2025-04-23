const equipamentos = [
    { nome: "Computador", laboratorio: "Lab 1" },
    { nome: "Impressora 3D", laboratorio: "Lab 2" },
    { nome: "Osciloscópio", laboratorio: "Lab 3" }
  ];
  
  function mostrarEquipamentos() {
    const lista = document.getElementById("lista-equipamentos");
    const filtro = document.getElementById("filtro-lab").value;
    lista.innerHTML = "";
  
    const filtrados = filtro
      ? equipamentos.filter(e => e.laboratorio === filtro)
      : equipamentos;
  
    filtrados.forEach((equip, index) => {
      const item = document.createElement("div");
      item.className = "equipamento";
      item.innerHTML = `
        <strong>${equip.nome}</strong> - ${equip.laboratorio} <br />
        Status: <span>${equip.status || "Indefinido"}</span><br />
        <button onclick="editar(${index})">Editar</button>
        <button onclick="remover(${index})">Remover</button>
      `;
      lista.appendChild(item);
    });
  }  
  
  function adicionarEquipamento() {
    const nome = prompt("Nome do equipamento:");
    const laboratorio = prompt("Laboratório:");
    const status = prompt("Status (funcionando, manutenção, quebrado):");
  
    if (nome && laboratorio) {
      equipamentos.push({ nome, laboratorio, status });
      mostrarEquipamentos();
    }
  }  
  
  function editar(index) {
    const novoNome = prompt("Novo nome:", equipamentos[index].nome);
    const novoLab = prompt("Novo laboratório:", equipamentos[index].laboratorio);
    const novoStatus = prompt("Novo status:", equipamentos[index].status || "");
  
    if (novoNome && novoLab) {
      equipamentos[index] = {
        nome: novoNome,
        laboratorio: novoLab,
        status: novoStatus
      };
      mostrarEquipamentos();
    }
  }  
  
  function remover(index) {
    if (confirm("Tem certeza que deseja remover?")) {
      equipamentos.splice(index, 1);
      mostrarEquipamentos();
    }
  }
  
  mostrarEquipamentos();
  