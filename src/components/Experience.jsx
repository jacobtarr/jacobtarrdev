import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import Badge from "./ui/Badge";
import InfoItem from "./ui/InfoItem";

import google from "@/images/google.jpg";
import amazon from "@/images/amazon.jpg";
import microsoft from "@/images/microsoft.jpg";
import tesla from "@/images/tesla.jpg";

import { PinIcon } from "./icons/PinIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const jobsList = [
  {
    icon: google,
    role: "Full-time Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    period: "Jul 2020 - Present",
    type: "Full-time",
    description:
      "Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.",
  },
  {
    icon: amazon,
    role: "Software Engineer Intern",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Feb 2018 - Jun 2020",
    type: "Full-time",
    description:
      "Designed and implemented new features for Amazon's e-commerce platform. Worked on a team of engineers to improve the user experience and increase sales.",
  },
  {
    icon: microsoft,
    role: "Software Development Engineer in Test",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "Aug 2017 - Jan 2018",
    type: "Full-time",
    description:
      "Wrote and executed test cases for Microsoft's Windows operating system. Worked with a team of engineers to ensure the quality of the software.",
  },
  {
    icon: tesla,
    role: "Software Engineer Intern",
    company: "Tesla",
    location: "Palo Alto, CA",
    period: "Dec 2016 - May 2017",
    type: "Full-time",
    description:
      "Developed software for Tesla's autonomous driving vehicles. Worked on a team of engineers to improve the safety and reliability of the software.",
  },
];

export default function Experience() {
  return (
    <Card>
      <CardHeading heading="Experience" />

      <div className="mt-4 space-y-1.5">
        {jobsList.map(
          ({ icon, role, company, location, period, type, description }) => (
            <CardContent
              key={role}
              className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row"
            >
              <Image
                src={icon}
                alt=""
                className="size-12 rounded-full border-2 border-white shadow-sm"
              />

              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-y-2">
                  <h3 className="font-medium">{role}</h3>
                  <Badge text={type} />
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                  <InfoItem icon={BriefcaseIcon} text={company} />
                  <InfoItem icon={PinIcon} text={location} />
                  <InfoItem icon={CalendarIcon} text={period} />
                </div>

                <p className="mt-4 max-w-lg text-gray-600">{description}</p>
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
