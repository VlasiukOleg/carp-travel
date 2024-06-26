'use client';

import React, { useEffect } from 'react';

import { useForm, UseFormSetValue } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import InputFieldCareer from '@/components/UiKit/InputField/InputFieldCareer';

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

export default function CareerForm() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(careerValidationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { confirm, ...dataToSave } = value;
      localStorage.setItem('formData', JSON.stringify(dataToSave));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key as keyof FormValues, value as string | boolean);
      });
    }
  }, [setValue]);

  const onSubmit = (data: FormValues) => {
    reset();
    console.log(data);
  };

  return (
    <form
      className="md:flex md:gap-5 xl:gap-6"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="md:w-[221px] xl:w-[290px]">
        <InputFieldCareer
          label="Full Name"
          name="fullname"
          placeholder="John Smith"
          register={register}
          error={errors?.fullname}
        />
        <InputFieldCareer
          label="E-mail"
          name="email"
          placeholder="johnsmith@email.com"
          register={register}
          error={errors?.email}
        />
        <InputFieldCareer
          label="Position"
          name="position"
          placeholder="Position"
          register={register}
          error={errors?.position}
        />
        <InputFieldCareer
          label="Phone"
          name="phone"
          placeholder="+ 38 (097) 12 34 567"
          register={register}
          error={errors?.phone}
        />
        <label className="block mb-4 md:mb-2 font-extralight text-xs tracking-[0.2em] md:hidden">
          <span className="inline-block mb-1">Message</span>
          <textarea
            className="text-[13px]  bg-white bg-opacity-5 px-2 py-1.5 placeholder:text-white  placeholder:opacity-20  w-full h-[196px] focus:outline-none focus:bg-opacity-10 resize-none"
            {...register('message', {})}
          />
        </label>

        <label className="flex gap-2  mb-4 font-extralight text-xs">
          <input
            type="checkbox"
            className="hidden peer/draft"
            {...register('confirm', {})}
          />
          <span className="flex items-center justify-center w-[24px] h-[22px] bg-black border-[1px] border-white peer-checked/draft:hidden md:w-[32px] xl:w-[26px]"></span>
          <span className="items-center justify-center w-[24px] h-[22px] bg-black border-[1px] border-white hidden peer-checked/draft:flex md:w-[32px] xl:w-[26px]">
            <span className=" top-1 left-1 w-3.5 h-3.5 bg-white"></span>
          </span>

          <span className="inline-block md:leading-5">
            I confirm my consent to the processing of personal data.
          </span>
        </label>
      </div>

      <div className="xl:w-[290px]">
        <label className="'block mb-4 font-extralight text-xs tracking-[0.2em] hidden md:block">
          <span className="inline-block mb-1">Message</span>
          <textarea
            className="text-[13px]  bg-white bg-opacity-5 px-2 py-1.5 placeholder:text-white  placeholder:opacity-20  w-full h-[196px]  resize-none"
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
