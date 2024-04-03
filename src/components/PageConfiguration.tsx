import { Button, Paper, TextField } from '@mui/material';
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions, uiSelector } from '../store/slice/ui-slice';

export default function PageConfiguration() {
  const { rowsPerPage } = useSelector(uiSelector);
  const dispatch = useDispatch();

  const [value, setValue] = useState(`${rowsPerPage}`);
  const textFieldRef = useRef<HTMLInputElement>();

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.abs(+e.target.value);
    setValue(`${newValue}`);
  }, []);

  const handleApplyClick = useCallback(() => {
    const fieldValue = textFieldRef.current?.value;
    if (!fieldValue || +fieldValue <= 0) {
      return;
    }
    dispatch(uiActions.changeRowsPerPage(+fieldValue));
  }, [textFieldRef, dispatch]);

  const handleTextFieldKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code !== 'Enter') {
        return;
      }
      handleApplyClick();
    },
    [handleApplyClick]
  );

  return (
    <Paper className="max-w-fit mx-auto py-3 px-4 mb-2">
      <div className="flex items-center gap-2">
        <TextField
          className="flex-1"
          inputRef={textFieldRef}
          type="number"
          label="Rows per page"
          onChange={handleInputChange}
          onKeyDown={handleTextFieldKeyDown}
          value={value}
        />
        <Button
          variant="contained"
          disabled={
            !textFieldRef.current?.value || +textFieldRef.current?.value <= 0
          }
          onClick={handleApplyClick}
        >
          Apply
        </Button>
      </div>
    </Paper>
  );
}
