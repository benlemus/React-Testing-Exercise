import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("should render", () => {
  render(
    <Card
      caption={"test caption"}
      src={TEST_IMAGES[0].src}
      currNum={0}
      totalNum={3}
    />
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={"test caption"}
      src={TEST_IMAGES[0].src}
      currNum={0}
      totalNum={3}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
