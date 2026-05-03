window.APP_PAGE_DATA = {
  screencue: {
    name: "ScreenCue",
    shortName: "ScreenCue",
    tagline: "Private screenshot inbox",
    contactEmail: "ws.software@outlook.com",
    lastUpdated: "May 3, 2026",
    support: {
      title: "ScreenCue Support",
      headline: "Help for turning selected screenshots into next actions.",
      intro: "ScreenCue is an early iOS beta for turning selected screenshots into review cards, Reminders, copied text, links, or archived decisions.",
      sections: [
        {
          heading: "Getting Started",
          items: [
            "Tap Import and select one or more screenshots from Photos.",
            "Open each card and review the extracted text, links, dates, and suggested type.",
            "Create a Reminder, copy useful text, open a detected link, or archive the card.",
            "Use the share sheet from Photos to send a screenshot to ScreenCue after the signed App Group beta is available."
          ]
        },
        {
          heading: "Privacy",
          body: "ScreenCue does not require an account in this beta. Screenshots are imported only when you select or share them. OCR runs on device with Apple Vision. Screenshots, extracted text, and local beta metrics stay on your device unless you choose to copy text, create a Reminder, or voluntarily share feedback."
        },
        {
          heading: "Common Issues",
          subsections: [
            {
              heading: "A shared screenshot does not appear",
              body: "Return to ScreenCue and pull to refresh. If it still does not appear, try the Import button so support can separate share-sheet behavior from OCR behavior."
            },
            {
              heading: "OCR text is wrong",
              body: "OCR can struggle with small text, low contrast, mixed languages, compressed images, or cropped screenshots. Feedback can describe the screenshot category without sending the private screenshot."
            },
            {
              heading: "Reminder creation failed",
              body: "Reminder creation requires Reminders permission. Open iOS Settings, find ScreenCue, confirm Reminders access, and retry."
            }
          ]
        },
        {
          heading: "What To Include In Support Requests",
          items: [
            "iPhone model and iOS version.",
            "The flow you tried: Import, share sheet, Reminder, copy, archive, or Beta Metrics.",
            "Screenshot category, not the private screenshot itself, unless you intentionally choose to share an example.",
            "Beta Metrics summary if requested."
          ]
        }
      ]
    },
    privacy: {
      title: "ScreenCue Privacy Policy",
      headline: "Local-first screenshot review.",
      intro: "ScreenCue is designed as a local-first screenshot review inbox.",
      sections: [
        {
          heading: "Data Collection",
          body: "ScreenCue does not collect personal data, track users, or send screenshot content to a server in the current beta."
        },
        {
          heading: "Screenshots and OCR",
          body: "ScreenCue imports only screenshots you select through the photo picker or share sheet. Text extraction runs on device with Apple Vision. Imported screenshots, thumbnails, extracted text, and review cards are stored locally on your device."
        },
        {
          heading: "Reminders",
          body: "ScreenCue asks for Reminders access only when you choose to create a Reminder. Reminder title, notes, and due date are created through Apple's Reminders framework on your device."
        },
        {
          heading: "Beta Metrics",
          body: "ScreenCue stores local beta event counts on your device, such as imports, OCR results, review opens, route actions, archive actions, and metrics exports. The Beta Metrics export is plain text with aggregate counts and event names. It does not include screenshot image data or extracted private text."
        },
        {
          heading: "Network and Accounts",
          body: "The current beta does not include a ScreenCue account, cloud sync, server OCR, advertising SDK, third-party analytics SDK, payment SDK, or crash reporting SDK."
        },
        {
          heading: "Support",
          body: "Support may ask for device model, iOS version, the flow you tried, screenshot category, and Beta Metrics summary. Do not send private screenshots or extracted private text unless you intentionally choose to share a specific example for debugging."
        },
        {
          heading: "Changes",
          body: "If ScreenCue later adds account sync, server processing, analytics, crash reporting, payments, or support uploads, this policy and the App Store privacy answers must be updated before external testing or release."
        }
      ]
    }
  }
};
