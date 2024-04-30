'use client';

import React from 'react';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form';

import { FormContactValues } from '@/components/Modules/ContactForm/ContactForm';

export interface InputFieldContactProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FormContactValues>;
  label: string;
  name: keyof FormContactValues;
  error?: FieldError | undefined;
}

export default function InputFieldContact({
  name,
  register,
  label,
  error,
  ...rest
}: InputFieldContactProps) {
  return (
    <label
      className={clsx(
        'block mb-4 font-extralight text-xs tracking-[0.2em] xl:mb-6',
        error && 'text-[#ff5757]'
      )}
    >
      <span className="inline-block mb-1">{label}</span>
      <input
        type="text"
        className="text-[13px]  bg-white bg-opacity-5 px-2 py-1.5 placeholder:text-white  placeholder:opacity-20  w-full focus:outline-none focus:bg-opacity-10"
        {...register(name)}
        {...rest}
      />
      {error && (
        <p className="font-extralight text-xs text-right tracking-[0.2em]">
          {error.message}
        </p>
      )}
    </label>
  );
}
