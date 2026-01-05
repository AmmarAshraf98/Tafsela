// export function convertDriveLink(link: string): string {
//   const match = link.match(/\/d\/(.*?)\//);
//   if (match && match[1]) {
//     return `https://drive.google.com/uc?export=view&id=${match[1]}`;
//   }
//   return link;
// }

/**
 * Convert any Google Drive link to a public "view" link.
 * Works with:
 *  - /file/d/FILE_ID/view
 *  - /open?id=FILE_ID
 *  - /uc?export=view&id=FILE_ID
 */
export function convertDriveLink(link: string): string {
  if (!link) return link;

  // case 1: /d/FILE_ID/
  let match = link.match(/\/d\/([^/]+)/);

  // case 2: ?id=FILE_ID
  if (!match) {
    match = link.match(/[?&]id=([^&]+)/);
  }

  // return a public view link
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[1]}`
    : link;
}
