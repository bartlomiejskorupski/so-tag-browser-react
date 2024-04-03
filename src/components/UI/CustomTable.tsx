import { useCallback, useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

type ColumnOptions = {
  label: string;
  className?: string;
};

type ColumnDefinitions = {
  [name: string]: ColumnOptions;
};

type DataType = {
  [name: string]: any;
};

export interface CustomTableProps {
  data: DataType[];
  columnDefinitions: ColumnDefinitions;
  idColumn: string;
  rowsPerPage: number;
}

export default function CustomTable({
  data,
  columnDefinitions,
  idColumn,
  rowsPerPage,
}: CustomTableProps) {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage]
  );

  const pagedData = useMemo(
    () => data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [data, page, rowsPerPage]
  );

  return (
    <>
      <TableContainer className="max-h-[426px]">
        <Table aria-label="tag-table" stickyHeader>
          <TableHead>
            <TableRow>
              {Object.values(columnDefinitions).map((val) => (
                <TableCell key={val.label}>{val.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedData?.map((t) => (
              <TableRow key={t?.[idColumn]}>
                {Object.keys(columnDefinitions).map((key) => (
                  <TableCell key={`${t?.[idColumn]} ${t[key]}`}>
                    <span className={columnDefinitions[key].className}>
                      {t[key].toString()}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        count={data?.length ?? 0}
        page={page}
        onPageChange={handleChangePage}
      ></TablePagination>
    </>
  );
}
