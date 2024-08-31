import NavBar from '@/components/custom-ui/navbar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FaDocker, FaGithub, FaGolang, FaXTwitter } from 'react-icons/fa6';
import React from 'react';
import { IconType } from 'react-icons';
import {
  SiLinkedin,
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

interface IStack {
  Icon: IconType;
  Label: string;
}

const stacks: IStack[][] = [
  [
    {
      Icon: FaGolang,
      Label: 'Golang',
    },
    {
      Icon: SiPhp,
      Label: 'PHP',
    },
    {
      Icon: SiTypescript,
      Label: 'Typescript',
    },
  ],
  [
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
  ],
  [
    {
      Icon: FaDocker,
      Label: 'Docker',
    },
    {
      Icon: ImGit,
      Label: 'Git',
    },
  ],
];

export default function Home() {
  return (
    <main>
      <NavBar />

      <section className="py-10 px-28 flex flex-col gap-8">
        <section className="flex justify-center items-center">
          <Alert className="bg-imperial-red/20 border border-imperial-red/80 text-white">
            {/* <Terminal className="h-4 w-4" />
            <AlertTitle>New Notification</AlertTitle> */}
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
          <p className="text-sm">
            A <span className="text-vivid-red">Software Engineer</span> with
            having strong knowledge and expertise in Backend Development that
            enthusiastic and eager to create robust and scalable systems. Have a
            good understanding of Go, PHP, and Typescript programming languages,
            as well as a strong understanding of creating an efficient and
            secure API. Committed to developing capabilities in software
            development to help the efficiency of an organization.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red">
            Stuff that i`ve used
          </h3>
          <ul>
            <li className="flex justify-between items-start gap-20">
              {stacks.map((stack: IStack[], index: number) => (
                <ul key={index}>
                  {stack.map((s: IStack) => (
                    <li
                      key={s.Label}
                      className="flex justify-start items-center gap-2"
                    >
                      <s.Icon />
                      <p>{s.Label}</p>
                    </li>
                  ))}
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
            <TimelineContent date="Komerce • August 2023 - Present">
              <ul className="list-decimal">
                <li>
                  Developed and maintained kompack.id to manage partner
                  products, warehouses, and revenue streams.
                </li>
                <li>
                  Optimized and fixed over 10+ bugs from kompack.id legacy.
                </li>
                <li>
                  Released latest version of kompack.id as a standalone service
                  written in Go and PostgreSQL for storage.
                </li>
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

            <TimelineContent date="Golet Digital Solusi • August 2022 - August 2023">
              <ul className="list-decimal">
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

            <TimelineContent date="Magang dan Studi Independen (MSIB) • August 2022 - December 2022">
              <ul className="list-decimal">
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
        </section>

        <section className="flex flex-col gap-3">
          <h3
            id="contact"
            className="font-semibold text-lg underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red"
          >
            Get in touch
          </h3>
          <p>Feel free to email anytime if you want to connect with me.</p>
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
                className="bg-erie-black border border-white/20"
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
                className="bg-erie-black border border-white/20"
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
                className="bg-erie-black border border-white/20"
              />
            </div>

            <Button
              type="submit"
              className="bg-imperial-red hover:bg-imperial-red/80 hover:transition w-fit self-end"
            >
              Submit
            </Button>
          </form>
          <p>You also can reach me through these platforms.</p>
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
