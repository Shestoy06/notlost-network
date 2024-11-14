import { useState } from 'react';
import mockData from '@/lib/utils/graph-demo-data.json';
import { createFileRoute } from '@tanstack/react-router';
import {
  FilterByLatest,
  FilterBySearch,
  FilterByTag,
} from '@/routes/_layout/contacts-list/-filters';
import { Contact } from '@/routes/_layout/contacts-list/-contact';

export interface NodeBody {
  id: string;
  group: number;
  avatar: string;
  username: string;
  description?: string;
  tags?: Tag[];
  createdAt: Date;
}

interface Tag {
  title: string;
  color: string;
}

enum FilterOptions {
  LAST_ADDED,
}

const Index = () => {
  const [filterState, setFilterState] = useState<FilterOptions[]>([]);
  const [searchState, setSearchState] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const data = [...mockData.nodes] as NodeBody[];

  const filteredData = data
    .filter((node) => {
      if (selectedTag) {
        return node.tags?.some((tag) => tag.title === selectedTag);
      }
      return true;
    })
    .filter((node) => {
      if (searchState) {
        return (
          node.id.toLowerCase().includes(searchState.toLowerCase()) ||
          node.description?.toLowerCase().includes(searchState.toLowerCase())
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (filterState.includes(FilterOptions.LAST_ADDED)) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return 0;
    });

  const uniqueTags = Array.from(
    new Set(data.flatMap((node) => node.tags?.map((tag) => tag.title) || [])),
  );

  return (
    <div className="p-4">
      <div className="mb-6">
        <FilterBySearch
          value={searchState}
          onChange={(value: string) => setSearchState(value)}
        />
        <div className={'flex space-x-2'}>
          <FilterByTag
            tags={uniqueTags}
            setSelectedTag={(tag: string | null) => {
              setSelectedTag(tag);
            }}
          />
          <FilterByLatest
            enable={() => {
              setFilterState([...filterState, FilterOptions.LAST_ADDED]);
              setSelectedTag(null);
            }}
            disable={() => {
              setFilterState(
                filterState.filter(
                  (option) => option !== FilterOptions.LAST_ADDED,
                ),
              );
            }}
          />
        </div>
      </div>
      <div className="space-y-2 mt-4 pb-16">
        {filteredData.map((node) => (
          <Contact node={node} key={node.id} />
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute('/_layout/contacts-list/')({
  component: Index,
});
