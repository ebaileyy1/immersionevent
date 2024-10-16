function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    answers[index].style.display = answers[index].style.display === 'block' ? 'none' : 'block';
}
