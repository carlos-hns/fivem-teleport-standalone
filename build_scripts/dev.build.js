
const { context } = require('esbuild');
const { resolve } = require('path');

async function watch() {
    let ctx = await context({
        entryPoints: ['./src/**'],
        outdir: resolve(__dirname,'../build'),
        bundle: true,
        minify: true,
        platform: 'browser',
        target: 'ES2020',
        logLevel: 'info', 
    });
    
    await ctx.watch();

    console.log("[Running dev build]");
}

watch();


