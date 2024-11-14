import { NodeBody } from '@/routes/_layout/contacts-list/index';

export const Contact = ({ node }: { node: NodeBody }) => {
  return (
    <div
      className={`flex items-center p-2 border-[1px] border-primary rounded-xl`}
      key={node.id}
    >
      <img
        src={
          node.avatar ||
          'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
        }
        className="h-12 w-12 rounded-full"
        alt=""
      />
      <div className="h-full ml-2">
        <div>{node.id}</div>
        {node.tags &&
          node.tags.map((tag) => (
            <span
              className={`px-2 py-0.5 text-xs text-black bg-buttonBezeled text-link rounded-xl`}
              key={tag.title}
            >
              {tag.title}
            </span>
          ))}
      </div>
    </div>
  );
};
