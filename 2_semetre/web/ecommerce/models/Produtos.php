<?php
class Produtos {
    public int $id_produto;
    public string $nome;
    public string $descricao;
    public string $preco;
    public string $estoque;

    public function __construct(int $id_produto, string $nome, string $descricao, string $preco, string $estoque)
    {
        $this->id_produto = $id_produto;
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->preco = $preco;
        $this->estoque = $estoque;
    }

}
?>