"use server";

import {
  ContactFormFields,
  contactFormSchema,
} from "@/components/ui/Form/types";

import { Resend } from "resend";

import ContactUs from "@/emails/ContactUs";

export async function contactUs(data: ContactFormFields) {
  const res = contactFormSchema.safeParse(data);

  if (res.error) {
    return Promise.reject({
      message: "Please correct invalid fields",
      error: res.error,
    });
  }

  const resend = new Resend(process.env.RESEND_API);

  return resend.batch.send([
    {
      from: "Annapurna Bhavan <onboarding@resend.dev>",
      to: [res.data.email],
      subject: "Contact Request for Annapurna Bhavan",
      react: ContactUs(res.data),
    },
    {
      from: "Annapurna Bhavan <onboarding@resend.dev>",
      to: [process.env.RESTAURANT_EMAIL as string],
      subject: "Contact Request",
      react: ContactUs({ ...res.data, forAdminPurpose: true }),
    },
  ]);
}
