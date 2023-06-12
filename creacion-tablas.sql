USE tba;

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` char(30) NOT NULL,
  `lastname` char(30) NOT NULL,
  `mail` varchar(15) NOT NULL,
  `password` char(8) NOT NULL,
  `image` blob NOT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category_users` (`id_category`)
);

CREATE TABLE `category_users` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name_category` char(30) NOT NULL,
  PRIMARY KEY (`id_category`)
);


CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` char(30) NOT NULL,
  `image` blob NOT NULL,
  `description_product` varchar(100) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `disctount` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `id_type_product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `products_FK` (`id_type_product`),
  CONSTRAINT `products_FK` FOREIGN KEY (`id_type_product`) REFERENCES `type_products` (`id_type_product`)
);


CREATE TABLE `type_products` (
  `id_type_product` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` char(30) NOT NULL,
  PRIMARY KEY (`id_type_product`)
);


CREATE TABLE `factura` (
  `id_factura` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `cant` int(11) DEFAULT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`id_factura`),
  KEY `id_user` (`id_user`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`)
);