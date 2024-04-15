export function errorHandler(error) {
  console.log("handled>>>", error);

  const message =
    error?.["response"]?.["data"]?.["message"] ||
    error?.message ||
    "network error";

  return message;
}
