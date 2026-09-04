# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Bug Fixes

#### Admin

- Send a cleared provider field as empty, not null
- Signage AI provider tab defects
- Harden signage AI provider setup

#### Modules

- Preserve control system on creation
- Stop treating settings collection as string
- Omit control system from device modules

#### Signage

- Resolve relative plugin URLs
- Stop edit modal plugin reloads
- Make plugin defaults optional

### Documentation

### Features

#### Admin

- Signage AI providers page

#### Repositories

- Add interface changelog tab

### Refactor

#### Admin

- Remove the state left behind the signage AI domain picker
- Bring the signage AI page in line with the repo

## [2608.1] - 2026-08-20

### Bug Fixes

#### Admin

- Drop the now-unused TranslatePipe import from database details (PPT-2644)

#### Delete

- Drop the duplicate scope line on a domain cascade
- Make the cascade fail closed (PPT-1203 review)
- Close the fail-open and half-deleted paths an adversarial review found
- Type the delete-flow catch so the production build compiles
- Report the actual error when a cascade stops, and pin the zone-walk cap

#### Modules

- Fix form fields showing and control system display for logic modules

#### Systems

- Show modules after refresh with same active system

#### Ui

- Make the delete confirmation readable on the dark theme

### Documentation

#### Delete

- Drop the Elasticsearch claim from the cascade re-read rationale (PPT-2644)

#### Ppt-1203

- Add delete confirmation screenshots

### Features

#### Admin

- Remove the Elasticsearch reindex/backfill cards (PPT-2644)

#### Delete

- Optionally remove resources associated with a zone or domain (PPT-1203)
- Show what a cascade removed, with ids

#### Modules

- Search sidebar by custom name

#### Repositories

- Add branch and commit search

#### Signage

- Add plugin type selector
- Show plugin type in table

#### Ui

- Make about values selectable

## [2607.1] - 2026-07-08

### Bug Fixes

#### Admin

- Restore API key e2e mocks
- Add improved filtering to API key modal scope and user fields
- Tweak expiry for API keys

#### Drivers

- Fix module system list not updating

#### Forms

- Guard signal effect updates

#### Modules

- Fix checks related to new signal forms

#### Repositories

- Surface driver repo load errors

#### Router

- Reload on lazy chunk load failure

### Features

#### Admin

- Add quick create option to API key section
- Add expiry options to API keys (PPT-2540)

#### Groups

- Add ability to set permissions for bulk user upload

### Refactor

#### Admin

- Consolidate shared data state

#### Forms

- Migrate to signal forms

### Styling

## [2606.1] - 2026-06-04

### Bug Fixes

#### Groups

- Restrict membership searches by authority
- Show default for permissions when none set

#### Metadata

- Show spinner while loading list

#### Modals

- Stretch settings fields to fill space

#### Service-worker

- Show update card safely

#### Sidebar

- Center compact loading spinner

#### Tablist

- Show loader for loading tab

### Features

#### Admin

- Add zone tree import export PPT-2519

#### Api-keys

- Improve user picker editing

#### Bulk-add

- Improve upload workflow

#### Domains

- Add application subsystems field

#### Groups

- Add group management workflows
- Improve parent group metadata
- Add hierarchy to group item sidebar list
- Use flat tree in sidebar

#### Markdown

- Add Shiki code highlighting

#### Sidebar

- Show lazy route loading spinner

#### System-exec

- Add module selector search

#### Systems

- Create logic modules from bulk driver ids
- Add bulk start modules option
- Add security groups field

## [2604.1] - 2026-04-21

### Bug Fixes

#### Admin

- Change playback type to be from driver, fix updating list after changes

#### Drivers

- Fix showing of the readme tab
- Show error on form when commit details fail to load (PPT-2421)
- Improve error handling for recompile and reload

#### Modules

- Fix system count for tab

#### Repos

- Fix signal usage

#### Systems

- Fix row colour when module has an error
- Refresh execute module when state changes
- Change camera_snapshot_url to camera_snapshot_urls

### Features

#### Admin

- Add ability to edit API keys (PPT-2382)
- Add signage plugins section (PPT-2433)
- Add ability to test plugins

