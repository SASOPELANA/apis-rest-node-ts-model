# APIS REST con Node, Typescript y Firebase

## Descripción

Apis Rest para gestión de productos desarrollado con Node.js y Express.

## Instalación

1. Clonar el repositorio.

2. Instalar dependencias.

```shell
pnpm install
```

3.Configurar variables de entorno:

```shell
# Copiar el archivo de ejemplo y completar los datos requeridos.
cp example.env .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4.Ejecutar en modo desarrollo.

```shell
pnpm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/api/products`
- **Descripción:** Devuelve una lista de todos los productos.
- **Respuesta de ejemplo:**

```json
[
  {
    "categories": ["CPU", "Gama Alta"],
    "description": "Procesador de alto rendimiento",
    "id": "abc123def456ghi789",
    "image": "https://rec-line.com/img/productos/800x800/ryzen9_7900x.jpeg",
    "name": "AMD Ryzen 9 7900X",
    "price": 450
  },
  {
    "categories": ["GPU", "Gama Alta"],
    "description": "Tarjeta gráfica para gaming",
    "id": "xyz789uvw456rst123",
    "image": "https://rec-line.com/img/productos/800x800/rtx4080.jpeg",
    "name": "NVIDIA RTX 4080",
    "price": 1200
  },
  {
    "categories": ["RAM", "Gama Media"],
    "description": "Memoria RAM DDR5",
    "id": "mno456pqr789stu012",
    "image": "https://rec-line.com/img/productos/800x800/ram_ddr5_32gb.jpeg",
    "name": "Corsair Vengeance 32GB DDR5",
    "price": 180
  }
]
```

### Filtrar productos por categorías

- **GET** `/api/products?categories=categories=example`
- **Descripción:** Devuelve una lista de productos que pertenecen a al menos una de las categorías especificadas.
- **Parámetros:**
  - `categories` (query, opcional): Una o más categorías por las que filtrar.
- **Ejemplo de uso:** `/api/products?categories=CPU`
- **Respuesta de ejemplo:**

```json
[
  {
    "categories": ["CPU", "Gama Alta"],
    "description": "Procesador de alto rendimiento",
    "id": "abc123def456ghi789",
    "image": "https://rec-line.com/img/productos/800x800/ryzen9_7900x.jpeg",
    "name": "AMD Ryzen 9 7900X",
    "price": 450
  },
  {
    "categories": ["GPU", "Gama Alta"],
    "description": "Tarjeta gráfica para gaming",
    "id": "xyz789uvw456rst123",
    "image": "https://rec-line.com/img/productos/800x800/rtx4080.jpeg",
    "name": "NVIDIA RTX 4080",
    "price": 1200
  }
]
```

### Buscar productos por nombre

- **GET** `/api/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/api/products/search?name=memoria`
- **Respuesta de ejemplo:**

```json
[
  {
    "categories": ["RAM", "Gama Media"],
    "description": "Memoria RAM DDR5",
    "id": "mno456pqr789stu012",
    "image": "https://rec-line.com/img/productos/800x800/ram_ddr5_32gb.jpeg",
    "name": "Corsair Vengeance 32GB DDR5",
    "price": 180
  }
]
```

### Obtener producto por ID

- **GET** `api/products/:id`
- **Descripción:** Devuelve un producto especifico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `api/products/rAEhiWvFpz8jFDTR9IaP`
- **Respuesta ejemplo:**

```json
[
  {
    "categories": ["CPU", "Gama Media"],
    "description": "CPU",
    "id": "rAEhiWvFpz8jFDTR9IaP",
    "image": "https://rec-line.com/img/productos/800x800/bx8071514400_2.jpeg",
    "name": "Intel I5 14400k",
    "price": 130
  }
]
```

### Crear un producto

- **POST** `api/products`
- **Descripción:** Crea un producto nuevo.
- **Body (JSON):**

```json
{
        "categories": [
            "CPU",
            "Gama Media"
        ],
        "description": "CPU",
        "image": "https://rec-line.com/img/productos/800x800/bx8071514400_2.jpeg",
        "name": "Intel I5 14400k",
        "price": 130
    },
```

- **Respuesta ejemplo:**

```json
{
        "categories": [
            "CPU",
            "Gama Media"
        ],
        "description": "CPU",
        "id": "rAEhiWvFpz8jFDTR9IaP",
        "image": "https://rec-line.com/img/productos/800x800/bx8071514400_2.jpeg",
        "name": "Intel I5 14400k",
        "price": 130
    },
```

### Actualizar un producto

- **PUT** `/api/products/:id`
- **Descripción:** Actualiza todos los campos de un producto.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Ejemplo de uso:** `api/products/rAEhiWvFpz8jFDTR9IaP`
- **Body (JSON):**

```json
{
  "categories": ["GPU", "Gama Alta"],
  "description": "Tarjeta gráfica actualizada",
  "image": "https://rec-line.com/img/productos/800x800/rtx4090.jpeg",
  "name": "NVIDIA RTX 4090",
  "price": 1500
}
```

- **Repuesta Ejemplo:**

```json
{
  "categories": ["GPU", "Gama Alta"],
  "description": "Tarjeta gráfica actualizada",
  "id": "rAEhiWvFpz8jFDTR9IaP",
  "image": "https://rec-line.com/img/productos/800x800/rtx4090.jpeg",
  "name": "NVIDIA RTX 4090",
  "price": 1500
}
```

### Actualizar un producto parcialmente

- **PATCH** `/api/products/:id`
- **Descripción:** Actualiza solo los campos proporcionados de un producto.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Ejemplo de uso:** `/api/products/rAEhiWvFpz8jFDTR9IaP`
- **Body (JSON):** Solo incluir los campos que quieres actualizar

```json
{
  "price": 1400,
  "description": "Tarjeta gráfica en oferta"
}
```

- **Respuesta ejemplo:**

```json
{
  "categories": ["GPU", "Gama Alta"],
  "description": "Tarjeta gráfica en oferta",
  "id": "rAEhiWvFpz8jFDTR9IaP",
  "image": "https://rec-line.com/img/productos/800x800/rtx4090.jpeg",
  "name": "NVIDIA RTX 4090",
  "price": 1400
}
```

### Eliminar un producto

- **DELETE** `/api/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar
- **Ejemplo de uso:** `api/products/CKeiE71F2Yj9HIkQD3jh`
- **Respuesta:** 204 No Content
