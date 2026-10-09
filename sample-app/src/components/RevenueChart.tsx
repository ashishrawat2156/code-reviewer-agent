import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export default function RevenueChart({ data }: { data: any[] }) {
  return (
    <LineChart width={900} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#ff7300" strokeWidth={2} />
    </LineChart>
  );
}
