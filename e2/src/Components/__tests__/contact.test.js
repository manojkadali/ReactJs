import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe()

test("rendered contactus page is expected",()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");//quering
    expect(heading).toBeInTheDocument();//assertion
});

test("shoulde render 2 inputBoxes", ()=>{
    render(<Contact/>);

    const inps=screen.getAllByRole("textbox");
    expect(inps.length).toBe(2);
    
});  