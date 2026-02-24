# Professional Developer Portfolio

A premium, high-performance developer portfolio built with Vue 3, Vite, and modern CSS techniques (Glassmorphism, Neon Gradients).

## 🚀 Features

- **MacOS-style Hero Section**: Syntax-highlighted code editor visual.
- **Glassmorphism Design**: iOS-inspired frosted glass effects.
- **Micro-interactions**: Custom scrollbars, smooth scrolling, and hover effects.
- **Responsive Navigation**: Sticky frosted-glass navbar.
- **Professional Experience**: Horizontal/Vertical timelines for job history.
- **Project Showcase**: Cinematic image-reveal styling.

## 🛠 Tech Stack

- **Frontend**: Vue 3 (Composition API)
- **Styling**: Vanilla CSS with CSS Variables
- **Build Tool**: Vite
- **Icons**: Devicon (SVG)
- **Deployment**: Docker / Nginx

---

## 💻 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [PNPM](https://pnpm.io/)

### Setup

1. **Install dependencies:**

   ```sh
   pnpm install
   ```

2. **Run development server:**

   ```sh
   pnpm run dev
   ```

   The app will be available at `http://localhost:5173`.

3. **Format code:**

   ```sh
   pnpm run format
   ```

4. **Build for production:**
   ```sh
   pnpm run build
   ```

---

## 🐳 Docker Setup

### Development Mode

Run the development environment inside a Docker container with hot-reloading:

```sh
docker-compose up app-dev
```

Access at `http://localhost:5173`.

### Production Mode

Build and run the production-optimized image (served via Nginx):

```sh
# Build and start the production container
docker-compose up --build app-prod
```

Access at `http://localhost:8080`.

### Manual Docker Commands

**Build Production Image:**

```sh
docker build -t portfolio-prod .
```

**Run Production Container:**

```sh
docker run -d -p 8080:80 portfolio-prod
```

---

## 🚀 Deployment to Netlify

The easiest way to deploy this portfolio is using Netlify's GitHub integration.

### Steps to Deploy:

1. **Push your code to GitHub.**
2. **Log in to Netlify** and click **"Add new site"** -> **"Import an existing project"**.
3. **Connect your GitHub account** and select this repository.
4. **Deploy Settings**:
   - **Build Command**: `pnpm build`
   - **Publish Directory**: `dist`
5. **Click "Deploy site"**.

_Note: The `netlify.toml` file included in this repo handles the SPA routing automatically, so your "deep links" (like `/experience`) will work perfectly._

---

## 📁 Project Structure

- `src/components/`: Reusable Vue components.
- `src/assets/`: Global styles and static assets.
- `src/views/`: Main page views (HomeView.vue).
- `Dockerfile`: Production Docker configuration.
- `Dockerfile.dev`: Development Docker configuration.
- `docker-compose.yml`: Docker service orchestration.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
