import { ContactFormFields } from "@/components/ui/Form/types";

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

interface ReservationProps extends ContactFormFields {
  forAdminPurpose?: boolean;
}

export default function ContactUs({
  firstName,
  lastName,
  email,
  phone,
  message,
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
                  Thank you for reaching out to Annapurna Bhavan! We have
                  received your message and appreciate you taking the time to
                  contact us. Our team will review your inquiry and get back to
                  you as soon as possible.
                </Text>
                <div className="bg-green-50 px-6 py-4 mb-6 rounded-r-lg">
                  <Text className="text-green-700 text-sm m-0">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </Text>
                </div>
              </Section>
            )}
            <Section className="bg-gray-50 rounded-lg px-6 py-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600 min-w-36">
                  Name:
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
            </Section>
            <Section className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 mt-5">
              <h4 className="m-0 mb-3 text-slate-800 text-sm font-semibold uppercase tracking-wide">
                Message
              </h4>
              <div className="bg-white border border-slate-200 rounded p-4">
                <Text className="m-0 text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {message}
                </Text>
              </div>
            </Section>
            {!forAdminPurpose && (
              <Section>
                <Text className="text-gray-600 leading-relaxed">
                  We value every customer inquiry and strive to provide helpful,
                  personalized responses. A member of our team will carefully
                  review your message and respond with the information you've
                  requested.
                </Text>
                <Text className="text-gray-600 leading-relaxed">
                  If your inquiry is urgent or time-sensitive, please feel free
                  to call us directly at the number below.
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
                    Thank you for your interest in Annapurna Bhavan. We look
                    forward to connecting with you soon and hope to welcome you
                    to our restaurant!
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
