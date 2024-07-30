import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import InfoItem from "./ui/InfoItem";

import stanford from "@/images/stanford.jpg";
import universityofcalifornia from "@/images/universityofcalifornia.jpg";
import deanza from "@/images/deanza.jpg";

import { GraduationCapIcon } from "./icons/GraduationCapIcon";
import { PinIcon } from "./icons/PinIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const educationList = [
  {
    icon: stanford,
    degree: "Master of Science in Computer Science",
    university: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description:
      "Developed a machine learning algorithm to predict customer churn. Built a web application to help students find roommates.",
  },
  {
    icon: universityofcalifornia,
    degree: "Bachelor of Science in Computer Science",
    university: "University of California",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    description:
      "Developed a mobile app to help students track their expenses. Built a website for a local business.",
  },
  {
    icon: deanza,
    degree: "Associate of Science in Computer Science",
    university: "De Anza College",
    location: "Cupertino, CA",
    period: "2012 - 2014",
    description:
      "Developed a game using Python. Built a website for a student organization.",
  },
];

export default function Education() {
  return (
    <Card>
      <CardHeading heading="Education" />

      <div className="mt-4 space-y-1.5">
        {educationList.map(
          ({ icon, degree, university, location, period, description }) => (
            <CardContent
              key={degree}
              className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row"
            >
              <Image
                src={icon}
                alt=""
                className="size-12 rounded-full border-2 border-white shadow-sm"
              />

              <div className="w-full">
                <h3 className="font-medium">{degree}</h3>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                  <InfoItem icon={GraduationCapIcon} text={university} />
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
