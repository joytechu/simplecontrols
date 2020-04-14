import '@testing-library/jest-dom'
import Autocomplete from '../components/autocomplete'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

test('Autocomplete control Renders', () => {
    //arrange
    const { container  } =     render(<Autocomplete onFetchData={() => console.log("do something")} onSelectedResult={(item) => console.log(item)} />);
    var input = container.querySelector('input');
    
    //act

    //assert
    expect(input).toBeInTheDocument();
})

test('Autocomplete Input changes as you type', () => {
    //arrange
    const { container  } =     render(<Autocomplete onFetchData={() => console.log("do something")} onSelectedResult={(item) => console.log(item)} />);
    var input = container.querySelector('input');
    
    //act
    fireEvent.change(input, { target: { value: '23' } })
    
    //assert
    expect(input.value).toBe('23')
})

test('Autocomplete calls callback when input changes', () => {
    //arrange
    const mockCallback = jest.fn(x => [{ DisplayText:"This is a display text", DefaultValue: "x", Value: "On"}]);
    const { container  } =     render(<Autocomplete onFetchData={mockCallback} onSelectedResult={(item) => console.log(item)} />);
    var input = container.querySelector('input');
    
    //act
    fireEvent.change(input, { target: { value: '23' } })

    //assert
    expect(input.value).toBe('23')
    expect(mockCallback.mock.calls.length).toBe(1);
})


//On Selected Value