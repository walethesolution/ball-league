import { StaticImageData } from "next/image";
import Wale from "../../public/assets/images/olawale.svg";

export interface Players {
  name: string;
  position: string;
  imageSrc: StaticImageData;
  height: string;
  weight: string;
}

export const playerData: Players[] = [
  {
    name: "Olawale Ayejuyone",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Dariel Soriano",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Alexander Odita",
    position: "F",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Quam Dizzle",
    position: "F",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Steve Liadi",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Elias Perez",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Samson Olabimpe",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Tunde Otaiku",
    position: "C",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Will Champion",
    position: "C",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Hamed Tunde",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Rodger Shooter",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    name: "Lateef Lateef",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
];
