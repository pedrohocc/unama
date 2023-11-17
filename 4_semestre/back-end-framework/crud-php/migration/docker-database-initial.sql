CREATE TABLE produtos(
    id_produto serial PRIMARY KEY,
    nome varchar(255),
    descricao text,
    preco decimal(10, 2),
    ativo boolean
);

INSERT INTO produtos(nome, descricao, preco, ativo) VALUES
('Mouse Wireless', 'Mouse sem fio com alta precisão e duração de bateria estendida', 149.99, true),
('Teclado Mecânico', 'Teclado mecânico com resposta rápida para jogos', 299.99, true),
('Headphone Sem Fio', 'Qualidade de som superior e cancelamento de ruído', 499.99, true),
('Smartwatch Health', 'Monitore sua saúde e atividades', 899.90, true),
('Webcam HD', 'Webcam Full HD com microfone integrado', 199.99, true),
('Monitor Ultrawide', 'Monitor ultrawide de 29 polegadas para uma experiência imersiva', 2200.00, true),
('E-reader Max', 'Toda sua biblioteca na palma da sua mão', 399.99, true),
('Hub USB', 'Expanda suas conexões USB com este hub de 4 portas', 49.99, true),
('Câmera ProShot', 'Capture seus momentos com qualidade profissional', 2799.99, true),
('Console GameBox', 'Para o máximo em entretenimento interativo', 3999.00, true);