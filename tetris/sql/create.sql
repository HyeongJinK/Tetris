CREATE TABLE `game_kind` (
  `game_code` int(11) NOT NULL AUTO_INCREMENT,
  `game_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`game_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `user_num` int(11) NOT NULL AUTO_INCREMENT,
  `game_code` int(11) NOT NULL,
  `id` varchar(40) NOT NULL,
  `name` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`user_num`),
  KEY `fk_gameCode` (`game_code`),
  CONSTRAINT `fk_gameCode` FOREIGN KEY (`game_code`) REFERENCES `game_kind` (`game_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
