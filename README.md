# Autobooks

Autobooks is a streamlined Next.js application designed to capture, validate, and route contact form submissions. Instead of dumping raw messages into an inbox, Autobooks provides structured data handling to ensure leads are validated and sent to the correct destination (Email, Airtable, and N8N).

## 🚀 What It Does

* **Smart Forms:** Renders a clean contact form (capturing Name, Email, and Message).
* **Double Validation:** Performs data integrity checks in the browser (frontend) and reinforces them on the server (backend).
* **Structured Routing:** Sends submissions to a dedicated backend endpoint (`/api/contact`).
* **Flexible Integration:** Forwards data from the backend to your destination of choice (Email, Airtable, & N8n).
* **User Feedback:** Returns immediate success or error states to the UI to keep the user informed.

---

## 🔄 Data Flow

Autobooks acts as a secure bridge between your users and your data tools.



### The Lifecycle of a Lead
1.  **User → Browser (Frontend):** The user fills out the form and clicks "Submit". The frontend runs basic validation (required fields, email format).
2.  **Browser → API Route (Backend):** The form sends a `POST` request to `/api/contact`.
3.  **API Route → Destination Service:**
    * The backend parses and validates the request body.
    * It constructs a structured lead object:
        ```json
        {
          "name": "User Name",
          "email": "user@example.com",
          "message": "I would like to inquire about...",
        }
        ```
    * This object is dispatched to your configured destination (Email API, Database, or Webhook).
4.  **Destination Service → You:** You receive the notification or the data is stored in your CRM. Automation sequences (tagging, follow-ups) can be triggered here.
5.  **API Route → Browser:** The API responds with JSON (`{ success: true }` or error details), and the UI updates to show the result.

### Visualization

```text{
[User]
  ↓ fills form
[Browser / Form]
  ↓ POST /api/contact
[Backend API]
  ↓ send payload
[Email/DB/Automation]
  ↓ notification/storage
[You]}
```
## Demo & Walkthrough
Vercel deployment: auto-books.vercel.app
