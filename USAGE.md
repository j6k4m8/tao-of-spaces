<h3 align=center>layout as a tool</h3>
<h6 align=center><a href="https://github.com/kasper/phoenix">phoenix window manager</a> config files</h6>

<h2 align=center>usage</h2>

<h3 align=center>configurables</h3>

<p align="justify">
<b>Many components of this configuration are user-customizable.</b> I'll refer to <kbd>HYPER</kbd>, which I alias as <kbd>ctrl</kbd><kbd>⌥</kbd>. But this is editable in <code>config/_config.js</code>. The layouts are all fully customizable in <code>config/_layouts.js</code>.
</p>

---

<h3 align=center>keyboard</h3>

| mod | key | description | code |
|-----|-----|-------------|------|
| <kbd>HYPER</kbd> | <kbd>up</kbd> | Maximize current screen |  `setWindowFrame(window, FULL_SCREEN, frame);` |
| <kbd>HYPER</kbd> | <kbd>left</kbd> | Set current screen to left-half | `setWindowFrame(window, LEFT_HALF, frame);` |
| <kbd>HYPER</kbd> | <kbd>right</kbd> | Set current screen to right-half |  `setWindowFrame(window, RIGHT_HALF, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>left</kbd> | Set current screen to fill the left ratio component (e.g. left 2/3) | `setWindowFrame(window, LEFT_RATIO, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>right</kbd> | Set current screen to fill the right ratio complement component (e.g. right 1/3) | `setWindowFrame(window, RIGHT_RATIO, frame);` |
| <kbd>HYPER</kbd> | <kbd>1</kbd> | Starting at the left side, fill to `(1-RATIO)`% |  `setWindowFrame(window, LEFT_ANTIRATIO, frame);` |
| <kbd>HYPER</kbd> | <kbd>2</kbd> | Starting at the left side, fill to 50% |  `setWindowFrame(window, LEFT_HALF, frame);` |
| <kbd>HYPER</kbd> | <kbd>3</kbd> | Starting at the left side, fill to `RATIO`% |  `setWindowFrame(window, LEFT_RATIO, frame);` |
| <kbd>HYPER</kbd> | <kbd>4</kbd> | Starting at the left side, fill to 100% |  `setWindowFrame(window, FULL_SCREEN, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>1</kbd> | Starting at the right side, fill to `RATIO`% |  `setWindowFrame(window, RIGHT_ANTIRATIO, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>2</kbd> | Starting at the right side, fill to 50% |  `setWindowFrame(window, RIGHT_HALF, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>3</kbd> | Starting at the right side, fill to `(1-RATIO)`% |  `setWindowFrame(window, RIGHT_RATIO, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>4</kbd> | Set to `(1-RATIO)`%, centered |  `setWindowFrame(window, CENTER_ANTIRATIO, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>up</kbd> | Ignore width; set height to top half |  `setWindowHalving(window, TOP_HALF, frame);` |
| <kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>down</kbd> | Ignore width; set height to bottom half |  `setWindowHalving(window, BOTTOM_HALF, frame);` |
| <kbd>HYPER</kbd> | <kbd>f4</kbd> | If the windows on the screen comprise a Layout specified in `config/_layouts.js`, set the windows to that layout. |  `positionToPreset();` |
| <kbd>HYPER</kbd> | <kbd>home</kbd> | If the windows on the screen comprise a Layout specified in `config/_layouts.js`, set the windows to that layout. |  `positionToPreset();` |

---

<h3 align=center>tips</h3>

* Use [<kbd>HYPER</kbd> | <kbd>1</kbd>] on one window, and then [<kbd>HYPER</kbd><kbd>⇧</kbd> | <kbd>1</kbd>] on another; the two windows will tile perfectly without overlap. This works for any number 1–3.
* Hold down <kbd>HYPER</kbd><kbd>⇧</kbd> and type the sequence <kbd>←</kbd><kbd>↑</kbd> to quickly set a window to the left 2/3 and top half. (I'll often set another to the bottom half left 2/3, and then set a final window to the right 1/3 full height.)
