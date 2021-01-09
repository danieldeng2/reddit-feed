import ArticleCard from "./components/ArticleCard";

function ArticleList(props) {
  return (
    <>
      {props.articles.map(({ id, score, timestamp, title, link, content }) => (
        <ArticleCard
          key={id}
          score={score}
          time={timestamp}
          title={title}
          link={link}
          content={content}
        />
      ))}
    </>
  );
}

export default ArticleList;
