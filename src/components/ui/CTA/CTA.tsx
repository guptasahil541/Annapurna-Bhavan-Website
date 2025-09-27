import Link from "next/link";
import { Button } from "../Button/Button";

export const CTA = () => {
  return (
    <Link href="/book/table">
      <Button>Book a table</Button>
    </Link>
  );
};
