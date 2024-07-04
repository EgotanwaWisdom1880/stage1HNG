function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();
    const utcDate = now.toUTCString().slice(0, 16);
    const utcTime = now.toUTCString().slice(17, 25);

    dateElement.textContent = `Date: ${utcDate}`;
    timeElement.textContent = `Time: ${utcTime}`;
}

document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000); // Update every second
});
