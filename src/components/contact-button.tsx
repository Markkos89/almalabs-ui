"use client";
import { Button } from "./ui/button";

type Props = {
  contact: string;
};

const ContactButton = (props: Props) => {
  return (
    <Button
      className="mt-5"
      variant="default"
      onClick={() => (window.location.href = `mailto:${props?.contact}`)}
    >
      Contact
    </Button>
  );
};

export default ContactButton;
