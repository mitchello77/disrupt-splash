CREATE TABLE `DATABASE`.`Emails` ( `id` INT(4) NOT NULL AUTO_INCREMENT , `email` VARCHAR(30) NOT NULL , `submitDate` DATETIME NOT NULL , PRIMARY KEY (`id`), UNIQUE (`email`)) ENGINE = MyISAM;
