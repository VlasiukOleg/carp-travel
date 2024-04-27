'use client';

import React from 'react';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from '@/components/UiKit/InputField/InputField';

export type FormValues = {
  fullname: string;
  email: string;
  position?: string;
  phone: string;
  message?: string;
  confirm: boolean;
};

const careerValidationSchema = Yup.object({
  fullname: Yup.string().required('x incorrect name'),
  email: Yup.string().email('x incorrect email').required('x incorrect email'),
  position: Yup.string(),
  phone: Yup.string().required('x incorrect phone'),
  message: Yup.string(),
  confirm: Yup.boolean().required(),
});

export interface CareerFormProps {}

export default function CareerForm(props: CareerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(careerValidationSchema),
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
      <InputField
        label="Position"
        name="position"
        placeholder="Position"
        register={register}
        error={errors?.position}
      />
      <InputField
        label="Phone"
        name="phone"
        placeholder="+ 38 (097) 12 34 567"
        register={register}
        error={errors?.phone}
      />
      <label className="'block mb-4 font-extralight text-xs tracking-[0.2em]">
        <span className="inline-block mb-1">Message</span>
        <textarea
          className="text-[13px]  bg-white bg-opacity-5 px-2 py-1.5 placeholder:text-white  placeholder:opacity-20  w-full h-[196px] focus:outline-none focus:bg-opacity-10 resize-none"
          {...register('message', {})}
        />
      </label>

      <label className="flex gap-2 mt-4 mb-4 font-extralight text-xs">
        <input
          type="checkbox"
          className="hidden peer/draft"
          {...register('confirm', {})}
        />
        <div className="flex items-center justify-center w-[24px] h-[22px] bg-black border-[1px] border-white peer-checked/draft:hidden"></div>
        <div className="items-center justify-center w-[24px] h-[22px] bg-black border-[1px] border-white hidden peer-checked/draft:flex">
          <div className=" top-1 left-1 w-3.5 h-3.5 bg-white"></div>
        </div>

        <span className="inline-block">
          I confirm my consent to the processing of personal data.
        </span>
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
