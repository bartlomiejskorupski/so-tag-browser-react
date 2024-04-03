import { Paper } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions, uiSelector } from '../store/slice/ui-slice';
import InputField from './UI/InputField';

export default function PageConfiguration() {
  const { rowsPerPage } = useSelector(uiSelector);
  const dispatch = useDispatch();

  const handleApply = useCallback(
    (value: string) => {
      dispatch(uiActions.changeRowsPerPage(+value));
    },
    [dispatch]
  );

  const disabledCondition = useCallback((value: string) => +value <= 0, []);

  return (
    <Paper className="max-w-fit mx-auto py-3 px-4 mb-2">
      <InputField
        label="Rows per page"
        type="number"
        initialValue={`${rowsPerPage}`}
        disabledCondition={disabledCondition}
        onApply={handleApply}
      />
    </Paper>
  );
}
