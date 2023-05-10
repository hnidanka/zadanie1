# Etap pierwszy
FROM node:latest AS builder

# Utworzenie katalogu roboczego
WORKDIR /app

# Skopiowanie plików aplikacji do katalogu roboczego
COPY package.json package-lock.json ./
COPY index.js .

# Instalacja zależności
RUN npm install

# Etap drugi
FROM node:14-slim

# Utworzenie katalogu roboczego
WORKDIR /app

# Skopiowanie plików aplikacji z etapu budowania
COPY --from=builder /app .

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/ || exit 1

# Uruchomienie aplikacji
CMD ["node", "index.js"]

# Wyeksponowanie portu na zewnątrz kontenera
EXPOSE 5000
