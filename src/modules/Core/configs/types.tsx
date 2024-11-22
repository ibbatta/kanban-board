export type StateType = {
  states: string[];
  activeTab: number | null;
  // setActiveTab: (id: number) => void;
};

export type TabsType = {
  id: number;
  isActive: boolean;
  cards: CardsType[] | [];
  addCard: (data: CardsType) => void;
  // setActiveTab: (id: number) => void;
};

export type CardsType = {
  id: number;
  text: string;
  // onDelete: (id: number) => void;
};
