import babel from 'rollup-plugin-babel';
import {
    uglify
} from "rollup-plugin-uglify";
const needUglify = process.argv.includes('--uglify')
export default {
    input: 'types/debounce.ts',
    output: [{
        file: 'debounce.js',
        format: 'umd',
        name: 'debounce'
    }],
    plugins: [
        babel({
            "extensions": [".js", ".ts"]
        }),
        needUglify && uglify()
    ]
};