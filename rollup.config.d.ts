declare namespace _default {
    const input: string;
    const output: ({
        file: string;
        format: string;
        name: string;
        sourcemap: boolean;
        inlineDynamicImports: boolean;
        extend: boolean;
    } | {
        file: string;
        format: string;
        sourcemap: boolean;
        inlineDynamicImports: boolean;
        name?: undefined;
        extend?: undefined;
    })[];
}
export default _default;
