import { createFileRoute, Outlet } from '@tanstack/react-router';
import BottomBar from '@/components/bottom-bar';

const LayoutComponent = () => {
  return (
    <>
      <Outlet />
      <BottomBar />
    </>
  );
};

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});
