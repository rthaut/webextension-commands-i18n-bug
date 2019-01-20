document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.getElementById('commands').getElementsByTagName('tbody')[0];

    const commands = await browser.commands.getAll();

    for (command of commands) {
        let row = tbody.insertRow(tbody.rows.length);

        row.insertCell(0).appendChild(document.createTextNode(command.name));
        row.insertCell(1).appendChild(document.createTextNode(command.description));
        row.insertCell(2).appendChild(document.createTextNode(command.shortcut));
    }
});