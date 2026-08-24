# Tsinghua BioMentoring Program

Static Vue website for the Tsinghua BioMentoring Program. It does not require a backend.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Deploy the generated `dist` directory to any static hosting service.

## Updating the site

- Page copy and repeated card data: `src/content/siteContent.js`
- The four top-level views: `src/views`
- Section structure: `src/components`
- Visual styling: `src/styles/main.css`
- Downloadable attachments: `public/downloads`

Files placed in `public/downloads` can be linked with `/downloads/filename.ext`. To force a
browser download, add the `download` attribute to the link.
