import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  
import Markdown from '@pity/vite-plugin-react-markdown'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    Markdown({
      // wrapperComponentName: 'ReactMarkdown',
      // wrapperComponentPath: './src/components/page',
      // if you want use components in md file, please add it in this
      // [ComponentName]: `componentPath`
      // // ?‍?: the `ComponentName` must be `CamelCase`
      // importComponentsPath: {
      //   ReactTest: './src/components/pages/mdtest',
      // },
      // markdownItUses: [
      //   prism,
      // ],
    }),
  ], 
})