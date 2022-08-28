interface Props {
  children: JSX.Element;
  width: number;
}

export const CarouselItemComponent = ({ children, width }: Props) => {
  return <div style={{ width: width }}>{children}</div>;
};
