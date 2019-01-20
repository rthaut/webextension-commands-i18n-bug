browser.runtime.onInstalled.addListener(() => {
    browser.runtime.openOptionsPage();
});

browser.commands.onCommand.addListener((command) => {
    browser.notifications.create(command, {
        'type': 'basic',
        'title': `${command} Notification`.toLocaleUpperCase(),
        'message': `This notification is being displayed as a result of the "${command}" command being invoked`
    });
});