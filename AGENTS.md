# Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run check` - Run TypeScript type checking
- `npm run check:watch` - Run TypeScript checking in watch mode

# Code Style Guidelines

## Imports
- Use `$lib/` alias for internal imports (e.g., `$lib/utils.js`)
- Import Svelte components with `.svelte` extension
- Use explicit `.js` extensions for TypeScript imports in Svelte files

## Component Structure
- Use Svelte 5 syntax with `$props()` and `$bindable()`
- Separate module script (`<script lang="ts" module>`) for types/exports
- Use `cn()` utility for conditional Tailwind classes
- Follow shadcn-svelte patterns for UI components

## TypeScript
- Strict mode enabled
- Use `WithElementRef<T>` type for component props that need ref forwarding
- Export types from module scripts for reuse

## Styling
- Use Tailwind CSS with tailwind-variants for component variants
- Follow shadcn-svelte design system patterns
- Use semantic HTML elements with proper ARIA attributes

## File Organization
- UI components in `$lib/components/ui/` with index.ts exports
- Utilities in `$lib/utils.ts`
- Use consistent naming: PascalCase for components, camelCase for functions