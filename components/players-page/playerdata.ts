import { StaticImageData } from "next/image";
import Wale from "../../public/assets/images/olawale.svg";

export interface Players {
  id: number;
  name: string;
  position: string;
  imageSrc: StaticImageData;
  height: string;
  weight: string;
  nickName?: string;
}

export const playerData: Players[] = [
  {
    id: 1,
    name: "Olawale Ayejuyone",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 2,
    name: "Dariel Soriano",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 3,
    name: "Alex Odita",
    position: "F",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 4,
    name: "Victor Ayodeji",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 5,
    name: "Quam Odesanya",
    position: "F",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 6,
    name: "Steve Liadi",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 7,
    name: "Elias Perez",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 8,
    name: "Samson Adeniyi",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 9,
    name: "Tunde Otaiku",
    position: "C",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 10,
    name: "Will Champion",
    position: "C",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 11,
    name: "Ahmed Kareem",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 12,
    name: "Rodger Salmon",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 13,
    name: "Lateef Gboribo",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 14,
    name: "Mell Ervin",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
    nickName: "Sauce",
  },
  {
    id: 15,
    name: "Toyosi Adejugba",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 16,
    name: "John Floyd",
    position: "G",
    imageSrc: Wale,
    height: "6'0",
    weight: "160lbs",
  },
];
