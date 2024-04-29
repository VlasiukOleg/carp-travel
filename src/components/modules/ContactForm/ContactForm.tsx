'use client';

import React from 'react';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '@/components/UiKit/InputField/InputField';

export type FormContactValues = {
  fullname: string;
  email: string;
  message?: string;
};

const contactValidationSchema = Yup.object({
  fullname: Yup.string().required('x incorrect name'),
  email: Yup.string().email('x incorrect email').required('x incorrect email'),
  message: Yup.string(),
});

export interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormContactValues>({
    resolver: yupResolver(contactValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: object) => {
    reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <InputField
        label="Full Name"
        name="fullname"
        placeholder="John Smith"
        register={register}
        error={errors?.fullname}
      />
      <InputField
        label="E-mail"
        name="email"
        placeholder="johnsmith@email.com"
        register={register}
        error={errors?.email}
      />
      <label className="'block mb-4 font-extralight text-xs tracking-[0.2em]">
        <span className="inline-block mb-1">Message</span>
        <textarea
          className="text-[13px]  bg-white bg-opacity-5 px-2 py-1.5 placeholder:text-white  placeholder:opacity-20  w-full h-[196px] focus:outline-none focus:bg-opacity-10 resize-none"
          {...register('message', {})}
        />
      </label>

      <button
        type="submit"
        className="block font-medium text-3xl ml-auto uppercase"
      >
        Send
      </button>
    </form>
  );
}
