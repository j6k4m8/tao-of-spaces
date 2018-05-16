require('./config/_layouts.js');

positionToPreset = () => {

    const sortedScreens = Screen.all().sort(w => w.flippedVisibleFrame().x);

    // Check each of the preset layouts. If one is satisfied, then remap the
    // windows to satisfy that preset.
    let wins = (
        Screen.all()
            .map(s => s.windows().map(w => [w.title(), w.app().name(), w]))
            .reduce((acc, val) => acc.concat(val), [])
    );

    LAYOUTS.map(preset => {
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
