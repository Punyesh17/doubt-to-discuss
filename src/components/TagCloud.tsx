
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TagCloudProps {
  tags: {
    name: string;
    count: number;
  }[];
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Popular Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag.name} to={`/tag/${tag.name}`}>
              <Badge variant="outline" className="tag hover-scale">
                {tag.name}
                <span className="ml-1 text-xs opacity-70">×{tag.count}</span>
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
