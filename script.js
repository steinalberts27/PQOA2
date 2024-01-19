// Shared JavaScript file for common functionalities

function initMainPage() {
    // Initialization for the main page
    displayQueuingList();
}

function initOwnerPage() {
    // Initialization for the owner page
    displayQueuingList();
}

function initMonitorPage() {
    // Initialization for the monitor display page
    displayQueuingListForMonitor();
}

function enqueueStudent() {
    const name = document.getElementById('name').value;
    const gradeSection = document.getElementById('gradeSection').value;
    const strand = document.getElementById('strand').value;

    const student = {
        name,
        gradeSection,
        strand
    };

    // Retrieve the queuing list from localStorage
    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];
    const queuingNumber = queuingList.length + 1;
    student.queuingNumber = queuingNumber;
    queuingList.push(student);

    // Store the updated queuing list in localStorage
    localStorage.setItem('queuingList', JSON.stringify(queuingList));

    displayQueuedStudent(student);
    displayQueuingList();
}

function displayQueuedStudent(student) {
    const resultElement = document.getElementById('result');
    const queueList = document.getElementById('queue-list');

    resultElement.innerHTML = `Your Queuing Number: ${student.queuingNumber}`;

    const listItem = document.createElement('li');
    listItem.textContent = `Queuing Number: ${student.queuingNumber}, Name: ${student.name}, Grade/Section: ${student.gradeSection}, Strand: ${student.strand}`;
    queueList.appendChild(listItem);
}

function displayQueuingList() {
    const queueListElement = document.getElementById('queue-list');
    queueListElement.innerHTML = ''; // Clear the existing list

    // Retrieve the queuing list from localStorage
    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];

    queuingList.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `Queuing Number: ${student.queuingNumber}, Name: ${student.name}, Grade/Section: ${student.gradeSection}, Strand: ${student.strand}`;
        queueListElement.appendChild(listItem);
    });
}

function displayQueuingListForMonitor() {
    const monitorQueueElement = document.getElementById('monitor-queue');
    monitorQueueElement.innerHTML = ''; // Clear the existing display

    // Retrieve the queuing list from localStorage
    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];

    queuingList.forEach(student => {
        const displayItem = document.createElement('div');
        displayItem.textContent = `Queuing Number: ${student.queuingNumber}, Name: ${student.name}, Grade/Section: ${student.gradeSection}, Strand: ${student.strand}`;
        monitorQueueElement.appendChild(displayItem);
    });
}
