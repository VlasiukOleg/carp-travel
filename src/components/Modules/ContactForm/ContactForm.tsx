'use client';

import React from 'react';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import InputFieldContact from '@/components/UiKit/InputField/InputFieldConttact';

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

export default function ContactForm() {
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
    <form
      className="md:flex md:items-baseline md:gap-5 xl:block xl:w-[607px]"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="md:w-[221px] xl:flex xl:gap-7 xl:w-[607px] xl:mb-10">
        <div className="xl:w-[293px]">
          {' '}
          <InputFieldContact
            label="Full Name"
            name="fullname"
            placeholder="John Smith"
            register={register}
            error={errors?.fullname}
          />
        </div>
        <div className="flex-grow">
          <InputFieldContact
            label="E-mail"
            name="email"
            placeholder="johnsmith@email.com"
            register={register}
            error={errors?.email}
          />
        </div>
      </div>

      <div className="flex-grow">
        <label className="'block mb-4 font-extralight text-xs tracking-[0.2em]">
          <span className="inline-block mb-1">Message</span>
          <textarea
            className="text-[13px]  bg-white bg-opacity-5 px-2 py-1.5 placeholder:text-white  placeholder:opacity-20  w-full h-[196px] focus:bg-opacity-10 resize-none md:h-[221px] xl:h-[174px]"
            {...register('message', {})}
          />
        </label>

        <button
          type="submit"
          className="block font-medium text-3xl ml-auto uppercase hover:scale-105 focus:scale-105 transition"
        >
          Send
        </button>
      </div>
    </form>
  );
}
