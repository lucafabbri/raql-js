export default {
    input: 'out/index.js',
    output: [
        {
            file: 'out/plugin.js',
            format: 'iife',
            name: 'raql.ts',
            sourcemap: true,
            inlineDynamicImports: true,
            extend: true
        },
        {
            file: 'out/plugin.cjs.js',
            format: 'cjs',
            sourcemap: true,
            inlineDynamicImports: true,
        },
    ],
};
