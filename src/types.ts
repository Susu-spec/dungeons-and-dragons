export interface CardContentProps {
  data: any;
  variant: "Front" | "Back";
}

export interface ViewRowProps {
  data: any;
  CardContent: React.ComponentType<CardContentProps>;
}
