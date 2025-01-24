export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'engineer' | 'manager' | 'technician';
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  version: string;
  status: 'development' | 'testing' | 'production' | 'maintenance';
  createdAt: string;
  updatedAt: string;
}

export interface ChangeRequest {
  id: string;
  title: string;
  description: string;
  type: 'ECR' | 'ECP' | 'ECO';
  status: 'pending' | 'review' | 'approved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  requestedBy: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

export interface MaintenanceLog {
  id: string;
  droneId: string;
  type: 'scheduled' | 'emergency' | 'preventive';
  description: string;
  technician: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
}