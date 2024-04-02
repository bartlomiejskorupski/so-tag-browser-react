import { Alert, AlertTitle, Paper } from '@mui/material';
import { useGetTagsQuery } from '../store/service/tags-api';
import TableSkeleton from './UI/TableSkeleton';
import CustomTable from './UI/CustomTable';

export default function TagTable() {
  const { data, isLoading, isError } = useGetTagsQuery();

  if (isError) {
    return (
      <Alert severity="error" variant="filled">
        <AlertTitle>Error</AlertTitle>
        There was an error loading tags. Please try again later.
      </Alert>
    );
  }

  return (
    <>
      {isLoading && (
        <Paper>
          <TableSkeleton columnCount={2} rowCount={4} />
        </Paper>
      )}
      {!isLoading && data && (
        <Paper className="overflow-clip">
          <CustomTable
            data={data.items}
            idColumn="name"
            columnDefinitions={{
              name: 'Name',
              count: 'Count',
            }}
            rowsPerPage={10}
          />
        </Paper>
      )}
    </>
  );
}
