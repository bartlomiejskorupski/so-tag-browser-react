import {
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
import TagTableSkeleton from './TagTableSkeleton';

export default function TagTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data, isLoading, isError: dataError } = useGetTagsQuery();

  const isError = true;
  // const isLoading = false;

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

  return (
    <>
      {isLoading && <TagTableSkeleton rowCount={4} />}
      {!isLoading && (
        <Paper>
          <TableContainer className="max-h-[400px]">
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
            rowsPerPage={10}
            rowsPerPageOptions={[10]}
            count={data?.items.length ?? 0}
            page={page}
            onPageChange={handleChangePage}
          ></TablePagination>
        </Paper>
      )}
    </>
  );
}
