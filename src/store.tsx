import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface Submission {
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  package: string;
  details: string;
  status: 'pending' | 'done';
  createdAt: string;
}

interface StoreContextType {
  submissions: Submission[];
  addSubmission: (sub: Omit<Submission, 'id' | 'status' | 'createdAt'>) => Submission;
  deleteSubmission: (id: string) => void;
  markAsDone: (id: string) => void;
  currentSubmission: Submission | null;
  setCurrentSubmission: (sub: Submission | null) => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [submissions, setSubmissions] = useState<Submission[]>(() => {
    try {
      const saved = localStorage.getItem('jobflow_submissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentSubmission, setCurrentSubmission] = useState<Submission | null>(() => {
    try {
      const saved = localStorage.getItem('jobflow_current');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('jobflow_submissions', JSON.stringify(submissions));
  }, [submissions]);

  useEffect(() => {
    if (currentSubmission) {
      localStorage.setItem('jobflow_current', JSON.stringify(currentSubmission));
    }
  }, [currentSubmission]);

  const addSubmission = (sub: Omit<Submission, 'id' | 'status' | 'createdAt'>) => {
    const newSub: Submission = {
      ...sub,
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      status: 'pending',
      createdAt: new Date().toLocaleString('ar-MA'),
    };
    setSubmissions(prev => [newSub, ...prev]);
    setCurrentSubmission(newSub);
    return newSub;
  };

  const deleteSubmission = (id: string) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
  };

  const markAsDone = (id: string) => {
    setSubmissions(prev =>
      prev.map(s => (s.id === id ? { ...s, status: 'done' as const } : s))
    );
  };

  return (
    <StoreContext.Provider
      value={{
        submissions,
        addSubmission,
        deleteSubmission,
        markAsDone,
        currentSubmission,
        setCurrentSubmission,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
