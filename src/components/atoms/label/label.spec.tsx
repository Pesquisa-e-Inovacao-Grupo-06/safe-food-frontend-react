import React from "react";
import {render, screen} from '@testing-library/react'
import {Label} from ".";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "@/styles/theme";

const makeSut = (required = false) => {
    let sut = render(
        <ThemeProvider theme={lightTheme}>
            <Label htmlFor="element" required={required} >Minha label:</Label>
        </ThemeProvider>
    );
}
describe("Componente - Label", ()=>{
    test('it should be display label in document', ()=>{
        makeSut()
        expect(screen.getByText(/Minha label/i)).toBeInTheDocument();
    })
})