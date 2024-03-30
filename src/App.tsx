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
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useGetTagsQuery } from './store/service/tags-api';

function App() {
  const tagsState = useSelector((state: RootState) => state.tags);
  const { isError, isLoading, data } = useGetTagsQuery({});

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
      {isLoading && <p>Loading...</p>}
      {data &&
        data?.items.map((t: { name: string }) => <p key={t.name}>{t.name}</p>)}
    </main>
  );
}

export default App;
