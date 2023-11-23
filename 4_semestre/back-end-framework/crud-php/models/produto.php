<?php
class Produtos
{
  public int $id;
  public string $nome;
  public string $descricao;
  public float $preco;
  public bool $ativo;

  public function __construct(int $id, string $nome, string $descricao, float $preco, bool $ativo)
  {
    $this->id = $id;
    $this->nome = $nome;
    $this->descricao = $descricao;
    $this->preco = $preco;
    $this->ativo = $ativo;
  }
}
?>