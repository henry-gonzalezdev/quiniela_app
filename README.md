# ⚽ Quiniela Mundial 2026

Una aplicación web minimalista y moderna para hacer predicciones del Mundial de Fútbol 2026. Diseñada para ser responsive y funcionar perfectamente en dispositivos móviles y desktop.

## 🚀 Características

### Módulos Principales

1. **Dashboard de Partidos** (`/`)
   - Vista general de todos los partidos
   - Separación por estado: Próximos, En Vivo, Finalizados
   - Estadísticas rápidas del torneo
   - Cards informativos con detalles de cada partido

2. **Predicciones** (`/predictions`)
   - Formulario intuitivo para hacer predicciones
   - Inputs numéricos para marcar goles
   - Guardado de predicciones con confirmación visual
   - Validación de datos antes de guardar

3. **Tabla de Posiciones** (`/leaderboard`)
   - Ranking de todos los participantes
   - Podio destacado para los top 3
   - Estadísticas generales del torneo
   - Indicador visual de posición

4. **Mis Predicciones** (`/my-predictions`)
   - Historial completo de predicciones realizadas
   - Cálculo automático de puntos obtenidos
   - Indicadores visuales (exacta, correcta, incorrecta)
   - Resumen de estadísticas personales

5. **Perfil** (`/profile`)
   - Información del usuario
   - Estadísticas detalladas (puntos, precisión, predicciones)
   - Progreso del torneo
   - Avatar personalizado

6. **Detalle de Partido** (`/match/[id]`)
   - Vista detallada de un partido específico
   - Información de predicciones de otros usuarios
   - Estadísticas del partido

## 🎨 Diseño

- **Minimalista**: Interfaz limpia y sin distracciones
- **Responsive**: Diseño mobile-first que se adapta a todos los dispositivos
- **Dark Mode**: Soporte completo para modo oscuro
- **Colores**: Paleta basada en verde esmeralda (tema fútbol) con acentos en ámbar para destacados
- **Tipografía**: Fuentes Geist Sans y Geist Mono de Vercel

## 📱 Mobile-First

La aplicación está optimizada para móviles con:
- Navegación inferior fija en móviles
- Sidebar lateral en desktop
- Cards y componentes adaptativos
- Touch-friendly (botones y áreas de toque grandes)
- Scroll suave y optimizado

## 🛠️ Tecnologías

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Iniciar en producción
pnpm start
```

## 🎯 Ideas de Módulos Adicionales

### Módulos Sugeridos para Futuras Implementaciones:

1. **Notificaciones**
   - Alertas cuando empiezan partidos
   - Recordatorios para hacer predicciones
   - Notificaciones de resultados

2. **Grupos/Familias**
   - Crear grupos privados
   - Invitar miembros por código
   - Rankings por grupo

3. **Estadísticas Avanzadas**
   - Gráficos de progreso
   - Comparación con otros usuarios
   - Historial de puntos por jornada

4. **Chat/Comentarios**
   - Comentar partidos
   - Discutir predicciones
   - Sistema de reacciones

5. **Predicciones Especiales**
   - Predicciones de campeón
   - Goleador del torneo
   - Mejor jugador

6. **Exportar/Compartir**
   - Compartir predicciones en redes sociales
   - Exportar tabla de posiciones
   - Generar imágenes de resultados

7. **Modo Competencia**
   - Torneos privados
   - Apuestas simbólicas
   - Premios personalizados

## 📝 Estructura del Proyecto

```
quiniela-family/
├── app/
│   ├── layout.tsx          # Layout principal con navegación
│   ├── page.tsx            # Dashboard de partidos
│   ├── predictions/        # Módulo de predicciones
│   ├── leaderboard/        # Tabla de posiciones
│   ├── my-predictions/     # Mis predicciones
│   ├── profile/            # Perfil de usuario
│   └── match/[id]/         # Detalle de partido
├── components/
│   ├── Navigation.tsx      # Navegación responsive
│   ├── MatchCard.tsx       # Card de partido
│   └── LeaderboardCard.tsx # Card de ranking
├── lib/
│   └── data.ts             # Datos mock
├── types/
│   └── index.ts            # Tipos TypeScript
└── public/                 # Assets estáticos
```

## 🎨 Sistema de Puntos

- **Predicción Exacta**: 3 puntos (marcador exacto)
- **Resultado Correcto**: 1 punto (ganador correcto o empate)
- **Predicción Incorrecta**: 0 puntos

## 🔮 Próximos Pasos

1. Integrar con backend/API
2. Sistema de autenticación
3. Base de datos para partidos y predicciones
4. Notificaciones push
5. PWA (Progressive Web App)
6. Internacionalización (i18n)

---

Desarrollado con ❤️ para disfrutar del Mundial 2026 en familia
