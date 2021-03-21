import { render } from "@testing-library/react";

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const customRender = (ui: React.ReactElement, options?: Omit<any, "queries">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
