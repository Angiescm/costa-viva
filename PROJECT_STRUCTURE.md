# Costa Viva - Estructura Completa del Proyecto

## 📁 Árbol de Archivos

```
costa-viva/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx           # Navegación principal
│   │   │   ├── Hero.tsx             # Sección principal
│   │   │   ├── Features.tsx         # Características
│   │   │   └── Footer.tsx           # Pie de página
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Página principal
│   │   │   └── NotFound.tsx         # Página 404
│   │   ├── App.tsx                  # Componente raíz
│   │   ├── main.tsx                 # Punto de entrada
│   │   └── index.css                # Estilos globales
│   ├── index.html                   # HTML base
│   ├── package.json                 # Dependencias
│   ├── vite.config.ts               # Configuración Vite
│   ├── tsconfig.json                # Configuración TypeScript
│   ├── tsconfig.node.json           # TS para Vite
│   ├── tailwind.config.js           # Tailwind CSS
│   ├── postcss.config.js            # PostCSS
│   ├── Dockerfile                   # Docker
│   └── .gitignore
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts          # Conexión MongoDB
│   │   ├── models/
│   │   │   ├── User.ts              # Modelo Usuario
│   │   │   ├── Passport.ts          # Modelo Pasaporte
│   │   │   ├── Business.ts          # Modelo Negocio
│   │   │   └── Stamp.ts             # Modelo Sello
│   │   ├── controllers/
│   │   │   ├── authController.ts    # Autenticación
│   │   │   ├── userController.ts    # Usuarios
│   │   │   ├── businessController.ts # Negocios
│   │   │   └── passportController.ts # Pasaportes
│   │   ├── routes/
│   │   │   ├── authRoutes.ts        # Rutas auth
│   │   │   ├── userRoutes.ts        # Rutas usuarios
│   │   │   ├── businessRoutes.ts    # Rutas negocios
│   │   │   └── passportRoutes.ts    # Rutas pasaportes
│   │   ├── middleware/
│   │   │   └── auth.ts              # Middleware autenticación
│   │   └── index.ts                 # Punto de entrada
│   ├── package.json                 # Dependencias
│   ├── tsconfig.json                # Configuración TypeScript
│   ├── .env.example                 # Variables de entorno
│   ├── Dockerfile                   # Docker
│   └── .gitignore
│
├── docker-compose.yml               # Composición Docker
├── .gitignore                       # Git ignore global
└── README.md                        # Documentación
```

## 🚀 Scripts Disponibles

### Frontend
```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Ver versión compilada
npm run lint     # Linter
```

### Backend
```bash
npm run dev      # Iniciar servidor con nodemon
npm run build    # Compilar TypeScript
npm start        # Iniciar servidor compilado
npm test         # Ejecutar tests
```

## 🔌 Endpoints API Disponibles

### Health Check
- `GET /api/health` - Estado del servidor

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Usuario actual (requiere token)

### Usuarios
- `GET /api/users/profile` - Perfil del usuario
- `PUT /api/users/profile` - Actualizar perfil
- `GET /api/users/passport` - Pasaporte del usuario

### Negocios
- `GET /api/businesses` - Listar negocios (paginado)
- `GET /api/businesses/:id` - Obtener negocio específico
- `POST /api/businesses` - Crear negocio (requiere autenticación, rol business/admin)
- `PUT /api/businesses/:id` - Actualizar negocio (propietario)
- `GET /api/businesses/nearby` - Negocios cercanos por geolocalización

### Pasaporte
- `POST /api/passport/stamp` - Agregar sello a pasaporte
- `GET /api/passport/stamps` - Obtener sellos del usuario
- `POST /api/passport/redeem` - Canjear puntos

## 📦 Dependencias Principales

### Frontend
- react@18.2.0
- react-router-dom@6.16.0
- axios@1.5.0
- tailwindcss@3.3.0

### Backend
- express@4.18.2
- mongoose@7.5.0
- jsonwebtoken@9.1.0
- bcryptjs@2.4.3
- qrcode@1.5.3
- cors@2.8.5
- dotenv@16.3.1

## 🔒 Autenticación y Seguridad

- Contraseñas hasheadas con bcryptjs
- JWT para autenticación stateless
- CORS configurado
- Tokens con expiración (7 días por defecto)
- Middleware de autenticación en rutas protegidas

## 🗺️ Geolocalización

- Índice geoespacial en colección Business
- Búsqueda de negocios cercanos con distancia máxima
- Coordenadas en formato GeoJSON (longitud, latitud)

## 📝 Consideraciones de Desarrollo

1. **Variables de Entorno**: Copiar `.env.example` a `.env` y configurar
2. **MongoDB**: Requiere instancia local o en la nube (MongoDB Atlas)
3. **Frontend**: Proxy API configurado en vite.config.ts
4. **CORS**: Permitir origen configurado en variables de entorno
5. **Roles**: Implementar verificación de roles en rutas protegidas

## 🐳 Uso de Docker

```bash
# Construir y ejecutar todos los servicios
docker-compose up --build

# Iniciar en background
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down

# Eliminar volúmenes
docker-compose down -v
```

---

**Proyecto completo y listo para desarrollo** ✨
