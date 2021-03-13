DROP DATABASE IF EXISTS 'burgersDB';
CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(50) NOT NULL,
	eatenStatus BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);