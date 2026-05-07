# KeepDue no-account setup: does it sync with iCloud?

KeepDue's current launch build is a no-account, manual-first iPhone app for trial and subscription reminders.

That choice is intentional. The first job is to help you record the renewal or cancellation date before you forget it, without asking for a bank login or a new account.

## What no-account means today

In the current public version:

1. You add subscriptions and trials manually.
2. You get local reminders before renewal or trial dates.
3. You do not need to create a KeepDue account.
4. You do not need to connect a bank account.
5. The current launch build is free for up to 5 active subscriptions on one device.

This keeps setup simple and reduces trust friction. You can use KeepDue for the few dates that matter most without turning it into a full finance app.

## Does KeepDue sync with iCloud?

Not in the current launch build.

KeepDue 1.0 is focused on one-device, reminder-first tracking. It does not promise iCloud sync, cross-device sync, automatic imports, bank detection, or subscription cancellation.

That does not mean sync is ignored. It means sync should be added only if real users repeatedly need it enough to justify the added complexity.

## Why not add sync immediately?

Sync can be useful, especially if you use both an iPhone and an iPad.

But sync is not free operationally. It introduces questions like:

- What happens when the same subscription is edited on two devices?
- How should late-arriving data be merged?
- What should happen if a reminder exists on one device but not another?
- How can the app keep the no-account trust benefit while adding cross-device behavior?

For a launch build, KeepDue is staying narrow: record the date, see what is due next, and get reminded before the charge.

## When sync would become a priority

Sync becomes more important if the same request appears repeatedly through:

- support email
- App Store reviews
- public comments
- retained users who keep adding subscriptions
- users who hit the 5-active-subscription limit and ask for more serious tracking

If that evidence appears, an Apple-native path such as iCloud or CloudKit would fit KeepDue better than a separate account system.

## What to do today

Use KeepDue for high-risk dates first:

1. Free trials that ask for payment information.
2. Annual plans with a large renewal.
3. Services that are hard to cancel.
4. Subscriptions you rarely open.
5. Renewal dates you just found in an email, receipt, or account page.

If you need a backup across devices today, keep a second reminder in Apple's built-in Reminders or Calendar app for the highest-risk dates.

[Download KeepDue on the App Store](https://apps.apple.com/us/app/keepdue/id6763344674)

## FAQ

### Does KeepDue require an account?

No. The current public build does not require a KeepDue account for the core tracking flow.

### Does KeepDue link to my bank?

No. KeepDue is manual-first. You enter the trial or renewal date yourself.

### Does KeepDue cancel subscriptions automatically?

No. KeepDue helps you remember the date and where to act. It does not cancel subscriptions for you.

### Will KeepDue add iCloud sync?

Only if enough real usage or repeated feedback shows that sync is more important than keeping the launch build simple. If sync moves up, an Apple-native approach would be the natural first option.
