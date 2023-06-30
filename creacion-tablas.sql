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



//----------------------------------------- modificacion  tablas se agrego una tabla intermedia y sus respectivas relaciones  
//----------------------------------------- dejo codigo nuevo 



-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: tba
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category_users`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_users` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name_category` char(30) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `detalle_facturas`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_facturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_factura` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_factura_FK` (`id_factura`),
  KEY `id_producto_FK` (`id_product`),
  CONSTRAINT `id_factura_FK` FOREIGN KEY (`id_factura`) REFERENCES `factura` (`id_factura`),
  CONSTRAINT `id_producto_FK` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `factura`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` char(30) DEFAULT NULL,
  `image` blob DEFAULT NULL,
  `description_product` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `disctount` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `id_type_product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `products_FK` (`id_type_product`),
  CONSTRAINT `products_FK` FOREIGN KEY (`id_type_product`) REFERENCES `type_products` (`id_type_product`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `type_products`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_products` (
  `id_type_product` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` char(30) NOT NULL,
  PRIMARY KEY (`id_type_product`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` char(30) NOT NULL,
  `lastname` char(30) NOT NULL,
  `mail` varchar(15) NOT NULL,
  `password` char(8) NOT NULL,
  `image` blob DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category_users` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'tba'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30 20:21:55