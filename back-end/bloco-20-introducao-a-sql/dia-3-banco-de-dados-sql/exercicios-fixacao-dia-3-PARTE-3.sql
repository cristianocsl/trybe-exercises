USE sakila;
SELECT * FROM address
WHERE address2 IS NOT NULL;

SELECT * FROM film
WHERE title NOT LIKE 'academy%';

SELECT amount, staff_id FROM payment
WHERE (amount = 0.99 OR AMOUNT = 2.99)
AND staff_id = 2;

-- filtrando dados de forma específica
-- TASK 1
SELECT email FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- TASK 2
SELECT * FROM customer
WHERE active = 0
AND first_name <> 'KENNETH'
AND store_id = 2
ORDER BY first_name;
-- TASK 3
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17'
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- TASK 4: quantos clientes estão ativos na loja 1?
SELECT COUNT(*) AS 'Clientes ativos' FROM customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM customer
WHERE active = 0 AND store_id= 1;

SELECT title, rental_rate FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title
LIMIT 50;

SELECT * FROM film
WHERE title LIKE 'p%r';

SELECT * FROM film
WHERE title LIKE '_C%';

SELECT * FROM film
WHERE title LIKE '________';

SELECT * FROM film
WHERE title LIKE 'E__%';

SELECT * FROM film
WHERE title LIKE '%ACE%';

SELECT * FROM film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

SELECT * FROM film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

SELECT * FROM film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

SELECT * FROM film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';

