import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  // define: {
  //   'process.env.VITE_API': JSON.stringify(process.env.VITE_API),
  // },
  envPrefix: 'APP_',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
