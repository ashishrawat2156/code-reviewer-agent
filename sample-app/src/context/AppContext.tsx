import { createContext, useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:5173/mock';
const API_KEY = 'sk_live_FAKE_9f8e7d6c5b4a3210';

export const AppContext = createContext<any>(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState({ name: 'Ashish', role: 'admin' });
  const [darkMode, setDarkMode] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/orders.json`, { headers: { 'x-api-key': API_KEY } })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const deleteOrder = (id: number) => {
    const index = orders.findIndex((o) => o.id === id);
    orders.splice(index, 1);
    setOrders(orders);
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, darkMode, setDarkMode, orders, setOrders, loading, deleteOrder }}
    >
      {children}
    </AppContext.Provider>
  );
}
