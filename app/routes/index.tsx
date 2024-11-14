import { createFileRoute } from '@tanstack/react-router';
import { Onboarding } from '@/routes/-onboarding';

const Index = () => {
  return <Onboarding />;
};

export const Route = createFileRoute('/')({
  component: Index,
});
