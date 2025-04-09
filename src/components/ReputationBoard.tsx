
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ReputationBoardProps {
  users: {
    id: string;
    name: string;
    avatar?: string;
    reputation: number;
    badges: {
      gold: number;
      silver: number;
      bronze: number;
    };
  }[];
}

export default function ReputationBoard({ users }: ReputationBoardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-brand-purple" />
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col">
          {users.map((user, index) => (
            <Link 
              key={user.id} 
              to={`/user/${user.id}`}
              className={`flex items-center justify-between px-6 py-3 hover:bg-muted/50 transition-colors
                ${index !== users.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 font-semibold text-muted-foreground">
                  {index + 1}
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-brand-purple-light/20 text-brand-purple-dark">
                    {user.name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.reputation} reputation</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {user.badges.gold > 0 && (
                  <div className="flex items-center gap-1">
                    <Medal className="h-4 w-4 text-yellow-500" />
                    <span className="text-xs font-medium">{user.badges.gold}</span>
                  </div>
                )}
                {user.badges.silver > 0 && (
                  <div className="flex items-center gap-1">
                    <Medal className="h-4 w-4 text-gray-400" />
                    <span className="text-xs font-medium">{user.badges.silver}</span>
                  </div>
                )}
                {user.badges.bronze > 0 && (
                  <div className="flex items-center gap-1">
                    <Medal className="h-4 w-4 text-amber-700" />
                    <span className="text-xs font-medium">{user.badges.bronze}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
