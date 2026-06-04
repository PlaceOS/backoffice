# Admin User Stories

## Overview
The Admin section provides comprehensive system administration capabilities including cluster management, database monitoring, API keys, extensions, tenant management, and more.

---

# Cluster Management

## US-ADM-001: View Cluster Status

**As a** system administrator,
**I want** to view the status of all cluster nodes,
**So that** I can monitor system health.

### Acceptance Criteria

**AC-ADM-001-1: Display Cluster Nodes**
- Given I am an authorized administrator
- When I navigate to Admin > Clusters
- Then I should see a list of all cluster nodes

**AC-ADM-001-2: Node Details**
- Given I am viewing cluster nodes
- When I look at a node entry
- Then I should see CPU usage, memory usage, and status

**AC-ADM-001-3: Node Health Indicator**
- Given I am viewing cluster nodes
- When a node is unhealthy
- Then it should be visually indicated with a warning status

---

## US-ADM-002: View Cluster Tasks

**As a** system administrator,
**I want** to view tasks running on the cluster,
**So that** I can monitor background processes.

### Acceptance Criteria

**AC-ADM-002-1: Display Running Tasks**
- Given I am viewing cluster details
- When I navigate to the tasks section
- Then I should see all running tasks

**AC-ADM-002-2: Task Details**
- Given I am viewing cluster tasks
- When I look at a task entry
- Then I should see task name, status, and progress

**AC-ADM-002-3: Task History**
- Given I am viewing cluster tasks
- When I view completed tasks
- Then I should see the task history with completion status

---

# System Information

## US-ADM-003: View System Information

**As a** system administrator,
**I want** to view system deployment information,
**So that** I can understand the current configuration.

### Acceptance Criteria

**AC-ADM-003-1: Display Version Info**
- Given I am an authorized administrator
- When I navigate to Admin > About
- Then I should see the system version and build number

**AC-ADM-003-2: Display Environment**
- Given I am viewing system information
- When the details are displayed
- Then I should see the deployment environment information

**AC-ADM-003-3: Display API Configuration**
- Given I am viewing system information
- When the details are displayed
- Then I should see API endpoint configuration

---

# Database Management

## US-ADM-004: View Database Status

**As a** system administrator,
**I want** to view database connection status,
**So that** I can monitor data persistence.

### Acceptance Criteria

**AC-ADM-004-1: Display Database Info**
- Given I am an authorized administrator
- When I navigate to Admin > Database
- Then I should see database connection status

**AC-ADM-004-2: Connection Status**
- Given I am viewing database details
- When the database is connected
- Then I should see a healthy connection indicator

**AC-ADM-004-3: Database Details**
- Given I am viewing database details
- When the information is displayed
- Then I should see version and sizing information

**AC-ADM-004-4: Export Zone Tree**
- Given I am viewing database details
- When I choose to export a zone tree
- Then I should be able to search for and select one or more parent zones
- And the exported CSV should include each selected zone followed by its child zones recursively

**AC-ADM-004-5: Import Zone Tree**
- Given I have a CSV or TSV zone tree export
- When I import the file from the database details page
- Then the zones should be recreated with new IDs
- And child zones should be linked to the newly created parent zone IDs automatically

**AC-ADM-004-6: Zone Tree Import Export Status**
- Given a zone tree import or export is running
- When I view the database details page
- Then I should see loading feedback and the related import or export action should be disabled until it completes

---

# Network & Interfaces

## US-ADM-005: View Network Interfaces

**As a** system administrator,
**I want** to view network interface status,
**So that** I can monitor network connectivity.

### Acceptance Criteria

**AC-ADM-005-1: Display Interfaces**
- Given I am an authorized administrator
- When I navigate to Admin > Interfaces
- Then I should see all network interfaces

**AC-ADM-005-2: Interface Status**
- Given I am viewing network interfaces
- When I look at an interface entry
- Then I should see online/offline status

**AC-ADM-005-3: Interface Configuration**
- Given I am viewing network interfaces
- When I look at an interface entry
- Then I should see IP address and port information

---

# Message Brokers

## US-ADM-006: View Message Brokers

**As a** system administrator,
**I want** to view message broker status,
**So that** I can monitor real-time communication.

### Acceptance Criteria

**AC-ADM-006-1: Display Brokers**
- Given I am an authorized administrator
- When I navigate to Admin > Brokers
- Then I should see configured message brokers

**AC-ADM-006-2: Connection Status**
- Given I am viewing message brokers
- When I look at a broker entry
- Then I should see connection status

**AC-ADM-006-3: Queue Information**
- Given I am viewing message brokers
- When I look at a broker entry
- Then I should see queue status information

---

# Edge Management

## US-ADM-007: Manage Edge Devices

**As a** system administrator,
**I want** to manage remote edge installations,
**So that** I can control distributed deployments.

### Acceptance Criteria

