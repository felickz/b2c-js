# B2C Helpers

## Purpose
Provides a framework to expand on the available mechanisms for Azure AD B2C UI/UX customization using custom JavaScript in with Identity Experience Framework policies.

## WARNING
[See B2C JavaScript Guidelines](https://docs.microsoft.com/en-us/azure/active-directory-b2c/javascript-and-page-layout?pivots=b2c-user-flow#guidelines-for-using-javascript )
* We are breaking rule #2: `Don’t take a dependency on Azure AD B2C code or comments.`
  * Theoreticaly - a specific a page version will protect us from breaking changes

## Backlog

1. Show / Hide helpers - ability to clear required and regex validation (restriction: MUST NOT have Required="True" in policy)
1. Date/Time Dropdown - ability to further define min/max date ranges to show user (Predicate restrictions only allow hardcoded and Today - EX: 18 years or older Today.AddYears(-18) )
1. Hyperlink Builder - pass in a claim, link, and text -  will transform given text in to a/href
1. Tab Ordering - Enforce proper tab order of UI controls

## Design
Keep the API simple - fluent api on top of a "b2c" function.

### Dependencies
jQuery methods are utilized, but since B2C already has publicly commited to using it - should not be an issue
[See B2C JavaScript Guidelines](https://docs.microsoft.com/en-us/azure/active-directory-b2c/javascript-and-page-layout?pivots=b2c-user-flow#guidelines-for-using-javascript )
* JavaScript frameworks:
  * Azure AD B2C uses a specific version of jQuery. Don’t include another version of jQuery. Using more than one version on the same page causes issues.

## Getting Started
* npm install -g typescript
* npm install -g ts-node
