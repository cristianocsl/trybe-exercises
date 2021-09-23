CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista(
    artista_id INT /*pode ser assim também: INT(10)*/ NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);
-- sintaxe criar tabela:

-- CREATE TABLE nome_tabela(
--     nome_coluna1 tipo constrait,
--     nome_coluna1 tipo constrait OBS.: uma coluna pode ser criada sem constraint
-- ) ENGINE = 'nome_engine' o mais comum é o InnoDB >> engine possibilita usar chaves estrangeiras, entre outras coisas.

-- Criar tabela com chave composta:
CREATE TABLE filme_ator(
    ator_id INTEGER,
    filme_id INTEGER,
    CONSTRAINT PRIMARY KEY(ator_id, filme_id),
    FOREIGN KEY (ator_id) REFERENCES Actor (ator_id),
    FOREIGN KEY (filme_id) REFERENCES Filme (filme_id)
);