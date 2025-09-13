
        document.addEventListener('DOMContentLoaded', function() {
            // Animate elements on scroll
            const animatedElements = document.querySelectorAll('.animate');
            
            function checkScroll() {
                animatedElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('visible');
                    }
                });
            }
            
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Check on initial load
            
            // Initialize budget progress bar
            const budgetProgress = document.getElementById('budget-progress');
            budgetProgress.style.width = '73.5%';
            
            // Initialize calendar
            initializeCalendar();
            
            // Button hover effects
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Calendar navigation
            document.getElementById('prev-month').addEventListener('click', function() {
                // In a real app, this would navigate to the previous month
                alert('Previous month clicked');
            });
            
            document.getElementById('next-month').addEventListener('click', function() {
                // In a real app, this would navigate to the next month
                alert('Next month clicked');
            });
        });
        
        function initializeCalendar() {
            const calendarGrid = document.querySelector('.calendar-grid');
            const daysInMonth = 31; // October has 31 days
            const startDay = 0; // October 1, 2023 is a Sunday
            
            // Clear any existing days (except headers)
            while (calendarGrid.children.length > 7) {
                calendarGrid.removeChild(calendarGrid.lastChild);
            }
            
            // Add empty cells for days before the start of the month
            for (let i = 0; i < startDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.classList.add('calendar-day');
                calendarGrid.appendChild(emptyDay);
            }
            
            // Add cells for each day of the month
            for (let i = 1; i <= daysInMonth; i++) {
                const day = document.createElement('div');
                day.classList.add('calendar-day');
                day.textContent = i;
                
                // Mark today (October 15th for demo purposes)
                if (i === 15) {
                    day.classList.add('active');
                }
                
                // Randomly mark some days as having events
                if (i % 5 === 0 || i % 7 === 0) {
                    day.classList.add('has-event');
                }
                
                calendarGrid.appendChild(day);
            }
        }
    