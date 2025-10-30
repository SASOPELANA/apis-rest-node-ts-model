# APIS REST con Node, Typescript y Firebase

## Descripción

Apis Rest para gestión de productos desarrollado con Node.js y Express.

## Instalación

1. Clonar el repositorio.

2. Instalar dependencias.

```shell
pnpm install
```

3. Configurar variables de entorno:

```shell
# Copiar el archivo de ejemplo y completar los datos requeridos.
cp example.env .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo.

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

