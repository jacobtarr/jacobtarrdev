import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import InfoItem from "./ui/InfoItem";

import newbooksnetwork from "@/images/newbooksnetwork.jpg";
import bmoreart from "@/images/bmoreart.jpg";
import aruliden from "@/images/aruliden.jpg";
import smartling from "@/images/smartling.jpg";
import wud from "@/images/wud.jpg";

import { LinkIcon } from "./icons/LinkIcon";
import { FolderIcon } from "./icons/FolderIcon";
import { UserIcon } from "./icons/UserIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const projectsList = [
  {
    screenshot: newbooksnetwork,
    name: "New Books Network",
    category: "Craft CMS",
    role: "Lead Developer at Southleft",
    description:
      "I was responsible for the frontend development for the New Books Network website redesign. Utilizing Craft CMS, I enhanced the user experience by introducing personalized user accounts, implementing a recommendation engine, and integrating Algolia for improved search functionality. This project significantly boosted user engagement and satisfaction.",
    website: "https://newbooksnetwork.com",
  },
  {
    screenshot: bmoreart,
    name: "BMore Art",
    category: "Wordpress",
    role: "Lead Developer at Southleft",
    description:
      "I led the frontend development for BmoreArt's website redesign, collaborating with Amanda Buck to create a visually compelling and user-friendly platform. Utilizing WordPress and Shopify, I facilitated the migration of 12+ years of art and culture content, enhancing the site’s functionality and boosting user engagement and revenue.",
    website: "https://bmoreart.com",
  },
  {
    screenshot: aruliden,
    name: "Aruliden",
    category: "Wordpress",
    role: "Lead Developer at Southleft",
    description:
      "I led the frontend development for Aruliden's website redesign. They wanted a bold new way of capturing the projects they've done at an agency and one of the fun but challenging things with this website was the way they wanted to handle page transitions. I used Swup JS for this.",
    website: "https://aruliden.com",
  },
  {
    screenshot: smartling,
    name: "Smartling",
    category: "Contentful / Gatsby",
    role: "Website Maintenance at Southleft",
    description:
      "I was responsible for the web maintenance of Smartling's website, utilizing Contentful as the CMS and Gatsby with React for the frontend. My role involved ensuring the site remained up-to-date and functional, implementing new features, and optimizing the user experience. This maintenance work helped to keep the website running smoothly and efficiently, providing users with a seamless interaction.",
    website: "https://smartling.com",
  },
  {
    screenshot: wud,
    name: "Wud Furniture",
    category: "Wordpress / Shopify API",
    role: "Lead Developer at Southleft",
    description:
      "Wud Furniture, based out of New York, came to us with the vision of creating a bold new website to showcase their modern furniture designs. I led the development, integrating WordPress with the Shopify API to allow users to order wood samples directly from the site. This project emphasized a seamless user experience and effectively highlighted Wud Furniture's innovative products.",
    website: "https://wudfurniture.com",
  },
];

export default function Projects() {
  return (
    <Card>
      <CardHeading heading="Projects" />

      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        {projectsList.map(
          ({ screenshot, name, category, role, description, website }) => (
            <CardContent
              key={name}
              className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row"
            >
              <div className="w-full">
                {screenshot && (
                  <Image
                    src={screenshot}
                    alt=""
                    className="mb-4"
                  />
                )}
                
                <h3 className="font-medium">{name}</h3>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                  <InfoItem icon={FolderIcon} text={category} />
                  <InfoItem icon={UserIcon} text={role} />
                </div>

                <p className="mt-4 max-w-lg text-gray-600">{description}</p>
                <a
                  href={website}
                  className="group mt-4 inline-flex items-center gap-x-2 text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="size-4" />
                  <span className="font-medium group-hover:underline group-hover:underline-offset-4">
                    {website.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
