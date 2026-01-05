// Science Quiz Questions Database
        const scienceQuestions = [
            {
                id: 1,
                question: "What is the chemical symbol for Gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correctAnswer: 2,
                hint: "This element's symbol comes from its Latin name 'Aurum'.",
                explanation: "Gold's chemical symbol is Au, derived from the Latin word 'Aurum'. It's a precious metal known for its bright yellow color and resistance to corrosion.",
                category: "Chemistry",
                image: "",
                fact: {
                    title: "Chemistry Fun Fact",
                    text: "Gold is so malleable that a single ounce can be beaten into a sheet covering 300 square feet!"
                }
            },
            {
                id: 2,
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1,
                hint: "It's named after the Roman god of war.",
                explanation: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide (rust) on its surface. It's the fourth planet from the Sun.",
                category: "Astronomy",
                image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Astronomy Fun Fact",
                    text: "Mars has the largest volcano in the solar system - Olympus Mons, which is about 3 times taller than Mount Everest!"
                }
            },
            {
                id: 3,
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correctAnswer: 2,
                hint: "It's made of carbon atoms arranged in a crystal structure.",
                explanation: "Diamond is the hardest known natural material, scoring 10 on the Mohs scale of mineral hardness. It's composed of carbon atoms arranged in a crystal lattice.",
                category: "Chemistry",
                image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Chemistry Fun Fact",
                    text: "Diamonds can actually burn! At about 800°C in oxygen, they convert to carbon dioxide."
                }
            },
            {
                id: 4,
                question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 2,
                hint: "Plants use this gas along with water and sunlight to produce glucose.",
                explanation: "Plants absorb carbon dioxide (CO₂) from the atmosphere during photosynthesis. Using sunlight, they convert CO₂ and water into glucose and oxygen.",
                category: "Biology",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Biology Fun Fact",
                    text: "A single tree can absorb up to 48 pounds of carbon dioxide per year and release enough oxygen for 2 people!"
                }
            },
            {
                id: 5,
                question: "What is the unit of electrical resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correctAnswer: 2,
                hint: "Named after a German physicist.",
                explanation: "The ohm (symbol: Ω) is the unit of electrical resistance, named after German physicist Georg Simon Ohm. It's defined as the resistance between two points of a conductor when a constant potential difference of 1 volt produces a current of 1 ampere.",
                category: "Physics",
                image: "",
                fact: {
                    title: "Physics Fun Fact",
                    text: "Copper has very low electrical resistance, which is why it's used in electrical wiring. Its resistance is only 1.7 × 10⁻⁸ Ω·m!"
                }
            },
            {
                id: 6,
                question: "What type of energy is stored in a battery?",
                options: ["Kinetic Energy", "Thermal Energy", "Chemical Energy", "Nuclear Energy"],
                correctAnswer: 2,
                hint: "It's released when chemical reactions occur.",
                explanation: "Batteries store chemical energy, which is converted into electrical energy when connected to a circuit. This happens through redox reactions at the electrodes.",
                category: "Physics",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Physics Fun Fact",
                    text: "The first true battery was invented by Alessandro Volta in 1800 and was called the 'voltaic pile'. It consisted of alternating discs of zinc and copper with cardboard soaked in saltwater between them."
                }
            },
            {
                id: 7,
                question: "Which part of the human brain is responsible for balance and coordination?",
                options: ["Cerebrum", "Cerebellum", "Brain Stem", "Medulla"],
                correctAnswer: 1,
                hint: "It's sometimes called the 'little brain'.",
                explanation: "The cerebellum, located at the back of the brain, is primarily responsible for coordinating movement, balance, and posture. It contains about 80% of the brain's total neurons!",
                category: "Biology",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Biology Fun Fact",
                    text: "Despite being only 10% of the brain's volume, the cerebellum contains over 50% of the brain's total neurons - about 69 billion!"
                }
            },
            {
                id: 8,
                question: "What is the pH value of pure water?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2,
                hint: "It's neither acidic nor basic.",
                explanation: "Pure water has a pH of 7, which is neutral on the pH scale. This means it has equal concentrations of H⁺ and OH⁻ ions.",
                category: "Chemistry",
                image: "",
                fact: {
                    title: "Chemistry Fun Fact",
                    text: "Rainwater is naturally slightly acidic with a pH of about 5.6 due to dissolved carbon dioxide forming carbonic acid!"
                }
            },
            {
                id: 9,
                question: "Which force keeps planets in orbit around the Sun?",
                options: ["Electromagnetic Force", "Gravitational Force", "Nuclear Force", "Frictional Force"],
                correctAnswer: 1,
                hint: "Described by Isaac Newton's law of universal gravitation.",
                explanation: "Gravity is the force that attracts two bodies toward each other. The Sun's gravity keeps planets in their orbits, while the planets' gravity affects the Sun's motion as well.",
                category: "Physics",
                image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Physics Fun Fact",
                    text: "If the Sun suddenly disappeared, Earth would continue moving in a straight line into space! We'd only notice 8 minutes later when the light stopped arriving."
                }
            },
            {
                id: 10,
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Heart", "Skin", "Lungs"],
                correctAnswer: 2,
                hint: "It covers your entire body and protects internal organs.",
                explanation: "The skin is the largest organ, accounting for about 15% of your body weight. An average adult has about 2 square meters (22 square feet) of skin!",
                category: "Biology",
                image: "https://images.unsplash.com/photo-1556228578-9c360e1d458f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                fact: {
                    title: "Biology Fun Fact",
                    text: "Your skin completely renews itself every 28 days. You shed about 30,000-40,000 dead skin cells every minute!"
                }
            }
        ];

        // Quiz State
        let currentQuestion = 0;
        let userAnswers = [];
        let score = 0;
        let timeLeft = 15 * 60; // 15 minutes in seconds
        let timerInterval = null;
        let quizCompleted = false;
        let bookmarkedQuestions = new Set();
        let flaggedQuestions = new Set();
        let categoryStats = {
            physics: 0,
            chemistry: 0,
            biology: 0,
            astronomy: 0
        };

        // DOM Elements
        const questionText = document.getElementById('questionText');
        const questionImage = document.getElementById('questionImage');
        const scienceFact = document.getElementById('scienceFact');
        const factTitle = document.getElementById('factTitle');
        const factText = document.getElementById('factText');
        const questionHint = document.getElementById('questionHint');
        const optionsContainer = document.getElementById('optionsContainer');
        const questionCount = document.getElementById('questionCount');
        const questionNumber = document.getElementById('questionNumber');
        const progressFill = document.getElementById('progressFill');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const timeDisplay = document.getElementById('timeDisplay');
        const quizTimer = document.getElementById('quizTimer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        const hintBtn = document.getElementById('hintBtn');
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        const flagBtn = document.getElementById('flagBtn');
        const physicsCount = document.getElementById('physicsCount');
        const chemistryCount = document.getElementById('chemistryCount');
        const biologyCount = document.getElementById('biologyCount');
        const astronomyCount = document.getElementById('astronomyCount');
        const resultsModal = document.getElementById('resultsModal');
        const scoreCircle = document.getElementById('scoreCircle');
        const scienceBadge = document.getElementById('scienceBadge');
        const correctAnswers = document.getElementById('correctAnswers');
        const totalQuestions = document.getElementById('totalQuestions');
        const timeTaken = document.getElementById('timeTaken');
        const accuracyRate = document.getElementById('accuracyRate');
        const resultFeedback = document.getElementById('resultFeedback');
        const retryBtn = document.getElementById('retryBtn');
        const reviewBtn = document.getElementById('reviewBtn');
        const homeBtn = document.getElementById('homeBtn');

        // Initialize Quiz
        function initQuiz() {
            // Initialize user answers array
            userAnswers = Array(scienceQuestions.length).fill(null);
            
            // Calculate category statistics
            calculateCategoryStats();
            
            // Start quiz
            updateScore();
            updateCategoryStats();
            startTimer();
            loadQuestion(currentQuestion);
            updateNavigationButtons();
            updateActionButtons();
        }

        // Calculate category statistics
        function calculateCategoryStats() {
            categoryStats = { physics: 0, chemistry: 0, biology: 0, astronomy: 0 };
            scienceQuestions.forEach(q => {
                categoryStats[q.category.toLowerCase()]++;
            });
        }

        // Load Question
        function loadQuestion(index) {
            const question = scienceQuestions[index];
            
            // Update question text
            questionText.textContent = question.question;
            questionHint.querySelector('span').textContent = question.hint;
            questionCount.textContent = `Question ${index + 1} of ${scienceQuestions.length}`;
            questionNumber.textContent = `Question ${index + 1}`;
            
            // Show/hide question image
            if (question.image) {
                questionImage.src = question.image;
                questionImage.style.display = 'block';
            } else {
                questionImage.style.display = 'none';
            }
            
            // Show/hide science fact
            if (question.fact) {
                factTitle.textContent = question.fact.title;
                factText.textContent = question.fact.text;
                scienceFact.style.display = 'flex';
            } else {
                scienceFact.style.display = 'none';
            }
            
            // Clear options
            optionsContainer.innerHTML = '';
            
            // Create options
            question.options.forEach((option, optionIndex) => {
                const optionItem = document.createElement('div');
                optionItem.className = 'option-item';
                optionItem.dataset.index = optionIndex;
                
                // Check if this option was previously selected
                if (userAnswers[index] === optionIndex) {
                    optionItem.classList.add('selected');
                }
                
                // Check if we're reviewing and this is the correct answer
                if (quizCompleted && optionIndex === question.correctAnswer) {
                    optionItem.classList.add('correct');
                }
                
                // Check if we're reviewing and this was a wrong answer
                if (quizCompleted && userAnswers[index] === optionIndex && optionIndex !== question.correctAnswer) {
                    optionItem.classList.add('incorrect');
                }
                
                optionItem.innerHTML = `
                    <div class="option-marker">${String.fromCharCode(65 + optionIndex)}</div>
                    <div class="option-text">${option}</div>
                    ${quizCompleted ? `<div class="option-explanation">${optionIndex === question.correctAnswer ? question.explanation : ''}</div>` : ''}
                `;
                
                // Only add click event if quiz is not completed
                if (!quizCompleted) {
                    optionItem.addEventListener('click', () => selectOption(optionIndex));
                }
                
                optionsContainer.appendChild(optionItem);
            });
            
            // Update progress bar
            updateProgress();
            
            // Update action buttons
            updateActionButtons();
        }

        // Select Option
        function selectOption(optionIndex) {
            // Clear previous selection
            document.querySelectorAll('.option-item').forEach(item => {
                item.classList.remove('selected');
            });
            
            // Mark selected option
            const selectedOption = document.querySelector(`.option-item[data-index="${optionIndex}"]`);
            selectedOption.classList.add('selected');
            
            // Store answer
            userAnswers[currentQuestion] = optionIndex;
            
            // Update score
            updateScore();
            
            // Enable next button if not already enabled
            if (currentQuestion < scienceQuestions.length - 1) {
                nextBtn.disabled = false;
            } else {
                submitBtn.style.display = 'inline-flex';
                nextBtn.style.display = 'none';
            }
        }

        // Update Progress
        function updateProgress() {
            const progress = ((currentQuestion + 1) / scienceQuestions.length) * 100;
            progressFill.style.width = `${progress}%`;
        }

        // Update Score
        function updateScore() {
            // Calculate current score
            score = 0;
            userAnswers.forEach((answer, index) => {
                if (answer !== null && answer === scienceQuestions[index].correctAnswer) {
                    score++;
                }
            });
            
            // Update display
            scoreDisplay.textContent = `Score: ${score}`;
        }

        // Update Category Stats
        function updateCategoryStats() {
            physicsCount.textContent = categoryStats.physics;
            chemistryCount.textContent = categoryStats.chemistry;
            biologyCount.textContent = categoryStats.biology;
            astronomyCount.textContent = categoryStats.astronomy;
        }

        // Update Action Buttons
        function updateActionButtons() {
            // Update bookmark button
            if (bookmarkedQuestions.has(currentQuestion)) {
                bookmarkBtn.classList.add('active');
                bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i> Bookmarked`;
            } else {
                bookmarkBtn.classList.remove('active');
                bookmarkBtn.innerHTML = `<i class="far fa-bookmark"></i> Bookmark`;
            }
            
            // Update flag button
            if (flaggedQuestions.has(currentQuestion)) {
                flagBtn.classList.add('active');
                flagBtn.innerHTML = `<i class="fas fa-flag"></i> Flagged`;
            } else {
                flagBtn.classList.remove('active');
                flagBtn.innerHTML = `<i class="far fa-flag"></i> Flag Question`;
            }
        }

        // Update Navigation Buttons
        function updateNavigationButtons() {
            prevBtn.disabled = currentQuestion === 0;
            
            if (currentQuestion === scienceQuestions.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-flex';
            } else {
                nextBtn.style.display = 'inline-flex';
                submitBtn.style.display = 'none';
            }
            
            // Enable next button if current question is answered
            if (userAnswers[currentQuestion] !== null && currentQuestion < scienceQuestions.length - 1) {
                nextBtn.disabled = false;
            }
        }

        // Timer Functions
        function startTimer() {
            updateTimeDisplay();
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimeDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    submitQuiz();
                }
                
                // Add warning animation when less than 2 minutes
                if (timeLeft <= 120) {
                    quizTimer.classList.add('timer-critical');
                }
            }, 1000);
        }

        function updateTimeDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Navigation Functions
        function nextQuestion() {
            if (currentQuestion < scienceQuestions.length - 1) {
                currentQuestion++;
                loadQuestion(currentQuestion);
                updateNavigationButtons();
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion(currentQuestion);
                updateNavigationButtons();
            }
        }

        // Submit Quiz and Show Results
        function submitQuiz() {
            clearInterval(timerInterval);
            quizCompleted = true;
            
            // Calculate final results
            const totalQuestionsCount = scienceQuestions.length;
            const correctAnswersCount = userAnswers.filter((answer, index) => 
                answer === scienceQuestions[index].correctAnswer
            ).length;
            const percentage = Math.round((correctAnswersCount / totalQuestionsCount) * 100);
            const timeUsed = (15 * 60) - timeLeft;
            
            // Determine badge based on score
            let badge = "";
            let badgeColor = "";
            if (percentage >= 90) {
                badge = "🧪 Science Genius";
                badgeColor = "#f59e0b";
            } else if (percentage >= 70) {
                badge = "🔬 Science Expert";
                badgeColor = "#3b82f6";
            } else if (percentage >= 50) {
                badge = "🧬 Science Explorer";
                badgeColor = "#10b981";
            } else {
                badge = "🔭 Science Learner";
                badgeColor = "#6b7280";
            }
            
            // Update results modal
            scoreCircle.innerHTML = `
                <div class="score-percentage">${percentage}%</div>
                <div class="score-text">Score</div>
            `;
            
            scienceBadge.textContent = badge;
            scienceBadge.style.background = badgeColor;
            
            correctAnswers.textContent = correctAnswersCount;
            totalQuestions.textContent = totalQuestionsCount;
            timeTaken.textContent = formatTime(timeUsed);
            accuracyRate.textContent = `${percentage}%`;
            
            // Set feedback based on score
            let feedback = "";
            if (percentage >= 90) {
                feedback = "🎉 Outstanding! Your scientific knowledge is exceptional. You've mastered physics, chemistry, biology, and astronomy!";
            } else if (percentage >= 70) {
                feedback = "👍 Excellent work! You have a strong understanding of scientific concepts across multiple disciplines.";
            } else if (percentage >= 50) {
                feedback = "😊 Good job! You have a solid foundation in science. Keep exploring and learning!";
            } else if (percentage >= 30) {
                feedback = "📚 Keep learning! Review the science facts and explanations to improve your understanding.";
            } else {
                feedback = "💪 Science is all about curiosity! Don't give up - every scientist started as a learner.";
            }
            
            // Add category breakdown
            const categoryCorrect = {
                physics: 0,
                chemistry: 0,
                biology: 0,
                astronomy: 0
            };
            
            userAnswers.forEach((answer, index) => {
                if (answer === scienceQuestions[index].correctAnswer) {
                    const category = scienceQuestions[index].category.toLowerCase();
                    categoryCorrect[category]++;
                }
            });
            
            feedback += `<br><br><strong>Category Breakdown:</strong><br>`;
            feedback += `🔭 Astronomy: ${categoryCorrect.astronomy}/${categoryStats.astronomy}<br>`;
            feedback += `🧪 Chemistry: ${categoryCorrect.chemistry}/${categoryStats.chemistry}<br>`;
            feedback += `🧬 Biology: ${categoryCorrect.biology}/${categoryStats.biology}<br>`;
            feedback += `⚛️ Physics: ${categoryCorrect.physics}/${categoryStats.physics}`;
            
            resultFeedback.innerHTML = feedback;
            
            // Show modal
            resultsModal.classList.add('active');
            
            // Reload current question to show correct/incorrect indicators
            loadQuestion(currentQuestion);
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // Event Listeners
        prevBtn.addEventListener('click', prevQuestion);
        nextBtn.addEventListener('click', nextQuestion);
        submitBtn.addEventListener('click', submitQuiz);

        hintBtn.addEventListener('click', () => {
            const hintText = scienceQuestions[currentQuestion].hint;
            questionHint.querySelector('span').textContent = hintText;
            
            // Show temporary animation
            questionHint.style.animation = 'none';
            setTimeout(() => {
                questionHint.style.animation = 'correctPulse 0.5s ease';
            }, 10);
        });

        bookmarkBtn.addEventListener('click', () => {
            if (bookmarkedQuestions.has(currentQuestion)) {
                bookmarkedQuestions.delete(currentQuestion);
            } else {
                bookmarkedQuestions.add(currentQuestion);
            }
            updateActionButtons();
        });

        flagBtn.addEventListener('click', () => {
            if (flaggedQuestions.has(currentQuestion)) {
                flaggedQuestions.delete(currentQuestion);
            } else {
                flaggedQuestions.add(currentQuestion);
            }
            updateActionButtons();
        });

        retryBtn.addEventListener('click', () => {
            // Reset quiz state
            currentQuestion = 0;
            userAnswers = Array(scienceQuestions.length).fill(null);
            score = 0;
            timeLeft = 15 * 60;
            quizCompleted = false;
            bookmarkedQuestions.clear();
            flaggedQuestions.clear();
            
            // Reset UI
            resultsModal.classList.remove('active');
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'inline-flex';
            quizTimer.classList.remove('timer-critical');
            
            // Restart quiz
            updateScore();
            startTimer();
            loadQuestion(currentQuestion);
            updateNavigationButtons();
        });

        reviewBtn.addEventListener('click', () => {
            resultsModal.classList.remove('active');
            // User can review answers by navigating through questions
        });

        homeBtn.addEventListener('click', () => {
            window.location.href = 'categories.html';
        });

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (quizCompleted) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    if (!prevBtn.disabled) prevQuestion();
                    break;
                case 'ArrowRight':
                    if (!nextBtn.disabled) nextQuestion();
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    const optionIndex = parseInt(e.key) - 1;
                    if (optionIndex >= 0 && optionIndex < 4) {
                        selectOption(optionIndex);
                    }
                    break;
                case ' ':
                case 'Enter':
                    if (currentQuestion < scienceQuestions.length - 1) {
                        nextQuestion();
                    } else {
                        submitQuiz();
                    }
                    break;
                case 'b':
                    bookmarkBtn.click();
                    break;
                case 'f':
                    flagBtn.click();
                    break;
                case 'h':
                    hintBtn.click();
                    break;
            }
        });

        // Initialize the quiz
        initQuiz();
