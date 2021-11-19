window.sr = ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
});

sr.reveal('header', {
    delay: 200, origin: 'bottom',
});

sr.reveal('.content_upshot_media', {
    delay: 200, origin: "left",
});

sr.reveal('.left_side_col', {
    delay: 300, origin: 'left',
});

sr.reveal('.right_side_col', {
    delay: 300, origin: 'right',
});

sr.reveal('.form_work', {
    delay: 300, origin: 'bottom',
});

sr.reveal('.footer_icons i', {
    delay: 300, origin: 'bottom', interval: 200,
});

sr.reveal('.footer_content', {
    delay: 300, origin: 'bottom',
});