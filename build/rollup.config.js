import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
    input: 'src/index.js',
    output: {
        name: 'BackUp',
        exports: 'named',
    },
    plugins: [
        vue(),
        buble()
    ],
};
