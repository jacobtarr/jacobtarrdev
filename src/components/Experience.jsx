import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import Badge from "./ui/Badge";
import InfoItem from "./ui/InfoItem";

import google from "@/images/google.jpg";
import southleft from "@/images/southleft.jpeg";
import eyemg from "@/images/eyemg.jpg";
import outerbox from "@/images/outerbox.jpg";
import amazon from "@/images/amazon.jpg";
import microsoft from "@/images/microsoft.jpg";
import tesla from "@/images/tesla.jpg";

import { PinIcon } from "./icons/PinIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const jobsList = [
  {
    icon: southleft,
    role: "Senior Front End Web Developer",
    company: "Southleft, LLC",
    location: "Remote",
    period: "August 2022 - July 2024",
    type: "Full-time",
    description: [
      "Promoted to senior position and assumed more duties such as mentoring younger developers, collaborating more with team members on larger projects and communicating more closely with clients"
    ],
  },
  {
    icon: southleft,
    role: "Front End Web Developer",
    company: "Southleft",
    location: "Remote",
    period: "August 2019 - July 2022",
    type: "Full-time",
    description: [
      "Collaborated closely with UX and UI designers to ensure pixel-perfect implementation of designs across various browsers.",
      "Developed custom WordPress website solutions tailored to client needs, while also contributing to projects on platforms such as Gatsby, Next.js, React, WooCommerce, Craft CMS, and Node.js. Integrated GraphQL alongside Gatsby and Craft CMS to optimize data fetching and enhance overall application performance.",
      "Applied Atomic Design principles and BEM methodology to craft scalable, maintainable websites, web applications, component libraries, and comprehensive design systems.",
      "Led client-facing development projects, overseeing seamless integration strategies across both new initiatives and legacy codebases.",
      "Embraced Agile methodologies, participating in Scrum sprints, daily standups, and retrospectives to enhance team efficiency and project delivery.",
      "Utilized version control systems, including Git, to manage code repositories and ensure meticulous tracking of changes.",
      "Implemented design systems using Storybook to maintain consistency and efficiency across projects."
    ],
  },
  {
    icon: eyemg,
    role: "Front End Web / UI Developer",
    company: "EYEMG Interactive Media Group",
    location: "Akron, OH",
    period: "November 2016 - July 2019",
    type: "Full-time",
    description: [
      "Responsible for PSD to HTML conversion",
      "Use modern CSS to handle intricate UI designs",
      "Use JavaScript (Angular.js, jQuery, Typeahead libraries) to power functionality",
      "Work with a custom (in-house developed) Perl CMS as a framework for most projects",
      "Code made-from-scratch Wordpress templates using the Sage starter template",
      "Collaborate with other team members using Git via Sourcetree"
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Right Foot Forward Marketing",
    location: "Raleigh, NC",
    period: "October 2016 - December 2016",
    type: "Freelance",
    description: [
      "Worked as a remote freelance developer",
      "esponsible for communicating with the team remotely on how to approach website functionality",
      "Code Adobe Experience Design mockups to custom Wordpress templates (using Understrap and Sage as a base)",
    ],
  },
  {
    icon: outerbox,
    role: "Front End Web Developer",
    company: "OuterBox Solutions",
    location: "Akron, OH",
    period: "March 2015 - September 2016",
    type: "Full-time",
    description: [
      "Use cutting-edge front end technologies and methodologies to transform mockups into clean and beautiful looking code on an ecommerce platform",
      "Implement front-end technologies into an ASP.Net (Razor) framework",
      "Develop for custom ecommerce solutions",
      "Update legacy websites from clients",
      "Work on an awesome team of developers to build websites clients can be happy about"
    ],
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
              {icon ? (
                <Image
                  src={icon}
                  alt=""
                  className="size-12 rounded-full border-2 border-white shadow-sm"
                />
              ) : (
                <div className="sm:size-14" />
              )}

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

                <ul className="mt-4 max-w-lg text-gray-600 list-disc list-outside pl-4">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
