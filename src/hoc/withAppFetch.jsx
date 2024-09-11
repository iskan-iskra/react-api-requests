import { useAppFetch } from "@/use";

export function withAppFetch(WrappedComponent, fetchAPI, initialValue = null) {
  return function WithAppFetchComponent(props) {
    const [data, error, loading, getData] = useAppFetch(initialValue, fetchAPI);

    return (
      <WrappedComponent
        {...props}
        data={data}
        error={error}
        loading={loading}
        action={getData}
      />
    );
  };
}
