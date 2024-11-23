import { StatusConstantType, CardType } from "./types";

export const STATUS: StatusConstantType = {
  BACKLOG: "Backlog",
  PROGRESS: "In progress",
  DONE: "Completed",
};

export const FAKE_DATA: CardType[] = [
  {
    id: 1,
    title: "Prima card asdadas",
    column: 0,
  },
  {
    id: 2,
    title: "Seconda card asd asd",
    column: 0,
  },
  {
    id: 3,
    title: "Terza card lorem ipsum dolor asd asd asd as",
    column: 0,
  },
  {
    id: 4,
    title: "Quarta card lkj sdlfkj sldkfj sdlfkj",
    column: 1,
  },
  {
    id: 5,
    title:
      "Quinta card dkjh dkhklkj alsdj alsdjl asjdl ajsldka sdakdljah ksdjh asd",
    column: 1,
  },
  {
    id: 6,
    title: "Sesta card ksdjfhk sjdhfk",
    column: 2,
  },
];
