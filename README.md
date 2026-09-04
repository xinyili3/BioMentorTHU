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

- Shared section copy and repeated card data: `src/content/siteContent.js`
- Route-page, header, footer, and interface copy: `src/content/pageContent.js`
- Browser-title text: `src/content/metadata.js`
- Mentor profiles and photo paths: `src/content/mentorProfiles.js`
- Mentor photo files: `public/mentors/photos`
- The four top-level views: `src/views`
- Section structure: `src/components`
- Visual styling: `src/styles/main.css`
- Downloadable attachments: `public/downloads`

Files placed in `public/downloads` can be linked with `/downloads/filename.ext`. To force a
browser download, add the `download` attribute to the link.
