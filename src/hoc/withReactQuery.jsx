import { queryClient } from "@/api";
import { QueryClientProvider } from "@tanstack/react-query";

export function withReactQuery(WrappedComponent) {
  return function WithReactQueryComponent(props) {
    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    );
  };
}
