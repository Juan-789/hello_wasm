
use wasm_bindgen::prelude::*;

fn main() {
    add(5,5);
}

#[wasm_bindgen]
pub fn add(a: i32, b:i32) -> i32 {
    return a+b;
}