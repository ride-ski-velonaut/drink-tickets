# Drink Tickets backlog

## To do

### Before sharing with friends (beta)
- [ ] **Beta instrumentation.** Record app opens, refusals (a No the user saw), and erases ("Erase all history"). Store locally and include the counts in the backup file. Not shown to the user.
- [ ] **Watch the social pour.** It raises the effective ceiling from 7 to 10 pours and works at zero tickets. Track how often it's used when the balance is at or near zero.
- [ ] **Go/no-go threshold.** Write it down before any data comes in. Draft: at least half of testers still pulling or opening weekly at week 8.
- [ ] **Enrollment question.** Ask each tester before they start: have you used a drink-counting app, and how long did you stick with it?
- [ ] **Backup check-ins.** Testers send a backup file at weeks 2, 4, and 8.
- [ ] **Custom domain decision.** Decide before sending the link. Switching later strands everyone's history at the old address.
- [ ] **21+ confirmation screen** and a short privacy statement (nothing leaves the phone).

## Ground rules
- **Changes never rewrite saved history.** Any change that alters how existing entries count, display or return gets flagged for a decision before it's built.
- The storage name `drink-tickets-v1` never changes. Old drink keys stay in the code so old entries still read.

## Done
- 2026-10-29: Sample banner, drink picker, and messages now hide properly.
- 2026-10-29: `sw.js` always checks GitHub for fresh files.
- 2026-10-29: Over-allowance wording: "You're 1¾ pours over. You're back within your allowance Thu, Nov 5 11:12 AM."
- 2026-10-30: App opens instantly from the phone's saved copy on any signal (found in a basement bar on day one). Updates now appear on the second launch after publishing. Fonts no longer block the screen from drawing.
- 2026-11-20 (v4): Pull button opens a price list by size (1, 1¼, 1½, 1¾) with examples. Social pour button: no ticket, 3 per week, logged in the ledger. Tickets return at 5 PM; 4 AM day boundary. Tap "Next return" for the week's return schedule. Restore now keeps each entry's saved amount. Version label in the footer.

## Decisions so far
- **Pour** = one 12 oz beer at 5.5% ABV (0.66 oz ethanol, 1.95 UK units). Other drinks are fractions of a pour, rounded to quarters.
- **Price list, not drink list.** Tiers of 1, 1¼, 1½, 1¾ pours, each with examples.
- **Social pour.** Costs no ticket, limit 3 in any 7 days, available even at zero tickets. Logged like any other pour.
- **Default allowance** = 7 pours per week, about 14 UK units. User can change it.
- **Rolling window.** Each pour returns at 5 PM on the same weekday the following week. Pulls between midnight and 4 AM count as the previous day. Applies to all loans, including ones taken before v4.
- **Governor only.** No deficit or borrowing. A No is a No; the user can raise the allowance.
- **Late entries always accepted,** even past the limit, so the record stays honest.
- **Web app (PWA) on GitHub Pages,** plain HTML and JavaScript, no build tools. Native iOS app only if the thesis holds.
- **First thesis:** an allowance-based, low-friction, no-judgment system gets higher and longer engagement than drink counting.
