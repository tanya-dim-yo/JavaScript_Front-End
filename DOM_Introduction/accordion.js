function toggle() {
    const extraTextElement = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];

    const isExtraTextHidden = extraTextElement.style.display === 'none' || extraTextElement.style.display === '';

    extraTextElement.style.display = isExtraTextHidden ? 'block' : 'none';
    button.textContent = isExtraTextHidden ? 'Less' : 'More';
}
