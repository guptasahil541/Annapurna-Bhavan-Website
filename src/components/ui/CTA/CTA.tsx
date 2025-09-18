import Link from "next/link";
import { Button } from "../Button/Button";

export const CTA = () => {
  return (
    <Link href="/book-a-table">
      <Button>Book a table</Button>
    </Link>
  );
};
