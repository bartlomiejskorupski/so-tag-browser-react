import {
  Button,
  Card,
  CardHeader,
  IconButton,
  Slider,
  Tooltip,
} from '@mui/material';
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <main className="flex flex-col gap-2 items-center">
      <h1 className="text-3xl md:text-5xl">Tag Browser</h1>
      <Button variant="contained">Test button</Button>
      <Card className="px-4">
        <CardHeader title="Some slider" />
        <Slider />
      </Card>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </main>
  );
}

export default App;
