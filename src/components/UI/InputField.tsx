import { Button, TextField } from '@mui/material';
import {
  ChangeEvent,
  ForwardedRef,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  forwardRef,
  memo,
  useCallback,
  useState,
} from 'react';

export interface InputFieldProps {
  /**
   * Input label
   */
  label: string;
  /**
   * Button content
   */
  buttonLabel?: string;
  /**
   * Initial value inside of the field
   */
  initialValue?: string;
  /**
   * Apply event handler. Called when the button is clicked or when enter is pressed.
   */
  onApply?: (value: string) => void;
  /**
   * Type of the input element
   */
  type?: HTMLInputTypeAttribute;
  /**
   * Condition under which the apply button is disabled
   */
  disabledCondition?: (value: string) => boolean;
}

/**
 * Input field with an apply button.
 */
const InputField = memo(
  forwardRef(function (
    {
      label,
      buttonLabel = 'Apply',
      initialValue = '',
      onApply,
      disabledCondition,
      type = 'text',
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    const [value, setValue] = useState(`${initialValue}`);

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      },
      [setValue]
    );

    const handleApplyClick = useCallback(() => {
      onApply?.(value);
    }, [value, onApply]);

    const handleTextFieldKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code !== 'Enter') {
          return;
        }
        if (disabledCondition?.(value)) {
          return;
        }
        handleApplyClick();
      },
      [disabledCondition, value, handleApplyClick]
    );

    return (
      <div className="flex items-center gap-2">
        <TextField
          inputRef={ref}
          type={type}
          label={label}
          onChange={handleInputChange}
          onKeyDown={handleTextFieldKeyDown}
          value={value}
        />
        <Button
          variant="contained"
          disabled={disabledCondition?.(value)}
          onClick={handleApplyClick}
        >
          {buttonLabel || 'Apply'}
        </Button>
      </div>
    );
  })
);

export default InputField;
