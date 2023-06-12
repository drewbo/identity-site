# Contact Form Outages

This guide is written in a "Choose your own adventure" style to quickly guide you to relevant information, in case of an active outage.

For each outcome, you will need to [sign in to Cloud.gov Pages](https://pages.cloud.gov/) and [modify site settings](https://pages.cloud.gov/sites/85/settings). Configuration can be edited under "Advanced settings" ► "Live site" ► "Site configuration", either at the end of the configuration textarea, or replacing existing configuration values for the relevant setting names.

**Is the contact form currently experiencing an unexpected outage?**

- If **YES**, the contact form is experiencing an unexpected outage:
  - Is the phone line still available for support?
    - If **YES**, use the following configuration:

          contact_unplanned_outage: true
          contact_unplanned_outage_phone_available: true
    - If **NO**, use the following configuration:

          contact_unplanned_outage: true
          contact_unplanned_outage_phone_available: false
- If **NO**, the contact form will be undergoing a planned maintenance in the future:
  - Will the phone line be available during the planned maintenance?
    - If **YES**, use the following configuration and replace start and end times with the relevant [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-formatted date strings:

          contact_maintenance_start_time: 1970-01-01T00:00:00Z
          contact_maintenance_end_time: 1970-01-01T01:00:00Z
          contact_maintenance_phone_available: true
    - If **NO**, use the following configuration and replace start and end times with the relevant [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-formatted date strings:

          contact_maintenance_start_time: 1970-01-01T00:00:00Z
          contact_maintenance_end_time: 1970-01-01T01:00:00Z
          contact_maintenance_phone_available: false