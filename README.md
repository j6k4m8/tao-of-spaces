<h3 align=center>layout as a tool</h3>
<h6 align=center><a href="https://github.com/kasper/phoenix">phoenix window manager</a> config files</h6>

<p align="center"><b>
This window management is in the style of <i>Mise en place</i>.<br />
Each window has a place and function. </b>  This style improves<br />
efficacy and mental compartmentalization. It follows three rules:<br /><br />
<h6 align=center>a project inhabits its own space</h6>
<h6 align=center>tools are visible and unobscured</h6>
<h6 align=center>usefulness comes before all else</h6>
</p>
<br />

<p align="justify">
<b>A project inhabits its own space.</b> This enables you to put away the tools that you are not using and focus on the task at hand. Messaging others — through email, slack, text-message, IRC, or other service — lives in its own space. Entertainment — Netflix, Spotify, iTunes — lives in its own space. A project may involve many windows. These must all live within the same space. If there are too many windows to fit within the constraints of your displays, then meditate on the work and find a more atomic division of tasks.
</p>

<br />

<p align="justify">
<b>Tools are visible and unobscured.</b> Maximize every window to the largest possible size given your screen constraints. If a task's windows can be spread across multiple monitors, do so. But do not violate Rule 1. When working on a single project, you should not have to rearrange windows at all. Aim to make all windows fully visible and unobscured at all times. If it is impossible to view all required windows and tools at the same time, overlay the windows so they are easily accessible. At no point should a window be fully obscured.
</p>

<br />

<p align="justify">
<b>Usefulness comes before all else.</b> Hold Rules 1 and 2 as a goal. But reject these rules at any point if they should draw attention to window management and away from your task. Used properly, this set of paradigms should enable you to ignore the cost of window organization and screen management.
</p>

---

<h3 align=center>the tool</h3>

I use [Phoenix](https://github.com/kasper/phoenix) to automate much of my window-switching overhead:

| Pain-Point | Solution |
|------------|----------|
| Detaching and reattaching external monitors 'forgets' the window positions I set prior to detaching. | Because I follow the rules set above, windows on a given space are consistent and I know their names and where I want them. My config file includes pre-set layouts which I can trigger either automatically upon monitor reattachment, or via key command. |
| There is no built-in way to snap Mac windows to common areas, like left/right halves. | My config includes common "snap" areas, like left and right halves, thirds (configurable to any ratio), and finally, vertical halves. |
| Using the mouse to position windows is slow and requires mental context-switching | My config is fully keyboard-based. This takes more acclimation, in exchange for low-thought low-cost window management. |

---

<h3 align=center>my spaces</h3>

| Entertainment | Communication | To-Do Mgmt | Scheduling | Miscellaneous | Projects → |
|---------------|---------------|------------|------------|---------------|--------------|
| <li>Spotify</li><li>Twitter</li> | <li>Slack</li><li>Outlook Inbox</li><li>Google Inbox</li> | <li>Todoist</li><li>Projector</li> | <li>Google Calendar</li><li>Outlook Calendar</li>  |

* In the Miscellaneous space goes any window that I either haven't time to categorize, or aren't sure how to categorize. It takes extra mental energy to task-switch on this space, and I often devote some time to distributing these windows as needed.
* Each project gets its own window; often software development projects will have `Chrome`, `VS Code`, and `iTerm2` each on their own dedicated monitor.
* My monitors are not fully utilized on pages such as "To-Do".

---

<h3 align=center>configuration & shortcuts</h3>

See [Usage](USAGE.md) for details.


