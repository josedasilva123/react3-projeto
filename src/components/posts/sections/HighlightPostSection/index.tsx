import { useEffect, useState } from "react";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { IPost } from "../../../../interfaces/posts.interface";
import { postsRequest } from "../../../../data/posts/_index";
import { PostCard } from "./PostCard";

export function HighlightPostSection() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await postsRequest.getMany({ categoryId: "1" });
        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  return (
    <section>
      <div>
        <Title tag="h2">Destaques</Title>
        <div>
          {loading ? (
            <Text tag="p">Carregando...</Text>
          ) : (
            <>
              {postList.length > 0 ? (
                <ul>
                  {postList.slice(0, 2).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </ul>
              ) : (
                <Text tag="p">Nenhum post cadastrado.</Text>
              )}
            </>
          )}

          <li>
            <Text tag="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt
            </Text>
          </li>
        </div>
      </div>
    </section>
  );
}
