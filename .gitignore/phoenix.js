#!/usr/bin/env babel

const HYPER = ['ctrl', 'alt'];
const HYPER_SHIFT = [...HYPER, 'shift'];

const RATIO = 2/3;

const FULL_SCREEN = { x: 0, y: 0, width: 1, height: 1 };
const LEFT_HALF =   { x: 0, y: 0, width: 0.5, height: 1 };
const RIGHT_HALF =  { x: 0.5, y: 0, width: 0.5, height: 1 };


function centerWindow(win) {
    win.setTopLeft({
        x: screen.x + (screen.width / 2) - (win.frame().width / 2),
        y: screen.y + (screen.height / 2) - (win.frame().height / 2)
    });
    return win;
};


DOCKDIFFERENCE = () => (
    Screen.main().flippedVisibleFrame().height -
    Screen.main().flippedFrame().height
);


$ = (_$) => {
    return () => {
        let window = Window.focused();
        let screen = window.screen();
        let frame = screen.flippedVisibleFrame();
        _$(window, screen, frame);
    }
};


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
    window.setFrame({
        x: frame.x + frame.width / 2,
        y: frame.y,
        width: frame.width / 2
    });
}));

Key.on('left', HYPER_SHIFT, $((window, screen, frame) => {
    // Left RATIO
    window.setFrame({
        x: frame.x,
        y: frame.y,
        width: frame.width * RATIO
    });
}));

Key.on('right', HYPER_SHIFT, $((window, screen, frame) => {
    // Right RATIO' complement
    window.setFrame({
        x: frame.x + frame.width * RATIO,
        y: frame.y,
        width: frame.width * (1-RATIO)
    });
}));

// Verticals
Key.on('1', HYPER, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x,
        y: frame.y,
        width: frame.width * (1-RATIO)
    });
}));

Key.on('2', HYPER, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x,
        y: frame.y,
        width: frame.width / 2
    });
}));

Key.on('3', HYPER, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x,
        y: frame.y,
        width: frame.width * RATIO
    });
}));

Key.on('4', HYPER, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x,
        y: frame.y,
        width: frame.width
    });
}));

// Vertical Complements
Key.on('1', HYPER_SHIFT, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x + frame.width * (1-RATIO),
        y: frame.y,
        width: frame.width * RATIO
    });
}));

Key.on('2', HYPER_SHIFT, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x + frame.width / 2,
        y: frame.y,
        width: frame.width / 2
    });
}));

Key.on('3', HYPER_SHIFT, $((window, screen, frame) => {
    window.setFrame({
        x: frame.x + frame.width * RATIO,
        y: frame.y,
        width: frame.width * (1-RATIO)
    });
}));

// Resize to top/bottom halves
Key.on('up', HYPER_SHIFT, $((window, screen, frame) => {
    window.setFrame({
        x: window.frame().x,
        y: frame.y,
        height: frame.height / 2,
        width: window.frame().width
    });
}));

Key.on('down', HYPER_SHIFT, $((window, screen, frame) => {
    window.setFrame({
        x: window.frame().x,
        y: frame.y + frame.height / 2,
        height: frame.height / 2,
        width: window.frame().width
    });
}));


Key.on('home', HYPER, $((window, screen, frame) => {
    // app sets:
    const _messaging = [
        {
            //  Window title // App name
            id: ["Mailbox", "Microsoft Outlook"],
            monitorSettings: {
                3: { screen: 0, position: FULL_SCREEN }
            }
        },
        {
            id: ["", "Slack"],
            monitorSettings: {
                3: { screen: 1, position: FULL_SCREEN }
            }
        },
        {
            id: ["Inbox", "Google Chrome"],
            monitorSettings: {
                3: { screen: 2, position: FULL_SCREEN }
            }
        },
    ];

    const presets = [_messaging];

    const sortedScreens = Screen.all().sort(w => w.flippedVisibleFrame().x);

    // Check each of the configurations. If one is satisfied, then remap the
    // windows to satisfy that preset.

    let wins = (
        Screen.all()
            .map(s => s.windows().map(w => [w.title(), w.app().name(), w]))
            .reduce((acc, val) => acc.concat(val), [])
    );

    presets.map(preset => {
        let matches = {};
        let matchCounter = 0;
        for (let i = 0; i < preset.length; i++) {
            let ms = wins.filter(w => {
                return (
                    w[0].indexOf(preset[i].id[0]) >= 0 &&
                    w[1].indexOf(preset[i].id[1]) >= 0
                )
            });
            if (ms.length) {
                matchCounter++;
                matches[preset[i].id] = ms[0][2];
            }
        }
        if (matchCounter == preset.length) {
            preset.map(mapper => {
                let win = matches[mapper.id];
                monitorSetting = mapper.monitorSettings[sortedScreens.length];
                let frm = sortedScreens[monitorSetting.screen].flippedVisibleFrame();
                setWindowFrame(win, monitorSetting.position, frm);
            })
        }
    });
}));

setWindowFrame = (window, position, frame) => {
    window.setFrame({
        x: frame.x + position.x * frame.width,
        y: frame.y + position.y * frame.height,
        width: position.width * frame.width,
        height: position.height * frame.height
    });
}
