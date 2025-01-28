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

- **Responsive Table Design**: Adapts to various screen sizes.
- **Pagination**: Medieval sword-themed navigation buttons.
- **Search**: Query specific data by entering keywords (e.g., name, materials, size, schools and languages.).
- **Dynamic Data Randomizer**: Shuffles the table data based on names.
- **Mobile Optimizations**:
  - Hide excess pagination numbers on smaller screens.
  - Enable sliding or dynamic number expansion for navigation.

## Technologies Used

- **React**: For building a modular and dynamic UI.
- **TypeScript**: Ensures type safety.
- **Tailwind CSS**: For rapid, utility-first styling.
- **React Table**: Manages table data and features like sorting and filtering.
- **Framer Motion**: Smooth animations for interactive elements.


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
