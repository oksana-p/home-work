function createSelect(wrapper, options) {
    let root;
    let title;
    let dropdown;
    const items = [];
    const buttons = [];

    function createRoot() {
        root = document.createElement('div');
        root.classList.add('select');
        wrapper.append(root);
    }

    function createTitle() {
        title = document.createElement('button');
        title.classList.add('select__title');
        title.textContent = 'Select...';

        title.addEventListener('click', function() {
            root.classList.toggle('select_active');
        });

        root.append(title);
    }

    function createDropdown() {
        dropdown = document.createElement('ul');
        dropdown.classList.add('select__options');
        root.append(dropdown);
    }

    function createItems() {
        for(let i = 0; i < options.length; i++) {
            const optionContent = options[i];
            const option = document.createElement('li');
            const button = document.createElement('button');

            option.classList.add('select__item');
            button.classList.add('select__option');

            button.textContent = optionContent;

            button.addEventListener('click', function() {
                title.textContent = button.textContent;
                root.classList.remove('select_active');
            });

            dropdown.append(option);
            option.append(button);

        }
    }

    createRoot();
    createTitle();
    createDropdown();
    createItems();

}

createSelect(document.querySelector('body'), [
    'sea',
    'mountains',
    'both'
]);

createSelect(document.querySelector('body'), [
    'happiness',
    'wealth',
    'beauty',
    'health',
    'calm'
]);