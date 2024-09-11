export const withAsyncLogs =
  (callback) =>
  async (...args) => {
    try {
      console.log(`${callback.name} is used`);
      return await callback(...args);
    } catch (error) {
      console.log(`Error in ${callback.name}:`, error);
      throw error;
    }
  };

export const delayDecorator = (fn, delay = 0) => {
  return async (...args) => {
    const promise = fn(...args);

    await new Promise((resolve) => setTimeout(resolve, delay));

    return promise;
  };
};
