import NavBar from '@/components/custom-ui/navbar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  FaDigitalOcean,
  FaDocker,
  FaGithub,
  FaGolang,
  FaXTwitter,
} from 'react-icons/fa6';
import React from 'react';
import { IconType } from 'react-icons';
import {
  SiLinkedin,
  SiMysql,
  SiPhp,
  SiRabbitmq,
  SiRedis,
  SiTypescript,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { ImGit } from 'react-icons/im';
import { Timeline, TimelineContent } from '@/components/ui/timeline';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { GrNode } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface IProject {
  name: string;
  thumbnail: string;
  repo: string;
  disabled: boolean;
  description: string | null;
  link: string;
  stacks?: IStack[];
}

interface IStack {
  Icon: IconType;
  Label: string;
}

const stacks: IStack[] = [
  {
    Icon: FaGolang,
    Label: 'Go',
  },
  {
    Icon: SiPhp,
    Label: 'PHP',
  },
  {
    Icon: SiTypescript,
    Label: 'Typescript',
  },
  {
    Icon: BiLogoPostgresql,
    Label: 'PostgreSQL',
  },
  {
    Icon: SiRedis,
    Label: 'Redis',
  },
  {
    Icon: SiRabbitmq,
    Label: 'RabbitMQ',
  },
  {
    Icon: FaDocker,
    Label: 'Docker',
  },
  {
    Icon: ImGit,
    Label: 'Git',
  },
];

const projects: IProject[] = [
  {
    name: 'Chatty',
    description: 'Basic real-time chat application like discord. (WIP)',
    disabled: true,
    repo: 'https://github.com/arvinpaundra/chatty-api',
    thumbnail: '/chatty.png',
    link: '',
    stacks: [
      {
        Icon: GrNode,
        Label: 'Node',
      },
      {
        Icon: SiTypescript,
        Label: 'Typescript',
      },
      {
        Icon: FaReact,
        Label: 'React',
      },
    ],
  },
  {
    name: 'Reksi',
    description: 'Managing student`s scientific papers with cloud storage.',
    disabled: true,
    repo: 'https://github.com/arvinpaundra/repository-api',
    thumbnail: '/reksi.png',
    link: '',
    stacks: [
      {
        Icon: FaReact,
        Label: 'React',
      },
      {
        Icon: FaGolang,
        Label: 'Go',
      },
      {
        Icon: SiMysql,
        Label: 'MySQL',
      },
      {
        Icon: FaDigitalOcean,
        Label: 'DigitalOcean',
      },
      {
        Icon: FaDocker,
        Label: 'Docker',
      },
    ],
  },
  {
    name: 'Tabung Kebaikan',
    description: 'Help fundraiser manage munfiq charity across subdistrict.',
    disabled: true,
    repo: 'https://github.com/arvinpaundra/tabung_kebaikan_api',
    thumbnail: '/tabung-kebaikan.png',
    link: '',
    stacks: [
      {
        Icon: GrNode,
        Label: 'Node',
      },
      {
        Icon: SiMysql,
        Label: 'MySQL',
      },
      {
        Icon: FaReact,
        Label: 'React',
      },
    ],
  },
  {
    name: 'GoShare',
    description:
      'Platform for content youtube sharing to level-up your watch time.',
    disabled: true,
    repo: 'https://github.com/arvinpaundra/go-share-api',
    thumbnail: '/go-share.png',
    link: '',
    stacks: [
      {
        Icon: GrNode,
        Label: 'Node',
      },
      {
        Icon: SiMysql,
        Label: 'MySQL',
      },
      {
        Icon: FaReact,
        Label: 'React',
      },
    ],
  },
  {
    name: 'Moweee',
    description: 'Get to know what is your watchlist preferences.',
    disabled: false,
    repo: 'https://github.com/arvinpaundra/moweee',
    thumbnail: '/moweee.png',
    link: 'https://moweee.vercel.app/',
    stacks: [
      {
        Icon: FaReact,
        Label: 'React',
      },
    ],
  },
  {
    name: 'ShoeAddict',
    description: 'Inspired by Adidas web for shoe marketplace, sheshh...',
    disabled: false,
    repo: 'https://github.com/arvinpaundra/ShoeAddict',
    thumbnail: '/shoeaddict.png',
    link: 'https://shoeaddict.vercel.app',
    stacks: [
      {
        Icon: FaReact,
        Label: 'React',
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <NavBar />

      <section className="py-10 xl:px-28 md:px-16 sm:px-8 flex flex-col gap-8">
        <section className="flex justify-center items-center">
          <Alert className="bg-imperial-red/20 border border-imperial-red/80 text-white">
            <AlertDescription className="text-center">
              Hi there, welcome to my web resume.
            </AlertDescription>
          </Alert>
        </section>

        <section>
          <div>
            <p className="font-semibold text-2xl">Arvin Paundra Ardana</p>
            <p className="text-sm">(Software Engineer / Backend Engineer)</p>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h3
            id="self"
            className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red"
          >
            Self
          </h3>
          <p className="text-sm text-manatee">
            A <span className="text-vivid-red">Software Engineer</span> with
            having knowledge and expertise in Backend Development that
            enthusiastic and eager to create robust and scalable web
            application. Have a good understanding of Go, PHP, and Typescript
            programming languages, as well as a strong understanding of creating
            an efficient and secure API. Committed to developing capabilities in
            software development to help the efficiency of an organization.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red">
            Stuff that i`ve used
          </h3>
          <ul>
            <li className="grid md:grid-rows-3 grid-flow-col grid-rows-5 gap-2">
              {stacks.map((stack: IStack) => (
                <ul key={stack.Label}>
                  <li
                    key={stack.Label}
                    className="flex justify-start items-center gap-2"
                  >
                    <stack.Icon />
                    <p className="md:text-base text-sm text-white/90">
                      {stack.Label}
                    </p>
                  </li>
                </ul>
              ))}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h3
            id="experiences"
            className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red"
          >
            Experiences
          </h3>

          <Timeline>
            <TimelineContent header="Komerce • August 2023 - Present">
              <ul className="list-decimal text-manatee">
                <li>
                  Developed and maintained kompack.id to manage partner
                  products, warehouses, and revenue streams.
                </li>
                <li>
                  Released latest version of kompack.id as a standalone service
                  written in Go and PostgreSQL for storage.
                </li>
                <li>Optimized and fixed bugs over komerce.id products.</li>
                <li>
                  Developed an internal service with Go to efficiently generate
                  thousands of komship.id order records, using Mongo for data
                  persistance and RabbitMQ for asynchronous processing.
                </li>
                <li>
                  Optimizing applications by implementing graceful shutdown,
                  managing ACID transactions in a multi-layer architecture, and
                  enhancing monitoring.
                </li>
              </ul>
            </TimelineContent>

            <TimelineContent header="Golet Digital Solusi • August 2022 - August 2023">
              <ul className="list-decimal text-manatee">
                <li>
                  Rebuild an application named GOCAP 2.0 using Laravel and
                  Flutter. Integrated with Whatsapp and Firebase Cloud Messaging
                  (FCM) for real-time notification.
                </li>
                <li>
                  Maintain and fix bugs in GOCAP application to increase user
                  productivities.
                </li>
              </ul>
            </TimelineContent>

            <TimelineContent header="Magang dan Studi Independen (MSIB) • August 2022 - December 2022">
              <ul className="list-decimal text-manatee">
                <li>
                  Developed an API for Bike Rental using Go, MySQL, and
                  integrated with payment gateway Midtrans. The API was deployed
                  into AWS EC2.
                </li>
                <li>
                  Developed an API for Learning Management System using Go and
                  MySQL with Clean Architecture Pattern. The API is consumed by
                  web and mobile. All asset videos and photos are stored in
                  Google Cloud Storage. Dockerizing the application and
                  deploying it onto DigitalOcean Droplets with CI/CD pipeline
                  provided by Github Actions. Complete 100% MVP of the capstone
                  project.
                </li>
                <li>
                  Complete and earn a certificate of completion Golang
                  Programming Engineer Program from MSIB batch 3.
                </li>
              </ul>
            </TimelineContent>
          </Timeline>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red">
            My Projects
          </h3>

          <p className="text-sm">
            Hey, don`t forget to check out my other projects. 👻
          </p>

          <section className="grid md:grid-cols-2 grid-cols-1 gap-2">
            {projects.map((project: IProject) => (
              <Card
                className="bg-erie-black border border-raisin-black"
                key={project.name}
              >
                <CardHeader className="p-0">
                  <Image
                    src={project.thumbnail}
                    alt="project image"
                    width={0}
                    height={0}
                    layout="responsive"
                    className="rounded-t"
                  />
                </CardHeader>
                <CardContent className="p-2 flex flex-col gap-2">
                  <h4 className="font-semibold text-sm">{project.name}</h4>
                  <p className="text-xs text-manatee line-clamp-2 hover:line-clamp-none">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stacks?.map((stack: IStack, index: number) =>
                      project.stacks!.length > 2 ? (
                        <>
                          {index < 3 ? (
                            <Badge
                              variant="outline"
                              key={stack.Label}
                              className="border-raisin-black flex justify-center items-center gap-1 w-fit"
                            >
                              <>
                                <stack.Icon />
                                {stack.Label}
                              </>
                            </Badge>
                          ) : (
                            index === project.stacks!.length - 1 && (
                              <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Badge
                                      variant="outline"
                                      key={index}
                                      className="border-raisin-black flex justify-center items-center gap-1 w-fit"
                                    >
                                      +{project.stacks!.length - 3}
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent className="bg-erie-black border border-raisin-black">
                                    {project.stacks!.map(
                                      (
                                        tooltipStack: IStack,
                                        tooltipIndex: number
                                      ) =>
                                        tooltipIndex >= 3 && (
                                          <p
                                            key={tooltipIndex}
                                            className="text-xs mb-1 flex justify-start items-center gap-1"
                                          >
                                            <>
                                              <tooltipStack.Icon />
                                              {tooltipStack.Label}
                                            </>
                                          </p>
                                        )
                                    )}
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )
                          )}
                        </>
                      ) : (
                        <Badge
                          variant="outline"
                          key={stack.Label}
                          className="border-raisin-black flex justify-center items-center gap-1 w-fit"
                        >
                          <>
                            <stack.Icon />
                            {stack.Label}
                          </>
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end items-center gap-2">
                  <Link href={project.repo}>
                    <Button className="text-xs border border-imperial-red hover:bg-imperial-red/10 flex justify-center items-center gap-1 w-fit">
                      <>
                        <FaGithub />
                        Source
                      </>
                    </Button>
                  </Link>
                  {project.disabled ? (
                    <Button
                      className="text-xs bg-imperial-red/80 cursor-not-allowed"
                      disabled
                    >
                      Visit
                    </Button>
                  ) : (
                    <Link href={project.link}>
                      <Button className="text-xs bg-imperial-red hover:bg-imperial-red/80 hover:transition">
                        Visit
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </section>
        </section>

        <section className="flex flex-col gap-3">
          <h3
            id="contact"
            className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red"
          >
            Get in touch
          </h3>
          <p className="text-sm">
            Feel free to email if you want to connected with me. 📧
          </p>
          <form className="flex flex-col gap-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Your name"
                className="bg-erie-black border border-raisin-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="bg-erie-black border border-raisin-black"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Messages
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Leave your messages"
                className="bg-erie-black border border-raisin-black"
              />
            </div>

            <Button
              type="submit"
              className="bg-imperial-red hover:bg-imperial-red/80 hover:transition w-fit self-end"
            >
              Submit
            </Button>
          </form>
          <p className="text-sm">
            You also can reach me through these platforms. 📌
          </p>
          <div className="flex justify-start items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/arvinpaundraardana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/arvinpaundra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://x.com/arvinpaundra_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
