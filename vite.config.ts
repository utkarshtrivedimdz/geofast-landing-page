import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-cname',
      closeBundle: () => {
        const cnameContent = 'geofastgames.com';
        const distDir = path.resolve(__dirname, 'dist');
        
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(distDir, 'CNAME'), cnameContent);
        console.log('✓ CNAME file generated');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base:"/",
});
