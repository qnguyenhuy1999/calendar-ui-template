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
      className="text-field-container flex flex-col gap-2 justify-center"
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
          className="text-field-input px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          {...props}
        />
      </Form.Control>
    </Form.Field>
  );
};

TextField.displayName = "TextField";

export default TextField;
