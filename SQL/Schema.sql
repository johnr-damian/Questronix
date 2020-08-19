/* Initial Script */

/* Create Database */
DROP DATABASE IF EXISTS `inventory`;
CREATE DATABASE `inventory`;
USE `inventory`;

/* Create `item` Table */
CREATE TABLE `items`
(
	`id` INT AUTO_INCREMENT,
    `name` VARCHAR(255),
    `qty` INT,
    `amount` INT,
    PRIMARY KEY(`id`)
);

/* Create Procedures */
DELIMITER ~
CREATE PROCEDURE `CreateNewItem`(IN `name` VARCHAR(255), IN `qty` INT, IN `amount` INT)
BEGIN
	INSERT INTO `items`(`items`.`name`, `items`.`qty`, `items`.`amount`) VALUES(`name`, `qty`, `amount`);
END;~

CREATE PROCEDURE `UpdateExistingItem`(IN `id` INT, IN `name` VARCHAR(255), IN `qty` INT, IN `amount` INT)
BEGIN
	UPDATE `items` SET 
		`items`.`name` = `name`,
        `items`.`qty` = `qty`,
        `items`.`amount` = `amount`
	WHERE `items`.`id` = `id`;
END;~

CREATE PROCEDURE `DeleteExistingItem`(IN `id` INT)
BEGIN
	DELETE FROM `items` WHERE `items`.`id` = `id`;
END;~

CREATE PROCEDURE `ShowItems`(IN `id` INT)
BEGIN
	IF `id` = -1 THEN
		SELECT `items`.`id` AS `ItemID`, `items`.`name` AS `Name`, `items`.`qty` AS `Quantity`, `items`.`amount` AS `Amount` FROM `items`;
	ELSE
		SELECT `items`.`id` AS `ItemID`, `items`.`name` AS `Name`, `items`.`qty` AS `Quantity`, `items`.`amount` AS `Amount` FROM `items` WHERE `items`.`id` = `id`;
	END IF;
END;~
DELIMITER ;
;

/* Create Initial Data */
CALL `CreateNewItem`("ItemA", 1, 1);
CALL `CreateNewItem`("ItemB", 20, 5);
CALL `CreateNewItem`("ItemC", 2, 11);
CALL `CreateNewItem`("ItemD", 10, 100);