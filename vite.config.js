import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base 경로는 잘 사용하지 않음, 원칙적으로는 이렇게 보면 안되고, 빌드 프로세스를 거쳐서 확인해야한다 - 바쎌 (클라우드 서비스) 이용해서 확인예정
  // base: '/react2/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  // 서버가 켜질 때 브라우저 창을 자동으로 열어주는 옵션
  server: {
    open: true,
  },
});
