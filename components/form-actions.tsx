import React from "react";
import { Button } from "./ui/button";
type FormActionsProps = {
  className: string;
  onReset: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const FormActions = ({ onReset, className }: FormActionsProps) => {
  return (
    <div className={className}>
      <Button type="button" onClick={onReset} variant="ghost">
        Cancel
      </Button>
      <Button type="submit" variant="default">
        Create
      </Button>
    </div>
  );
};

export default FormActions;
