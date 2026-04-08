## for connecting to database
\c my_database
## for connectind datanase from terminal
psql -U postgres -W
username: postgres
password: Sah2amar

# for clear terminal
\! cls

# for list of switched database
\c database_name

## for switchin table
\d table_name

## for list of all plsql database
##command
/list
## create database
CREATE DATABASE my_database;
## query
SELECT datname FROM pg_database;

## create table
CREATE TABLE person(
	id INT,
	name VARCHAR(100),
	city VARCHAR(100)
);

## insert single data
INSERT INTO person(id, name, city) VALUES(1, 'John Doe', 'New York');

## insert multiple data
INSERT INTO person(id, name, city) VALUES
(2, 'Jane Smith', 'Los Angeles'),
(3, 'Alice Johnson', 'Chicago'),
(4, 'Bob Brown', 'Houston');
## without specifying column name
INSERT INTO person VALUES(5, 'Charlie Davis', 'Phoenix');
## select all data
SELECT * FROM person;
## select specific columns
SELECT name, city FROM person;
## update data
UPDATE person SET city = 'San Francisco' WHERE id = 1;
## delete data
DELETE FROM person WHERE id = 2;

# for creating a employee table
create table employee(
	emp_id serial primary key,
	fname varchar(100) not null,
	lname varchar(100) not null,
	email varchar(100) not null,
	dept varchar(50),
	salary decimal(10,2) not null default 30000.00,
	hire_date date not null default current_date
)
## insert multiple data into employee table
INSERT INTO employee (fname, lname, email, dept, salary) VALUES
('John', 'Doe', 'john.doe@example.com', 'Engineering', 50000.00),
('Jane', 'Smith', 'jane.smith@example.com', 'Marketing', 45000.00),
('Alice', 'Johnson', 'alice.johnson@example.com', 'Sales', 40000.00),
('Bob', 'Brown', 'bob.brown@example.com', 'HR', 42000.00),
('Charlie', 'Davis', 'charlie.davis@example.com', 'Finance', 48000.00),
('Emily', 'Wilson', 'emily.wilson@example.com', 'Operations', 44000.00),
('David', 'Miller', 'david.miller@example.com', 'IT', 46000.00),
('Sarah', 'Taylor', 'sarah.taylor@example.com', 'Marketing', 45000.00),
('Michael', 'Anderson', 'michael.anderson@example.com', 'Finance', 48000.00),
('Jessica', 'Thomas', 'jessica.thomas@example.com', 'HR', 42000.00);

# for finding duplicate fname in employee table
select emp_id, count(*)
from employee
group by emp_id
having count(*) >1

## delete duplicate data
delete from employee
where emp_id in (
    select emp_id
    from (
        select emp_id, row_number() over (partition by fname order by emp_id) as rn
        from employee
    ) t
    where t.rn > 1
);

DELETE FROM users
WHERE id NOT IN (
  SELECT MIN(id)
  FROM users
  GROUP BY email
);

## how to check the constraint of a table in the query tool of postgresql
\d employee
## how can check all the all columns of a table in postgresql in query tool
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'employee';
 # how can ckeck unique constraint of a table in postgresql in query tool
SELECT conname AS constraint_name,
       pg_get_constraintdef(oid) AS constraint_definition   FROM pg_constraint
WHERE conrelid = 'employee'::regclass

## get all employee from IT department with salary less than 50000
select * from employee where dept='IT' and salary < 50000;

## get all employee from IT, Finance and HR department
select * from employee where dept IN('IT', 'Finance', 'HR');

## get all employee with salary between 40000 and 50000
select * from employee where salary between 40000 and 50000;

## get all employee whose name start with J
select * from employee where fname like 'J%';

## get all employee whose dept is 2 character long
select * from employee where dept LIKE '__';

## get all distinct department from employee table
SELECT DISTINCT dept FROM EMPLOYEE;

## ORDER BY
SELECT * FROM employee ORDER BY salary DESC;

## in mongodb
db.employee.find().sort({salary: -1})

## LIMIT
SELECT * FROM employee ORDER BY salary DESC LIMIT 5;

## aggregate function (COUNT, SUM, AVG, MAX, MIN)


## for finding the average salary of employee in each department
SELECT dept, AVG(salary) AS avg_salary
FROM employee
GROUP BY dept;

## how to find the total number of employee in each department
SELECT dept, COUNT(*) AS total_employees
FROM employee
GROUP BY dept;

## usong mongodb
db.employee.aggregate([
    {
        $group: {
            _id: "$dept",
            total_employees: { $sum: 1 }
        }
     }
])

## how to find the total number of employee 

SELECT COUNT(*) AS total_employees
FROM employee;


 ## employee with highest salary

SELECT * FROM employee
WHERE salary = (SELECT MAX(salary) FROM employee);

## employee with second highest salary
SELECT * FROM employee
WHERE salary = (SELECT MAX(salary) FROM employee 
WHERE salary < (SELECT MAX(salary) FROM employee));
//or
select max(salary) from employee
where salary < (select max(salary) from employee)

## average salary of employee in each department

SELECT dept, AVG(salary) AS avg_salary
FROM employee
GROUP BY dept;

## total salary of employee in each department
select dept, sum(salary) from employee group by dept;

## total salary of employee in each department with more than 2 employee
SELECT dept, SUM(salary) AS total_salary
FROM employee
GROUP BY dept
HAVING COUNT(*) > 2;

## select higest salary from employee table 
select * from employee order by salary desc limit(1)
 // or  
SELECT MAX(salary) AS highest_salary
FROM employee;
## select higest salary from employee table  using mongodb
db.employee.find().sort({salary: -1}).limit(1)

## select higest salary from employee table with department using mongodb
db.employee.aggregate([
  {
    $group: {
      _id: "$dept",
      highest_salary: { $max: "$salary" }
    }
  }
])
 

## case when statement
SELECT fname, lname, salary,
       CASE
           WHEN salary >= 50000 THEN 'High'
           WHEN salary BETWEEN 40000 AND 49999 THEN 'Medium'
           ELSE 'Low'
       END AS salary_range
FROM employee;

//or
select fname, salary,
case
	when salary >= 50000 then 'high'
	else 'low'
end as sal_cat
 from employee

## for calculating bonus of employee with on salary 
 SELECT fname, lname, salary,
       CASE
           WHEN salary > 0 THEN ROUND(salary * 0.10)
        END AS Bonus
FROM employee;




