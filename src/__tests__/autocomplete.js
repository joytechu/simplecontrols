import "@testing-library/jest-dom";
import Autocomplete from "../components/autocomplete";
import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

test("Autocomplete control Renders", () => {
  //arrange
  const { container } = render(
    <Autocomplete
      onFetchData={() => console.log("do something")}
      onSelectedResult={(item) => console.log(item)}
    />
  );
  let input = container.querySelector("input");

  //act

  //assert
  expect(input).toBeInTheDocument();
});

test("Autocomplete Input changes as you type", () => {
  //arrange
  const { container } = render(
    <Autocomplete
      onFetchData={() => console.log("do something")}
      onSelectedResult={(item) => console.log(item)}
    />
  );
  let input = container.querySelector("input");

  //act
  fireEvent.change(input, { target: { value: "23" } });

  //assert
  expect(input.value).toBe("23");
});

test("Autocomplete calls callback when input changes", () => {
  //arrange
  const mockCallback = jest.fn((x) => [
    { DisplayText: "This is a display text", DefaultValue: "x", Value: "On" },
  ]);
  const { container } = render(
    <Autocomplete
      onFetchData={mockCallback}
      onSelectedResult={(item) => console.log(item)}
    />
  );
  let input = container.querySelector("input");

  //act
  fireEvent.change(input, { target: { value: "23" } });

  //assert
  expect(input.value).toBe("23");
  expect(mockCallback.mock.calls.length).toBe(1);
});

test("Autocomplete calls callback and renders Searching while calling search function", () => {
  //arrange
  const mockCallback = jest.fn((x) => [
    { DisplayText: "F#", DefaultValue: "x", Value: "On" },
    { DisplayText: "Javascript", DefaultValue: "x", Value: "On" },
    { DisplayText: "C#", DefaultValue: "x", Value: "On" },
    { DisplayText: "Ruby", DefaultValue: "x", Value: "On" },
    { DisplayText: "Java", DefaultValue: "x", Value: "On" },
    { DisplayText: "VB", DefaultValue: "x", Value: "On" },
  ]);
  const { container, getByText, findByText } = render(
    <Autocomplete
      onFetchData={mockCallback}
      onSelectedResult={(item) => console.log(item)}
    />
  );
  let input = container.querySelector("input");

  //act
  fireEvent.change(input, { target: { value: "F#" } });

  //assert
  expect(input.value).toBe("F#");
  expect(getByText("Searching...")).toBeInTheDocument();
});

test("Autocomplete calls callback and results match api results", async () => {
  //arrange
  const mockCallback = jest.fn(async (x) => [
    { DisplayText: "F#", DefaultValue: "x", Value: "On" },
    { DisplayText: "Javascript", DefaultValue: "x", Value: "On" },
    { DisplayText: "C#", DefaultValue: "x", Value: "On" },
    { DisplayText: "Ruby", DefaultValue: "x", Value: "On" },
    { DisplayText: "Java", DefaultValue: "x", Value: "On" },
    { DisplayText: "VB", DefaultValue: "x", Value: "On" },
  ]);
  const { container, getByText } = render(
    <Autocomplete
      onFetchData={mockCallback}
      onSelectedResult={(item) => console.log(item)}
    />
  );
  let input = container.querySelector("input");

  //act
  fireEvent.change(input, { target: { value: "F#" } });
  await waitFor(() => expect(mockCallback).toHaveBeenCalledTimes(1));

  //Assert
  //TODO: Better way of doing this?
  setTimeout(async () => {
    expect(getByText("F#")).toBeInTheDocument();
    expect(getByText("Javascript")).toBeInTheDocument();
    expect(getByText("C#")).toBeInTheDocument();
    expect(getByText("Ruby")).toBeInTheDocument();
    expect(getByText("Java")).toBeInTheDocument();
    expect(getByText("VB")).toBeInTheDocument();
  }, 1500);
});

//Todo:
//Check Search Results Count
//Select a result item
