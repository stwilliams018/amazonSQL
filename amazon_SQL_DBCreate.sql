DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity TINYINT NOT NULL,
  primary key (id)
  );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencils" , "school_supplies", 1.00, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pens" , "school_supplies", 2.50, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("note books" , "school_supplies", 4.50, 85);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper clips" , "school_supplies", 1.50, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper 100ct" , "school_supplies", 2.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("printer ink" , "computer_supplies", 12.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard" , "computer_supplies", 18.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mouse" , "computer_supplies", 10.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("head phones" , "computer_supplies", 16.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("speakers" , "computer_supplies", 12.00, 10);

select * from products
