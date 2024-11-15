import { NodeBody } from '@/routes/_layout/contacts-list/index';

export const Contact = ({ node }: { node: NodeBody }) => {
  return (
    <div
      className={`flex items-center px-4 min-h-20 justify-center text-sm relative`}
    >
      <img
        src={
          node.avatar ||
          'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
        }
        className="h-14 w-14 rounded-full"
        alt=""
      />
      <div className="h-full ml-4 w-full ">
        <div className="bg-divider h-[1px] absolute top-0 w-full"></div>
        <div className={'h-full flex items-center w-full py-2'}>
          <div className="w-full py-2">
            <div className="flex w-full">
              <div>{node.id}</div>
              {node.topic && (
                <div className="ml-auto text-link rounded-xl text-xs flex items-center justify-center">
                  <span>{node.topic}</span>
                </div>
              )}
            </div>
            <div className="flex gap-1 flex-wrap mt-4">
              {node.tags &&
                node.tags.map((tag) => (
                  <span
                    className={`px-2 py-[0.5px]  text-[10px] text-black bg-buttonBezeled text-link rounded-xl`}
                    key={tag.title}
                  >
                    {tag.title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
