function abrirModal(nomeProduto, descricaoProduto, descricaoTexto, imagemProduto) {
  document.getElementById('modalCompra').style.display = 'flex';
  document.getElementById('modalNomeProduto').textContent = nomeProduto;
  document.getElementById('modalDescricao').textContent = descricaoTexto;
  document.getElementById('modalImagemProduto').src = imagemProduto;
}

function fecharModal() {
  document.getElementById('modalCompra').style.display = 'none';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('modalCompra');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
