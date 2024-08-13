import { Title, TitleTags } from "../../fragments/content/Title";

interface Props {
  title: string;
  tag: TitleTags;
}

export function TitleBox({ title, tag }: Props) {
  return (
    <div>
      <Title tag={tag} size="two" titleStyle="primary" italic>{title}</Title>
    </div>
  );
}
