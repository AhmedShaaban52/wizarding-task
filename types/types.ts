export type Elixir = {
  id: string;
  name: string;
};

export type Wizard = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  elixirs: Elixir[];
  color?: string;
};
