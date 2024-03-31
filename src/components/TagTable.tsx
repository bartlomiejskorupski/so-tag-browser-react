import {
  Alert,
  AlertTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useGetTagsQuery } from '../store/service/tags-api';
import { useCallback, useMemo, useState } from 'react';
import TableSkeleton from './UI/TableSkeleton';

export default function TagTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data, isLoading, isError } = useGetTagsQuery();

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage]
  );

  const pagedTags = useMemo(() => {
    return data?.items.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [data, page, rowsPerPage]);

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
      {!isLoading && (
        <Paper className="overflow-clip">
          <TableContainer className="max-h-[426px]">
            <Table aria-label="tag-table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pagedTags?.map((t) => (
                  <TableRow key={t.name}>
                    <TableCell>{t.name}</TableCell>
                    <TableCell>
                      <span className="text-stone-600">{t.count}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}
            count={data?.items.length ?? 0}
            page={page}
            onPageChange={handleChangePage}
          ></TablePagination>
        </Paper>
      )}
    </>
  );
}
