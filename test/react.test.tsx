import {render, screen} from '@testing-library/react'
import React from 'react'
const Button = () => {
    return <>
        <button>Oi</button>
    </>
}

describe("button tests", () => {
    it('should be render button', () => {
        render(<Button />);

        expect(screen.getByText("Oi")).toBeInTheDocument()
    })
})
