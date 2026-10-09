import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext';

export default function OrderDetails() {
  const { id } = useParams();
  const { orders } = useContext(AppContext);
  const order: any = orders.find((o) => o.id == id);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4">Order #{order.id}</Typography>
      <Typography>Customer: {order.customer}</Typography>
      <Typography>Product: {order.product}</Typography>
      <Typography>Amount: ₹{order.amount}</Typography>
      <Typography>Status: {order.status}</Typography>
      <Typography>Date: {order.date}</Typography>
    </Paper>
  );
}
