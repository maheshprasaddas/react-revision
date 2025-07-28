# React Revision

This repository contains my personal React revision journey, where I revisit the core concepts, features, and best practices of building modern web applications with React.

## 🔍 Purpose

- Refresh foundational React knowledge
- Practice component design and state management
- Explore React Hooks (useState, useEffect, etc.)
- Build small, focused projects and components
- Improve code readability and reusability

## 🛠️ Topics Covered (WIP)

- JSX & Components
- Props & State
- Conditional Rendering
- Event Handling
- useState & useEffect Hooks
- Lists & Keys
- Forms & Controlled Components
- Custom Hooks
- React Router
- Small Practice Projects

## React vite setup and tailwindcss setup commands

```bash
npm create vite@latest
cd my-react-app
npm install
npm install tailwindcss @tailwindcss/vite


```
vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
})
``` 

index.css

```css
@import "tailwindcss";
