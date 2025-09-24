"use client";

import { FormFields, formSchema } from "./types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components";

import styles from "./Form.module.css";

import { RESTAURANT_TIMINGS } from "@/constants/contact";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_inputs_container}>
        <div className={styles.form_input_container}>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
          />
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />
        </div>
      </div>
      <div className={styles.form_inputs_container}>
        <div className={styles.form_input_container}>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            {...register("email")}
          />
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="phone">Phone number (US)*</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            {...register("phone")}
          />
        </div>
      </div>
      <div className={styles.form_inputs_container}>
        <div className={styles.form_input_container}>
          <label htmlFor="guests">Number of guests*</label>
          <input
            id="guests"
            type="text"
            placeholder="Enter guests"
            {...register("guests")}
          />
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="date">Date*</label>
          <input
            id="date"
            type="date"
            placeholder="Enter date"
            {...register("date")}
          />
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="time">Time*</label>
          <select id="time" defaultValue="" {...register("time")}>
            <option value="" disabled>
              Choose time
            </option>
            {RESTAURANT_TIMINGS.map((timing, index) => {
              return (
                <option value={timing} key={index}>
                  {timing}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={styles.form_inputs_container}>
        <div className={styles.form_input_container}>
          <label htmlFor="instructions">Special instructions</label>
          <textarea
            id="instructions"
            placeholder="Enter special instructions"
            {...register("instructions")}
            rows={4}
          />
        </div>
      </div>
      <Button type="submit" buttonFill="redOutline">
        Book table
      </Button>
    </form>
  );
};
