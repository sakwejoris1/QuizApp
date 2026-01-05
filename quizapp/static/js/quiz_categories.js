
        const categories = [
            {
                id: 1,
                name: "Science",
                description: "Test your knowledge of physics, chemistry, biology, and astronomy. From atoms to galaxies!",
                icon: "fas fa-flask",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                difficulty: "intermediate",
                quizzes: 1200,
                questions: 15000,
                participants: 45000,
                tags: ["Physics", "Chemistry", "Biology", "Astronomy"]
            },
            {
                id: 2,
                name: "History",
                description: "Journey through time from ancient civilizations to modern world events and historical figures.",
                icon: "fas fa-landmark",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                difficulty: "intermediate",
                quizzes: 850,
                questions: 10000,
                participants: 32000,
                tags: ["Ancient", "Medieval", "Modern", "World Wars"]
            },
            {
                id: 3,
                name: "Geography",
                description: "Explore countries, capitals, landmarks, and physical features around the world.",
                icon: "fas fa-globe-americas",
                image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                difficulty: "beginner",
                quizzes: 950,
                questions: 12000,
                participants: 38000,
                tags: ["Countries", "Capitals", "Landmarks", "Maps"]
            },
           
            {
                id: 5,
                name: "Sports",
                description: "From football to basketball, cricket to tennis. All sports knowledge in one place!",
                icon: "fas fa-futbol",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                difficulty: "beginner",
                quizzes: 750,
                questions: 9000,
                participants: 28000,
                tags: ["Football", "Basketball", "Cricket", "Olympics"]
            },
           
            {
                id: 7,
                name: "Mathematics",
                description: "Algebra, geometry, calculus, statistics, and mathematical puzzles to challenge your mind.",
                icon: "fas fa-calculator",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                difficulty: "advanced",
                quizzes: 800,
                questions: 10000,
                participants: 25000,
                tags: ["Algebra", "Geometry", "Calculus", "Statistics"]
            },
            {
                id: 8,
                name: "Literature",
                description: "Classic novels, famous authors, poetry, literary devices, and book trivia.",
                icon: "fas fa-book-open",
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                difficulty: "intermediate",
                quizzes: 650,
                questions: 8000,
                participants: 22000,
                tags: ["Novels", "Poetry", "Authors", "Classics"]
            }
        ];

        // Render categories
        function renderCategories() {
            const categoriesGrid = document.getElementById('categoriesGrid');
            categoriesGrid.innerHTML = '';
            
            categories.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = `category-card ${category.name.toLowerCase()}`;
                
                categoryCard.innerHTML = `
                    <div class="category-header">
                        <img src="${category.image}" alt="${category.name}">
                        <div class="category-icon">
                            <i class="${category.icon}"></i>
                        </div>
                    </div>
                    <div class="category-content">
                        <h3 class="category-title">${category.name}</h3>
                        <span class="category-difficulty difficulty-${category.difficulty}">
                            ${category.difficulty.charAt(0).toUpperCase() + category.difficulty.slice(1)}
                        </span>
                        <p class="category-description">${category.description}</p>
                        
                        <div class="category-stats">
                            <div class="stat">
                                <div class="stat-value">${category.quizzes}</div>
                                <div class="stat-label">Quizzes</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${category.questions.toLocaleString()}</div>
                                <div class="stat-label">Questions</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${category.participants.toLocaleString()}+</div>
                                <div class="stat-label">Participants</div>
                            </div>
                        </div>
                        
                        <div class="category-tags">
                            ${category.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        
                        <button class="start-quiz-btn" data-category="${category.name}">
                            <i class="fas fa-play-circle"></i> Start ${category.name} Quiz
                        </button>
                    </div>
                `;
                
                categoriesGrid.appendChild(categoryCard);
            });
            
            // Add event listeners to buttons
            document.querySelectorAll('.start-quiz-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const categoryName = this.dataset.category;
                    const category = categories.find(c => c.name === categoryName);
                    startQuiz(category);
                });
            });
        }

        // Start quiz function
        function startQuiz(category) {
            // Save selected category to localStorage
            localStorage.setItem('selectedCategory', JSON.stringify(category));
            
            // Redirect to quiz page
            window.location.href = 'recentQuiz.html';
           
            
        }

        // Initialize
        renderCategories();