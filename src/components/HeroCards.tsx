import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import battleOfNationsLogo from "../assets/playstore_logo.png";
import image_playstore from "../assets/playstore.webp";
import image_appstore from "../assets/appstore.webp";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import youtubeIcon from "../assets/youtube.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/utkarshtrivedimdz.png"
            />
            <AvatarFallback>UT</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Utkarsh Trivedi</CardTitle>
            <CardDescription className="font-normal text-primary">
              CTO
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>It has been one hell of a Journey!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://github.com/geofast.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Valentijn Hoornaert</CardTitle>
          <CardDescription className="font-normal text-primary">
            Founder & CEO
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I really enjoy transforming ideas into games that exceed
            expectations
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/utkarshtrivedimdz"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/utkarshtrivedi/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Battle of Nations
            <img
              src={battleOfNationsLogo}
              alt=""
              className="w-[75px] object-contain rounded-lg"
            />
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">79k</span>
            <span className="text-muted-foreground"> installs</span>
          </div>

          <CardDescription>
            Pick a country and conquer the world in a thrilling battle royale showdown!
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
          >
            <img
              src={image_playstore}
              alt="Get it on Google Play"
              className="h-12 object-contain"
            />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.geofast.geofastbattleofnations"
          >
            <img
              src={image_appstore}
              alt="Download on the App Store"
              className="h-12 object-contain"
            />
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Free", "Premium Sandbox Mode", "53 Supported Languages", "Frequent Updates"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Community */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-center">Be part of our Growing Community</CardTitle>
          <CardDescription className="text-center text-sm">Daily Content!</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4">
          <a
            href="https://www.instagram.com/geofast_/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={instagramIcon} alt="Instagram" className="h-10 object-contain" />
          </a>
          <a
            href="https://www.tiktok.com/@geofast_"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={tiktokIcon} alt="TikTok" className="h-10 object-contain" />
          </a>
          <a
            href="https://www.youtube.com/@geofast_"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={youtubeIcon} alt="YouTube" className="h-10 object-contain" />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
