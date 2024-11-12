import {createFileRoute, useNavigate, useRouter} from '@tanstack/react-router'
import '../index.css'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import {useAccount} from "../lib/providers/jazz-provider";
import Graph from "../components/graph/graph";

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()
  const lp = useLaunchParams();
  const { me, logOut } = useAccount();

  return (
    <div>
    Start parameter: {lp.initData!.user!.id}
      <div className='p-4 bg-amber-300' onClick={logOut}>Log out</div>
      <Graph/>
    </div>
  );
}