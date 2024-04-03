import { useCallback, useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material';

type ColumnOptions = {
  label: string;
  className?: string;
  numeric?: boolean;
};

type ColumnDefinitions = {
  [name: string]: ColumnOptions;
};

type DataType = {
  [name: string]: any;
};

type Order = 'asc' | 'desc';

export interface CustomTableProps {
  /**
   * The list of data to be displayed. Each field has to be defined as a column in columnDefinitions prop.
   */
  data: DataType[];
  /**
   * Column definitions with information about each of the columns.
   *
   * @param label(string)
   * Column header label text
   *
   * @param numeric(number, optional)
   * Is the field numeric?
   *
   * @param className(string, optional)
   * Used for styling column cells
   */
  columnDefinitions: ColumnDefinitions;
  /**
   * Name of the column that is used as an id for the key prop
   */
  idColumn: string;
  /**
   * How many rows should be displayed for each page?
   */
  rowsPerPage?: number;
  /**
   * Classname attribute for table container styling
   */
  className?: string;
}

/**
 * Pageable table with column sorting
 */
export default function CustomTable({
  className = '',
  data,
  columnDefinitions,
  idColumn,
  rowsPerPage = 10,
}: CustomTableProps) {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState<string | null>(null);
  const [order, setOrder] = useState<Order>('asc');

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage]
  );

  const handleSortHeader = useCallback(
    (fieldName: string) => {
      if (orderBy === fieldName) {
        setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setOrder('asc');
      }
      setOrderBy(fieldName);
    },
    [setOrderBy, setOrder, orderBy]
  );

  const pagedData = useMemo(() => {
    const dataCopy = [...data];
    if (orderBy) {
      dataCopy.sort(getComparator<keyof DataType>(order, orderBy));
    }
    return dataCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [data, order, orderBy, page, rowsPerPage]);

  // Check if we're out of bounds
  if (data.length !== 0 && page * rowsPerPage >= data.length) {
    setPage(0);
  }

  return (
    <>
      <TableContainer className={`${className} max-h-[426px]`}>
        <Table aria-label="tag-table" stickyHeader>
          <TableHead>
            <TableRow>
              {Object.keys(columnDefinitions).map((key) => (
                <TableCell
                  key={columnDefinitions[key].label}
                  align={columnDefinitions[key].numeric ? 'right' : 'left'}
                >
                  <TableSortLabel
                    active={orderBy !== null && orderBy === key}
                    direction={
                      orderBy !== null && orderBy === key ? order : 'asc'
                    }
                    onClick={() => handleSortHeader(key)}
                  >
                    {columnDefinitions[key].label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedData.length === 0 && (
              <p className="pl-2 text-stone-400">No data...</p>
            )}
            {pagedData?.map((t) => (
              <TableRow key={t?.[idColumn]}>
                {Object.keys(columnDefinitions).map((key) => (
                  <TableCell
                    key={`${t?.[idColumn]} ${t[key]}`}
                    align={columnDefinitions[key].numeric ? 'right' : 'left'}
                  >
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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
