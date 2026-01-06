import { test } from "@playwright/test";

test.beforeAll('',()=>{

    

})
test.beforeEach('', ()=>{


    console.log('before each logi to app');
})
test.afterEach('', ()=>{

console.log('after each logut from app' );

})
test.afterAll('',()=>{


console.log('after all disconnect from database');

})


// test('test1', ()=>{

//     console.log('test1');



// })


// test('test2', ()=>{
//     console.log('test2');



// })