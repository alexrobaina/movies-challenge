# Entertainment Hub 🎬

Web application for discovering movies and TV series, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Movies & Series Browsing**: Browse through a curated collection of movies and TV series
- **Search Functionality**: Real-time search with debouncing for better performance
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Mode**: Built-in dark mode support
- **Infinite Loading**: Load more content as you scroll
- **Modal Details**: Click on any item to view detailed information
- **Type Safety**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Query** - Data Fetching
- **Vitest** - Testing
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React-testing-library** - Testing

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/alexrobaina/movies-challenge.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the application.

## 🧪 Testing

To run the tests:

```bash
pnpm test
```

## 📦 Project Structure

The project is organized into the following directories:

- `src/`: Contains the source code for the application

  - `components/`: Contains the reusable components
    - `common/`: Contains the common components
  - `pages/`: Contains the page components
    - `MoviesPage/`: Contains the movies page components
    - `SeriesPage/`: Contains the series page components
  - `types/`: Contains the type definitions
  - `hooks/`: Contains the custom hooks
  - `test/`: Contains the test files
  - `services/`: Api services
  - `assets/`: Contains the images and icons
  - `App.tsx`: The main component that renders the application
  - `main.tsx`: The entry point for the application

  ## 🔍 Key Components

- **MediaGrid**: Reusable grid component for displaying movies/series
- **MediaModal**: Modal component for showing detailed information
- **BaseButton**: Customizable button component
- **CardsSkeleton**: Loading skeleton for better UX

## 🎯 Features in Detail

### Search Functionality

- Real-time search with 500ms debouncing
- Updates results as you type
- Case-insensitive search

### Infinite Loading

- Initial load of 20 items
- "Load More" button for additional content
- Tracks loading state for better UX

### Responsive Design

- Mobile-first approach
- Flexible grid layout
- Optimized images

### Type Safety

- Built with TypeScript
- Type safety for all data

#

## 🤔 Technical and Architectural Decisions

### Chosen Technologies

- **React + TypeScript**: Selected for its robust typing and error prevention.
- **React Query**: Simplifies server state management and caching.
- **Tailwind CSS**: Enables rapid and consistent UI development.
- **Vitest**: Fast testing, compatible with React.
- **React Router**: Declarative navigation and route management.

### Architecture

- **Reusable Components**: Modular design to maximize reusability.
- **Custom Hooks**: Separation of business logic from UI components.
- **Atomic Design Pattern**: Scalable organization of components.
- **Testing Library**: Focus on user behavior testing.

## 🔄 Possible Improvements

1. **Performance**

   - Implement virtualization for long lists.
   - Optimize lazy loading of images.
   - Enhance caching strategies to reduce page load times.

2. **Functionality**

   - Add advanced filters to improve search.
   - Implement a favorites system so users can save their favorite movies and series.
   - Add user authentication.
   - Integrate additional data sources to enhance the user experience.

3. **UX/UI**
   - Improve transition animations.
   - Add more visual feedback to enhance user experience, such as rating stars.
   - Implement more detailed skeleton loading.

## ⏰ With More Time

1. **Quality**

   - Increase test coverage.
   - Implement E2E testing with Cypress.
   - Add documentation with Storybook.

2. **Features**

   - Recommendation system.
   - Integration with review APIs.
   - Rating system.

3. **Infrastructure**

   - Robust CI/CD pipelines.
   - Error monitoring.
   - User analytics.

4. **Accessibility**
   - Accessibility tests.
   - Screen reader support.