#### Systems

- Add action for cleaning up model order (PPT-2359)

## [2510.2] - 2025-10-24

### Bug Fixes

## [2510.1] - 2025-10-22

### Bug Fixes

#### Admin

- Fix user select for API keys (PPT-2235)
- Fix loading cluster details on task list

#### Domains

- Fix form imports

#### Metadata

- Fix deleting key when backend PUT response invalid

#### Modules

- Fix loading state when starting and stopping

#### Repos

- Only allow editing commits for interfaces

#### Systems

- Fix routing to modules
- Fix adding existing modules
- Fix settings

#### Zones

- Fix child zone links (PPT-2234)

### Features

#### Systems

- Add context menu to module table

## [2509.1] - 2025-09-18

### Bug Fixes

#### Admin

- Fix cluster graph dark mode colours

#### Driver

- Fix check to display role field

### Features

#### Drivers

- Add ability to click copy the commit hash

#### Repos

- Add root_path field

## [2507.1] - 2025-07-28

### Bug Fixes

#### Admin

- Fix editing storage providers without a secret set
- Update uploads list to handle large item count (PPT-2142)
- Update data store table to make default more clear

#### Domains

- Fix delete button for authentication methods (PPT-2162)

#### Driver

- Fix editing driver not allowing commit changes

#### Modules

- Fix overflow on module state modal (PPT-2051)

#### Triggers

- Fix cron hours when selecting in the afternoon (PPT-2111)

### Features

#### Admin

- Add extra fields to edge listing display (PPT-2061)
- Add search to upload library

#### Domains

- Add Azure intergration button (PPT-2032)

#### Systems

- Add ability to set playlists on system triggers

#### Users

- Add ability to copy user groups from about view
- Add ability to set user's profile image
- Add locatable field to user form

#### Zones

- Add ability to filter zones by tag (PPT-2031)

## [2502.2] - 2025-02-20

### Features

#### Metadata

- Add ability to view metadata history (PPT-1906)

## [2502.1] - 2025-02-10

### Bug Fixes

#### Admin

- Tweak editing of tenants
- Add empty state to platform details
- Fix adding new staff api tenants
- Tweak display of edge api keys
- Tweak edge key display
- Move edge api key out of the table
- Tweak staff tenant form
- Fix display of API versions (PPT-162)
- Fix cluster process requests repeating forever after nav
- Add domain_email field to tenant form
- Tweak tenant delete message
- Fix selecting users for API key assignment (PPT-780)
- Fix setting booking limits for tenants

#### Applications

- Fix form displaying correct Client ID

#### Auth

- Add setting to ignore api key

#### Backoffice

- Remove references to releases

#### Dark-mode

- Fix form field styles

#### Debug

