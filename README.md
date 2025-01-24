# Agricultural Drone PLM System

A comprehensive Product Lifecycle Management (PLM) system designed specifically for Agricultural Spraying Drones. This system helps manage the entire lifecycle of drone products, from design and development to maintenance and support.

## Features

### User Role Management
- **Admin**: Full system access and configuration
- **Engineers**: Design document management and change tracking
- **Managers**: Project oversight and analytics
- **Field Technicians**: Maintenance and support management

### Core Functionality
- **Product Data Management (PDM)**
  - CAD file storage and version control
  - BOM management (EBOM, MBOM, SBOM)
  - Design specification tracking

- **Configuration Management**
  - Drone model configuration tracking
  - Hardware/software compatibility management
  - Version control and history

- **Change Management**
  - Engineering Change Request (ECR) tracking
  - Engineering Change Proposal (ECP) workflow
  - Engineering Change Order (ECO) implementation
  - Stakeholder notification system

- **Maintenance Management**
  - Scheduled maintenance tracking
  - Service history logging
  - Predictive maintenance alerts

- **Analytics & Reporting**
  - Real-time project dashboards
  - Cost tracking and analysis
  - Time-to-market metrics
  - Customizable report generation

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

### Development Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run preview\`: Preview production build
- \`npm run lint\`: Run ESLint

## Project Structure

\`\`\`
src/
├── components/     # Reusable UI components
├── types/         # TypeScript interfaces and types
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
\`\`\`

## Component Documentation

### Layout
The main layout component that provides:
- Responsive sidebar navigation
- Header with user profile
- Mobile-friendly design

### Dashboard Components
- **StatCard**: Displays key metrics with trends
- **ActivityItem**: Shows recent system activities
- **TaskItem**: Displays upcoming tasks with priority levels

## Type System

### Core Interfaces
- \`User\`: User profile and role management
- \`Product\`: Drone product information
- \`ChangeRequest\`: Engineering change management
- \`MaintenanceLog\`: Service and maintenance tracking

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact [support email/link]