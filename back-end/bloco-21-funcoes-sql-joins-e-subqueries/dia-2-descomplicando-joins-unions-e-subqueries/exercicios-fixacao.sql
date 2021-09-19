-- INNER JOIN
-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT
    new_tab.actor_id,
    new_tab.first_name,
    foreight.film_id
FROM
    sakila.actor AS new_tab
        INNER JOIN
    sakila.film_actor AS foreight ON new_tab.actor_id = foreight.actor_id;
-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT
    s.first_name AS Nome,
    s.last_name AS Sobrenome,
    a.address AS Endereço
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON a.address_id = s.address_id;
-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT
    c.customer_id,
    c.first_name,
    c.email,
    a.address_id,
    a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT
    c.first_name,
    c.email,
    c.address_id,
    a.address,
    a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.district = 'California'
WHERE first_name LIKE '%rene%';
-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT 
    c.first_name, COUNT(a.address) AS qtd_addr
FROM
    sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;
-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT 
    s.first_name, s.last_name, AVG(p.amount) AS média
FROM
    sakila.staff AS s
        INNER JOIN
    sakila.payment AS p ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name,  s.last_name;
-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT
    A.actor_id,
    A.first_name,
    F.film_id,
    F.title
FROM
    sakila.actor AS A
INNER JOIN
    sakila.film_actor AS FA
ON A.actor_id = FA.actor_id
INNER JOIN
    sakila.film AS F
ON FA.film_id = F.film_id;

-- LEFT/RIGTH JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer
AS c
LEFT JOIN sakila.actor
AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGTH JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- inner join
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- SELF JOIN

SELECT
    c1.first_name, c1.last_name, c1.email
FROM customer AS c1, customer AS c2
WHERE c1.last_name = c2.last_name;

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT
    f1.film_id,
    f1.replacement_cost,
    f2.film_id,
    f2.replacement_cost
FROM sakila.film AS f1, sakila.film AS f2
HAVING f1.replacement_cost = f2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

SELECT 
    A.title,
    A.rental_duration,
    B.title,
    B.rental_duration
FROM
    sakila.film AS A, sakila.film AS B
WHERE A.rental_duration = B.rental_duration
AND A.rental_duration BETWEEN 2 AND 4;

-- UNION

-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.

SELECT 
    first_name, last_name
FROM
    sakila.actor 
UNION ALL SELECT 
    first_name, last_name
FROM
    sakila.staff;

-- Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.

SELECT 
    first_name
FROM
    sakila.customer
WHERE
    first_name LIKE '%tracy%' 
UNION ALL SELECT 
    first_name
FROM
    sakila.actor
WHERE
    first_name LIKE '%je%';

-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.

(SELECT 
    first_name
FROM
    actor
ORDER BY actor_id DESC
LIMIT 5)

UNION

(SELECT 
    first_name
FROM
    staff
LIMIT 1)

UNION

(SELECT 
    first_name
FROM
    customer
ORDER BY first_name
LIMIT 5 OFFSET 15);

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.

(SELECT 
    first_name, last_name
FROM
    actor
ORDER BY first_name, last_name
LIMIT 60)

UNION

(SELECT 
    first_name, last_name
FROM
    customer
ORDER BY first_name, last_name
LIMIT 60)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;

-- SUBQUERY
-- Usando uma SUBQUERY como fonte de dados para o FROM .
SELECT f.title, f.rating
FROM (
SELECT 
    *
FROM
    sakila.film
WHERE rating = 'R')
 AS f;
 
 -- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY .
 SELECT
    address,
    district,
 (
 SELECT city
 FROM sakila.city
 WHERE city.city_id = sakila.address.city_id
 ) AS city
 FROM sakila.address;
 
 -- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY .
 SELECT address, district
 FROM sakila.address
 WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
 );
 
 -- Usando uma tabela externa, de fora da SUBQUERY , dentro dela.
 SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- Mesmo caso anterior usando INNER JOIN:
SELECT c.first_name, ad.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS ad
ON c.address_id = ad.address_id;
 