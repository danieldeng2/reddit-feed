import { render } from "@testing-library/react";
import MyNavBar from "./index";

describe("MyNavBar", function () {
  beforeEach(() => {
    render(
      <MyNavBar
        subreddit={""}
        timeframe={"day"}
        limit={25}
        setSubreddit={() => {}}
        setTimeframe={() => {}}
        setLimit={() => {}}
      />
    );
  });

  it("Allows selection of subreddits", () => {
    const subredditInput = document.querySelector(
      "input[placeholder='Subreddit']"
    );
    expect(subredditInput).toBeInTheDocument();
  });

  it("Allows selection of timeframes", () => {
    const timeframeElement = document.querySelector("#time-selector");
    expect(timeframeElement).toBeInTheDocument();
  });

  it("Allows selection of limits", () => {
    const limitElement = document.querySelector("#limit-selector");
    expect(limitElement).toBeInTheDocument();
  });
});
