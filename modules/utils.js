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
        x: PADDING + frame.x + position.x * frame.width,
        y: PADDING + frame.y + position.y * frame.height,
        width: position.width * frame.width - 2 * PADDING,
        height: position.height * frame.height - 2 * PADDING
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


halveWindow = (window, half, frame) => {
    if (half == TOP_HALF) {
        return window.setFrame({
            x: window.frame().x,
            y: window.frame().y,
            height: window.frame().height / 2,
            width: window.frame().width
        });
    }
    if (half == BOTTOM_HALF) {
        return window.setFrame({
            x: window.frame().x,
            y: window.frame().y + window.frame().height / 2,
            height: window.frame().height / 2,
            width: window.frame().width
        });
    }
    if (half == LEFT_HALF) {
        return window.setFrame({
            x: window.frame().x,
            y: window.frame().y,
            height: window.frame().height,
            width: window.frame().width / 2
        });
    }
    if (half == RIGHT_HALF) {
        return window.setFrame({
            x: window.frame().x + window.frame().width / 2,
            y: window.frame().y,
            height: window.frame().height,
            width: window.frame().width / 2
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
