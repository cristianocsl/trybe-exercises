USE sakila;
SELECT * FROM staff;
INSERT INTO `staff`
    (first_name, last_name, address_id, email, active, store_id, username)
VALUES
    ('C', 'CCCCCCCCCC', 2, 'CCCCCCCC@gmail.com', 1, 1, 'ECCCCCIE');

INSERT INTO `actor` (first_name, last_name)
VALUES ('Marcelo', 'Santos');

INSERT INTO `actor` (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;

INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
    ('Douglas', 'Okami', 2, '', 1, 1, 'okami', 'SekiroTheSamurai');
SELECT * FROM sakila.staff;

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.actor LIMIT 8;
-- UPDATE sakila.actor
-- SET
-- 	first_name = 'AAAA',
--     last_name = 'BBBB'
-- WHERE actor_id = 3;
