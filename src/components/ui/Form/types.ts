import z from "zod";

import { RESTAURANT_TIMINGS } from "@/constants/contact";

export const formSchema = z.object({
  firstName: z.string().min(3, { error: "Minimum 3 letters required" }),
  lastName: z.string(),
  email: z.email({ error: "Invalid email" }),
  phone: z
    .string()
    .nonempty({ error: "Required field" })
    .regex(
      /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}(\s?(x|ext)\s?\d{1,5})?$/i,
      { error: "Invalid phone number" }
    ),
  guests: z
    .string()
    .nonempty({ error: "Required field" })
    .regex(/^[0-9]*$/, { error: "Number expected" }),
  date: z.iso.date({ error: "Invalid date" }),
  time: z.enum(RESTAURANT_TIMINGS, { error: "Required field" }),
  instructions: z.string().max(500, "Max limit reached"),
});

export type FormFields = z.infer<typeof formSchema>;
