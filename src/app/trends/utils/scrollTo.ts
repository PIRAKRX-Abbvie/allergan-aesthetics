export const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) { 
        el.scrollIntoView({
            behavior: 'smooth',
            inline: 'start'
        });
    }
}