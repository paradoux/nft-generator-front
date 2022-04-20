import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: Write more extensive tests.
describe("when wallet not connected", () => {
  test("renders not connected wallet message", () => {
    render(<App />);
    const titleElement = screen.getByText(
      /You're not connected to your wallet/i
    );
    const connectWalletButton = screen.getByText(/Connect to Wallet/i);
    const submitNftButton = screen.queryByText(/Submi(n)t!/i);
    expect(titleElement).toBeInTheDocument();
    expect(connectWalletButton).toBeInTheDocument();
    expect(submitNftButton).not.toBeInTheDocument();
  });
});
