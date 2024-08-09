import { Link } from "react-router-dom";
import { Text } from "../Text";

interface Props {
  pageTitle: string;
}

export function Breadcrumbs({ pageTitle }: Props) {
  return (
    <div>
      <Link to="/">Blog</Link> -&gt; <Text tag="p">{pageTitle}</Text>
    </div>
  );
}
