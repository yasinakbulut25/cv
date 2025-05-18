/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import { Button, Link } from "@nextui-org/react";

function Contact({ lang }) {
  const { name, jobDetail, contact } = CV_DATA[lang];
  return (
    <div className="flex-1 space-y-2">
      <h1 className="text-3xl font-bold tracking-wide">{name}</h1>

      <p className="max-w-md text-pretty font-mono text-md text-muted-foreground print:text-[12px] text-gray-500 print:text-gray-700">
        {jobDetail}
      </p>

      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-2 font-mono">
        {contact.map((item, index) => {
          return (
            <Button
              className="w-max p-0 overflow-visible min-w-max h-auto text-xs text-gray-500 print:text-gray-700 underline-offset-2 data-[hover=true]:text-black data-[hover=true]:underline data-[hover=true]:bg-transparent data-[hover=true]:opacity-100"
              as={Link}
              variant="light"
              key={index}
              href={item.url}
              isExternal
              startContent={item.icon}
            >
              {item.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
