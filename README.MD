# 🚀 eCommerce backend v0.4.0

Proyecto final del curso de backend con nodejs en Coderhouse.

- **Comisión:** 32120
- **Profesor:** Ernesto Rojas
- **Comienza:** 02 Agosto 2022
- **Termina:** 08 Febrero 2023


## ✌ Agradecimiento

---
Muchas gracias a todos los por todo el apoyo y aprendizajes
Éxitos!


## ⭐ Acerca del proyecto

---

Implementacion backend desarrollando un API e-commerce implementando node JS.

## 📝 Descripción

---

- API para manejar productos.
- API para manejar usuarios.
- API para manejar autenticación (login y uso de JWT)
- API para manejar carrito de compras
- Uso de servicios de gmail, WhatsApp y storage para imágenes.
  - gmail para confirmar registro de usuario y venta de carrito.
  - WhatsApp para confirmar venta de carrito.
  - storage para subir photo del usuario.
- MongoDB para persistir la data en producción y la opción de utilizar en memoria para desarrollo.
- Poder habilitar el modo CLUSTER mediante variable de entorno.
- Implementar registro de logs V1 con winston y morgan.
- Trabajar con dependencias typescript y ts-node-dev en vez de Webpack.
- Implementar el proyecto en TypeScript.
- Implementar el proyecto en capas.
  - routes: capa de rutas
  - controllers: capa de controladores
  - business: capa de negocio
  - persistence: capa de persistencia con implementación de repository, dto y dao.


- Puedes importar el [archivo de endpoints](./ecommerce_camilo.postman_collection.json) para usarlo en Postman o Insomnia.


## 📦 Estructura de carpetas

---

```
├── build
├── logs
├── src
│   ├── business
│   ├── controllers
│   ├── middleware
│   │   ├── errors
│   │   ├── routes
│   │   ├── security
│   │   └── validators
│   ├── persistence
│   │   ├── dao
│   │   │   ├── productDao
│   │   │   ├── shoppingCartDao
│   │   │   └── userDao
│   │   ├── dto
│   │   └── repository
│   ├── routes
│   ├── services
│   │   ├── email
│   │   ├── storage
│   │   └── whatsapp
│   ├── store
│   │   ├── daos
│   │   ├── FileSystem
│   │   ├── firebase
│   │   ├── mongoDb
│   │   │   └── models
│   │   └── types
│   └── types
└── storage

```

EL contenido de la carpeta store será posteriormente movida y se eliminará la carpeta, ya que es parte de los entregables anteriores.

## 🛠️ Técnologias y recursos

---

- Node.js
- Express
- Typescript
- MongoDB
- Passport JWT
- Mongoose
- Bcrypt
- Dotenv
- Nodemailer
- Twilio
- (más detalle en el package.json)


## 🛠️ Available Scripts

---

### `npm run dev`

Corre el proyecto en modo desarrollo

### `npm run clean`

Elimina el build generado del proyecto

### `npm run build`

Construye el build del proyecto

### `npm run start`

Corre el build generado del proyecto en modo producción



