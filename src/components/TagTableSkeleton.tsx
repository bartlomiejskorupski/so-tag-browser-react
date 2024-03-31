import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Grid, Icon, Paper, Skeleton } from '@mui/material';

export interface TagTableSkeletonProps {
  rowCount?: number;
}

export default function TagTableSkeleton({ rowCount }: TagTableSkeletonProps) {
  const cellsCount = rowCount ? rowCount * 2 : 10;

  return (
    <Paper className="mb-4">
      <Grid container>
        <Grid item xs={6}>
          <Skeleton className="w-[4ch] m-4" />
        </Grid>
        <Grid item xs={6}>
          <Skeleton className="w-[5ch] m-4" />
        </Grid>
        {[...new Array(cellsCount)].map(() => (
          <Grid item xs={6}>
            <Box borderTop="1px solid rgba(128, 128, 128, 0.3)">
              <Skeleton className="w-[10ch] m-4" />
            </Box>
          </Grid>
        ))}
        <Grid item xs={10}>
          <Skeleton className="w-[10ch] m-4 ml-auto" />
        </Grid>
        <Grid item xs={1}>
          <Icon className="text-stone-300 my-4">
            <KeyboardArrowLeft />
          </Icon>
        </Grid>
        <Grid item xs={1}>
          <Icon className="text-stone-300 my-4">
            <KeyboardArrowRight />
          </Icon>
        </Grid>
      </Grid>
    </Paper>
  );
}
