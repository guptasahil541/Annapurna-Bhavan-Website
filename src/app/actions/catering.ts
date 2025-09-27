"use server";

import { FormFields, formSchema } from "@/components/ui/Form/types";

import { Resend } from "resend";

import Catering from "@/emails/Catering";

export async function catering(data: FormFields) {
  const res = formSchema.safeParse(data);

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
      subject: "Catering Request for Annapurna Bhavan",
      react: Catering(res.data),
    },
    {
      from: "Annapurna Bhavan <onboarding@resend.dev>",
      to: [process.env.RESTAURANT_EMAIL as string],
      subject: "Catering Request",
      react: Catering({ ...res.data, forAdminPurpose: true }),
    },
  ]);
}
