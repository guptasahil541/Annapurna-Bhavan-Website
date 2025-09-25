"use server";

import { FormFields, formSchema } from "@/components/ui/Form/types";

import { Resend } from "resend";

import TableReservation from "@/emails/TableReservation";

export async function bookTable(data: FormFields) {
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
      subject: "Table Reservation at Annapurna Bhavan",
      react: TableReservation(res.data),
    },
    {
      from: "Annapurna Bhavan <onboarding@resend.dev>",
      to: [process.env.RESTAURANT_EMAIL as string],
      subject: "Table Reservation Request",
      react: TableReservation({ ...res.data, forAdminPurpose: true }),
    },
  ]);
}
