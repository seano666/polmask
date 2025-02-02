document.addEventListener('DOMContentLoaded', async () => {
    const domainList = document.getElementById('domain-list');
    const { allowedWebsites } = await browser.storage.sync.get('allowedWebsites');

    // Initialize the list with stored domains
    (allowedWebsites || []).forEach(domain => addDomainToList(domain));

    // Add new domain when the Add button is clicked
    document.getElementById('add-button').addEventListener('click', async () => {
        const newDomain = document.getElementById('new-domain').value.trim();

        if (newDomain && !isDomainInList(newDomain)) {
            addDomainToList(newDomain);

            // Save the updated list to storage
            await saveDomains();
            document.getElementById('new-domain').value = '';
        }
    });

    // Add a domain to the list view
    function addDomainToList(domain) {
        const li = document.createElement('li');
        li.textContent = domain;

        // Add delete button to the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', async () => {
            li.remove();
            await saveDomains();
        });

        li.appendChild(deleteButton);
        domainList.appendChild(li);
    }

    // Check if a domain is already in the list
    function isDomainInList(domain) {
        return Array.from(domainList.children).some(li => li.textContent.includes(domain));
    }

    // Save all domains in the list to storage
    async function saveDomains() {
        const domains = Array.from(domainList.children).map(li => li.firstChild.textContent);
        await browser.storage.sync.set({ allowedWebsites: domains });
    }
});
