import { Button, Paper, TextField } from '@mui/material';
import { ChangeEvent, useCallback, useRef, useState } from 'react';

export default function PageConfiguration() {
  const [value, setValue] = useState('10');
  const textFieldRef = useRef<HTMLInputElement>();

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.abs(+e.target.value);
    setValue(`${newValue}`);
  }, []);

  const handleApplyClick = useCallback(() => {
    console.log(textFieldRef.current?.value);
  }, []);

  return (
    <Paper className="max-w-fit py-3 px-4 mb-2">
      <div className="flex items-center gap-2">
        <TextField
          inputRef={textFieldRef}
          type="number"
          label="Rows per page"
          onChange={handleInputChange}
          value={value}
        />
        <Button variant="contained" onClick={handleApplyClick}>
          Apply
        </Button>
      </div>
    </Paper>
  );
}
