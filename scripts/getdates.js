// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the first paragraph with the current year (for copyright)
const copyrightParagraph = document.querySelector("#copyright");
if (copyrightParagraph) {
    copyrightParagraph.textContent = `© ${currentYear} Your Website Name. All rights reserved.`;
}

// Update the second paragraph with the last modified date
const lastModifiedParagraph = document.querySelector("#last-modified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `This document was last modified on: ${lastModifiedDate}`;
}
