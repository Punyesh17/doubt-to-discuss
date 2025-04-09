
export const mockQuestions = [
  {
    id: '1',
    title: 'How do I solve this calculus problem involving chain rule?',
    content:
      'I\'m struggling with this derivative: f(x) = sin(x^2 + 3x). I know I need to use the chain rule, but I\'m getting confused with the steps. Can someone walk me through the solution?',
    tags: ['calculus', 'derivatives', 'mathematics'],
    votes: 15,
    answers: 3,
    author: {
      name: 'Alex Johnson',
      avatar: '',
      reputation: 342,
    },
    createdAt: '2023-09-15T14:23:00Z',
  },
  {
    id: '2',
    title: 'Understanding Newton\'s Second Law of Motion in practice',
    content:
      'I understand the formula F = ma, but I\'m having trouble applying it to real-world scenarios. Could someone provide some practical examples where Newton\'s Second Law is directly observable?',
    tags: ['physics', 'mechanics', 'newton-laws'],
    votes: 23,
    answers: 5,
    author: {
      name: 'Sarah Chen',
      avatar: '',
      reputation: 526,
    },
    createdAt: '2023-09-16T09:45:00Z',
  },
  {
    id: '3',
    title: 'How to balance redox reactions in acidic solutions?',
    content:
      'I\'m struggling with balancing redox reactions, especially in acidic conditions. The half-reaction method confuses me. Could someone provide a step-by-step guide with an example?',
    tags: ['chemistry', 'redox-reactions', 'stoichiometry'],
    votes: 18,
    answers: 4,
    author: {
      name: 'Mike Smith',
      avatar: '',
      reputation: 278,
    },
    createdAt: '2023-09-17T16:12:00Z',
  },
  {
    id: '4',
    title: 'Difference between prokaryotic and eukaryotic cell division',
    content:
      'I\'m confused about the key differences between how prokaryotic and eukaryotic cells divide. Can someone explain the major distinctions between binary fission and mitosis?',
    tags: ['biology', 'cell-division', 'microbiology'],
    votes: 31,
    answers: 6,
    author: {
      name: 'Emily Roberts',
      avatar: '',
      reputation: 421,
    },
    createdAt: '2023-09-18T11:37:00Z',
  },
  {
    id: '5',
    title: 'How to use the quadratic formula for complex roots?',
    content:
      'When solving quadratic equations with negative discriminants, I get complex numbers as roots. I\'m not sure how to interpret these or verify my answers. Can someone help?',
    tags: ['algebra', 'complex-numbers', 'quadratic-equations'],
    votes: 12,
    answers: 2,
    author: {
      name: 'David Wong',
      avatar: '',
      reputation: 195,
    },
    createdAt: '2023-09-19T15:05:00Z',
  },
];

export const popularTags = [
  { name: 'mathematics', count: 427 },
  { name: 'physics', count: 315 },
  { name: 'chemistry', count: 298 },
  { name: 'biology', count: 256 },
  { name: 'computer-science', count: 210 },
  { name: 'calculus', count: 189 },
  { name: 'algebra', count: 175 },
  { name: 'organic-chemistry', count: 156 },
  { name: 'mechanics', count: 132 },
  { name: 'statistics', count: 118 },
  { name: 'quantum-mechanics', count: 104 },
  { name: 'genetics', count: 97 },
  { name: 'algorithms', count: 89 },
  { name: 'ecology', count: 76 },
  { name: 'thermodynamics', count: 68 },
];

export const topUsers = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: '',
    reputation: 3254,
    badges: {
      gold: 5,
      silver: 24,
      bronze: 52,
    },
  },
  {
    id: '2',
    name: 'Robert Johnson',
    avatar: '',
    reputation: 2876,
    badges: {
      gold: 3,
      silver: 19,
      bronze: 41,
    },
  },
  {
    id: '3',
    name: 'Priya Patel',
    avatar: '',
    reputation: 2543,
    badges: {
      gold: 2,
      silver: 17,
      bronze: 38,
    },
  },
  {
    id: '4',
    name: 'Alex Thompson',
    avatar: '',
    reputation: 2187,
    badges: {
      gold: 1,
      silver: 13,
      bronze: 35,
    },
  },
  {
    id: '5',
    name: 'Maria Rodriguez',
    avatar: '',
    reputation: 1876,
    badges: {
      gold: 1,
      silver: 9,
      bronze: 28,
    },
  },
];
