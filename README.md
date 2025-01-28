# Dungeons and Dragons Inspired Dashboard

## Table of Contents

- [Introduction](#introduction)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Setup Instructions](#setup-instructions)

- [Folder Structure](#folder-structure)

- [Usage](#usage)



## Introduction

This project is designed to create an interactive, responsive table with advanced features such as pagination, scrolling, and dynamic data rendering. The table provides a smooth user experience and adheres to modern design principles.

## Features

- Responsive Table Design: Adjusts seamlessly to different screen sizes.
- Pagination: Dynamically paginate table rows.
- Search: Inputting certain sections such as name, materials, school, size, languages and category prompts items containing that information.
- Dynamic Data Loading: Render rows and cells based on external data.
- Randomizer: Randomizes the data based on the names section.
- Interactive Elements:
  - Page navigation buttons (styled with swords for a medieval theme).
  - Scroll Control: Maintain intact table borders while enabling scrolling for content.
- Mobile Optimizations:
  - Hide excess pagination numbers.
  - Enable sliding or dynamic expansion for hidden numbers.


## Technologies Used
- React: Component-based UI design.
- TypeScript: Ensures type safety.
- Tailwind CSS: Utility-first CSS framework for rapid UI styling.
- React Table: For efficient table rendering and manipulation.
- Framer Motion: Adds smooth animations (used in interactive elements).


## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=16.x)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate into the project directory:
```bash
cd project-name
```

3. Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000.


## Folder Structure

```
project-name/
├── public/          # Static assets like images, icons, etc.
├── src/             # Main application source code
│   ├── components/  # Reusable React components (e.g., Table, Pagination)
│   ├── hooks/       # Custom React hooks
│   ├── styles/      # Tailwind CSS configurations
│   ├── utils/       # Utility functions
│   ├── pages/       # Application pages
│   └── app.tsx      # Root application file
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Usage

- Navigate through the pages using the sword-themed pagination buttons.

- Hover over table cells to reveal tooltips for truncated text.

- Use the table on mobile to experience dynamic row adjustments and hidden pagination controls.
