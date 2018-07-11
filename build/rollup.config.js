import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js', // Path relative to package.json
    external: ['animate.css'],
    output: {
        name: 'BackUp',
        exports: 'named',
    },
    plugins: [
        vue(),
        buble(),
        resolve(),
        postcss(),
    ],
};
