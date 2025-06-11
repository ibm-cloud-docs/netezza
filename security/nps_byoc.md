
# Build your own cloud

## Overview
{: #byoc_cloud}

The IBM Control Plane is designed to manage and interact with customer-owned components across various cloud platforms such as AWS, Azure, and Google Cloud. This documentation provides an overview of the architecture, key components, and data flow within the system.

## Key Components

### 1. MCSP & IBM Components
- **MCSP**: Managed Cloud Service Provider components that facilitate the integration and management of cloud services.
- **IBM Components**: Core elements provided by IBM to support the control plane functionalities.

### 2. API Server
- **REST APIs**: Interfaces for communication between the control plane and external systems.
- **Broker Interfaces**: Connectors that facilitate interactions with various cloud service brokers.

### 3. Service API
- **Admin API**: Used for administrative tasks and management of the control plane.
- **Instana**: Monitoring and observability tool integrated within the control plane.
- **SRE WebUI**: User interface for Site Reliability Engineers to manage and monitor services.
- **SaaS WebUI**: User interface for Software as a Service management.

### 4. Customer Accounts
- **AWS**: Integration with Amazon Web Services accounts.
- **Azure**: Integration with Microsoft Azure accounts.
- **Google Cloud**: Integration with Google Cloud Platform accounts.

## Hyperscaler System Components

### 1. Logging, Monitoring, Auditing
- **Logging**: Captures and stores logs for analysis and troubleshooting.
- **Monitoring**: Tracks system performance and health.
- **Auditing**: Ensures compliance and security by tracking changes and access.

### 2. Broker API & Authorization Layer
- **Broker API**: Facilitates communication between different components.
- **Authorization Layer (IAM Policies)**: Manages access control and permissions.

### 3. Workflow Controller & Message Queue
- **Workflow Controller**: Manages workflows and processes within the system.
- **Message Queue**: Ensures reliable communication between components.

### 4. Object Storage & Biller (MCSP)
- **Object Storage**: Stores data objects securely.
- **Biller (MCSP)**: Manages billing and financial transactions.

### 5. Engine Operations
- **Engine Operators**: Manage and operate the engine components.
- **Engine API**: Interface for engine operations.
- **Engine Console**: User interface for engine management.

## Zones and High Availability (HA)
- **Zone 1: Primary**
- **Zone 2: Standby**
- **Zone 3**

## Data Plane
- **ROKS/ROSA/AKS/EKS**: Managed Kubernetes services across different cloud platforms.

## Data Flow

The architecture diagram illustrates the flow of data and services between the various components. Key interactions include:
- Data exchange between the API Server and customer accounts via REST APIs.
- Monitoring and management through Instana and the SRE WebUI.
- Administrative tasks handled through the Admin API and SaaS WebUI.
- Logging, monitoring, and auditing functions ensure system reliability and compliance.
- Workflow management and message queuing facilitate smooth operations.
- Object storage and billing systems manage data and financial transactions.

## Conclusion

This architecture enables efficient management and integration of cloud services across multiple platforms, providing robust monitoring, administrative control, and seamless data flow. The hyperscaler system components ensure high availability and reliable operations.
