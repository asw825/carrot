export const apiTest = async () => {
  await fetch("https://dummyjson.com/products/").then((res) => res.json());
};
