import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: () => {},
  getItem: () => {},
  updateItem: () => {},
});

// eslint-disable-next-line react/prop-types
export default function Store({ children }) {
  const [items, setItems] = useState([]);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  }

  function getItem(id) {
    return items.find((item) => item.id === id);
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext(){
    return useContext(AppContext);
}
