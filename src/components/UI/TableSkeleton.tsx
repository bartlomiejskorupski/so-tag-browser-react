import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Divider, Icon, Skeleton } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import { range } from '../../utils/array-utils';

export interface TableSkeletonProps {
  /**
   * Number of columns
   */
  columnCount?: number;
  /**
   * Number of rows
   */
  rowCount?: number;
}

/**
 * Table loading state
 */
export default function TableSkeleton({
  columnCount = 2,
  rowCount = 5,
}: TableSkeletonProps) {
  return (
    <>
      <div className="p-4 flex justify-between gap-2">
        {range(columnCount).map((i) => (
          <div key={i} className="flex-1">
            <Skeleton className="max-w-[5ch]" />
          </div>
        ))}
      </div>
      {range(rowCount).map((i) => (
        <Fragment key={`hr${i}`}>
          <Divider />
          <div className="p-4 flex justify-between gap-2">
            {range(columnCount).map((j) => (
              <div className="flex-1" key={`c${i}${j}`}>
                <Skeleton className="max-w-[12ch]" />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
      <Divider />
      <div className="py-4 pr-2 flex justify-end items-center gap-4">
        <Skeleton className="w-[10ch] mr-4" />
        <Icon className="text-stone-300">
          <KeyboardArrowLeft />
        </Icon>
        <Icon className="text-stone-300">
          <KeyboardArrowRight />
        </Icon>
      </div>
    </>
  );
}
