import Card from "../ui/Card";
import CardHeading from "../ui/CardHeading";
import CardContent from "../ui/CardContent";

import { LinkIcon } from "../icons/LinkIcon";
import { MailIcon } from "../icons/MailIcon";

export default function About() {
  return (
    <Card>
      <CardHeading heading="About me" />
      <CardContent className="mt-4 space-y-4">
        <div className="prose prose-sm prose-gray text-gray-600">
          <p>
            I am a passionate front end web developer with a focus and expertise in developing production-ready Wordpress and Craft CMS sites. My career is not just deﬁned by my technical skills, but also by my ability to work with other team members, mentorship of junior developers, and ability to stay ahead of the curve in a rapidly evolving web development landscape.
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-wrap gap-4">
          <a href="https://www.linkedin.com/in/jacobtarr/" className="group inline-flex items-center gap-x-2">
            <LinkIcon className="size-4" />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              linkedin.com/in/jacobtarr/
            </span>
          </a>

          <a href="mailto:jtarr@gmail.com" className="group inline-flex items-center gap-x-2">
            <MailIcon className="size-4" />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              jtarr523@gmail.com
            </span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
