import '@testing-library/jest-dom'
import Autocomplete from '../components/autocomplete'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

test('Autocomplete control Renders', () => {
    const { container  } =     render(<Autocomplete onFetchData={() => console.log("do something")} onSelectedResult={(item) => console.log(item)} />);
    var input = container.querySelector('input');
    expect(input).toBeInTheDocument();
})

test('Autocomplete Input changes as you type', () => {
    const { container  } =     render(<Autocomplete onFetchData={() => console.log("do something")} onSelectedResult={(item) => console.log(item)} />);
    var input = container.querySelector('input');
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
})