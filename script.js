const produto = document.getElementById("produto");
const quantidade = document.getElementById("quantidade");
const botao = document.getElementById("processar");
const lista = document.getElementById("lista");

const codigosGerados = new Set();

botao.addEventListener("click", processarProduto);

function gerarCodigo() {
  let codigo;

  do {
    codigo = Math.floor(Math.random() * 100000);
  } while (codigosGerados.has(codigo));

  codigosGerados.add(codigo);
  return codigo;
}

function processarProduto() {
  const nomeProduto = produto.value.trim();
  const qtdProduto = quantidade.value.trim();

  if (nomeProduto === "" || qtdProduto === "") {
    alert("Preencha todos os campos.");
    return;
  }

  const codigo = gerarCodigo();

  const item = document.createElement("div");
  item.className = "grid grid-cols-3 items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 gap-3";

  item.innerHTML = `
    <span class="font-bold text-blue-700">#${codigo}</span>
    <span class="text-gray-800 font-medium">${nomeProduto}</span>
    <span class="text-gray-600 text-right">Qtd: ${qtdProduto}</span>
  `;

  lista.appendChild(item);

  produto.value = "";
  quantidade.value = "";
  produto.focus();
}