import {
  render,
  screen,
} from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  const mockGetMoodyTunes = jest.fn();
  const mockUpdateMoodName = jest.fn();

  it("Should render all elements on the Form", () => {
    render(
      <MemoryRouter>
        <Form getMoodyTunes={mockGetMoodyTunes} updateMood={ mockUpdateMoodName }/>
      </MemoryRouter>
    );
    const moodHeader = screen.getByText('Please select your :')
    const mood1 = screen.getByText('Happy')
    const mood2 = screen.getByText("Sad");
    const mood3 = screen.getByText("Chill");
    const mood4 = screen.getByText("Amorous");
    const mood5 = screen.getByText("Excited");
    const mood6 = screen.getByText("Angry");
    const decadeHeader = screen.getByText('Please select a :')
    const the50s = screen.getByText("1950's");
    const the60s = screen.getByText("1960's");
    const the70s = screen.getByText("1970's");
    const the80s = screen.getByText("1980's");
    const the90s = screen.getByText("1990's");
    const the00s = screen.getByText("2000's");
    const the10s = screen.getByText("2010's");
    const submitButton = screen.getByRole('button', { name: /get songs/i });

    expect(moodHeader).toBeInTheDocument();
    expect(mood1).toBeInTheDocument();
    expect(mood2).toBeInTheDocument();
    expect(mood3).toBeInTheDocument();
    expect(mood4).toBeInTheDocument();
    expect(mood5).toBeInTheDocument();
    expect(mood6).toBeInTheDocument();
    expect(decadeHeader).toBeInTheDocument();
    expect(the50s).toBeInTheDocument();
    expect(the60s).toBeInTheDocument();
    expect(the70s).toBeInTheDocument();
    expect(the80s).toBeInTheDocument();
    expect(the90s).toBeInTheDocument();
    expect(the00s).toBeInTheDocument();
    expect(the10s).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Should make function call with correct params", () => {
    render(
      <MemoryRouter>
        <Form getMoodyTunes={mockGetMoodyTunes} updateMood={ mockUpdateMoodName } />
      </MemoryRouter>
    );

    const mood1 = screen.getByText('Happy')
    const the70s = screen.getByText("1970's");
    const submitButton = screen.getByRole('button', { name: /get songs/i });

    userEvent.click(mood1);
    userEvent.click(the70s);
    userEvent.click(submitButton);

    expect(mockGetMoodyTunes).toHaveBeenCalledWith(
      "580000,950000",
      "date70"
    );
  });
});