
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle, RefreshCw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import QuestionCard from '@/components/QuestionCard';
import TagCloud from '@/components/TagCloud';
import ReputationBoard from '@/components/ReputationBoard';
import { mockQuestions, popularTags, topUsers } from '@/data/mockData';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="container py-8">
        <section className="mb-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-purple-light to-brand-purple-dark text-transparent bg-clip-text mb-4">
              Transform Your Doubts into Discussions
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Join our community of learners where every question leads to deeper understanding. 
              Get help, share knowledge, and build your academic reputation.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild className="rounded-full px-6">
                <Link to="/ask">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Ask a Question
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-6">
                <Link to="/questions">
                  Browse Questions
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Recent Questions</h2>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockQuestions.map((question) => (
                <QuestionCard key={question.id} {...question} />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="rounded-full px-6">
                View More Questions
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <TagCloud tags={popularTags} />
            <ReputationBoard users={topUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
