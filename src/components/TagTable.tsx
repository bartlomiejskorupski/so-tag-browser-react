import { Alert, AlertTitle, Paper } from '@mui/material';
import { useGetTagsQuery } from '../store/service/tags-api';
import TableSkeleton from './UI/TableSkeleton';
import CustomTable from './UI/CustomTable';
import { useSelector } from 'react-redux';
import { uiSelector } from '../store/slice/ui-slice';

export default function TagTable() {
  const { rowsPerPage } = useSelector(uiSelector);

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
              name: {
                label: 'Tag Name',
                className: 'px-3 py-1 rounded-3xl bg-sky-100 text-sky-700',
              },
              count: {
                label: 'Related Posts',
                className: 'text-stone-600',
                numeric: true,
              },
            }}
            rowsPerPage={rowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
