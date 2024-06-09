// import out outputted wasm ES6 module
//which, export default's, an initialization function
import init from "./pkg/hello_world.js";

const runWasm = async () => {
    // instantiate our wasm module
    const helloWorld = await init("./pkg/hello_wasm_bg.wasm");

    //call the add function export from wasm, save the result
    const addResult = helloWorld.add(13, 51);

    // set the result onto the body
    document.body.textContent = `Hello world! addResult: ${addResult}`;
};
runWasm();