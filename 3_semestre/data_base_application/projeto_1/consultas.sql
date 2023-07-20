select nome from aluno where idade >= 8 and sexo = "M";
select matricula, nome, rua, numero, complemento from aluno where nome like "_a%";
select count(*) as quantidades_de_alunos from aluno;
select aluno.nome, turma.DESCRICAO_SALA from aluno left join turma on aluno.turma_COD = turma.COD;