- Improve UX of debug console (#292)
- Reverse line order of debug messages

#### Domains

- Fix adding new applications
- Fix to previous commit
- Change saving of domain settings
- Update logic for editing applications (PPT-1283)
- Fix deleting of applications (PPT-1418)

#### Drivers

- Display error for details loading on form (PPT-176)
- Only update drivers when the new commit is different (PPT-1144)
- Hide update available UI when new commit matches old
- Only show drivers with new commits on update list
- Remove ability to recompile a driver
- Handle errors when checking compiled state

#### Extensions

- Fix loading authenticated resources

#### Forms

- Trim whitespace from redirect url values

#### Repos

- Allow selecting branch and commit for driver repos
- Only get repo commits from remote
- Add logic to request commits from selected branch on edit
- Display commit times in options

#### System

- Fix display of new modules

#### Systems

- Tweak module indicator for edge
- Fix updating of debug state
- Fix overflow of item details
- Add public field to form
- Add timezones to systems
- Add timezone field to form
- Allow easy reordering of multiple zones (PPT-344)
- Delay updating system after adding new module
- Fix module options styling
- Fix module action icons
- Add custom placeholder for module search
- Fix zone name overflow
- Remove power toggle from right clicking on module status dot
- Fix check for module errors
- Fix trigger links (PPT-1793)
- Fix add trigger search

#### Triggers

- Fix removing triggers from parent
- Fix updating after delete
- Fix editing of CRON time conditions (PPT-1792)

#### Zones

- Fix getting zone children
- Add filtering to timezones
- Fix displaying details when no associated systems
- Execute method on zone's systems instead of template system (PPT-812))

### Features

#### Admin

- Allow viewing of backoffice changelog
- Add section and logic for upload storage providers (PPT-820)
- Add banner and display for tenant secret expiry (PPT-1271)
- Add section for managing build jobs (PPT-1758)

#### Debug

- Rework terminal
- Add filtering to messages
- Add ability to download debug logs

#### Domains

- Add form field to display client ID of applications
- Add domain emails field

#### Drivers

- Add ability to update multiple drivers at once (PPT-1042)
- Add recompile and reload buttons (PPT-1732)

#### Extensions

- Add ability to resolve authenticated resources (PPT-1180, PPT-1181)

#### Modules

- Display edge details on about page
- Add ability to view runtime errors (PPT-1324)

#### Repos

- Update repository branch and commit logic

#### Staff-api

- Add early_checkin field to tenants (PPT-1442)

#### Systems

- Show that modules are running on edge node
- Add code field to systems
- Add ability to add a system's module to another system (PPT-1674)

#### Triggers

- Add ability to input cron string for time conditions (PPT-1792)

#### Uploads

- Add logic to clear completed uploads

#### Users

- Show user's department on their about page (PPT-497)

#### Zones

- Add timezone and images fields to zone form

### Refactor

#### Triggers

- Upgrade conditions and triggers tables

## [1.12.0] - 2022-10-20

### Bug Fixes

#### Admin

- Remove conference type from request when empty
- Make scope required for api keys
- Fix to validator changes for tenant delegation
- Tweak tenant form
- Tweak outlook tenant config
- Tweaks to tenant form
- Tweak tenant form

#### Systems

- Truncate long emails

#### Uploads

- Fix dropping files to upload (#199)

### Features

#### Admin

- Add service account field to tenant form
- Add ability to select scopes from autocomplete for api keys (#289)
- Add outlook config to tenant

### Refactor

#### Users

- Tweak handling of dark mode

## [1.11.0] - 2022-09-29

### Bug Fixes

#### Admin

- Tweak version details template
- Fix displaying selected user of new API key form (#246)
- Fix to user name display
- Fix adding new MQTT brokers (#247)
- Fix table for brokers on smaller screens
- Tweak changelog modal styling
- Minor tweak to previous edge logic
- Fix creating tenant with no booking limits
- Tweak handling of staff tenant fields
- Fix deleting staff api tenants
- Tweak handling of fields for staff api tenants
- Fix required display for conference type on staff tenant form
- Hide delegate checkbox for google platform
- Fix loading of cluster processes

#### Alert-dashboard

- Fix requesting secure websocket for mqtt
- Tweak url path for mqtt websocket

#### Backoffice

- Tweak url validation

#### Common

- Update URI validators to be case insensitive (#253)
- Simplify URL validation
- Update logic for parsing CSV into JSON

#### Debug

- Hide debug when all bindings removed
- Fix error when formatting date strings for debug messages (#285)

#### Domains

- Fix getting domain auth sources (#244)
- Add id field to auth sources page (#248)
- Fix user role on dark mode

#### Drivers

- Fix device filter text

#### Exec

- Tweak loading overlay for dark mode
- Change default check to nullish coalescing (#204)

#### Forms

- Handle errors from listing releases/branches
- List invalid fields on save error

#### Metadata

- Simplify metadata UI into one component

#### Module

- Fix start/stopping a module

#### Repos

- Allow settings branch for new repositories
- Allow selecting branches if release are unavailable
- Tweak branch handling for form
- Tweak to commit handling of interface repos
- Tweak handling of pulls to repos (#265)
- Fix search for commits
- Tweak loading of repository branches

#### Settings

- Fix display of settings details and metadata details

#### Systems

- Add tooltip to debug checkbox
- Tweak columns for module listing
- Add driver type to module table
- Display loader when module connected state is undefined (#283)
- Hide modules that are already in a system
- Fix role display of modules (#284)
- Show module status a pending when loading initial state (#283)

#### Ui

- Fix selecting item from item search field
- Fix filtering of items in search field
- Fix filtering of item search list (#272)
- Set max height for upload list component list (#273)
- Allow clear of input on selecting items from search component (#274)
- Add end of list element to item selection component
- Show item name instead of display name in selection list
- Tweak information displayed on item sidebar
- Fix font issue with settings field (#286)
- Use item name instead of display name for sidebar
- Fix z-indexing of upload list (#277)
- Fix font css for monaco editor

#### Uploads

- Consolidate uploads for system images to use global logic (#277)

#### Validation

- Standardise URL validation, fix path check in URL validation (#253)
- Tweak validation for URLs

#### Zones

- Fix typo in links for child zones

### Documentation

### Features

#### Admin

- Show changelogs for platform
- Add booking limits to tenant options (#254)
- Tweak edge listing to show API instead of having to request it.
- Add ability to edit staff api tenant's booking limits

#### Alert-dashboard

- Update handling of mqtt data

#### Overlays

- Allow for more custom confirm messages

#### Repo

- Change interfaces repos to select releases instead of branches (#255)

#### Ui

- Add item selection sidebar

### Refactor

#### Ui

- Simplify custom form fields
- Refactor form templates, styles and logic

### Styling

#### Domain

- Fix formatting

## [1.10.0] - 2022-01-10

### Bug Fixes

#### Admin

- Allow for editing of staff API tenants (#170)
- Cleanup staff API form fields (#169)
- More tweaks to google tenant fields (#169)
- Minor fixes to some sections
- Pass null when permissions not set
- Add logic for selecting users for api keys
- Fix model for api keys
- Fix api key table
- Fix display of scopes for api keys
- Only key last api key while in admin section
- Clean up display of last API key
- Add conference types for staff API tenants (#233)
- Include api key id in copied string
- Fix searching for users for api keys (#229)
- Show correct field for API key
- Tweak user searching for API keys
- Fix copying and removing keys (#242)

#### Auth

- Wait for 30 seconds for user

#### Auth-sources

- Tweak required fields for saml auth source (#168)

#### Backoffice

- Fix handling of upload errors

#### Bulk-upload

- Remove parsing of JSON from pre-upload logic

#### Cluster

- Minor fixes to graph
- Styling tweaks

#### Common

- Ignore hotkeys when text is selected (#232)

#### Debug

- Fix z-index of debug window toggle button (#193)
- Change message limit and minor code tweak
- Simplify removing debug messages
- Simplify processing events
- Minor fix to debug terminal
- Fix debug terminal display
- Inverse line display and remove scroll to bottom

#### Domains

- Fix tab counts (#101)
- Add URL validation to application form (#212)
- Fix default for skip_authorisation (#212)
- Allow custom protocols in URLs
- Update the regex pattern for URIs (#212)

#### Driver

- Fix setting driver type to websocket from URI (#199)

#### Drivers

- Disable submit button while loading driver defaults
- Add link to repository in about (#197)
- Convert default settings to YAML (#196)
- Change systems listing for module list (#124)
- Check for SSH drivers (#237)

#### Exec

- Clear exec details when switching systems (#189)
- Clear selected method when switching module (#189)
- Fix error after selecting a function
- Fix handling of preselected module and method for exec params
- Fix execute call with no parameters
- Fix passing parameters to execute
- Add handling for invalid JSON
- Fix handling of initial module loading
- Emit method details when no parameters available
- Fix handling of default and optional parameters (#203)
- Change default check to nullish coalescing (#204)
- Prevent exec with invalid params
- Fix handling of empty strings

#### Extensions

- Add disclaimer for change application
- Tweak to parsing embedded URL

#### Forms

- Fix password fields for user and repo forms (#161)

#### Item-display

- Fix overflow on mobile (#231)
- Fix displaying SSH drivers

#### Menu

- Fix name for metrics tab

#### Metadata

- Clear up UX for editing metadata (#166)
- Fix setting metadata description
- Fix parsing of metadata after saving (#179)
- Fix metadata input overflow (#211)

#### Metrics

- Fix layout of metrics page

#### Modules

- Fix loading of module systems (#171)

#### Repo

- Minor tweaks to allow for branch changing

#### Repos

- Fix display type on about page
- Make about data selectable (#188)
- Add catch all handling for repo pull errors (#201)
- Allow for editing of driver repo branches (#202)

#### Settings

- Fix monaco editor interactions on iOS (#105)
- Change merge settings to be a shallow merge (#216)
- Reload settings on item updates (#226)
- Fix time display for settings history options

#### System

- Fix exec module listing (#173)

#### Systems

- Update module URI/IP to open in new tab (#187)
- Fix reloading module list when updated (#62)
- Fix URL validation for support url (#206)
- Another fix to url validation
- Fix case sensitivity of url validation
- Allow for placeholders in support URLs (#207)
- Add support url placeholders for location fields
- Update URL validation pattern
- Add delay before reloading trigger list (#240)
- Fix URL pattern
- Tweak about page
- Fix updating local state for triggers on change (#240)

#### Triggers

- Fix error on conditions form (#184)
- Change system listing to instance listing
- Fix posting CRON conditions

#### Uploads

- Close drag drop overlay after 10 seconds
- Check for files in dragenter event (#230)

#### User

- Allow spaces in user groups

#### Users

- Fix form fields (#172)
- Display authority id

#### Zones

- Fix initialising form fields for zones (#177, #178)

### Features

#### Admin

- Add page for adding managing custom schemas (#165)
- Add logic for handling editing staff API tenants
- Add page for managing API keys (#205)
- Update version view to show new data from API (#238)

#### Alerts

- Add logic for alerts dashboard

#### Clusters

- Add simple graph replacement for chartjs

#### Extensions

- Allow grabbing metadata from zone parents

#### Metadata

- Add logic to handle schemas for data input and validatn

#### Package

- Switch to using pure typescript implementation of uploader

#### Schema

- Add handling of API endpoints for schema data (#165)

#### Settings

- Add view for settings history (#228)

#### Systems

- Change handling for adding zones to systems (#208)

#### Triggers

- Add timezone option to trigger conditions (#198)

#### Users

- Add ability to set metadata for users
- Add card_number field to users

### Refactor

#### Clusters

- Clean up logic for polling clusters (#200)

#### Exec

- Rewrite of execute component

### Styling

## [1.5.0] - 2020-06-30

### Documentation

## [1.3.1] - 2020-06-05

### Bug Fixes

#### Repo

- Fix editing commits for interface repos

## [1.2.2] - 2020-06-03

### Bug Fixes

#### Prod workflow

- Try empty string

## [1.2.1] - 2020-06-03

### Bug Fixes

#### Prod workflow

- Change target folder

## [1.2.0] - 2020-06-03

### Bug Fixes

#### Admin

- Add tab for listing interfaces
- Add tab for displaying broker details
- Catch 404 errors for cluster requests
- Form for office365/google were swapped
- Remove % from cluster task instance count
- Fix fields for adding staff api tenants
- Fix dark mode background color

#### Apps

- Fix loading of application data

#### Auth

- Update ts-client and fix handling user auth on errors
- Remove some of the available UI elements for support users

#### Beta workflow

- Use empty string

#### Build

- Fix assets for uploads in prod and staging configs

#### Bulk-upload

- Fix errors

#### Debug

- Prevent duplicate messages showing
- Fix filter comparison check
- Limit the number of debug messages to 1000 and 32M chars
- Disable removing duplicate messages

#### Device

- Add not running and no connected value for state device #61
- Fix state comparison, string binding

#### Display

- Fix item type displayed

#### Domain

- Minor fix to application id display
- Fix adding new applications
- Fix setting owner id for applications
- Fix settings update
- Auth source field mapping #115

#### Domains

- Allow viewing client id and secret on listing
- Fix showing new applications now showing after creation
- Fix about tab on domain details
- Fix adding and editing authentication sources
- Navigate to domains root on delete
- Fix display of applications and auth sources (#118)
- Limit domain field to FQDNs and IP addresses (#116)

#### Driver

- Exclude interface repositories when creating a new driver
- Fix race condition when loading commits
- Fix listing of commits on form
- Fix clearing commit list on edit

#### Drivers

- Fix viewing driver details
- Fix display of compiled state (#140)
- Fix retry delay on compiled error

#### Dup

- Fix item duplication modal

#### Editor

- Remove user interaction with tooltips

#### Engine

- Null state #80

#### Exec

- Use default params to check required fields
- Fix parameters
- Fix handling error returned by exec requests

#### Form

- Fix creating new settings from creation form

#### General

- Change delete hotkey from D to Delete (#126)

#### Metadata

- Update lib and fix minor issues
- Fix height of metadata field

#### Mock

- Fix mocks

#### Module

- Fix validator for uri
- Fix validator for uri
- Ignore connect attribute, look at device.running #61
- Fix form display for various module roles
- Fix form validation
- Fix new module form
- Fix getting role from driver

#### Module-form

- Fix names of fields and label references

#### Modules

- Remove unnecessary code
- Set online state to use running instead of connected
- Allow fqdns in ip address field
- Fix module role on edit
- Remove system_id if module is not of type logic (#122)
- Prevent spaces in custom name

#### Oauth

- Fix updating of info mappings
- Fix processing fields for oauth form
- Fix mapping of model data to form fields

#### Repo

- Fix editing commits for interface repos
- I18n commit hash label
- Add readonly commit hash input and fix loadCommits
- Update local data after pull

#### Repos

- Disable editing the uri field
- Uppercase default commit
- Add username and password fields
- Add default value for driver count
- Fix driver tab count
- Limit allowed characters for folder names (#121)
- Fix sidebar links
- Fix sidebar links
- Fix flickering of commit hashes
- Fix driver listings for repositories

#### Routes

- Prevent support access to domains, repos and users (#155)

#### Settings

- Fix language settings
- Fix updating merged settings from associated components
- Ignore local changes that aren't different
- Fix loading settings for items

#### Sidebar

- Add sorting to listed items
- Keep track of active tab for items
- Fix active item display
- Fix updating item lists when no item selected

#### Staff-api

- Fix setting domain for tenants (#116)
- Fix setting domain for tenants (#116)

#### Sys-exec

- Fix getting params for execs when set trigger actions
- Fix adding comma in the middle of statements

#### Sys-modules

- Prevent custom context menu on module link
- Fix debugging system modules

#### Sys-triggers

- Fix updating of rendered triggers

#### System

- Allow edit of features #69
- Fix module search on system module listing
- Fix updating module list on changes

#### Systems

- Fix handling feature list that is a string not an array
- Add custom regex for email checking
- Fix start and stop modal not closing on success
- Fix joining and removing modules not updating version
- Display uri if no ip on module listing
- Fix trigger select modal
- Fix editing trigger instances
- Fix toggling debug checkbox for modules
- Fix updating zone list on changes
- Prevent active item ending up in an invalid state (#120)
- Fix module name when view state
- Fix loading of counts
- Fix editing modules
- Fix binding to module connected state (#131)
- Fix editing modules
- Fix binding to module connected state (#131)
- Fix adding new modules to systems (#132)
- Fix ordering of modules (#135)
- Fix ordering of modules (#135)
- Fix setting system for new logic modules (#139)
- Fix module bindings (#137)
- Fix ordering of zones (#144)
- Refresh exec list on module state change

#### Terminal

- Tweak output logic
- Fix clearing terminal
- Fix rendering multiple new lines at once

#### Topbar

- Link profile button to logged in user's page (#127)

#### Trigger

- Map to correct fields of trigger #77
- Parse json values for comparisons
- Fix module bindings for system modules

#### Triggers

- Update support for websockets
- Fix passing keys for status variable comparisons
- Fix updating local state after editing trigger
- Fix module indexes for comparisons

#### Uploads

- Fix storing upload history
- Prevent dragging non-files locking the overlay in
- Add initialisation for hash worker
- Disable uploads when a modal is open (#138)
- Fix upload list template

#### User

- Prevent sending empty strings for user updates

#### Users

- Split name into first and last names
- Fix required field for last name

#### Version

- Fix display of version details

#### Websocket

- Bumped ts-client composer version and removed extra logs

#### Zones

- Update zone tags to be array instead of string
- Update API usage for zone triggers
- Fix listing of child zones (#147)

### Features

#### *

- Allow downloading items as tsv template files
- Add logic to duplicate items

#### Access

- Fix access control to the application

#### Admin

- Add tab for adding and managing extensions
- Add tab for handling staff api tenants (#116)

#### Brokers

- Add logic for CRUD operations on brokers

#### Bulk-add

- Add components and start to hook them up

#### Bulk-upload

- Finish basic logic for bulk upload

#### Domains

- Add about page for domains

#### Edge

- Add section to admin for managing edges

#### Extend

- Add extensions to communicate with backoffice
- Allow retrieval of metadata by iFrame application

#### Header

- Add button to report issues with the ui

#### I18n

- Add option for changing languages to the topbar header

#### Localize

- Start adding i18n to application

#### Metadata

- Update metadata api usage and add metadata logic to sys'
- Add editors field to metadata details form

#### Modules

- Add validators for service and device drivers
- Allow setting an edge on module creation

#### Repo

- Display commit_hash in about tab

#### Repos

- Allow branch switching on interface repos

#### Sentry

- Add performance monitoring

#### Settings

- Add colours and tooltips to merged settings

#### Systems

- Add form field for adding images to systems

#### Triggers

- Add bindings for getting system trigger states

#### Uploads

- Add uploads library
- Add component for managing file uploads

#### User

- Add ability to set user domains (#158)

#### Workflow->prod

- New release home

#### Workflows->beta

- New build repo

#### Zone

- Add display_name field

### Refactor

#### Admin

- Clean up admin components

#### Domains

- Cleanup domain components

#### Drivers

- Simplify main components

#### Modules

- Cleanup modules pages

#### Repos

- Cleanup components for repositories

#### Systems

- Refactor modules section of systems
- Clean systems zone page
- Cleanup triggers tab
- Cleanup metadata tab

#### Triggers

- Clean up trigger components

#### Ui

- Refactor several components
- Refactor upload-list and context menu
- Refactor debug-output component

#### Users

- Cleanup user components

#### Zones

- Cleanup zone components

### Styling

#### Systems

- Fix styles for module tab

#### Topbar

- Cleanup styles for topbar

## [1.1.0] - 2020-04-27

### Features

#### Workflows

- Develop commits to alpha branch

## [1.0.2] - 2020-04-22

### Bug Fixes

#### Error

- Fix error messages to properly display service messages

## [1.0.1] - 2020-04-20

### Bug Fixes

#### Systems

- Fix displayed confirm modal zone to use name instead of id

## [1.0.0] - 2020-04-20

### Bug Fixes

#### Build

- Fix compilation issues

#### Debug-output

- Scroll view to bottom when content updates

#### Drivers

- Update drivers to post repository details
- Fix logic of driver execs
- Fix updating driver and commit listing on changes
- Fix saving settings when creating drivers
- Fix listing commits for edits
- Update about display values

#### Engine-admin

- Fix spinners on database actions

#### Modules

- Fix validation of ip addresses
- Fix propagating local changes when adding modules to sys

#### Settings

- Fix making mocked builds

#### System-exec

- Fix parsing parameters
- Fix executing items with all optional params

#### System-modules

- Toggle running state with power actions
- Update local copy of system after adding a module

#### Systems

- Fix listing of system zones
- Fix adding and removing zones

#### Users

- Fix password logic for form

#### View-state

- Fix determining mod name

#### Zones

- Fix listening to modal events
- Fix spliting tags when editing
- Fix tab counts

### Features

#### Build

- Cleanup build process

#### Engine-admin

- Add admin section to engine

#### Metadata

- Add logic for zone metadata

#### Project

- Update project structure to latest

#### Settings

- Allow viewing and editing settings from about pages

#### Sys-exec

- Add modal for viewing exec responses

### Refactor

#### App-service

- Cleanup initialisation state management

### Styling

#### Branding

- Update branding for application

#### Login

- Fix styling for login form

#### Material

- Update default colours

#### Sidebar

- Add shadow to header when list is scrolled

#### System-zones

- Make zone search fullwidth and exclude zones in sys

#### Systems

- Minor style fixes to tab components

<!-- generated by git-cliff -->
