const roadmaps = {
    python: {
        name: "Python",
        icon: "fab fa-python",
        color: "python",
        description: "A versatile, high-level programming language known for its readability and extensive libraries.",
        steps: [
            {
                title: "Python Basics",
                icon: "fas fa-code",
                content: "Learn syntax, variables, data types, operators, and basic I/O operations"
            },
            {
                title: "Control Structures",
                icon: "fas fa-project-diagram",
                content: "Master if-else statements, loops (for/while), and exception handling"
            },
            {
                title: "Functions & Modules",
                icon: "fas fa-cubes",
                content: "Learn to define functions, work with modules, and understand scope"
            },
            {
                title: "Data Structures",
                icon: "fas fa-layer-group",
                content: "Lists, tuples, dictionaries, sets and their operations"
            },
            {
                title: "Object-Oriented Programming",
                icon: "fas fa-object-group",
                content: "Classes, objects, inheritance, polymorphism, and encapsulation"
            },
            {
                title: "Popular Libraries",
                icon: "fas fa-box-open",
                content: "NumPy, Pandas, Matplotlib, Requests, and other essential libraries"
            },
            {
                title: "Specialization",
                icon: "fas fa-bullseye",
                content: "Choose a path: Web (Django/Flask), Data Science, or Automation"
            }
        ],
        domains: [
            { icon: "fas fa-chart-line", name: "Data Science" },
            { icon: "fas fa-brain", name: "Machine Learning" },
            { icon: "fas fa-globe", name: "Web Development" },
            { icon: "fas fa-robot", name: "Automation" },
            { icon: "fas fa-flask", name: "Scientific Computing" }
        ]
    },
    java: {
        name: "Java",
        icon: "fab fa-java",
        color: "java",
        description: "An object-oriented, platform-independent language known for its 'write once, run anywhere' capability.",
        steps: [
            {
                title: "Java Basics",
                icon: "fas fa-code",
                content: "Syntax, variables, data types, operators, and basic I/O"
            },
            {
                title: "Control Flow",
                icon: "fas fa-project-diagram",
                content: "Conditionals, loops, exception handling"
            },
            {
                title: "OOP Concepts",
                icon: "fas fa-object-group",
                content: "Classes, objects, inheritance, polymorphism, interfaces"
            },
            {
                title: "Collections Framework",
                icon: "fas fa-layer-group",
                content: "Lists, Sets, Maps, Iterators and their implementations"
            },
            {
                title: "File I/O",
                icon: "fas fa-file-alt",
                content: "Reading/writing files, serialization"
            },
            {
                title: "Multithreading",
                icon: "fas fa-tasks",
                content: "Threads, synchronization, executors"
            },
            {
                title: "JDBC & Databases",
                icon: "fas fa-database",
                content: "Database connectivity with JDBC"
            },
            {
                title: "Spring Framework",
                icon: "fas fa-leaf",
                content: "Core, Boot, MVC for enterprise applications"
            }
        ],
        domains: [
            { icon: "fas fa-building", name: "Enterprise Applications" },
            { icon: "fab fa-android", name: "Android Development" },
            { icon: "fas fa-server", name: "Backend Systems" },
            { icon: "fas fa-cloud", name: "Big Data" },
            { icon: "fas fa-gamepad", name: "Game Development" }
        ]
    },
    javascript: {
        name: "JavaScript",
        icon: "fab fa-js-square",
        color: "javascript",
        description: "The scripting language of the web that enables interactive web pages.",
        steps: [
            {
                title: "JS Basics",
                icon: "fas fa-code",
                content: "Syntax, variables, data types, operators, and basic DOM manipulation"
            },
            {
                title: "Functions",
                icon: "fas fa-cubes",
                content: "Declarations, expressions, arrow functions, closures"
            },
            {
                title: "DOM Manipulation",
                icon: "fas fa-window-maximize",
                content: "Selecting elements, event handling, dynamic content"
            },
            {
                title: "ES6+ Features",
                icon: "fas fa-star",
                content: "Let/const, template literals, destructuring, spread operator"
            },
            {
                title: "Async JS",
                icon: "fas fa-clock",
                content: "Callbacks, promises, async/await, fetch API"
            },
            {
                title: "OOP in JS",
                icon: "fas fa-object-group",
                content: "Prototypes, classes, inheritance"
            },
            {
                title: "Node.js Basics",
                icon: "fas fa-server",
                content: "Server-side JavaScript, npm, Express.js"
            },
            {
                title: "Popular Frameworks",
                icon: "fas fa-cube",
                content: "React, Vue, or Angular for frontend development"
            }
        ],
        domains: [
            { icon: "fas fa-laptop-code", name: "Frontend Development" },
            { icon: "fas fa-server", name: "Backend Development" },
            { icon: "fas fa-mobile-alt", name: "Mobile Apps" },
            { icon: "fas fa-gamepad", name: "Game Development" },
            { icon: "fas fa-desktop", name: "Desktop Apps" }
        ]
    },
    c: {
        name: "C",
        icon: "fas fa-c",
        color: "c",
        description: "A general-purpose, procedural programming language that provides low-level access to memory.",
        steps: [
            {
                title: "C Basics",
                icon: "fas fa-code",
                content: "Syntax, variables, data types, operators, and basic I/O"
            },
            {
                title: "Control Flow",
                icon: "fas fa-project-diagram",
                content: "Conditionals, loops, switch statements"
            },
            {
                title: "Functions",
                icon: "fas fa-cubes",
                content: "Defining functions, parameters, return types, recursion"
            },
            {
                title: "Arrays & Strings",
                icon: "fas fa-layer-group",
                content: "Working with arrays and string manipulation"
            },
            {
                title: "Pointers",
                icon: "fas fa-memory",
                content: "Pointer arithmetic, arrays and pointers, dynamic memory allocation"
            },
            {
                title: "Structures & Unions",
                icon: "fas fa-cube",
                content: "Creating and using structures and unions"
            },
            {
                title: "File I/O",
                icon: "fas fa-file-alt",
                content: "Reading from and writing to files"
            },
            {
                title: "Advanced Topics",
                icon: "fas fa-microchip",
                content: "Memory management, preprocessor directives, multi-file programs"
            }
        ],
        domains: [
            { icon: "fas fa-microchip", name: "System Programming" },
            { icon: "fas fa-robot", name: "Embedded Systems" },
            { icon: "fas fa-tachometer-alt", name: "High Performance" },
            { icon: "fas fa-code", name: "Compiler Development" },
            { icon: "fas fa-gamepad", name: "Game Development" }
        ]
    },
    cpp: {
        name: "C++",
        icon: "fas fa-copyright",
        color: "cpp",
        description: "An extension of C with object-oriented features, used for system/application software.",
        steps: [
            {
                title: "C++ Basics",
                icon: "fas fa-code",
                content: "Syntax, variables, data types, operators, and basic I/O"
            },
            {
                title: "Control Flow",
                icon: "fas fa-project-diagram",
                content: "Conditionals, loops, switch statements"
            },
            {
                title: "Functions",
                icon: "fas fa-cubes",
                content: "Defining functions, parameters, return types, overloading"
            },
            {
                title: "OOP in C++",
                icon: "fas fa-object-group",
                content: "Classes, objects, inheritance, polymorphism"
            },
            {
                title: "STL",
                icon: "fas fa-box-open",
                content: "Standard Template Library (containers, algorithms, iterators)"
            },
            {
                title: "Memory Management",
                icon: "fas fa-memory",
                content: "Pointers, references, dynamic memory allocation"
            },
            {
                title: "File I/O",
                icon: "fas fa-file-alt",
                content: "Reading from and writing to files"
            },
            {
                title: "Advanced Topics",
                icon: "fas fa-rocket",
                content: "Templates, exceptions, multithreading"
            }
        ],
        domains: [
            { icon: "fas fa-gamepad", name: "Game Development" },
            { icon: "fas fa-desktop", name: "GUI Applications" },
            { icon: "fas fa-tachometer-alt", name: "High-Frequency Trading" },
            { icon: "fas fa-robot", name: "Robotics" },
            { icon: "fas fa-microchip", name: "System Software" }
        ]
    },
    sql: {
        name: "SQL",
        icon: "fas fa-database",
        color: "sql",
        description: "Structured Query Language for managing and manipulating relational databases.",
        steps: [
            {
                title: "Database Fundamentals",
                icon: "fas fa-database",
                content: "Understanding tables, relationships, and normalization"
            },
            {
                title: "Basic Queries",
                icon: "fas fa-search",
                content: "SELECT statements, filtering with WHERE, sorting with ORDER BY"
            },
            {
                title: "Joins",
                icon: "fas fa-link",
                content: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN"
            },
            {
                title: "Aggregations",
                icon: "fas fa-chart-bar",
                content: "GROUP BY, HAVING, aggregate functions (COUNT, SUM, AVG)"
            },
            {
                title: "Subqueries",
                icon: "fas fa-code-branch",
                content: "Nested queries and derived tables"
            },
            {
                title: "Data Modification",
                icon: "fas fa-edit",
                content: "INSERT, UPDATE, DELETE operations"
            },
            {
                title: "Indexes & Optimization",
                icon: "fas fa-tachometer-alt",
                content: "Creating indexes and query optimization"
            },
            {
                title: "Advanced Topics",
                icon: "fas fa-cogs",
                content: "Stored procedures, triggers, transactions"
            }
        ],
        domains: [
            { icon: "fas fa-database", name: "Database Management" },
            { icon: "fas fa-chart-bar", name: "Data Analysis" },
            { icon: "fas fa-server", name: "Backend Development" },
            { icon: "fas fa-warehouse", name: "Data Warehousing" },
            { icon: "fas fa-chart-pie", name: "Business Intelligence" }
        ]
    },
    ruby: {
        name: "Ruby",
        icon: "fas fa-gem",
        color: "ruby",
        description: "A dynamic, open source language with a focus on simplicity and productivity.",
        steps: [
            {
                title: "Ruby Basics",
                icon: "fas fa-code",
                content: "Syntax, variables, data types, operators, and basic I/O"
            },
            {
                title: "Control Flow",
                icon: "fas fa-project-diagram",
                content: "Conditionals, loops, exception handling"
            },
            {
                title: "Methods",
                icon: "fas fa-cubes",
                content: "Defining and calling methods, parameters, return values"
            },
            {
                title: "Collections",
                icon: "fas fa-layer-group",
                content: "Arrays, hashes, and enumerable methods"
            },
            {
                title: "OOP in Ruby",
                icon: "fas fa-object-group",
                content: "Classes, objects, inheritance, modules"
            },
            {
                title: "Blocks & Procs",
                icon: "fas fa-code-branch",
                content: "Working with blocks, procs, and lambdas"
            },
            {
                title: "File I/O",
                icon: "fas fa-file-alt",
                content: "Reading from and writing to files"
            },
            {
                title: "Ruby on Rails",
                icon: "fas fa-train",
                content: "Introduction to the Rails framework"
            }
        ],
        domains: [
            { icon: "fas fa-globe", name: "Web Development" },
            { icon: "fas fa-server", name: "Backend Systems" },
            { icon: "fas fa-magic", name: "Scripting" },
            { icon: "fas fa-flask", name: "Prototyping" },
            { icon: "fas fa-tasks", name: "DevOps" }
        ]
    },
    php: {
        name: "PHP",
        icon: "fab fa-php",
        color: "php",
        description: "A popular general-purpose scripting language especially suited to web development.",
        steps: [
            {
                title: "PHP Basics",
                icon: "fas fa-code",
                content: "Syntax, variables, data types, operators, and basic output"
            },
            {
                title: "Control Flow",
                icon: "fas fa-project-diagram",
                content: "Conditionals, loops, switch statements"
            },
            {
                title: "Functions",
                icon: "fas fa-cubes",
                content: "Defining functions, parameters, return values"
            },
            {
                title: "Arrays",
                icon: "fas fa-layer-group",
                content: "Indexed arrays, associative arrays, array functions"
            },
            {
                title: "Forms & User Input",
                icon: "fas fa-keyboard",
                content: "Handling form data, validation, sanitization"
            },
            {
                title: "Working with Databases",
                icon: "fas fa-database",
                content: "MySQL integration with PHP"
            },
            {
                title: "OOP in PHP",
                icon: "fas fa-object-group",
                content: "Classes, objects, inheritance, interfaces"
            },
            {
                title: "Popular Frameworks",
                icon: "fas fa-cube",
                content: "Laravel, Symfony, CodeIgniter"
            }
        ],
        domains: [
            { icon: "fas fa-globe", name: "Web Development" },
            { icon: "fas fa-shopping-cart", name: "E-commerce" },
            { icon: "fas fa-blog", name: "Content Management" },
            { icon: "fas fa-server", name: "Server-Side Scripting" },
            { icon: "fas fa-chart-line", name: "Web Analytics" }
        ]
    }
};

