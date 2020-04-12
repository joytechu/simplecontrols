import '@testing-library/jest-dom'
import Autocomplete from '../components/autocomplete'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

test('First test', () => {
    const { container  } =     render(<Autocomplete onFetchData={() => console.log("do something")} />);
    var input = container.querySelector('input');
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
    console.log(container);
    var searching = container.querySelector('.autocomplete__searching');
    console.log(searching.innerHTML);

    fireEvent.change(input, { target: { value: '' } });

    var searchin1g = container.querySelector('.autocomplete__searching');
    var searchResults = container.querySelector('.autocomplete__searchresults');
    expect(searchin1g).toBeNull();
    expect(searchResults).toBeNull();
})