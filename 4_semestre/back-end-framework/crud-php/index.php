<?php
include_once __DIR__ . "/db/methods/ProdutosMethods.php";

$pm = new ProdutosMethods;
$produtos = $pm->selectAll();

?>
<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Crudzin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body class="bg-secondary d-flex flex-column justify-conten-center align-items-center">
    <header class="mt-3 mb-3">
        <h1 class="text-center text-white">Crud de Produto <i class="fa-brands fa-shopify"></i></h1>
    </header>

    <main class="d-flex flex-column justify-conten-center align-items-center">
        <div class="mb-3">
            <a href="addProduct.html" class="btn btn-primary">Adicionar</a>
        </div>

        <div class="table-responsive">
            <table class="table">
                <thead>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Ativo</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <?php
                    foreach ($produtos as $produto) {
                        echo $produto;
                    }
                    ?>
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Produto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="updateProduct.php" method="post">
                        <div class="form-floating mb-3">
                                <input name="id_produto" type="hidden" class="form-control" id="floatingInput" placeholder="1" required>
                                <label for="floatingInput">
                                    Id</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input name="nome" type="
            text" class="form-control" id="floatingInput" placeholder="Mouse" required>
                                <label for="floatingInput">
                                    Nome</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input name="descricao" type="
            text" class="form-control" id="floatingInput" placeholder="Mouse gamer 3200dpi" required>
                                <label for="floatingInput">
                                    Descrição</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input name="preco" type="number" step="0.01" class="form-control" id="floatingInput"
                                    placeholder="10.50" required>
                                <label for="floatingInput">Preço</label>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/d86dd13286.js" crossorigin="anonymous"></script>
    <script src="./assets/js/actions.js"></script>
</body>

</html>