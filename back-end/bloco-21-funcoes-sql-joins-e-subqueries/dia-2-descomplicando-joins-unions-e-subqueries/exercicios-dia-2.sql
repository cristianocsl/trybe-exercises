-- EXERCÍCIOS BLOCO 21 - DIA 2
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT 
    A.title, B.domestic_sales, B.international_sales
FROM
    Pixar.Movies AS A
INNER JOIN Pixar.BoxOffice AS B
ON A.id = B.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- SELECT 
--     M.title, (B.domestic_sales + B.international_sales) AS `Total_sales` -- Aqui não se refere ao "número de vendas", mas à soma das vendas nacionais e internacionais de cada filme.
-- FROM
--     Pixar.Movies AS M
-- INNER JOIN Pixar.BoxOffice AS B
-- ON B.international_sales > B.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT 
    M.title, B.rating
FROM
    Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética. (OBS.: DEVERIA DETALHAR QUE TAMBÉM QUER OS DADOS DOS FILMES)

SELECT 
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
    T.id,
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    Pixar.Movies AS M
RIGHT JOIN Pixar.Theater AS T
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

SELECT 
    M.title
FROM
    Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.rating > 7.5;

SELECT 
    (SELECT 
            title
        FROM
            Pixar.Movies
        WHERE
            Movies.id = tab_externa.movie_id) AS Col_Title
FROM
    Pixar.BoxOffice AS tab_externa
WHERE tab_externa.rating > 7.5;

-- Solução do gabarito:

SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            rating > 7.5);
            
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT 
    rating
FROM
    Pixar.BoxOffice
WHERE movie_id in (
    SELECT id FROM Pixar.Movies
    WHERE year > 2009
);

SELECT 
    B.rating
FROM
    Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON M.id = B.movie_id
WHERE M.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT 
    T.name, T.location
FROM
    Pixar.Theater AS T
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.Movies
        WHERE
            T.id = Movies.the);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT 
    T.name, T.location
FROM
    Pixar.Theater AS T
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Pixar.Movies
        WHERE
            T.id = Movies.theater_id);

select * from Pixar.Movies;
select * from Pixar.Theater;
select * from Pixar.BoxOffice; -- RATING