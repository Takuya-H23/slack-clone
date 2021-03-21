import Hello from "./Hello";
import { render } from "../utils/test-utils";

test("should work", async () => {
  const { findByText } = render(<Hello />);
  const res = await findByText("hi");
  expect(res).toBeDefined();
});
