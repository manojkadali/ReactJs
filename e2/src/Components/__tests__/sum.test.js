import { Add } from "../Add";

test("Sum function should calculate addition",()=>{
   const result= Add(3,4);
   
   //Assertion
   expect(result).toBe(7);
})