# Triggers User Stories

## Overview
The Triggers section allows users to configure automated actions based on system conditions, enabling event-driven building automation.

---

## US-TRG-001: View Triggers List

**As a** building administrator,
**I want** to view a list of all triggers in the platform,
**So that** I can find and manage automated actions.

### Acceptance Criteria

**AC-TRG-001-1: Display Triggers List**
- Given I am an authorized user
- When I navigate to the Triggers section
- Then I should see a sidebar listing all available triggers

**AC-TRG-001-2: Search Triggers**
- Given I am viewing the triggers list
- When I enter a search term in the search field
- Then the list should filter to show only triggers matching the search term

**AC-TRG-001-3: Trigger Selection**
- Given I am viewing the triggers list
- When I click on a trigger in the sidebar
- Then the trigger details should be displayed in the main content area

---

## US-TRG-002: View Trigger Details

**As a** building administrator,
**I want** to view detailed information about a trigger,
**So that** I can understand its conditions and actions.

### Acceptance Criteria

**AC-TRG-002-1: Display Basic Information**
- Given I have selected a trigger
- When the trigger details are displayed
- Then I should see the trigger name and description

**AC-TRG-002-2: Display Conditions**
- Given I have selected a trigger
- When the trigger details are displayed
- Then I should see all conditions that must be met

**AC-TRG-002-3: Display Actions**
- Given I have selected a trigger
- When the trigger details are displayed
- Then I should see all actions that will be executed

**AC-TRG-002-4: Display Timestamps**
- Given I have selected a trigger
- When the trigger details are displayed
- Then I should see when the trigger was created and last updated

---

## US-TRG-003: Create New Trigger

**As a** building administrator,
**I want** to create a new trigger,
**So that** I can automate actions based on system conditions.

### Acceptance Criteria

**AC-TRG-003-1: Access Create Form**
- Given I am in the Triggers section
- When I click the "Add" button
- Then a modal form for creating a new trigger should appear

**AC-TRG-003-2: Set Trigger Name**
- Given I am creating a new trigger
- When I enter a name and description
- Then the trigger should be identified with those values

**AC-TRG-003-3: Add Conditions**
- Given I am creating a new trigger
- When I add conditions to the trigger
- Then those conditions should be saved with the trigger

**AC-TRG-003-4: Add Actions**
- Given I am creating a new trigger
- When I add actions to the trigger
- Then those actions should be saved with the trigger

**AC-TRG-003-5: Successful Creation**
- Given I have completed all required fields
- When I click the "Save" button
- Then the trigger should be created
- And it should appear in the triggers list

---

## US-TRG-004: Edit Trigger Configuration

**As a** building administrator,
**I want** to edit an existing trigger's configuration,
**So that** I can update its behavior as requirements change.

### Acceptance Criteria

**AC-TRG-004-1: Access Edit Mode**
- Given I have selected a trigger
- When I click the "Edit" button
- Then an edit modal should appear with current trigger details

**AC-TRG-004-2: Modify Name and Description**
- Given I am editing a trigger
- When I change the name or description
- Then my changes should be saved

**AC-TRG-004-3: Modify Conditions**
- Given I am editing a trigger
- When I add, edit, or remove conditions
- Then the changes should be persisted

**AC-TRG-004-4: Modify Actions**
- Given I am editing a trigger
- When I add, edit, or remove actions
- Then the changes should be persisted

**AC-TRG-004-5: Save Changes**
- Given I have made changes to a trigger
- When I click the "Save" button
- Then the changes should be persisted

---

## US-TRG-005: Delete Trigger

**As a** building administrator,
**I want** to delete a trigger that is no longer needed,
**So that** I can remove obsolete automation rules.

### Acceptance Criteria

**AC-TRG-005-1: Delete Confirmation**
- Given I have selected a trigger
- When I click the "Delete" button
- Then a confirmation dialog should appear

**AC-TRG-005-2: Instance Warning**
- Given I have selected a trigger with active instances
- When I attempt to delete it
- Then I should be warned about active instances

**AC-TRG-005-3: Successful Deletion**
- Given I have confirmed the deletion
- When the trigger is deleted
- Then it should be removed from the platform

---

## US-TRG-006: Configure Trigger Conditions

**As a** building administrator,
**I want** to configure conditions for a trigger,
**So that** I can specify when the trigger should activate.

### Acceptance Criteria

