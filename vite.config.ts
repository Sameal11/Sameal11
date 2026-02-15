import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-server',
      configureServer(server) {
        server.middlewares.use('/api/visitor', async (req, res, next) => {
          try {
            const { default: handler } = await server.ssrLoadModule('/api/visitor.ts');

            // Polyfill response methods for Vercel/Express compatibility
            const enhancedRes = Object.assign(res, {
              status: (code: number) => {
                res.statusCode = code;
                return enhancedRes;
              },
              json: (data: any) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return enhancedRes;
              }
            });

            await handler(req, enhancedRes);
          } catch (err) {
            console.error('API Error:', err);
            next(err);
          }
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
