# Mi Ángel Guardián

App propia (inventada, no un clon) inspirada en el quiz "Test del Ángel de la Guarda", con la misma gama de colores (gradiente violeta/rosa/dorado, fondo nocturno estrellado) y tipografía (Sora).

SPA liviana en HTML/CSS/JS puro, sin frameworks.

## Contenido

- `public/index.html` – shell de la app.
- `public/css/style.css` – estilos (paleta y componentes).
- `public/js/app.js` – lógica: cuestionario, cálculo del ángel guardián, mensajes diarios y favoritos.
- `public/img/` – assets (fondo estrellado, spinner, favicon).
- `server.js` – servidor Express que sirve `public/` como estático.

## Pantallas

- **Inicio** – estado actual y CTA para el test.
- **Test** – cuestionario de 8 preguntas.
- **Mi Ángel** – resultado entre 6 arcángeles (Miguel, Gabriel, Rafael, Uriel, Chamuel, Jofiel) con mensaje, oración y afirmación.
- **Mensajes** – afirmación diaria + favoritos guardados.

El resultado del test y los favoritos se guardan en `localStorage` del navegador.

## Correr localmente

```bash
npm install
npm start
```

Por defecto levanta en `http://localhost:3000`.
