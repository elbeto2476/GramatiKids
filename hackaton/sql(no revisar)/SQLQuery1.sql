create database Gramatikids;
use Gramatikids;

-- 1. Usuarios
CREATE TABLE Usuarios (
  id_usuario INT PRIMARY KEY IDENTITY(1,1),
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  contraseña VARCHAR(255),
  rol VARCHAR(20), -- ENUM no existe en SQL Server
  fecha_registro DATE
);

-- 2. Recompensas
CREATE TABLE Recompensas (
  id_recompensa INT PRIMARY KEY IDENTITY(1,1),
  tipo VARCHAR(20), -- reemplazo de ENUM
  valor INT,
  descripcion TEXT
);

-- 3. Lecturas
CREATE TABLE Lecturas (
  id_lectura INT PRIMARY KEY IDENTITY(1,1),
  titulo VARCHAR(255),
  autor VARCHAR(100),
  contenido TEXT,
  tipo VARCHAR(20) -- reemplazo de ENUM
);

-- 4. Estudiantes
CREATE TABLE Estudiantes (
  id_estudiante INT PRIMARY KEY IDENTITY(1,1),
  id_usuario INT,
  grado INT,
  grupo VARCHAR(10),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- 5. Docentes
CREATE TABLE Docentes (
  id_docente INT PRIMARY KEY IDENTITY(1,1),
  id_usuario INT,
  especialidad VARCHAR(100),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
