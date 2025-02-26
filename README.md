# Weather API Documentation

## 📌 Overview

Questa API fornisce informazioni meteo per una città specifica utilizzando un sistema di cache con Redis per migliorare le prestazioni.

## 📦 Installazione

1. Clona il repository:

   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Installa le dipendenze:

   ```sh
   npm install
   ```

3. Configura le variabili d'ambiente in un file `.env` (se necessario per Redis o API key meteo).

4. Avvia il server:
   ```sh
   npm run dev
   ```

## 🚀 Endpoint

### 📍 **GET /api/weather**

**Descrizione:** Restituisce le informazioni meteo di una città specificata come query parameter.

#### 🔹 **Richiesta**

**URL:** `/api/weather?city=<nome_città>`  
**Metodo:** `GET`  
**Query Parameters:**
| Nome | Tipo | Descrizione |
|--------|--------|----------------------------------|
| city | string | Nome della città richiesta |

#### 🔹 **Risposta**

**Codice 200 - Successo**

```json
{
  "temperature": 23.5,
  "humidity": 65,
  "condition": "Sunny"
}
```

**Codice 400 - Errore**

```json
{
  "error": "City is required"
}
```

## 📜 Struttura del Progetto

```
project-directory/
│── src/
│   ├── Controller/
│   │   ├── weather.controller.ts  # Contiene la logica per ottenere il meteo
│   ├── Models/
│   │   ├── weather.redis.ts        # Gestisce la cache con Redis
│   ├── Router/
│   │   ├── weather.routes.ts       # Definizione delle routes
│   ├── config/
│   │   ├── redis.ts                # Configurazione di Redis
│   ├── index.ts                    # Entry point dell'applicazione
├── package.json
├── tsconfig.json
├── Dockerfile                       # File per la configurazione Docker
```

## 🐳 Docker Setup

Per eseguire l'API con Docker, utilizza il seguente `Dockerfile`:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run tsc

EXPOSE 3000
EXPOSE 6379

CMD [ "npm", "run", "start" ]
```

### 🚀 Avvio con Docker

1. **Costruisci l'immagine Docker:**
   ```sh
   docker build -t weather-api .
   ```
2. **Esegui il container:**
   ```sh
   docker run -p 3000:3000 -p 6379:6379 weather-api
   ```

## 🛠 Tecnologie Utilizzate

- **Node.js + Express** per la creazione del server
- **TypeScript** per tipizzazione e mantenibilità del codice
- **Redis** per caching dei dati meteo
- **Axios** per richiedere i dati
- **JWT** per autenticazione (se necessario)
- **Docker** per containerizzazione

## 🔄 Scripts Disponibili

| Comando       | Descrizione                 |
| ------------- | --------------------------- |
| `npm run dev` | Avvia il server con nodemon |
| `npm run tsc` | Compila TypeScript          |
| `npm start`   | Avvia l'app compilata       |
