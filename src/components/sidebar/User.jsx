import Image from "next/image";
import cover from "@/images/cover-2.jpg";
import photo from "@/images/photo.jpg";
import Badge from "../ui/Badge";
import CardContent from "../ui/CardContent";
import { DownloadIcon } from "../icons/DownloadIcon";

const user = {
  name: "Jacob Tarr",
  role: "Front End Web Developer",
  location: "Mesa, AZ",
  bio: "Web developer with 9+ years of experience in building web apps. Skilled in Wordpress, Craft CMS and JavaScript applications.",
  status: true,
  skills: [
    "Wordpress",
    "Craft CMS",
    "Next.js",
    "React",
    "JavaScript",
    "Atomic Design",
    "Tailwind",
    "Twig"
  ],
};

function WorkStatus({ status }) {
  return status ? (
    <div className="flex-none animate-pulse rounded-full bg-emerald-500/20 p-1">
      <div className="size-1.5 rounded-full bg-emerald-500"></div>
    </div>
  ) : (
    <div className="flex-none rounded-full bg-gray-500/20 p-1">
      <div className="size-1.5 rounded-full bg-gray-400"></div>
    </div>
  );
}

export default function User() {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="aspect-h-2 aspect-w-3 overflow-hidden">
        <Image
          src={cover}
          alt="cover"
          className="object-cover object-center"
          fill
        />

        <div className="flex items-end bg-gradient-to-t from-white p-4">
          <div>
            <Image
              src={photo}
              alt="photo"
              className="rounded-full border-2 border-white object-cover object-center shadow-sm"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 p-1.5">
        <div className="px-4">
          <h3 className="flex items-center gap-x-2 text-base font-medium">
            {user.name}
            <WorkStatus status={user.status} />
          </h3>
          <div className="mt-1 flex items-center gap-x-2">
            <p>{user.role}</p>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <p>{user.location}</p>
          </div>
        </div>

        <CardContent className="space-y-4">
          <p className="text-gray-600">{user.bio}</p>

          <div className="flex flex-wrap gap-1">
            {user.skills.map((skill) => (
              <Badge key={skill} text={skill} />
            ))}
          </div>

          <a
            href="/resume.pdf"
            className="inline-flex w-full items-center justify-center gap-x-4 rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white duration-150 hover:bg-blue-700"
            download
          >
            Download CV
            <DownloadIcon className="size-4" />
          </a>
        </CardContent>
      </div>
    </div>
  );
}
