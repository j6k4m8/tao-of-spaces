#!/usr/bin/env babel

const HYPER = ['ctrl', 'alt'];
const HYPER_SHIFT = [...HYPER, 'shift'];

const RATIO = 2/3;
const IOTA = 0.042;

const FULL_SCREEN = { x: 0, y: 0, width: 1, height: 1 };
const LEFT_HALF =   { x: 0, y: 0, width: 0.5, height: 1 };
const RIGHT_HALF =  { x: 0.5, y: 0, width: 0.5, height: 1 };

const LEFT_RATIO =  { x: 0, y: 0, width: RATIO, height: 1 };
const RIGHT_RATIO = { x: RATIO, y: 0, width: 1-RATIO, height: 1 };

const LEFT_ANTIRATIO =  { x: 0, y: 0, width: 1-RATIO, height: 1 };
const RIGHT_ANTIRATIO = { x: 1-RATIO, y: 0, width: RATIO, height: 1 };
const CENTER_ANTIRATIO = { x: 1-(RATIO), y: 0, width: 1-RATIO, height: 1 };

const TOP_HALF = 'top-half';
const BOTTOM_HALF = 'bottom-half';


function centerWindow(win) {
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
}

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


positionToPreset = () => {
    // app sets:
    const _messaging = [
        {
            //  Window title // App name
            id: ["Mailbox", "Microsoft Outlook"],
            monitorSettings: {
                1: { screen: 0, position: LEFT_HALF },
                3: { screen: 0, position: FULL_SCREEN },
            }
        },
        {
            id: ["", "Slack"],
            monitorSettings: {
                1: { screen: 0, position: RIGHT_HALF, halving: TOP_HALF },
                3: { screen: 1, position: FULL_SCREEN },
            }
        },
        {
            id: ["Inbox", "Google Chrome"],
            monitorSettings: {
                1: { screen: 0, position: RIGHT_HALF, halving: BOTTOM_HALF },
                3: { screen: 2, position: FULL_SCREEN },
            }
        },
    ];
    const _coding = [
        {
            //  Window title // App name
            id: ["", "Google Chrome"],
            monitorSettings: {
                1: { screen: 0, position: { x: IOTA, y: 0, width: RATIO - IOTA, height: 1 }},
                3: { screen: 0, position: FULL_SCREEN },
            }
        },
        {
            id: ["", "Code"],
            monitorSettings: {
                1: { screen: 0, position: { x: 0, y: 0, width: RATIO - IOTA, height: 1 }},
                3: { screen: 2, position: FULL_SCREEN },
            }
        },
        {
            id: ["", "iTerm"],
            monitorSettings: {
                1: { screen: 0, position: RIGHT_RATIO },
                3: { screen: 1, position: FULL_SCREEN },
            }
        },
    ];

    const presets = [_messaging, _coding];

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
                if (monitorSetting.halving) {
                    setWindowHalving(win, monitorSetting.halving, frm)
                }
            })
        }
    });
};
