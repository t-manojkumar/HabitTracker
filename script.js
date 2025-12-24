const addBtn = document.getElementById('addBtn');
const habitInput = document.getElementById('habitInput');

addBtn.addEventListener('click', () => {
    const habitText = habitInput.value;
    
    // 1. Get existing habits from storage
    const habits = JSON.parse(localStorage.getItem('habits') || "[]");
    
    // 2. Add new habit
    habits.push({ text: habitText, completed: false, date: new Date() });
    
    // 3. Save back to storage
    localStorage.setItem('habits', JSON.stringify(habits));
    
    // 4. Clear input
    habitInput.value = "";
    alert("Saved locally!");
});