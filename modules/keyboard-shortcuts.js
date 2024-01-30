Key.on('up', HYPER, $((window, screen, frame) => {
    // Maximize
    setWindowFrame(window, FULL_SCREEN, frame);
}));

// Key.on('left', HYPER, $((window, screen, frame) => {
//     // Left Half
//     setWindowFrame(window, LEFT_HALF, frame);
// }));

// Key.on('right', HYPER, $((window, screen, frame) => {
//     // Right Half
//     setWindowFrame(window, RIGHT_HALF, frame);
// }));

// Key.on('left', HYPER_SHIFT, $((window, screen, frame) => {
//     // Left RATIO
//     setWindowFrame(window, LEFT_RATIO, frame);
// }));

// Key.on('right', HYPER_SHIFT, $((window, screen, frame) => {
//     // Right RATIO' complement
//     setWindowFrame(window, RIGHT_RATIO, frame);
// }));

// // Resize to top/bottom halves
// Key.on('up', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowHalving(window, TOP_HALF, frame);
// }));

// Key.on('down', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowHalving(window, BOTTOM_HALF, frame);
// }));

// // Quarters
// Key.on('f9', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, QUARTER1, frame);
// }));
// Key.on('f10', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, QUARTER2, frame);
// }));
// Key.on('f11', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, QUARTER3, frame);
// }));
// Key.on('f10', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowFrame(window, CENTER_HALF, frame);
// }));
// Key.on('f11', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowFrame(window, CENTER_HALF, frame);
// }));
// Key.on('f12', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, QUARTER4, frame);
// }));

// // Ratios of the Screen
// // Verticals
// Key.on('1', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, LEFT_ANTIRATIO, frame);
// }));

// Key.on('2', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, LEFT_HALF, frame);
// }));

// Key.on('3', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, LEFT_RATIO, frame);
// }));

// Key.on('4', HYPER, $((window, screen, frame) => {
//     setWindowFrame(window, FULL_SCREEN, frame);
// }));

// // Vertical Complements
// Key.on('1', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowFrame(window, RIGHT_ANTIRATIO, frame);
// }));

// Key.on('2', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowFrame(window, RIGHT_HALF, frame);
// }));

// Key.on('3', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowFrame(window, RIGHT_RATIO, frame);
// }));

// Key.on('4', HYPER_SHIFT, $((window, screen, frame) => {
//     setWindowFrame(window, CENTER_ANTIRATIO, frame);
// }));


// There are seven keys on the bottom row: ZXCV, and BNM. We'll use these keys
// to move windows to quarters and thirds of the screen. We'll also use <> to
// move windows to left and right halves.

const mapping = {
    "z": QUARTER1,
    "x": QUARTER2,
    "c": QUARTER3,
    "v": QUARTER4,
    "b": LEFT_ANTIRATIO,
    "n": CENTER_ANTIRATIO,
    "m": RIGHT_ANTIRATIO,
    ",": LEFT_HALF,
    ".": RIGHT_HALF
};
const fnmapping = {
    "f9": QUARTER1,
    "f10": QUARTER2,
    "f11": QUARTER3,
    "f12": QUARTER4,
    "f5": LEFT_ANTIRATIO,
    "f6": CENTER_ANTIRATIO,
    "f7": RIGHT_ANTIRATIO,
    "f1": LEFT_HALF,
    "f2": RIGHT_HALF
};

for (let key in mapping) {
    Key.on(key, HYPER_CMD, $((window, screen, frame) => {
        setWindowFrame(window, mapping[key], frame);
    }));
}
for (let key in fnmapping) {
    Key.on(key, HYPER, $((window, screen, frame) => {
        setWindowFrame(window, fnmapping[key], frame);
    }));
}

Key.on("x", HYPER_CMD_SHIFT, $((window, screen, frame) => {
    setWindowFrame(window, CENTER_HALF, frame);
}));
Key.on("f8", HYPER, $((window, screen, frame) => {
    setWindowFrame(window, CENTER_HALF, frame);
}));

// Halve the window vertically, either upward or downward:
Key.on("up", HYPER_CMD_SHIFT, $((window, screen, frame) => {
    halveWindow(window, TOP_HALF, frame);
}));
Key.on("down", HYPER_CMD_SHIFT, $((window, screen, frame) => {
    halveWindow(window, BOTTOM_HALF, frame);
}));

// Halve the window horizontally, either leftward or rightward:
Key.on("left", HYPER_CMD_SHIFT, $((window, screen, frame) => {
    halveWindow(window, LEFT_HALF, frame);
}));
Key.on("right", HYPER_CMD_SHIFT, $((window, screen, frame) => {
    halveWindow(window, RIGHT_HALF, frame);
}));


// Complements of the ratios:
const compleMapping = {
    "b": LEFT_RATIO,
    "n": CENTER_ANTIRATIO,
    "m": RIGHT_RATIO,
};

for (let key in compleMapping) {
    Key.on(key, HYPER_CMD_SHIFT, $((window, screen, frame) => {
        setWindowFrame(window, compleMapping[key], frame);
    }));
}