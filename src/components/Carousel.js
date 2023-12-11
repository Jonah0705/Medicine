import { Carousel, Typography, Button, Avatar } from "@material-tailwind/react";
import LoginButton from "./LoginButton";
 
export function CarouselTransition() {
  return (
    <Carousel className="">
      <div className="relative w-full carousel">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Medinfo
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The Centralized Medicine And Drug Information App.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
              <a href="/Medicine" className="flex items-center">
          Medicine
        </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative carousel w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
           <Avatar
            alt="avatar"
            src="/images/Medinfo.png"
            variant="rounded"
            className="w-80 h-80"
            withBorder={true}
            color="green"
          />

            
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The Centralized Medicine And Drug Information App.
            </Typography>
            <div className="flex gap-2">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
      <div className="relative carousel w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Medinfo
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The Centralized Medicine And Drug Information App.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                View Your Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
export default CarouselTransition;
