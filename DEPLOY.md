# Deploy Wicked Evolutions Prototypes to VPS

## Task
Deploy the local prototype folder to the VPS and serve it password-protected.

## Server
- Host: `srv1147409.hstgr.cloud`
- SSH: `ssh root@srv1147409.hstgr.cloud`

## Source
`/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/`

Files to deploy (exclude Archive/):
- `we-trinity-fullv4.html`
- `we-blog-proto.html`
- `we-brandbook.html`
- `docs-prototype/` (full directory)
- `team-page-prototype/` (full directory)

## What to do

1. **Rsync files** to `/var/www/proto/` on the server:
   ```
   rsync -avz --delete \
     --exclude='.DS_Store' \
     --exclude='Archive/' \
     --exclude='*.sh' \
     --exclude='pitch.css' \
     --exclude='style.css' \
     "/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/" \
     root@srv1147409.hstgr.cloud:/var/www/proto/
   ```

2. **Nginx config** — serve at `/proto/`, password protect with user `wicked`, add `X-Robots-Tag: noindex`:
   - Install `apache2-utils` if needed, run `htpasswd -bc /etc/nginx/.htpasswd wicked wicked`
   - Create `/etc/nginx/sites-available/proto` with:
     - `location /proto/` block
     - `auth_basic` pointing to `.htpasswd`
     - `add_header X-Robots-Tag "noindex, nofollow"`
     - `autoindex off`
   - Enable site, reload nginx

3. **Confirm** it's live at `https://srv1147409.hstgr.cloud/proto/` with password `wicked`

## Notes
- No noindex meta tags needed in HTML — X-Robots-Tag header is sufficient
- Keep existing nginx config intact, just add the `/proto/` location block
- Use the server's existing SSL cert if available, or just HTTP is fine for prototypes
