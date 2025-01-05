export interface CardContentProps {
  data: any;
  variant: "Front" | "Back";
}

export interface ViewRowProps {
  data: any;
  CardContent: React.ComponentType<CardContentProps>;
}

export interface TableProps {
  columns: any;
  data: any;
  localSearch?: string;
  setLocalSearch: (localSearch: string) => void;
}
