# ⏰ React useEffect Digital Clock App

A real-time digital clock application built to practice useState, useEffect, setInterval in React.

---

## Key Features
* **Real-Time Synchronous Render:** Updates the UI every 1000ms (1 second) using native browser time engines.
* **Memory-Safe Cleanups:** Automatically clears active background processes to avoid memory leaks or performance degradation.
* **Defensive Scaffolding:** Uses execution constraints to prevent state-driven infinite rendering loops.

## Technical Breakdown (How it works)
1. **`useState(new Date())`**: Captures and initializes the local time object during the mounting phase.
2. **`useEffect()`**: Registers an isolated side-effect block to run asynchronously outside the standard UI workflow.
3. **`setInterval()`**: Spawns a background browser timer that executes state mutation functions sequentially.

## Tech Stack & Core Concepts Mastered

### **Core Stack**
* **Framework:** React.js.
* **State Management:** `useState` hook for mutable date objects.
* **Side-Effect Management:** `useEffect` hook.

### **JavaScript & React Rules Mastered**
* **The Dependency Array (`[]`):** Passed an empty array `[]` as the second argument to ensure the effect triggers **exactly once** when the component mounts, blocking infinite re-render loops.
* **Cleanup Function (`return () => clearInterval()`):** Returned a teardown callback inside `useEffect` to destroy the active interval when the component unmounts, preventing catastrophic RAM leaks.
* **Data Formatting:** Applied `.toLocaleTimeString()` to parse complex Date Objects into human-readable string outputs inside JSX elements.

## Execution
* **Run Command:** `npm start`
