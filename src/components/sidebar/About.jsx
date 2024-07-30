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
            I am passionate about using technology to solve real-world problems.
            I am always looking for new ways to improve the user experience and
            make software more accessible to everyone. I am also a strong
            advocate for open source software and I am always willing to
            contribute to the community.
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-wrap gap-4">
          <a href="#" className="group inline-flex items-center gap-x-2">
            <LinkIcon className="size-4" />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              cristopher.com
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
