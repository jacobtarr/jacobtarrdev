import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import InfoItem from "./ui/InfoItem";

import gannon from "@/images/gannon.png";

import { GraduationCapIcon } from "./icons/GraduationCapIcon";
import { PinIcon } from "./icons/PinIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const educationList = [
  {
    icon: gannon,
    degree: "Master of Science in Computer Science, Web Development",
    university: "Gannon University",
    location: "Erie, PA",
    period: "2012 - 2014",
    description: "Grade: 3.62 GPA, Studied web development as an option. Graduated in December 2014"
  },
  {
    icon: gannon,
    degree: "Bachelor of Arts in Journalism Communications",
    university: "Gannon University",
    location: "Erie, PA",
    period: "2008 - 2012",
    description: "Grade: 3.17 GPA, Activities and societies: The Gannon Knight (school newspaper), 90.5 WERG FM"
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
                {description && (
                  <p className="mt-4 max-w-lg text-gray-600">{description}</p>
                )}
                
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
