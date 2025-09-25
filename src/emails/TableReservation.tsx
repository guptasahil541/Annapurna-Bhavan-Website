import { FormFields } from "@/components/ui/Form/types";

import {
  Tailwind,
  pixelBasedPreset,
  Container,
  Link,
  Section,
  Hr,
  Html,
  Img,
  Text,
  Font,
  Head,
} from "@react-email/components";

import { CONTACT_INFO } from "@/constants/contact";

interface ReservationProps extends FormFields {
  forAdminPurpose?: boolean;
}

export default function TableReservation({
  firstName,
  lastName,
  email,
  phone,
  guests,
  date,
  time,
  instructions,
  forAdminPurpose = false,
}: ReservationProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                orange: "#ED7C2F",
              },
            },
          },
        }}
      >
        <Container>
          <Section className="px-8 py-10">
            {!forAdminPurpose && (
              <Section>
                <Img
                  src={"http://localhost:3001/logo-email.png"}
                  alt="Annapurna Bhavan logo"
                  height={40}
                />
                <Hr className="mt-8" />
                <Text className="mt-6 text-lg text-gray-700">
                  Dear {firstName},
                </Text>
                <Text className="text-gray-600 leading-relaxed mb-4">
                  Thank you for your interest in dining at Annapurna Bhavan! We
                  have received your table booking request and our team is
                  currently reviewing the availability for your requested date
                  and time.
                </Text>
                <div className="bg-amber-50 px-6 py-4 mb-6 rounded-r-lg">
                  <Text className="text-amber-700 text-sm m-0">
                    We will contact you within 2-4 hours to confirm your
                    reservation or suggest alternative times if needed.
                  </Text>
                </div>
              </Section>
            )}
            <Section className="bg-gray-50 rounded-lg px-6 py-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600 min-w-36">
                  Guest Name:
                </span>
                <span className="text-gray-800">
                  {firstName} {lastName}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600 min-w-36">
                  Email:
                </span>
                <span className="text-gray-800">{email}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600 min-w-36">
                  Phone:
                </span>
                <span className="text-gray-800">{phone}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600 min-w-36">
                  Requested Date:
                </span>
                <span className="text-gray-800">{date}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600 min-w-36">
                  Requested Time:
                </span>
                <span className="text-gray-800">{time}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-600 min-w-36">
                  Party Size:
                </span>
                <span className="text-gray-800">
                  {guests} {parseInt(guests) === 1 ? "guest" : "guests"}
                </span>
              </div>
            </Section>
            {instructions && (
              <Section className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-4 mt-5">
                <h4 className="m-0 mb-2 text-yellow-800 text-sm font-semibold uppercase tracking-wide">
                  Special Instructions
                </h4>
                <Text className="m-0 text-yellow-800 italic">
                  {instructions}
                </Text>
              </Section>
            )}
            {!forAdminPurpose && (
              <Section>
                <Text className="text-gray-600 leading-relaxed">
                  In the meantime, feel free to browse our menu on our website
                  or contact us if you have any questions about your booking
                  request. We appreciate your patience and look forward to
                  hosting you soon!
                </Text>
                <Hr />
                <Section className="bg-blue-50 rounded-lg px-6 py-6 my-6">
                  <h3 className="m-0 mb-4 text-blue-900 text-lg font-semibold">
                    Restaurant Contact Information
                  </h3>
                  <div className="mb-2 text-gray-700">
                    <strong className="text-gray-900">Email:</strong>{" "}
                    <Link
                      href={`mailto:${CONTACT_INFO.EMAIL}`}
                      className="text-blue-600"
                    >
                      {CONTACT_INFO.EMAIL}
                    </Link>
                  </div>
                  <div className="mb-2 text-gray-700">
                    <strong className="text-gray-900">Phone:</strong>{" "}
                    <Link
                      href={`tel:${CONTACT_INFO.PHONE}`}
                      className="text-blue-600"
                    >
                      {CONTACT_INFO.PHONE}
                    </Link>
                  </div>
                  <div className="text-gray-700">
                    <strong className="text-gray-900">Address:</strong>{" "}
                    {CONTACT_INFO.ADDRESS}
                  </div>
                </Section>
                <Section className="text-center py-5 px-5 bg-gray-50 rounded-lg my-6">
                  <Text className="text-gray-600 m-0">
                    Questions about your booking request? Contact us directly
                    and we'll be happy to assist you. Thank you for choosing
                    Annapurna Bhavan
                  </Text>
                </Section>
              </Section>
            )}
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
}
