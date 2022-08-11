document.querySelector('.contact-form form').addEventListener('submit', event => {
    event.preventDefault();
    const fields = [ ... event.target.elements ];
    const data = [];
    fields.forEach(input => input.value && data.push(`\n${input.id}: ${input.value}`));
    window.alert(`If this was real, sent data would be: ${data}`);
})
