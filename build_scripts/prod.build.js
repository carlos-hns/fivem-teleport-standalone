const { resolve } = require('path')
const { build } = require('esbuild')

build({
    entryPoints: ['./src/**'],
    outdir: resolve(__dirname,'../build'),
    bundle: true,
    minify: true,
    platform: 'browser',
    target: 'ES2020',
    logLevel: 'info',
    
}).catch(() => process.exit(1))