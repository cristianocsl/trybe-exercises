USE hr;
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT 
    MAX(SALARY)
FROM
    employees; 
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT 
    (MAX(SALARY) - MIN(SALARY))
FROM
    employees;
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT 
    JOB_ID, AVG(SALARY)
FROM
    employees
GROUP BY JOB_ID;
-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT 
    SUM(SALARY) AS Total
FROM
    employees;
-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    MAX(SALARY) AS Maior_salário,
    MIN(SALARY) AS Menor_salário,
    SUM(SALARY) AS Soma_de_todos_salário,
    ROUND(AVG(SALARY), 2) AS Média_dos_salários
FROM
    employees;
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, COUNT(*) AS Total_empregados
FROM
    employees
WHERE
    JOB_ID = 'IT_PROG';
-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT 
    JOB_ID, SUM(SALARY)
FROM
    employees
GROUP BY JOB_ID;
-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, SUM(SALARY) AS Salary
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, ROUND(AVG(SALARY),2) AS Salário_médio
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG';
-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT 
    department_id,
    COUNT(*) AS Qtd_empregados,
    ROUND(AVG(salary), 2) AS Salário_médio
FROM
    employees
GROUP BY department_id
HAVING COUNT(*) > 10;
-- HAVING Qtd_empregados > 10 faz o mesmo efeito da linha acima.
-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
-- SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
SELECT * FROM employees;
-- Esta opção para o exercício 11 gera uma coluna com o resultado esperado, mas não atualiza a coluna.
-- SELECT 
--     REPLACE(phone_number, '515%', '777') AS Num_Alterados
-- FROM
--     employees;
-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT 
    *
FROM
    employees
WHERE LENGTH(first_name) >= 8;
-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT 
    employee_id AS id_empreg,
    first_name AS prim_nome,
    YEAR(hire_date) AS ano_contrat
FROM
    employees;
-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT
    employee_id AS id_empreg,
    first_name AS prim_nome,
    MONTH(hire_date) AS mes_contrat
FROM
    employees;
-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT 
    UCASE(CONCAT(first_name, ' ', last_name)) AS Prim_nome_maiusc
FROM
    employees;
-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT 
    last_name, hire_date
FROM
    employees
WHERE
    YEAR(hire_date) = '1987'
        AND MONTHNAME(hire_date) = 'July';
-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT 
    first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(),hire_date) 'dias_trab'
FROM
    employees;