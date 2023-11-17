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

  public function toTable()
  {
    $tr = '<tr data-id="' . $this->id . '">
        <td data-nome="' . $this->nome . '">' . $this->nome . '</td>
        <td data-descricao="' . $this->descricao . '">' . $this->descricao . '</td>
        <td data-preco="' . $this->preco . '">R$ ' . $this->preco . '</td>
        <td>' . $this->ativo . '</td>
        <td>
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick={autoComplete(' . $this->id . ')}>Editar</button>
          <button class="btn btn-danger" onclick={excluir(' . $this->id . ')}>Excluir</button
        </td>
    </tr>';

    return $tr;
  }
}
?>