# Monorepo Project System

A modular monorepo system demonstrating component-based development, code reusability, and collaborative development practices.



## Packages Overview

### UI Components (`@monorepo/ui-components`)
- Reusable React components built with ShadCN/UI
- Includes buttons, cards, forms, modals, and layout components
- Fully typed with TypeScript
- Consistent design system

### Utils (`@monorepo/utils`)
- Shared utility functions for common operations
- Date formatting, string manipulation, API helpers
- Validation functions and data transformers
- Type-safe utility library

### Feature X (`@monorepo/feature-x`) - Task Management
- Complete task management system
- Task creation, editing, and deletion
- Priority levels and status tracking
- Demonstrates integration of UI components and utils

### Feature Y (`@monorepo/feature-y`) - User Profile
- User profile management system
- Profile editing and avatar upload
- Settings and preferences
- Showcases component composition and utility usage

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone or create the project directory:**
   \`\`\`bash
   mkdir monorepo-project
   cd monorepo-project
   \`\`\`

2. **Copy all the provided files into the directory structure**

3. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

4. **Install package dependencies:**
   \`\`\`bash
   # Install dependencies for all packages
   npm run build
   \`\`\`

5. **Start development:**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open the demo app:**
   Navigate to `http://localhost:3000` to see the integrated system

## 🛠️ Development Commands

\`\`\`bash
# Start all packages in development mode
npm run dev

# Build all packages
npm run build

# Run linting across all packages
npm run lint

# Type check all packages
npm run type-check

# Clean all build artifacts
npm run clean

# Run tests (when implemented)
npm run test
\`\`\`

## 📁 Working with Packages

### Adding a new package:
1. Create a new directory in `packages/`
2. Add a `package.json` with the naming convention `@monorepo/package-name`
3. Update the root `package.json` workspaces if needed

### Using packages in other packages:
\`\`\`json
{
  "dependencies": {
    "@monorepo/ui-components": "*",
    "@monorepo/utils": "*"
  }
}



