#!/usr/bin/env babel

const DOCKDIFFERENCE = () => (
    Screen.main().flippedVisibleFrame().height -
    Screen.main().flippedFrame().height
);


centerWindow = (win) => {
    win.setTopLeft({
        x: screen.x + (screen.width / 2) - (win.frame().width / 2),
        y: screen.y + (screen.height / 2) - (win.frame().height / 2)
    });
    return win;
};


setWindowFrame = (window, position, frame) => {
    window.setFrame({
        x: frame.x + position.x * frame.width,
        y: frame.y + position.y * frame.height,
        width: position.width * frame.width,
        height: position.height * frame.height
    });
};

setWindowHalving = (window, half, frame) => {
    if (half == TOP_HALF) {
        return window.setFrame({
            x: window.frame().x,
            y: frame.y,
            height: frame.height / 2,
            width: window.frame().width
        });
    }
    if (half == BOTTOM_HALF) {
        return window.setFrame({
            x: window.frame().x,
            y: frame.y + frame.height / 2,
            height: frame.height / 2,
            width: window.frame().width
        });
    }
};


$ = (_$) => {
    return () => {
        let window = Window.focused();
        let screen = window.screen();
        let frame = screen.flippedVisibleFrame();
        _$(window, screen, frame);
    }
};
