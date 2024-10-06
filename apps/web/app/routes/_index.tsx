import type { MetaFunction } from '@remix-run/node';
import {
  BookOpen,
  Crown,
  Diamond,
  Hash,
  ListChecks,
  Mail,
  MessageSquareMore,
  Plus,
} from 'lucide-react';
import { Button } from '../components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const navigation = [
  {
    id: 'guide',
    icon: BookOpen,
    title: 'Guide',
  },
  {
    id: 'problems',
    icon: ListChecks,
    title: 'Problems',
  },
  {
    id: 'leaderboards',
    icon: Crown,
    title: 'Leaderboards',
  },
  {
    id: 'contest',
    icon: Mail,
    title: 'Contests',
  },
  {
    id: 'shop',
    icon: Diamond,
    title: 'Shop',
  },
  {
    id: 'notificatios',
    icon: Mail,
    title: 'Notificatons',
  },
  {
    id: 'jobs',
    icon: Mail,
    title: 'Jobs',
  },
  {
    id: 'live',
    icon: MessageSquareMore,
    title: 'Live',
  },
];

const information = [
  {
    title: 'welcome',
  },
  {
    title: 'announcements',
  },
  {
    title: 'introductions',
  },
  {
    title: 'suggestions',
  },
];

const channels = [
  {
    title: 'general',
  },
  {
    title: 'random',
  },
];

export default function Index() {
  return (
    <div className="flex">
      <aside className="w-60">
        <div className="flex flex-col p-4">
          <div className="flex gap-2 items-center">
            <img className="size-8" src="/logo.png" alt="logo" />
            <p className="font-semibold">Leetmates</p>
          </div>
          <Button className="my-4">
            <Plus className="mr-2 size-4" />
            Create Room
          </Button>
          {navigation.map((item, index) => {
            return (
              <Button key={index} className="justify-start" variant="ghost">
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            );
          })}
          <p className="my-2 text-sm font-semibold">INFORMATION</p>
          {information.map((item, index) => {
            return (
              <Button key={index} className="justify-start" variant="ghost">
                <Hash className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            );
          })}
          <p className="my-2 text-sm font-semibold">GENERAL</p>
          {channels.map((item, index) => {
            return (
              <Button key={index} className="justify-start" variant="ghost">
                <Hash className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            );
          })}
          <p className="my-2 text-sm font-semibold">CODING</p>
          {channels.map((item, index) => {
            return (
              <Button key={index} className="justify-start" variant="ghost">
                <Hash className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            );
          })}
        </div>
      </aside>
      <main>test</main>
    </div>
  );
}
