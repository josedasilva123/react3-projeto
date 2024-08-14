import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export function Breadcrumbs({ pageTitle }: Props) {
  return (
    <div>
      <Link to="/">Blog</Link> -&gt; <p>{pageTitle}</p>
    </div>
  );
}
