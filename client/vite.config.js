import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import removeConsole from 'vite-plugin-remove-console'
import path from 'node:path'

/*
  DOCS: https://vitejs.dev/config/
*/

const MODE_DEVELOPMENT = 'development'
const PORT = 3001

// ---------
const getServerConfig = (mode) => {
  if (mode === MODE_DEVELOPMENT) {
    return {
      host: true,
      port: PORT
    }
  }
  else return {}
}

// ======================================
export default defineConfig(({mode}) => {
  console.log(`build.mode: ${mode}`)
  const server = getServerConfig(mode)

  let plugins = [
    react()
  ]
  if (mode !== MODE_DEVELOPMENT) {
    plugins.push(
      removeConsole({ includes: ['debug']})
    )
  }

  return {
    server,
    build: {
      outDir: 'build'
    },
    define: {
      'process.env': process.env // TODO: remove this so not all ENV vars are exposed
    },
    plugins,
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    },
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src/')
      },
    },
  } 
})
