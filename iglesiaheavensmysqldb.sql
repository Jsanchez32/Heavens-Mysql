-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-07-2023 a las 03:29:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iglesiaheavensmysqldb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barrio`
--

CREATE TABLE `barrio` (
  `idBarrio` int(11) NOT NULL,
  `nombreBarrio` varchar(50) DEFAULT NULL,
  `idComuna` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `barrio`
--

INSERT INTO `barrio` (`idBarrio`, `nombreBarrio`, `idComuna`) VALUES
(1, 'Ciudad Jardin', 1),
(2, 'a', 2),
(3, 'Cañaveral', 4),
(4, 'San Pio', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comuna`
--

CREATE TABLE `comuna` (
  `idComuna` int(11) NOT NULL,
  `nombreComuna` varchar(50) DEFAULT NULL,
  `idMunicipio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comuna`
--

INSERT INTO `comuna` (`idComuna`, `nombreComuna`, `idMunicipio`) VALUES
(1, 'Comuna 5', 6),
(2, 'Comuna 10', 2),
(3, 'Comuna 20', 1),
(4, 'Comuna 30', 2),
(5, 'Comuna 1', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creyente`
--

CREATE TABLE `creyente` (
  `idCreyente` int(11) NOT NULL,
  `nombreCreyente` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nroCelular` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `idBarrio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `creyente`
--

INSERT INTO `creyente` (`idCreyente`, `nombreCreyente`, `email`, `nroCelular`, `direccion`, `idBarrio`) VALUES
(1, 'Juan Andrés S', 'asdasd', '123123', 'asdasdasd', 1),
(3, 'Raul', 'raul@gmail.com', '1319732136', 'Cra 5', 4),
(4, 'Carlos', 'carlos@gmail.com', '13178346', 'Cra 50', 3),
(5, 'Jose', 'jose@gmail.com', '379176364', 'Cra 21', 2),
(6, 'Pedro', 'pedro@gmail.com', '123123123', 'Cra 5', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `nombreDepartamento` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `nombreDepartamento`) VALUES
(1, 'Santander'),
(3, 'Boyaca'),
(4, 'Cundinamarca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `idMunicipio` int(11) NOT NULL,
  `nombreMunicipio` varchar(50) DEFAULT NULL,
  `idDepartamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`idMunicipio`, `nombreMunicipio`, `idDepartamento`) VALUES
(1, 'San Gil', 1),
(2, 'Floridablanca', 1),
(4, 'Giron', 1),
(5, 'Tunja', 3),
(6, 'Bucaramanga', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barrio`
--
ALTER TABLE `barrio`
  ADD PRIMARY KEY (`idBarrio`),
  ADD KEY `idComuna` (`idComuna`);

--
-- Indices de la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD PRIMARY KEY (`idComuna`),
  ADD KEY `idMunicipio` (`idMunicipio`);

--
-- Indices de la tabla `creyente`
--
ALTER TABLE `creyente`
  ADD PRIMARY KEY (`idCreyente`),
  ADD KEY `idBarrio` (`idBarrio`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`idMunicipio`),
  ADD KEY `idDepartamento` (`idDepartamento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `barrio`
--
ALTER TABLE `barrio`
  MODIFY `idBarrio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `comuna`
--
ALTER TABLE `comuna`
  MODIFY `idComuna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `creyente`
--
ALTER TABLE `creyente`
  MODIFY `idCreyente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `idMunicipio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `barrio`
--
ALTER TABLE `barrio`
  ADD CONSTRAINT `barrio_ibfk_1` FOREIGN KEY (`idComuna`) REFERENCES `comuna` (`idComuna`);

--
-- Filtros para la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD CONSTRAINT `comuna_ibfk_1` FOREIGN KEY (`idMunicipio`) REFERENCES `municipio` (`idMunicipio`);

--
-- Filtros para la tabla `creyente`
--
ALTER TABLE `creyente`
  ADD CONSTRAINT `creyente_ibfk_1` FOREIGN KEY (`idBarrio`) REFERENCES `barrio` (`idBarrio`);

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `municipio_ibfk_1` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
