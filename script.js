const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', event => {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.classList.add('is-applied');
        element.textContent = '¡Aplicado!';
        element.disabled = true;
    }
});

const filter = document.querySelector('#filter-location');
const mensaje = document.querySelector('#filter-selected-value');
const jobs = document.querySelectorAll('.job-listing-card');

filter.addEventListener('change', () => {
    const selectedValue = filter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad;

        if (selectedValue === '' || selectedValue === modalidad) {
            job.style.display = 'flex';
        } else {
            job.style.display = 'none';
        }
    });
});