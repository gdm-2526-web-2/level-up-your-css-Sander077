import '../styles/main.css';

/* showModal, closeModal is beschikbaar op dialog elementen */

const $modalTriggers = document.querySelectorAll("[data-modal-target]");
$modalTriggers.forEach($modalTriggers => {
    $modalTriggers.addEventListener("click", () => {
        const targetName = $modalTriggers.getAttribute
        ("data-modal-target");
        
        const $dialog = document.querySelector(`[data-modal="${targetName}"]`);
        $dialog.showModal();

        if ($dialog) {
            $dialog.showModal();

            const $closeButton = $dialog.querySelector("button");
            $closeButton.addEventListener("click", () => {
                $dialog.close();
            });
        }
    });
});