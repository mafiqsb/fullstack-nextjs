import DeletePostButton from './DeletePostButton';

export default function Post({ id, title, content, authorName }) {
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '5px',
        padding: '15px',
        margin: '15px 0 px',
      }}
      id={id}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <small>By {authorName}</small>
      <DeletePostButton postId={id} />
    </div>
  );
}
