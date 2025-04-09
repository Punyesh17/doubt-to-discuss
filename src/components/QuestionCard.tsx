
import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, MessageSquare, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface QuestionCardProps {
  id: string;
  title: string;
  content: string;
  tags: string[];
  votes: number;
  answers: number;
  author: {
    name: string;
    avatar?: string;
    reputation: number;
  };
  createdAt: string;
}

export default function QuestionCard({
  id,
  title,
  content,
  tags,
  votes,
  answers,
  author,
  createdAt,
}: QuestionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <Link
            to={`/question/${id}`}
            className="text-xl font-semibold hover:text-brand-purple-dark transition-colors mb-2 line-clamp-2"
          >
            {title}
          </Link>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{votes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{answers}</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground line-clamp-2 mt-2 mb-3">{content}</p>

        <div className="flex flex-wrap gap-2 my-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="bg-muted/30 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-brand-purple-light/20 text-brand-purple-dark text-xs">
              {author.name.split(' ').map((n) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <span className="text-muted-foreground">asked by </span>
            <Link to={`/user/${author.name}`} className="font-medium hover:text-brand-purple transition-colors">
              {author.name}
            </Link>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <User className="h-3 w-3" />
              <span>{author.reputation} rep</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {new Date(createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
