USE Scientists;
SELECT Scientist, Project FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che');

SELECT * FROM Projects
WHERE Hours > 500;

SELECT * FROM Projects
WHERE Hours BETWEEN 251 AND 799;

SELECT Name, Code FROM Projects
WHERE NOT Name LIKE 'A%';

SELECT Name FROM Projects
WHERE Name like '%H%'; 

-- UPDATE em massa
UPDATE sakila.actor
SET first_name = (
	CASE actor_id
    WHEN 1 THEN 'JOE'
    ELSE actor_id
    END 
);

SELECT * FROM sakila.category;

INSERT INTO sakila.category(name)
VALUES
	('Sci-Fi'),
    ('Fantasy'),
    ('Biography');
