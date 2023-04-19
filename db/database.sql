CREATE DATABASE IF NOT EXISTS railway;

USE companydb;

CREATE TABLE IF NOT EXISTS empleados (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  salario decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DESCRIBE empleados;

INSERT INTO empleados VALUES 
(1, 'Elías Peña', 5000.00),
(2, 'Marisabel Vera', 4500.00),
(3, 'Dinora Peña', 4800.00),
(4, 'Eliana Peña', 3900.00);