**AC-ADM-007-1: Display Edge Devices**
- Given I am an authorized administrator
- When I navigate to Admin > Edge
- Then I should see all registered edge devices

**AC-ADM-007-2: Edge Status**
- Given I am viewing edge devices
- When I look at a device entry
- Then I should see connection and health status

**AC-ADM-007-3: Configure Edge**
- Given I have selected an edge device
- When I click edit
- Then I should be able to modify its configuration

**AC-ADM-007-4: Execute Edge Tasks**
- Given I have selected an edge device
- When I initiate a task
- Then the task should be executed on the edge device

---

# Extensions

## US-ADM-008: Manage Backoffice Extensions

**As a** system administrator,
**I want** to configure custom UI extensions,
**So that** I can embed specialized functionality in the backoffice.

### Acceptance Criteria

**AC-ADM-008-1: View Extensions**
- Given I am an authorized administrator
- When I navigate to Admin > Extensions
- Then I should see all configured extensions

**AC-ADM-008-2: Create Extension**
- Given I am viewing extensions
- When I click "Add Extension"
- Then I should be able to configure a new extension

**AC-ADM-008-3: Configure Extension URL**
- Given I am creating an extension
- When I set the extension URL
- Then the URL should be validated and saved

**AC-ADM-008-4: Configure Display Conditions**
- Given I am creating an extension
- When I set display conditions
- Then the extension should only show when conditions are met

**AC-ADM-008-5: Assign to Sections**
- Given I am creating an extension
- When I select which sections to show the extension
- Then the extension should appear in those sections

**AC-ADM-008-6: Edit Extension**
- Given I have a configured extension
- When I click edit
- Then I should be able to modify its settings

**AC-ADM-008-7: Delete Extension**
- Given I have a configured extension
- When I delete it and confirm
- Then the extension should be removed

---

# Staff API & Tenants

## US-ADM-009: Manage Tenants

**As a** system administrator,
**I want** to manage multi-tenant configurations,
**So that** I can support multiple organizations.

### Acceptance Criteria

**AC-ADM-009-1: View Tenants**
- Given I am an authorized administrator
- When I navigate to Admin > Staff API
- Then I should see all configured tenants

**AC-ADM-009-2: Create Tenant**
- Given I am viewing tenants
- When I click "Add Tenant"
- Then I should be able to configure a new tenant

**AC-ADM-009-3: Associate Domain**
- Given I am creating a tenant
- When I select a domain
- Then the tenant should be linked to that domain

**AC-ADM-009-4: Configure Booking Limits**
- Given I am editing a tenant
- When I set booking limits per resource type
- Then those limits should be enforced

**AC-ADM-009-5: Manage Credentials**
- Given I am viewing a tenant
- When I access credentials
- Then I should be able to view and regenerate API credentials

**AC-ADM-009-6: Set Early Check-in Policy**
- Given I am editing a tenant
- When I configure early check-in settings
- Then those policies should be applied

---

# Resource Imports

## US-ADM-010: Bulk Import Resources

**As a** system administrator,
**I want** to bulk import resources via CSV,
**So that** I can quickly set up large configurations.

### Acceptance Criteria

**AC-ADM-010-1: Access Import Tool**
- Given I am an authorized administrator
- When I navigate to Admin > Resource Imports
- Then I should see the import interface

**AC-ADM-010-2: Upload CSV**
- Given I am using the import tool
- When I upload a CSV file
- Then the file should be parsed and validated

**AC-ADM-010-3: Map Fields**
- Given I have uploaded a CSV
- When I view the field mapping
- Then I should be able to map CSV columns to resource fields

**AC-ADM-010-4: Preview Import**
- Given I have mapped fields
- When I preview the import
- Then I should see the data that will be imported

**AC-ADM-010-5: Execute Import**
- Given I have previewed the data
- When I confirm the import
- Then resources should be created

**AC-ADM-010-6: Import Status**
- Given an import is in progress
- When I view the import status
- Then I should see progress and any errors

---

# API Keys

## US-ADM-011: Manage API Keys

**As a** system administrator,
**I want** to manage API keys for external integrations,
**So that** I can control programmatic access.

### Acceptance Criteria

**AC-ADM-011-1: View API Keys**
- Given I am an authorized administrator
- When I navigate to Admin > API Keys
- Then I should see all existing API keys

**AC-ADM-011-2: Generate New Key**
- Given I am viewing API keys
- When I click "Generate Key"
- Then a new API key should be created

**AC-ADM-011-3: Assign to Domain**
- Given I am generating an API key
- When I select a domain
- Then the key should be scoped to that domain

**AC-ADM-011-4: Assign to User**
- Given I am generating or editing an API key
- When I search for a user in the selected domain
- Then matching users should be displayed with their avatar, name, email, and admin or support indicator where applicable
- And I should be able to select or clear the associated user

