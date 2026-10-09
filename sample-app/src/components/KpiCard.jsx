import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function KpiCard(props) {
  return (
    <Card style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #1565c0', padding: '8px' }}>
      <CardContent>
        <Typography style={{ color: '#777', fontSize: '13px' }}>{props.title}</Typography>
        <Typography style={{ color: '#222', fontSize: '26px', fontWeight: 700 }}>
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
