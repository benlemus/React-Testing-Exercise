import { render, screen, fireEvent } from "@testing-library/react";
import CoinFlip from "./CoinFlip";

import heads from "./heads.jpg";
import tails from "./tails.jpg";

beforeEach(function () {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.24)
    .mockReturnValueOnce(0.76);
});

afterEach(function () {
  jest.restoreAllMocks();
});

it("should render", () => {
  render(<CoinFlip />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<CoinFlip />);

  expect(asFragment()).toMatchSnapshot();
});

it("should not render coin when page loads", () => {
  render(<CoinFlip />);

  const coinImage = screen.getByAltText("");
  expect(coinImage).toHaveAttribute("class", "genericCoin");
});

it("should update the counter clicks", () => {
  render(<CoinFlip />);

  const btn = screen.getByRole("button", { name: /flip coin!/i });

  fireEvent.click(btn);
  expect(
    screen.getByText(/Out of 1 flips.*1 heads.*0 tails/i)
  ).toBeInTheDocument();

  fireEvent.click(btn);
  expect(
    screen.getByText(/Out of 2 flips.*1 heads.*1 tails/i)
  ).toBeInTheDocument();

  fireEvent.click(btn);
  expect(
    screen.getByText(/Out of 3 flips.*2 heads.*1 tails/i)
  ).toBeInTheDocument();
});
