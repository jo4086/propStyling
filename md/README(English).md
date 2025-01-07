# **PropStyling**

## **Introduction**
`PropStyling` is a library designed to make React component styling more intuitive and flexible by combining **CSS-like syntax** with **props-based dynamic styling**. It addresses common styling challenges in frontend development and aims to provide a unified, accessible solution.

---

## **Why PropStyling?**

1. **MUI and its complexity**:
   - While MUI is powerful, its strict rules and conventions can feel limiting and slow down development.
   - I wanted a simpler and more flexible way to handle component styling.

2. **The problems with `style={{}}`:**
   - Inline `style` attributes can get overly verbose and hard to manage as complexity grows.
   - Handling pseudo-classes (`:hover`) or pseudo-elements (`::before`) is nearly impossible without external stylesheets.

3. **A beginner's perspective**:
   - As someone who has been learning web development for just **4 months**, I encountered numerous challenges while designing and implementing `PropStyling`.
   - This library may not be perfect, but it reflects the frustrations and solutions a beginner developer found while navigating modern web development tools.
   - PropStyling is my attempt to address these issues in a way that feels intuitive and accessible to developers like me.

4. **A call for contributions**:
   - There are many areas in PropStyling that could be improved, and I warmly welcome anyone interested in contributing to its development.
   - If you find this library interesting or useful, your feedback, suggestions, and contributions would be greatly appreciated.

5. **About this document**:
   - Since I am not fluent in English, this English file was written with the help of **GPT**.
   - Communication might be slightly challenging, but I am eager to collaborate with those interested in improving PropStyling.

---

## **Core Philosophy**
1. **Intuitive and consistent syntax**:
   - CSS-like syntax in camelCase, with support for pseudo-classes (`hover`, `active`) and pseudo-elements (`before`, `after`).

2. **Flexibility and reusability**:
   - Shared styles can be defined and reused across components.
   - Components can override shared styles with unique ones.

3. **Dynamic pseudo-class activation**:
   - Activate specific pseudo-classes using a `pseudo` prop, ensuring only the desired pseudo-class is applied.

---

## **Key Features**

1. **Centralized pseudo-class management**:
   - Define all pseudo-class and pseudo-element styles in a single object:
     ```javascript
     const pseudoStyles = {
         hover: { backgroundColor: 'blue' },
         active: { color: 'red' },
         before: { content: '"Hello"', color: 'gray' },
         after: { content: '"World"', color: 'black' },
     };
     ```

2. **Dynamic pseudo-class activation**:
   - Activate specific pseudo-classes using the `pseudo` prop:
     ```javascript
     <Box {...pseudoStyles} pseudo="hover" />;
     ```

3. **Shared and independent styling**:
   - Combine centralized shared styles with unique component-level styles:
     ```javascript
     const commonStyles = { hover: { backgroundColor: 'blue' } };
     const box1Styles = { ...commonStyles, active: { color: 'orange' } };
     const box2Styles = { ...commonStyles, hover: { backgroundColor: 'yellow' } };
     ```

4. **Reusability and flexibility**:
   - Share common pseudo-class styles across components:
     ```javascript
     <Box {...commonStyles} pseudo="hover" />;
     <Box {...commonStyles} pseudo="active" />;
     ```

---

## **Future Considerations**

1. **Styling Library Choices**:
   - Currently, this project uses **styled-components** for its flexibility and compatibility with React.
   - In the future, **Emotion** may be considered to improve performance and compatibility.

2. **CSS Code Caching**:
   - CSS-in-JS solutions often encounter **caching issues**, such as duplicate styles or inefficient memory usage.
   - Investigating and addressing these challenges will be necessary for long-term improvements.

3. **Performance Optimization**:
   - As the project scales, minimizing unnecessary style recalculations and optimizing runtime performance will be crucial.

---

## **Reflections**
Creating this library has been a challenging yet rewarding experience. As a beginner with just **4 months of web development experience**, I encountered numerous hurdles while trying to design and implement `PropStyling`. These challenges gave me a deeper appreciation for the countless libraries and tools already available in the development ecosystem.

I realized how much effort, thought, and perseverance goes into building even the smallest libraries, and I want to express my gratitude to all the developers who have contributed to the open-source community. Their work not only inspired this project but also made it possible for me to learn and grow as a developer.

While `PropStyling` is far from perfect, it represents my journey to solve real-world problems and to better understand the complexities of web development. I hope this library sparks interest and inspires others to build, learn, and contribute.