**AC-ADM-011-5: Preserve Assigned User When Editing**
- Given I am editing an existing API key with an assigned user
- When the edit form opens
- Then the assigned user should be loaded and displayed even if they are not in the initial search results

**AC-ADM-011-6: Search All Domain Users**
- Given I am assigning a user to an API key
- When I search users for any API key permission level
- Then the search should include all users in the selected domain rather than filtering by admin or support role

**AC-ADM-011-7: User Search Loading State**
- Given I am typing in the API key user search field
- When the user list is loading
- Then I should see loading feedback until the search results are available

**AC-ADM-011-8: View Key Value**
- Given I have generated a new key
- When the key is created
- Then I should see the key value (shown only once)

**AC-ADM-011-9: Delete Key**
- Given I have an API key
- When I delete it and confirm
- Then the key should be revoked

---

# Upload Storage

## US-ADM-012: Configure Upload Storage

**As a** system administrator,
**I want** to configure cloud storage providers,
**So that** file uploads are properly stored.

### Acceptance Criteria

**AC-ADM-012-1: View Storage Providers**
- Given I am an authorized administrator
- When I navigate to Admin > Upload Storage
- Then I should see configured storage providers

**AC-ADM-012-2: Add Provider**
- Given I am viewing storage providers
- When I click "Add Provider"
- Then I should be able to configure a new storage provider

**AC-ADM-012-3: Configure AWS S3**
- Given I am adding a storage provider
- When I select AWS S3
- Then I should be able to enter bucket name, region, and credentials

**AC-ADM-012-4: Configure Azure Blob**
- Given I am adding a storage provider
- When I select Azure Blob Storage
- Then I should be able to enter container and credentials

**AC-ADM-012-5: Edit Provider**
- Given I have a configured provider
- When I click edit
- Then I should be able to modify its settings

**AC-ADM-012-6: Delete Provider**
- Given I have a configured provider
- When I delete it and confirm
- Then the provider should be removed

---

# Upload Library

## US-ADM-013: Manage Uploaded Files

**As a** system administrator,
**I want** to manage uploaded files,
**So that** I can organize and clean up storage.

### Acceptance Criteria

**AC-ADM-013-1: View Files**
- Given I am an authorized administrator
- When I navigate to Admin > Upload Library
- Then I should see a list of uploaded files

**AC-ADM-013-2: Search Files**
- Given I am viewing the upload library
- When I enter a search term
- Then the list should filter to matching files

**AC-ADM-013-3: File Details**
- Given I am viewing uploaded files
- When I look at a file entry
- Then I should see file name, size, and upload date

**AC-ADM-013-4: Delete File**
- Given I have selected a file
- When I delete it and confirm
- Then the file should be removed from storage

---

# Email Templates

## US-ADM-014: Manage Email Templates

**As a** system administrator,
**I want** to manage email templates,
**So that** I can customize notification emails.

### Acceptance Criteria

**AC-ADM-014-1: View Templates**
- Given I am an authorized administrator
- When I navigate to Admin > Mailing List
- Then I should see all email templates

**AC-ADM-014-2: Create Template**
- Given I am viewing email templates
- When I click "Add Template"
- Then I should be able to create a new template

**AC-ADM-014-3: Edit Template Content**
- Given I am creating or editing a template
- When I modify the subject and body
- Then my changes should be saved

**AC-ADM-014-4: Preview Template**
- Given I am editing a template
- When I click preview
- Then I should see how the email will appear

**AC-ADM-014-5: Delete Template**
- Given I have a template
- When I delete it and confirm
- Then the template should be removed

---

# Build Jobs

## US-ADM-015: Monitor Build Jobs

**As a** system administrator,
**I want** to monitor driver build jobs,
**So that** I can track compilation status.

### Acceptance Criteria

**AC-ADM-015-1: View Build Jobs**
- Given I am an authorized administrator
- When I navigate to Admin > Build Jobs
- Then I should see all build jobs

**AC-ADM-015-2: Job Status**
- Given I am viewing build jobs
- When I look at a job entry
- Then I should see success/failure status

**AC-ADM-015-3: View Logs**
- Given I have selected a build job
- When I click to view logs
- Then I should see the build output

**AC-ADM-015-4: Trigger Build**
- Given I am viewing build jobs
- When I trigger a manual build
- Then a new build job should be started

---

# Schemas

## US-ADM-016: View System Schemas

**As a** system administrator,
**I want** to view system data schemas,
**So that** I can understand data structures.

### Acceptance Criteria

**AC-ADM-016-1: View Schemas**
- Given I am an authorized administrator
- When I navigate to Admin > Schemas
- Then I should see available schemas

**AC-ADM-016-2: Schema Details**
- Given I am viewing schemas
- When I select a schema
- Then I should see field definitions and types

**AC-ADM-016-3: Validation Rules**
- Given I am viewing a schema
- When I look at field details
- Then I should see validation constraints
