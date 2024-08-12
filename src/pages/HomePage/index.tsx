import { HighlightPostSection } from "../../components/posts/sections/HighlightPostSection";
import { RecentPostSection } from "../../components/posts/sections/RecentPostSection";
import { useToast } from "../../hooks/useToast";

export function HomePage() {
  const { toast } = useToast();

  return (
    <>
      <HighlightPostSection />
      <RecentPostSection />
      <button
        onClick={() => toast("Deu certo" + Math.random().toFixed(2), "sucess")}
      >Disparar toast</button>
    </>
  );
}
