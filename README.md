
# Nickel Rod System — GitHub Pages Site

This is a static website ready for GitHub Pages and a custom domain via Cloudflare.

## Deploy (Free)
1. Create a GitHub repo named **nickelrodsys.github.io**.
2. Upload all files in this ZIP to the repo (root, not a subfolder).
3. Wait ~1 minute. Your site will be live at **https://nickelrodsys.github.io**.

## Set Custom Domain (nickelrodsys.com) via Cloudflare
1. In the GitHub repo → **Settings → Pages**:
   - Set **Custom domain** to `nickelrodsys.com`
   - Check **Enforce HTTPS** (if visible).
   - GitHub will create **CNAME** file automatically.
2. In **Cloudflare DNS** for your zone:
   - **Apex (@)**: Create a **CNAME** record pointing to `nickelrodsys.github.io`.
     - In Cloudflare this uses **CNAME flattening** (works at root).
     - Proxy status: **DNS only** (grey cloud) until HTTPS works, then you can enable proxy if you like.
   - **WWW**: Create a **CNAME** record for `www` → `nickelrodsys.github.io` (proxied or DNS-only is fine).
3. Back in GitHub Pages, ensure the custom domain shows as **nickelrodsys.com** and **HTTPS** is active.

## Update Contact Details
- Edit `/assets/js/main.js` and `/contact.html` to add your WhatsApp and phone.
- Replace these placeholders:
  - `whatsapp_link` in the navbar and buttons → set to `https://wa.me/<yourcountrycode><number>`
  - `tel:` phone number in `contact.html`
  - `address_text` and `email` if needed.

## Replace Gallery Images
Images currently load from Unsplash Source by keyword (free). You can replace with your own files in `/assets/img` and update the `<img>` `src` paths.

## Optional Contact Form
The form uses Formspree. Create a Formspree project and replace the `action` URL in `contact.html` to receive emails.

## Development
No build step required. Pure HTML/CSS/JS.
