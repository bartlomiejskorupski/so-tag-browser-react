import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useGetTagsQuery } from '../store/service/tags-api';

export default function TagTable() {
  const { data, isLoading, isError } = useGetTagsQuery();

  console.log(data);

  return (
    <TableContainer
      component={Paper}
      className="mx-8 my-4 w-auto md:min-w-[70%] md:mx-auto"
    >
      <Table aria-label="tag-table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map((t) => (
            <TableRow key={t.name}>
              <TableCell>{t.name}</TableCell>
              <TableCell>{t.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
