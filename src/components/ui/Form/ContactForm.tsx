"use client";

import { ContactFormFields, contactFormSchema } from "./types";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { Button } from "@/components";
import { contactUs } from "@/app/actions/contactUs";

import styles from "./Form.module.css";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      await contactUs(data);
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      toast.error("Failed to send message");
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
          <label htmlFor="lastName">Last Name*</label>
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
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            placeholder="Enter message"
            {...register("message")}
            rows={4}
          />
          {errors.message && (
            <p className={styles.form_input_error}>{errors.message.message}</p>
          )}
        </div>
      </div>
      <Button disabled={isSubmitting} type="submit" buttonFill="redOutline">
        {isSubmitting ? "Sending message" : "Send message"}
      </Button>
    </form>
  );
};
