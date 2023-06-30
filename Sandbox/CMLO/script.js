const nameFilter = document.getElementById('name-filter');
const categoryFilter = document.getElementById('category-filter');
const locationFilter = document.getElementById('location-filter');
const applyFiltersButton = document.getElementById('apply-filters-button');
const sections = document.querySelectorAll('#my-container section');

applyFiltersButton.addEventListener('click', () => {
const nameValue = nameFilter.value;
const categoryValue = categoryFilter.value;
const locationValue = locationFilter.value;

sections.forEach(section => {
    if (nameValue === 'all' || section.dataset.name === nameValue) {
    if (categoryValue === 'all' || section.dataset.category === categoryValue) {
        if (locationValue === 'all' || section.dataset.location === locationValue) {
        section.classList.remove('hidden');
        section.classList.add('visible');
        } else {
        section.classList.add('hidden');
        section.classList.remove('visible');
        }
    } else {
        section.classList.add('hidden');
        section.classList.remove('visible');
    }
    } else {
    section.classList.add('hidden');
    section.classList.remove('visible');
    }
});
});