<?php
class Cliente
{
    private int $id_cliente;
    private string $nome;
    private string $email;
    private string $endereco;
    private string $telefone;

    public function __construct(int $id_cliente, string $nome, string $email, string $endereco, string $telefone)
    {
        $this->id_cliente = $id_cliente;
        $this->nome = $nome;
        $this->email = $email;
        $this->endereco = $endereco;
        $this->telefone = $telefone;
    }

    public function getIdCliente(): int
    {
        return $this->id_cliente;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getEndereco(): string
    {
        return $this->endereco;
    }

    public function getTelefone(): string
    {
        return $this->telefone;
    }
}
?>