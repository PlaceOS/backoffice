# Groups User Stories

## Overview
The Groups section lets administrators put users into groups. A group gives its members permissions on zones. Groups can have a parent group.

---

## US-GRP-001: View Groups List

**As a** building administrator,
**I want** to see all groups,
**So that** I can find and manage a group.

### Acceptance Criteria

**AC-GRP-001-1: Group Tree**
- Given I am an authorized user
- When I open the Groups section
- Then the sidebar shows the root groups
- And a child group shows below its parent when I expand the parent

**AC-GRP-001-2: Search Groups**
- Given I am on the groups list
- When I type a search term
- Then the list shows only the groups that match the term

**AC-GRP-001-3: Group Selection**
- Given I am on the groups list
- When I click a group
- Then the details of the group show in the main area

---

## US-GRP-002: View Group Details

**As a** building administrator,
**I want** to see the settings of a group,
**So that** I know what access the group gives.

### Acceptance Criteria

**AC-GRP-002-1: About Tab**
- Given I have selected a group
- When the about tab shows
- Then I see the parent group, the subsystems, the default permissions and the description

---

## US-GRP-003: Create Group

**As a** building administrator,
**I want** to make a new group,
**So that** I can give access to a new set of users.

### Acceptance Criteria

**AC-GRP-003-1: Save New Group**
- Given I am in the new group form
- When I type a name and click Save
- Then the app opens the new group on its about tab

**AC-GRP-003-2: Parent Group**
- Given I am in the new group form
- When I select a parent group and click Save
- Then the new group shows below the parent in the tree
- And the new group gets the subsystems of the parent

---

## US-GRP-004: Edit Group

**As a** building administrator,
**I want** to change a group,
**So that** its settings stay correct.

### Acceptance Criteria

**AC-GRP-004-1: Save Changes**
- Given I am in the edit form of a group
- When I change the name and click Save
- Then the group keeps the new name after a page reload

---

## US-GRP-005: Delete Group

**As a** building administrator,
**I want** to delete a group,
**So that** unused groups do not give access.

### Acceptance Criteria

**AC-GRP-005-1: Remove Group**
- Given I have selected a group
- When I delete the group and confirm
- Then the group does not show in the list

---

## US-GRP-006: Manage Group Users

**As a** building administrator,
**I want** to add users to a group and remove users from it,
**So that** the correct users get the access of the group.

### Acceptance Criteria

**AC-GRP-006-1: List Users**
- Given I have selected a group
- When I open the users tab
- Then I see each member with their email and permissions

**AC-GRP-006-2: Add User**
- Given I am on the users tab
- When I search for a user and select the user
- Then the user shows in the list with the default permissions of the group

**AC-GRP-006-3: Remove User**
- Given I am on the users tab
- When I remove a user and confirm
- Then the user does not show in the list

---

## US-GRP-007: Manage Group Zones

**As a** building administrator,
**I want** to see the zones of a group,
**So that** I know where the group gives or denies access.

### Acceptance Criteria

**AC-GRP-007-1: List Zones**
- Given I have selected a group
- When I open the zones tab
- Then I see each zone with its permissions and its deny flag
