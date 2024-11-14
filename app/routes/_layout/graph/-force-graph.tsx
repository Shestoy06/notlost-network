'use client';

import { useEffect, useState, useCallback } from 'react';
import ForceGraph2D, { NodeObject } from 'react-force-graph-2d';
import data from '@/lib/utils/graph-demo-data.json';

type ImageCache = {
  [key: string]: HTMLImageElement;
};

const ForceGraph = () => {
  const [imageCache, setImageCache] = useState<ImageCache>({});

  useEffect(() => {
    const loadImage = (url: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
      });
    };

    const preloadImages = async () => {
      const cache: ImageCache = {};
      for (const node of data.nodes) {
        // TODO: REPLACE PLACEHOLDER AVATAR
        const avatarUrl =
          node.avatar ||
          'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp';
        cache[node.id] = await loadImage(avatarUrl);
      }
      setImageCache(cache);
    };

    preloadImages();
  }, []);

  const drawNode = useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const imgSize = node.size || 10;
      const fontSize = Math.min(3, (12 * globalScale) / 4);
      const textOpacity = Math.min(globalScale / 4, 0.9);
      const img = imageCache[node.id!];

      if (img) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x!, node.y!, imgSize / 2, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(
          img,
          node.x! - imgSize / 2,
          node.y! - imgSize / 2,
          imgSize,
          imgSize,
        );
        ctx.restore();
      }

      ctx.font = `${fontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = `rgba(201, 225, 253, ${textOpacity})`;
      ctx.fillText(
        node.username || node.id,
        node.x!,
        node.y! + imgSize / 2 + 1,
      );
    },
    [imageCache],
  );

  /*const data = useMemo(() => ({
    nodes: [...user.themes, ...user.contacts],
    links: user.links,
  }), [user]);*/

  return (
    <div
      style={{
        backgroundImage: '/chat-bg-pattern-dark.png',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <img
        src="/app/assets/chat-bg-pattern-dark.png"
        alt=""
        className="absolute h-screen"
      />
      <ForceGraph2D
        graphData={data}
        nodeAutoColorBy="group"
        nodeCanvasObject={drawNode}
        dagLevelDistance={-100}
        nodePointerAreaPaint={(node, color, ctx) => {
          const imgSize = 10;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, imgSize / 2, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        warmupTicks={50}
        linkCanvasObject={(link, ctx) => {
          ctx.strokeStyle = getCssVariableValue('--tg-theme-button-color');
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(
            (link.source as { x: number; y: number }).x,
            (link.source as { x: number; y: number }).y,
          );
          ctx.lineTo(
            (link.target as { x: number; y: number }).x,
            (link.target as { x: number; y: number }).y,
          );
          ctx.stroke();
        }}
        enableNodeDrag={true}
      />
    </div>
  );
};

function getCssVariableValue(variableName: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

export default ForceGraph;
