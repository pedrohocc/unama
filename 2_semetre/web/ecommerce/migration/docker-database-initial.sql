CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE cliente(
    id_cliente serial PRIMARY KEY,
    nome varchar(255),
    email varchar(255),
    senha varchar(255),
    endereco varchar(255),
    telefone varchar(50)
);

CREATE TABLE produtos(
    id_produto serial PRIMARY KEY,
    nome varchar(255),
    descricao text,
    preco decimal(10, 2),
    estoque int
);

CREATE TABLE compras(
    id_compra serial PRIMARY KEY,
    id_cliente int REFERENCES cliente(id_cliente),
    id_produto int REFERENCES produtos(id_produto),
    quantidade int,
    data_compra date,
    preco_total decimal(10, 2)
);

INSERT INTO cliente(nome, email, senha, endereco, telefone) VALUES
('João da Silva', 'joao.silva@email.com', crypt('senha111', gen_salt('bf')), 'Rua das Flores, 123', '1122334455'),
('Maria Oliveira', 'maria.oliveira@email.com', crypt('senha111', gen_salt('bf')), 'Avenida das Nações, 456', '2233445566'),
('Carlos Pereira', 'carlos.pereira@email.com', crypt('senha111', gen_salt('bf')), 'Praça da Árvore, 789', '3344556677'),
('Ana Costa', 'ana.costa@email.com', crypt('senha111', gen_salt('bf')),'Travessa dos Artistas, 1011', '4455667788'),
('Lucas Martins', 'lucas.martins@email.com', crypt('senha111', gen_salt('bf')), 'Alameda das Rosas, 1213', '5566778899'),
('Patrícia Nobre', 'patricia.nobre@email.com', crypt('senha111', gen_salt('bf')),'Beco dos Lírios, 1415', '6677889900'),
('Roberto Dias', 'roberto.dias@email.com', crypt('senha111', gen_salt('bf')),'Avenida Central, 1617', '7788990011'),
('Fernanda Rocha', 'fernanda.rocha@email.com', crypt('senha111', gen_salt('bf')),'Rua da Praia, 1819', '8899001122'),
('Thiago Santos', 'thiago.santos@email.com', crypt('senha111', gen_salt('bf')),'Alameda do Vale, 2021', '9900112233'),
('Juliana Macedo', 'juliana.macedo@email.com', crypt('senha111', gen_salt('bf')),'Rua Nova, 2325', '0011223344');

INSERT INTO produtos(nome, descricao, preco, estoque) VALUES
('Mouse Wireless', 'Mouse sem fio com alta precisão e duração de bateria estendida', 149.99, 100),
('Teclado Mecânico', 'Teclado mecânico com resposta rápida para jogos', 299.99, 50),
('Headphone Sem Fio', 'Qualidade de som superior e cancelamento de ruído', 499.99, 40),
('Smartwatch Health', 'Monitore sua saúde e atividades', 899.90, 70),
('Webcam HD', 'Webcam Full HD com microfone integrado', 199.99, 30),
('Monitor Ultrawide', 'Monitor ultrawide de 29 polegadas para uma experiência imersiva', 2200.00, 20),
('E-reader Max', 'Toda sua biblioteca na palma da sua mão', 399.99, 45),
('Hub USB', 'Expanda suas conexões USB com este hub de 4 portas', 49.99, 60),
('Câmera ProShot', 'Capture seus momentos com qualidade profissional', 2799.99, 10),
('Console GameBox', 'Para o máximo em entretenimento interativo', 3999.00, 60);

INSERT INTO compras(id_cliente, id_produto, quantidade, data_compra, preco_total) VALUES
(1, 1, 2, '2023-11-10', 2 * 149.99),
(2, 2, 1, '2023-11-11', 1 * 299.99),
(3, 3, 1, '2023-11-12', 1 * 499.99),
(4, 4, 1, '2023-11-13', 1 * 899.90),
(5, 5, 1, '2023-11-14', 1 * 199.99),
(6, 6, 1, '2023-11-15', 1 * 2200.00),
(7, 7, 1, '2023-11-16', 1 * 399.99),
(8, 8, 3, '2023-11-17', 3 * 49.99),
(9, 9, 1, '2023-11-18', 1 * 2799.99),
(10, 10, 1, '2023-11-19', 1 * 3999.00);
