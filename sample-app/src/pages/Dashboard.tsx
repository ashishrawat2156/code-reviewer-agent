import { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KpiCard from '../components/KpiCard';
import RevenueChart from '../components/RevenueChart';
import { AppContext } from '../context/AppContext';

export default function Dashboard() {
  const { orders, loading } = useContext(AppContext);
  const [revenue, setRevenue] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [delivered, setDelivered] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5173/mock/revenue.json')
      .then((res) => res.json())
      .then((data) => setRevenue(data));
  }, []);

  useEffect(() => {
    setTotalRevenue(orders.reduce((sum, o) => sum + o.amount, 0));
    setDelivered(orders.filter((o) => o.status === 'Delivered').length);
  }, [orders]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid size={3}>
          <KpiCard title="Total Orders" value={orders.length} />
        </Grid>
        <Grid size={3}>
          <KpiCard title="Revenue" value={'₹' + totalRevenue} />
        </Grid>
        <Grid size={3}>
          <KpiCard title="Delivered" value={delivered} />
        </Grid>
        <Grid size={3}>
          <KpiCard title="Avg. Order" value={'₹' + totalRevenue / orders.length} />
        </Grid>
      </Grid>
      <Paper sx={{ p: 2, mt: 3 }}>
        <Typography variant="h6">Revenue Trend</Typography>
        <RevenueChart data={revenue} />
      </Paper>
    </div>
  );
}
