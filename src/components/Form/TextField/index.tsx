import { Form } from "radix-ui";
import * as React from "react";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  id?: string;
}

export const TextField = ({ label, name, id = "text-field", ...props }: TextFieldProps) => {
  return (
    <Form.Field
      name={name}
      className="flex flex-col justify-center gap-2 text-field-container"
    >
      {label && (
        <Form.Label
          htmlFor={id}
          className="text-field-label"
        >
          {label}:
        </Form.Label>
      )}
      <Form.Control asChild>
        <input
          id={id}
          className="px-3 py-2 transition duration-200 ease-in-out border border-gray-300 rounded text-field-input focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
      </Form.Control>
    </Form.Field>
  );
};

TextField.displayName = "TextField";

export default TextField;
