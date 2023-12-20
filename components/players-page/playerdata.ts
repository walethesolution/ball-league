import { StaticImageData } from "next/image";

export interface Player {
  id?: number;
  name: string;
  position: string;
  imageSrc: string;
  height: string;
  weight: string;
  nickName?: string;
  countryOfOrigin?: string;
  yearsOfExperience?: number;
  joined?: number;
}

export const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "POS", uid: "position", sortable: true },
  { name: "HEIGHT", uid: "height", sortable: true },
  { name: "WEIGHT", uid: "weight" },
  { name: "NICKNAME", uid: "nickName" },
];

export const positions = [
  {
    role: "Point Guard",
    uid: "PG",
  },
  {
    role: "Shooting Guard",
    uid: "SG",
  },
  {
    role: "Small Forward",
    uid: "SF",
  },
  {
    role: "Power Forward",
    uid: "PF",
  },
  {
    role: "Center",
    uid: "C",
  },
];

export const playersData: Player[] = [
  {
    id: 1,
    name: "Olawale Ayejuyone",
    position: "PG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
    nickName: "",
    countryOfOrigin: "",
    yearsOfExperience: 6,
  },
  {
    id: 2,
    name: "Dariel Soriano",
    position: "SG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 3,
    name: "Alexander Odita",
    position: "PF",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 4,
    name: "Victor Ayodeji",
    position: "SG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 5,
    name: "Quam Odesanya",
    position: "PF",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 6,
    name: "Steve Liadi",
    position: "SG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 7,
    name: "Elias Perez",
    position: "PG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 8,
    name: "Samson Adeniyi",
    position: "SF",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 9,
    name: "Tunde Otaiku",
    position: "C",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 10,
    name: "Will Champion",
    position: "C",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 11,
    name: "Ahmed Kareem",
    position: "PG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 12,
    name: "Rodger Salmon",
    position: "SG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 13,
    name: "Lateef Gboribo",
    position: "PG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 14,
    name: "Mell Ervin",
    position: "PG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
    nickName: "Sauce",
  },
  {
    id: 15,
    name: "Toyosi Adejugba",
    position: "SG",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 16,
    name: "John Floyd",
    position: "C",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 17,
    name: "Adolo Aneni",
    position: "C",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
  {
    id: 18,
    name: "Timi Olufoye",
    position: "C",
    imageSrc: "",
    height: "6'0",
    weight: "160lbs",
  },
];
