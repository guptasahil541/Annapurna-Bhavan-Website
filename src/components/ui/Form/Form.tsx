"use client";

import { FormFields, formSchema } from "./types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { Button } from "@/components";
import { bookTable } from "@/app/actions/bookTable";

import styles from "./Form.module.css";

import { RESTAURANT_TIMINGS } from "@/constants/contact";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await bookTable(data);
      toast.success("Booking request created successfully");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to create booking request");
    }
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
          {errors.firstName && (
            <p className={styles.form_input_error}>
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className={styles.form_input_error}>{errors.lastName.message}</p>
          )}
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
          {errors.email && (
            <p className={styles.form_input_error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="phone">Phone number (US)*</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={styles.form_input_error}>{errors.phone.message}</p>
          )}
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
          {errors.guests && (
            <p className={styles.form_input_error}>{errors.guests.message}</p>
          )}
        </div>
        <div className={styles.form_input_container}>
          <label htmlFor="date">Date*</label>
          <input
            id="date"
            type="date"
            placeholder="Enter date"
            {...register("date")}
          />
          {errors.date && (
            <p className={styles.form_input_error}>{errors.date.message}</p>
          )}
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
          {errors.time && (
            <p className={styles.form_input_error}>{errors.time.message}</p>
          )}
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
          {errors.instructions && (
            <p className={styles.form_input_error}>
              {errors.instructions.message}
            </p>
          )}
        </div>
      </div>
      <Button disabled={isSubmitting} type="submit" buttonFill="redOutline">
        {isSubmitting ? "Booking" : "Book table"}
      </Button>
    </form>
  );
};
