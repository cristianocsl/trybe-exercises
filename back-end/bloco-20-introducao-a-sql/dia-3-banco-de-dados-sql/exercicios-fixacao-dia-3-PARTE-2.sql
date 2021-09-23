USE sakila;
SELECT * FROM film;
SELECT UCASE(title) FROM film LIMIT 8;
SELECT LCASE(title) FROM film LIMIT 8;
SELECT
	REPLACE(title, 'ACADEMY', 'FOO')
    FROM film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM film
	WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM film
	WHERE film_id = 1;
SELECT LENGTH(title) FROM film
	WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM film
	WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM film
	WHERE film_id = 1;

SELECT UCASE('trybe');
SELECT REPLACE(
	'Você já ouviu falar do DuckDuckGo?',
    'DuckDuckGo', 'Google'
);
SELECT LENGTH('Uma frase qualquer');
SELECT RIGHT(
	LEFT(
	'A linguagem JavaScript está
	entre as mais usadas', 22)
    , 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- trabalhando com condições
SELECT
	IF(15 MOD 2 = 0, 'Par', 'Ímpar')
    AS 'Par ou Ímpar';

SELECT CURRENT_DATE();
SELECT NOW();
-- data com 30 dias antes da primeira
SELECT DATEDIFF('2020-01-01', '2020-01-31');
-- data com 30 dias depois da primeira
SELECT DATEDIFF('2020-01-31', '2020-01-01');
SELECT TIMEDIFF('08:30:10', '09:30:10');
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');
SELECT YEAR(CURRENT_DATE());
SELECT HOUR(NOW()) AS horas,
MINUTE(NOW()) AS minutos,
SECOND(NOW()) AS segundos;
USE sakila;
SELECT * FROM film;
SELECT AVG(rental_duration) AS média FROM film;
SELECT MIN(rental_duration) AS mínimo FROM film;
SELECT * FROM film;
SELECT title FROM film WHERE title LIKE '_HA%' AND title NOT LIKE 'C%';
SELECT title FROM film WHERE title LIKE '__A%' AND title NOT LIKE 'A%';
SELECT title FROM film WHERE title LIKE '_____%';
SELECT title FROM film WHERE title LIKE 'A__________';
SELECT title FROM film WHERE title LIKE 'A____%';
SELECT title FROM film WHERE title LIKE 'B___%' AND title NOT LIKE 'B_________%';