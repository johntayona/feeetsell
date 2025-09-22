import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const GoalsContext = createContext();

// Provider component wrapping your app or part of it
export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([]);

  // Example fetchGoals function to initialize goals (you can replace with API)
  const fetchGoals = async () => {
    // For demo purposes, static goals or fetch from API/localStorage
    setGoals([
      { id: "1", name: "Nike Air Max", progress: 50 },
      { id: "2", name: "Adidas Ultraboost", progress: 30 },
    ]);
  };

  // Create a new goal
  const createGoal = async (goal) => {
    setGoals((prev) => [...prev, { ...goal, id: Date.now().toString() }]);
  };

  // Update existing goal
  const updateGoal = async (updatedGoal) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
    );
  };

  // Delete a goal by id
  const deleteGoal = async (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <GoalsContext.Provider
      value={{ goals, fetchGoals, createGoal, updateGoal, deleteGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

// Hook to use the Goals context
export function useGoals() {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }
  return context;
}
