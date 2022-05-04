import LoginPage from "../../components/LoginPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import AuthProvider from "../../components/AuthProvider";
import "@testing-library/jest-dom";



let result;

beforeEach(() => {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    );
  }

  result = render(<LoginPage />, { wrapper: Wrapper });
});

test("should render LoginPage correctly", () => {
  expect(result).toMatchSnapshot();

  expect(result.getByRole("button", { name: /Log in/i })).toBeInTheDocument();

  expect(result.getByRole("heading", { name: /Log in/i })).toBeInTheDocument();

  expect(
    result.getByRole("textbox", { name: /username/i })
  ).toBeInTheDocument();
});

