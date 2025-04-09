
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, BellRing, PlusCircle, LogIn } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

export default function Navigation() {
  // For demo purposes, we'll assume the user is logged in
  const isLoggedIn = true;
  const userName = "Jane Doe";
  const userInitials = "JD";
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-brand-purple-light to-brand-purple-dark inline-block text-transparent bg-clip-text text-2xl font-bold">
              DoubtToDiscuss
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link to="/questions" className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
              Questions
            </Link>
            <Link to="/tags" className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
              Tags
            </Link>
            <Link to="/users" className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
              Users
            </Link>
          </nav>
        </div>
        
        <div className="hidden md:flex w-full max-w-sm items-center mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search questions..." className="pl-8 rounded-full bg-muted" />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <BellRing className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-brand-purple">
                <Link to="/ask">
                  <PlusCircle className="h-5 w-5" />
                </Link>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt={userName} />
                <AvatarFallback className="bg-brand-purple text-primary-foreground">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