**AC-TRG-006-1: Add Time-Based Condition**
- Given I am configuring trigger conditions
- When I add a time-based condition
- Then I should be able to specify the time criteria (schedule, cron, etc.)

**AC-TRG-006-2: Add Comparison Condition**
- Given I am configuring trigger conditions
- When I add a comparison condition
- Then I should be able to specify a variable, operator, and value

**AC-TRG-006-3: Add Status Condition**
- Given I am configuring trigger conditions
- When I add a status condition
- Then I should be able to monitor module or system status

**AC-TRG-006-4: Multiple Conditions**
- Given I am configuring trigger conditions
- When I add multiple conditions
- Then I should be able to specify if all conditions or any condition must be met

**AC-TRG-006-5: Reorder Conditions**
- Given I have multiple conditions
- When I drag and drop to reorder them
- Then the order should be updated

**AC-TRG-006-6: Remove Condition**
- Given I am viewing conditions
- When I click remove on a condition
- Then the condition should be deleted

---

## US-TRG-007: Configure Trigger Actions

**As a** building administrator,
**I want** to configure actions for a trigger,
**So that** I can specify what happens when the trigger activates.

### Acceptance Criteria

**AC-TRG-007-1: Add Function Action**
- Given I am configuring trigger actions
- When I add a function action
- Then I should be able to specify a module method to execute

**AC-TRG-007-2: Add Email Action**
- Given I am configuring trigger actions
- When I add an email action
- Then I should be able to specify recipients, subject, and body

**AC-TRG-007-3: Multiple Actions**
- Given I am configuring trigger actions
- When I add multiple actions
- Then all actions should execute when the trigger fires

**AC-TRG-007-4: Reorder Actions**
- Given I have multiple actions
- When I drag and drop to reorder them
- Then the execution order should be updated

**AC-TRG-007-5: Remove Action**
- Given I am viewing actions
- When I click remove on an action
- Then the action should be deleted

---

## US-TRG-008: View Trigger Instances

**As a** building administrator,
**I want** to view all instances of a trigger,
**So that** I can see where the trigger is deployed.

### Acceptance Criteria

**AC-TRG-008-1: Display Instances List**
- Given I have selected a trigger
- When I navigate to the "Instances" tab
- Then I should see all systems/zones where this trigger is active

**AC-TRG-008-2: Instance Count**
- Given I have selected a trigger
- When viewing trigger details
- Then I should see the total count of active instances

**AC-TRG-008-3: Navigate to Instance**
- Given I am viewing trigger instances
- When I click on a system or zone name
- Then I should be navigated to that entity's details page

---

## US-TRG-009: Configure Email Notifications

**As a** building administrator,
**I want** to configure email notifications for triggers,
**So that** relevant stakeholders are notified when conditions are met.

### Acceptance Criteria

**AC-TRG-009-1: Set Recipients**
- Given I am configuring an email action
- When I specify email recipients
- Then those addresses should receive notifications

**AC-TRG-009-2: Set Subject and Body**
- Given I am configuring an email action
- When I set the subject and body
- Then emails should be sent with that content

**AC-TRG-009-3: Use Variables**
- Given I am configuring an email action
- When I include variable placeholders in the body
- Then the actual values should be substituted when sent

---

## US-TRG-010: Test Trigger

**As a** building administrator,
**I want** to test a trigger manually,
**So that** I can verify it works correctly before deployment.

### Acceptance Criteria

**AC-TRG-010-1: Manual Execution**
- Given I have selected a trigger
- When I click the "Test" button
- Then the trigger actions should be executed

**AC-TRG-010-2: Test Results**
- Given I have tested a trigger
- When the test completes
- Then I should see the results of each action

**AC-TRG-010-3: Test Without Side Effects**
- Given I am testing a trigger
- When the test is marked as "dry run"
- Then actions should be simulated without actual execution

---

## US-TRG-011: Enable/Disable Trigger

**As a** building administrator,
**I want** to enable or disable a trigger,
**So that** I can control when automation is active.

### Acceptance Criteria

**AC-TRG-011-1: Disable Trigger**
- Given I have selected an enabled trigger
- When I toggle it to disabled
- Then the trigger should stop responding to conditions

**AC-TRG-011-2: Enable Trigger**
- Given I have selected a disabled trigger
- When I toggle it to enabled
- Then the trigger should start monitoring conditions

**AC-TRG-011-3: Status Indicator**
- Given I am viewing triggers
- When viewing the list or details
- Then I should clearly see which triggers are enabled or disabled
