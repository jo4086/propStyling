# Project Architecture Overview

## **Directory Structure**

```
src/
  core/                     // Core files for centralized management
    styledCore.js           // Centralized management of style processing
    filterPropsCore.js      // Centralized management of prop filtering
  utils/                    // Support files for the core logic
    process_base.js         // Base style processing
    process_dynamic.js      // Dynamic style processing
    process_pseudo.js       // Pseudo style processing
    filter_styleProps.js    // Style filtering logic
    filter_pseudoProps.js   // Pseudo filtering logic
```

---

## **Design Philosophy**

### 1. **Role-Based Organization**

-   **`core/`**:

    -   Contains files that handle the **centralized logic** for the project.
    -   These are directly called by components or styled-components and are responsible for managing critical processes like style application and prop filtering.

-   **`utils/`**:
    -   Contains files that **support the core logic** by performing detailed processing.
    -   These are not directly called by components but are invoked by core files for auxiliary tasks.

### 2. **Naming Conventions**

-   **`process_*`**:

    -   Handles specific processes such as base, dynamic, or pseudo styles.

-   **`filter_*`**:
    -   Handles filtering of props, separating style-related and pseudo-related props.

### 3. **Consistency with Material Icon Theme**

-   **`core/` and `utils/`**:

    -   These folder names are recognized in the Material Icon Theme, allowing for visual distinction and better navigation.

-   **Elimination of `process/` folder**:
    -   Since Material Icon Theme does not support `process/` icons, the files are included in `utils/` instead for visual consistency.

---

## **Advantages of This Structure**

### **1. Clear Role Separation**

-   Centralized logic files are located in `core/`, while detailed auxiliary logic is in `utils/`.
-   This separation ensures clarity in file purpose and role.

### **2. Maintainability**

-   Changes to core logic are centralized, and auxiliary processes can be updated independently without affecting the overall system.

### **3. Scalability**

-   New features or processing requirements can be added to `utils/` without altering the existing structure.
-   Additional core logic can be added to `core/` while maintaining separation of responsibilities.

### **4. Icon-Based Navigation**

-   Using Material Icon Theme, developers can quickly identify folders and files, improving efficiency.
-   `core/` and `utils/` are visually distinct, aiding in understanding folder purposes at a glance.

---

## **Future Considerations**

-   As the project grows, consider further modularization within `utils/` (e.g., `utils/pseudo/`, `utils/filter/`).
<!-- -   Prepare documentation that organizes new logic and folder structures in case the project expands or others join in the future.
-   Keep the README.md or related documents updated to record changes and maintain the direction of the project.
    -->
