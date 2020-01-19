import babel from 'rollup-plugin-babel';
import {
    uglify
} from "rollup-plugin-uglify";
export default {
    input: 'src/debounce.js',
    output: {
        file: 'debounce.min.js',
        format: 'umd',
        name: 'debounce'
    },
    plugins: [
        babel(),
        uglify()
    ]
};