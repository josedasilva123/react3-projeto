import { HighlightPostSection } from "../../components/posts/sections/HighlightPostSection";
import { RecentPostSection } from "../../components/posts/sections/RecentPostSection";

export function HomePage() {
  return (
    <>
      <HighlightPostSection />
      <RecentPostSection />
    </>
  );
}
