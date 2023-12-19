import { Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

const Images = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">
              Olawale Ayejuyone
            </h1>
            <p className="text-center">President / Founder</p>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">Dariel Soriano</h1>
            <p className="text-center">Vice President</p>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">Elias Perez</h1>
            <p className="text-center">Chief Financial Officer</p>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">Will Champion</h1>
            <p className="text-center">Community Outreach Director</p>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">Alexander Odita</h1>
            <p className="text-center">Chief Marketing Officer</p>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">Quam Odesanya</h1>
            <p className="text-center">Officating Director</p>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <Card className="flex border">
          <CardBody className="flex gap-2">
            <Image
              isBlurred
              width={240}
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className=""
            />
            <h1 className="text-center text-lg font-medium">Rodger Salmon</h1>
            <p className="text-center">Youth Development Director</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Images;
