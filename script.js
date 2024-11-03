function processName() {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        alert('Please enter your name!');
        return;
    }

    const vazhaPercentage = Math.floor(Math.random() * 101);
    const currentDate = new Date().toLocaleDateString();
    
    document.getElementById('userInfo').innerHTML = `
        Name: ${name}<br>
        Date: ${currentDate}
    `;
    
    document.getElementById('percentage').textContent = `${vazhaPercentage}%`;
    
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
}

function reset() {
    document.getElementById('nameInput').value = '';
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
}