export default function handler(req: any, res: any) {
  // Check if the request is a POST request
  if (req.method === "POST") {
    // Compare the sent password with your environment variable
    if (req.body.password === process.env.SECURE_PASSWORD) {
      // Respond with a success message if the passwords match
      res.status(200).json({ success: true });
    } else {
      // Respond with an error message if the passwords do not match
      res.status(401).json({ success: false });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
