#!/usr/bin/env babel


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

const LAYOUTS = [_messaging, _coding];
