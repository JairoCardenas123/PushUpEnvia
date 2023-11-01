CREATE DATABASE Envia;

CREATE TABLE Continente(
    IdContinente INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(60) NOT NULL
);
CREATE TABLE MetodoEnvio(
    IdMetodoEnvio INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(100) NOT NULL
);
CREATE TABLE Rutas(
    IdRuta INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(100) NOT NULL
);
CREATE TABLE Pais(
    IdPais INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(60) NOT NULL,
    IdContinente INT,
    FOREIGN KEY (IdContinente) REFERENCES Continente(IdContinente)
);
CREATE TABLE Municipio(
    IdMunicipio INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(50) NOT NULL,
    IdPais INT,
    FOREIGN KEY (IdPais) REFERENCES Pais(IdPais)
);
CREATE TABLE Usuario(
    IdUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Edad INT NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Cedula VARCHAR(50) NOT NULL,
    IdMunicipio INT,
    FOREIGN KEY (IdMunicipio) REFERENCES Municipio(IdMunicipio)
);
CREATE TABLE Cotizaciones(
    IdCotizacion INT PRIMARY KEY AUTO_INCREMENT,
    Costo INT NOT NULL,
    Fecha VARCHAR(60) NOT NULL,
    Tiempo VARCHAR(60) NOT NULL,
    IdUsuario INT,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);
CREATE TABLE Empleado(
    IdEmpleado INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Puesto VARCHAR(40) NOT NULL
);
CREATE TABLE Envios(
    IdEnvio INT PRIMARY KEY AUTO_INCREMENT,
    FechaEnvio VARCHAR(50) NOT NULL,
    Destino VARCHAR(50) NOT NULL,
    Peso VARCHAR(50) NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    IdUsuario INT,
    IdRuta INT,
    IdMetodoEnvio INT,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario),
    FOREIGN KEY (IdRuta) REFERENCES Rutas(IdRuta),
    FOREIGN KEY (IdMetodoEnvio) REFERENCES MetodoEnvio(IdMetodoEnvio)
);
CREATE TABLE SeguimientoEnvios(
    IdSeguimiento INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(100) NOT NULL,
    IdEnvio INT,
    IdEmpleado INT,
    FOREIGN KEY (IdEnvio) REFERENCES Envios(IdEnvio),
    FOREIGN KEY (IdEmpleado) REFERENCES Empleado(IdEmpleado)
);




