CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista(
    artista_id INT /*pode ser assim também: INT(10)*/ NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE estiloMusical(
    estilo_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Album(
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(60) NOT NULL,
    preço INT NOT NULL,
    estilo_id INT NOT NULL,
    artista_id INT NOT NULL,
    FOREIGN KEY (estilo_id) REFERENCES estiloMusical (estilo_id),
    FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
);

CREATE TABLE cancao(
    cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES Album (album_id)
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