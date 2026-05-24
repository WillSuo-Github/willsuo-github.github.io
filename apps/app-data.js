window.APP_PAGE_DATA = {
  dropsort: {
    name: "DropSort",
    shortName: "DropSort",
    tagline: "Preview-first Downloads cleanup without Hazel complexity",
    contactEmail: "ws.software@outlook.com",
    lastUpdated: "May 24, 2026",
    support: {
      title: "DropSort Support",
      headline: "Help for the DropSort preview and early beta list.",
      intro: "DropSort is a planned macOS utility for people whose Downloads folder and working folders turn into repetitive cleanup. The current public page is a pre-beta interest page, not a shipped Mac build, and the first build is now being tested as a preview-first, non-image-first utility.",
      sections: [
        {
          heading: "What DropSort Is Trying To Do",
          items: [
            "Watch the Downloads folder or another selected working folder.",
            "Apply a small set of starter rules so common file types go where you expect.",
            "Show a preview before moving files so the app feels safer than blind automation.",
            "Let you undo the latest sort run instead of forcing you to repair a mistake manually."
          ]
        },
        {
          heading: "Current Status",
          body: "DropSort is in pre-beta planning. There is no public Mac download yet. The current support page exists so early interested users and App Store review later have a stable contact and product description."
        },
        {
          heading: "How To Join The Early List",
          body: "Email ws.software@outlook.com with the subject line 'DropSort beta'. If useful, include how often your Downloads folder gets messy, whether you already use Hazel or scripts, whether preview-first is a hard requirement, whether a first version that starts with PDFs / ZIPs / installers / docs / exports would still be useful, and whether a one-time $9.99 utility would feel reasonable."
        },
        {
          heading: "Public Feedback Backup",
          body: "If you prefer a public thread over email, use one of the structured GitHub issue forms below.",
          links: [
            {
              label: "Open beta-interest issue",
              href: "https://github.com/WillSuo-Github/willsuo-github.github.io/issues/new?template=dropsort-beta-interest.yml"
            },
            {
              label: "Open non-image-v1 issue",
              href: "https://github.com/WillSuo-Github/willsuo-github.github.io/issues/new?template=dropsort-non-image-v1.yml"
            },
            {
              label: "Open pricing-reaction issue",
              href: "https://github.com/WillSuo-Github/willsuo-github.github.io/issues/new?template=dropsort-pricing-reaction.yml"
            }
          ]
        },
        {
          heading: "What To Include In Early Feedback",
          items: [
            "Your most common Downloads clutter, such as PDFs, ZIP files, installers, exports, stray documents, or images.",
            "Whether you want fully automatic sorting or prefer a preview-first workflow.",
            "Whether a first version that ignores images is still useful, or whether image handling is a hard requirement before you would try it.",
            "What made past file-automation tools feel too complex, too risky, or not worth setting up."
          ]
        }
      ]
    },
    privacy: {
      title: "DropSort Privacy Policy",
      headline: "Local-first file organization, with no account in the planned MVP.",
      intro: "This policy describes the intended privacy posture for DropSort's planned first Mac build and the current pre-beta interest page.",
      sections: [
        {
          heading: "Current Public Page",
          body: "The current public page is a static GitHub Pages site. If you choose to email support or request beta access, the email content goes through your own email provider and the support mailbox. The page itself does not create a DropSort account for you."
        },
        {
          heading: "Planned MVP Data Handling",
          body: "The planned first Mac build is intended to watch only folders you explicitly choose, apply local rules, preview proposed moves, and store recent sort history locally so undo is possible. The product is being designed as a local-first utility without a required DropSort account."
        },
        {
          heading: "Files And Metadata",
          body: "In the planned MVP, file names, paths, timestamps, and rule results would be used locally on device to decide where files should move. The company should update this policy before release if the implementation adds cloud sync, remote processing, analytics, crash reporting, or any third-party SDK."
        },
        {
          heading: "Network And Third Parties",
          body: "No DropSort backend, payment SDK, analytics SDK, advertising SDK, or cloud sync service is currently implemented in this repository state. If that changes, the policy and App Store privacy answers must be updated before external release."
        },
        {
          heading: "Support",
          body: "Support may ask for your macOS version, the folder types you want to organize, and a description of the workflow you want. Do not send private files unless you intentionally choose to share a specific example for debugging after a beta exists."
        }
      ]
    }
  },
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
