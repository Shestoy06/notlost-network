'use client';

import { createFileRoute } from '@tanstack/react-router';
import '@/index.css';
import ForceGraph from './-force-graph';

export const Route = createFileRoute('/_layout/graph/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <ForceGraph />
    </div>
  );
}
