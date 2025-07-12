export const setLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch (err) {
    console.error(`Erro ao fazer parse do localStorage[${key}]`, err);
    return null;
  }
};


export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};