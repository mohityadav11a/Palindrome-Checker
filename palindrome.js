document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    if (!textInput) {
        alert('Please input a value');
        return;
    }

    const cleanedText = textInput
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultDiv.textContent = `${textInput} is a palindrome`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `${textInput} is not a palindrome`;
        resultDiv.style.color = 'red';
    }
});
