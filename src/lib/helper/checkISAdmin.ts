const allowedEmails = [
  "ammarashraf230@gmail.com",
  "tafsela0@gmail.com",
  "Esesraa908@gmail.com",
];

export function checkAdmin(email: string): boolean {
  return allowedEmails.includes(email);
}
