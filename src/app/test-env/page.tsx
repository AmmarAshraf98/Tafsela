export default function TestEnv() {
  return (
    <pre>
      {JSON.stringify(
        {
          googleId: process.env.AUTH_GOOGLE_ID,
          googleSecret: process.env.AUTH_GOOGLE_SECRET,
        },
        null,
        2
      )}
    </pre>
  );
}
