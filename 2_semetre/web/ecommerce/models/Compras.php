<?php

class Compra
{
    private $id_compra;
    private $id_cliente;
    private $id_produto;
    private $quantidade;
    private $data_compra;
    private $preco_total;

    // Construtor para inicializar os valores (opcional)
    public function __construct($id_compra, $id_cliente, $id_produto, $quantidade, $data_compra, $preco_total)
    {
        $this->id_compra = $id_compra;
        $this->id_cliente = $id_cliente;
        $this->id_produto = $id_produto;
        $this->quantidade = $quantidade;
        $this->data_compra = $data_compra;
        $this->preco_total = $preco_total;
    }

    // Métodos getter para cada propriedade
    public function getIdCompra()
    {
        return $this->id_compra;
    }

    public function getIdCliente()
    {
        return $this->id_cliente;
    }

    public function getIdProduto()
    {
        return $this->id_produto;
    }

    public function getQuantidade()
    {
        return $this->quantidade;
    }

    public function getDataCompra()
    {
        return $this->data_compra;
    }

    public function getPrecoTotal()
    {
        return $this->preco_total;
    }
}

?>