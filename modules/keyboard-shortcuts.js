Key.on('up', HYPER, $((window, screen, frame) => {
    // Maximize
    setWindowFrame(window, FULL_SCREEN, frame);
}));

Key.on('left', HYPER, $((window, screen, frame) => {
    // Left Half
    setWindowFrame(window, LEFT_HALF, frame);
}));

Key.on('right', HYPER, $((window, screen, frame) => {
    // Right Half
    setWindowFrame(window, RIGHT_HALF, frame);
}));

Key.on('left', HYPER_SHIFT, $((window, screen, frame) => {
    // Left RATIO
    setWindowFrame(window, LEFT_RATIO, frame);
}));

Key.on('right', HYPER_SHIFT, $((window, screen, frame) => {
    // Right RATIO' complement
    setWindowFrame(window, RIGHT_RATIO, frame);
}));

// Verticals
Key.on('1', HYPER, $((window, screen, frame) => {
    setWindowFrame(window, LEFT_ANTIRATIO, frame);
}));

Key.on('2', HYPER, $((window, screen, frame) => {
    setWindowFrame(window, LEFT_HALF, frame);
}));

Key.on('3', HYPER, $((window, screen, frame) => {
    setWindowFrame(window, LEFT_RATIO, frame);

}));

Key.on('4', HYPER, $((window, screen, frame) => {
    setWindowFrame(window, FULL_SCREEN, frame);
}));

// Vertical Complements
Key.on('1', HYPER_SHIFT, $((window, screen, frame) => {
    setWindowFrame(window, RIGHT_ANTIRATIO, frame);
}));

Key.on('2', HYPER_SHIFT, $((window, screen, frame) => {
    setWindowFrame(window, RIGHT_HALF, frame);
}));

Key.on('3', HYPER_SHIFT, $((window, screen, frame) => {
    setWindowFrame(window, RIGHT_RATIO, frame);
}));

Key.on('4', HYPER_SHIFT, $((window, screen, frame) => {
    setWindowFrame(window, CENTER_ANTIRATIO, frame);
}));

// Resize to top/bottom halves
Key.on('up', HYPER_SHIFT, $((window, screen, frame) => {
    setWindowHalving(window, TOP_HALF, frame);
}));

Key.on('down', HYPER_SHIFT, $((window, screen, frame) => {
    setWindowHalving(window, BOTTOM_HALF, frame);
}));

Key.on('f4', HYPER, $((window, screen, frame) => {
    positionToPreset();
}));
Key.on('home', HYPER, $((window, screen, frame) => {
    positionToPreset();
}));