// Show roadmap when language card is clicked
function showRoadmap(language) {
    const roadmap = roadmaps[language];
    const roadmapDisplay = document.getElementById('roadmap-display');
    
    // Create roadmap HTML
    let roadmapHTML = `
        <div class="roadmap-header">
            <div class="roadmap-icon ${roadmap.color}">
                <i class="${roadmap.icon}"></i>
            </div>
            <h2 class="roadmap-title">${roadmap.name} Roadmap</h2>
        </div>
        <p class="roadmap-description">${roadmap.description}</p>
        
        <div class="roadmap-content">
            <div class="roadmap-steps">
                <h3>Learning Path</h3>
    `;
    
    // Add steps
    roadmap.steps.forEach(step => {
        roadmapHTML += `
            <div class="step">
                <h4 class="step-title"><i class="${step.icon}"></i>${step.title}</h4>
                <p class="step-content">${step.content}</p>
            </div>
        `;
    });
    
    // Add domains
    roadmapHTML += `
            </div>
            <div class="roadmap-domains">
                <h3 class="domains-title">Key Domains</h3>
                <ul class="domain-list">
    `;
    
    roadmap.domains.forEach(domain => {
        roadmapHTML += `
            <li class="domain-item">
                <i class="${domain.icon}"></i>
                <span>${domain.name}</span>
            </li>
        `;
    });
    
    roadmapHTML += `
                </ul>
            </div>
        </div>
        <a href="#" class="back-button" onclick="hideRoadmap()"><i class="fas fa-arrow-left"></i> Back to Languages</a>
    `;
    
    // Hide cards and show roadmap
    document.querySelector('.language-cards').style.display = 'none';
    roadmapDisplay.innerHTML = roadmapHTML;
    roadmapDisplay.style.display = 'block';
    
    // Scroll to roadmap
    roadmapDisplay.scrollIntoView({ behavior: 'smooth' });
}

// Hide roadmap and show cards
function hideRoadmap() {
    document.querySelector('.language-cards').style.display = 'grid';
    document.getElementById('roadmap-display').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}