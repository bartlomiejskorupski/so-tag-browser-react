import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Divider, Icon, Skeleton } from '@mui/material';

export interface TableSkeletonProps {
  columnCount?: number;
  rowCount?: number;
}

export default function TableSkeleton({
  columnCount,
  rowCount,
}: TableSkeletonProps) {
  const rows = rowCount ?? 5;
  const columns = columnCount ?? 2;

  return (
    <>
      <div className="p-4 flex justify-between gap-2">
        {[...new Array(columns)].map((_, i) => (
          <div key={i} className="flex-1">
            <Skeleton className="max-w-[5ch]" />
          </div>
        ))}
      </div>
      {[...new Array(rows)].map((_, i) => (
        <>
          <Divider key={`di${i}`} />
          <div key={`d${i}`} className="p-4 flex justify-between gap-2">
            {[...new Array(columns)].map((_, i) => (
              <div className="flex-1" key={`r${i}`}>
                <Skeleton className="max-w-[12ch]" />
              </div>
            ))}
          </div>
        </>
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