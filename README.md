
# Dziler: Design Systems as an API

**Dziler** isn't just another library—it's a **living, breathing design utility platform**. We believe design tokens shouldn't be hardcoded into your app; they should be dynamically generated, accessible, and scalable.

Think of Dziler as your **single source of truth** for UI/UX. Whether you're building the next big dashboard, a mobile app, or an experimental AI interface, Dziler serves up production-ready design tokens on a silver platter.

## Why Dziler?

Design workflows are often fragmented. Colors live in Figma, spacing is hacked in CSS, and components are copy-pasted. **Dziler unifies this.**

*   **Dynamic Color Palettes**: Generate accessible color schemes by mood or contrast instantly.
*   **Typography Scales**: Perfect typographical rhythm, calculated for you.
*   **Layout & Grids**: Grid systems and spacing scales on demand.
*   **Component Tokens**: Get style definitions for buttons, inputs, and cards without the CSS bloat.
*   **Motion Magic**: Silky smooth animation curves and durations.

## Tech Stack

Built with a robust, modern backend to ensure speed and reliability:

*   **[NestJS](https://nestjs.com/)**: For a modular, scalable architecture.
*   **[PostgreSQL](https://www.postgresql.org/) & [Prisma](https://www.prisma.io/)**: Secure data persistence.
*   **[Redis](https://redis.io/)**: Lightning-fast caching for token generation.
*   **[Swagger](https://swagger.io/)**: Beautiful, interactive API documentation.

## Getting Started

Ready to experience design as an API?

### 1. Prerequisites
Make sure you have [Docker](https://www.docker.com/) and [Node.js](https://nodejs.org/) installed.

### 2. Spinning Up
Clone the repo and start the magic:

```bash
# Install dependencies
npm install

# Start the database and cache services
docker compose up -d

# Initialize the database
npx prisma migrate dev --name init

# Launch Dziler
npm run start:dev
```

### 3. Explore
Once running, open your browser and witness the power of Dziler:
*   **Landing Page**: [http://localhost:3000](http://localhost:3000) - See it in action.
*   **API Docs**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs) - Test the endpoints.

## Contributing
We love community! If you have ideas for new moves, better algorithms, or just want to fix a typo, pull requests are welcome.

## License
Dziler is proud to be open source. Licensed under the **[GPLv3 License](LICENSE.md)**.
