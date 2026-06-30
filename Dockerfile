# Pour Decisions — sitio estático servido con nginx.
# La raíz (/) sirve el modo estudio. No hay build, backend ni DB:
# cada visitante guarda su progreso en su propio localStorage.
FROM nginx:alpine

# El tool de estudio queda como index.html
COPY pour_decisions_modo_estudio.html /usr/share/nginx/html/index.html

EXPOSE 80
