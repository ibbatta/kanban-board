export const createId = () => {
  const id = Math.random() * Date.now();
  return id.toString(36);
};
