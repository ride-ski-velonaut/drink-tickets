# Drink Tickets backlog

## To do

### Before sharing with friends (beta)
- [ ] **Beta instrumentation.** Record app opens, refusals (a No the user saw), and erases ("Erase all history"). Store locally and include the counts in the backup file. Not shown to the user.
- [ ] **Go/no-go threshold.** Write it down before any data comes in. Draft: at least half of testers still pulling or opening weekly at week 8.
- [ ] **Enrollment question.** Ask each tester before they start: have you used a drink-counting app, and how long did you stick with it?
- [ ] **Backup check-ins.** Testers send a backup file at weeks 2, 4, and 8.
- [ ] **Custom domain decision.** Decide before sending the link. Switching later strands everyone's history at the old address.
- [ ] **21+ confirmation screen** and a short privacy statement (nothing leaves the phone).

### Only if it shows up in real use
- [ ] **Slow-signal launch.** On a weak connection the app can hang on a blank screen before falling back to the offline copy. Fix: a timeout of a few seconds in `sw.js`.

## Done
- 2026-10-29: Sample banner, drink picker, and messages now hide properly.
- 2026-10-29: `sw.js` always checks GitHub for fresh files.
- 2026-10-29: Over-allowance wording: "You're 1¾ pours over. You're back within your allowance Thu, Nov 5 11:12 AM."

## Decisions so far
- **Pour** = one 12 oz beer at 5.5% ABV (0.66 oz ethanol, 1.95 UK units). Other drinks are fractions of a pour, rounded to quarters.
- **Default allowance** = 7 pours per week, about 14 UK units. User can change it.
- **Rolling window.** Each pour returns 7 calendar days later at the same clock time, DST included.
- **Governor only.** No deficit or borrowing. A No is a No; the user can raise the allowance.
- **Late entries always accepted,** even past the limit, so the record stays honest.
- **Web app (PWA) on GitHub Pages,** plain HTML and JavaScript, no build tools. Native iOS app only if the thesis holds.
- **First thesis:** an allowance-based, low-friction, no-judgment system gets higher and longer engagement than drink counting.
