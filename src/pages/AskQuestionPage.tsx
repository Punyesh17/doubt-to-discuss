
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { 
  HelpCircle, X, Image, FileCode, ChevronLeft
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import { toast } from 'sonner';
import { popularTags } from '@/data/mockData';

export default function AskQuestionPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  
  const handleAddTag = () => {
    if (tagInput.trim() && !selectedTags.includes(tagInput.trim()) && selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tagInput.trim()]);
      setTagInput('');
    }
  };
  
  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() === '' || content.trim() === '') {
      toast.error('Please fill out all required fields');
      return;
    }
    
    if (selectedTags.length === 0) {
      toast.error('Please add at least one tag');
      return;
    }
    
    // In a real app, we would submit to an API
    toast.success('Your question has been posted!');
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-4" 
          asChild
        >
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Questions
          </Link>
        </Button>
        
        <h1 className="text-3xl font-bold mb-6">Ask a Question</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base">
                  Question Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., How do I solve this calculus problem?"
                  className="text-base py-6"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content" className="text-base">
                  Question Details <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Describe your question in detail. Include formulas, context, and what you've tried so far."
                  className="min-h-[200px] text-base"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags" className="text-base">
                  Tags <span className="text-destructive">*</span>
                  <span className="text-xs text-muted-foreground ml-2">(max 5)</span>
                </Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="py-1.5 pl-3">
                      {tag}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 ml-1 p-0 text-muted-foreground hover:text-foreground"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="flex">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="e.g., mathematics, calculus"
                    className="rounded-r-none"
                    disabled={selectedTags.length >= 5}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={handleAddTag}
                    className="rounded-l-none"
                    disabled={selectedTags.length >= 5}
                  >
                    Add
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="px-4"
                >
                  <Image className="mr-2 h-4 w-4" /> 
                  Add Image
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  className="px-4"
                >
                  <FileCode className="mr-2 h-4 w-4" /> 
                  Add Code Snippet
                </Button>
              </div>
              
              <div className="pt-4">
                <Button type="submit" size="lg" className="px-8">
                  Post Your Question
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-brand-purple mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Asking a good question</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">Be specific </span> 
                        about your problem and include all relevant details.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Show your work </span>
                        and explain what you've already tried.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Use proper formatting </span>
                        for math equations, code, and other special content.
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Add relevant tags </span>
                        to help others find and answer your question.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.slice(0, 12).map((tag) => (
                  <Badge 
                    key={tag.name} 
                    variant="outline" 
                    className="tag cursor-pointer"
                    onClick={() => {
                      if (!selectedTags.includes(tag.name) && selectedTags.length < 5) {
                        setSelectedTags([...selectedTags, tag.name]);
                      }
                    }}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
