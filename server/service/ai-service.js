// import { OpenAI } from 'openai';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export const AIMailService = async (req, res) => {
//   const { role, question, toEmail } = req.body;

//   try {
//     const completion = await openai.chat.completions.create({
//       messages: [
//         { role: 'user', content: `Write a professional email to a ${role}. ${question}` },
//       ],
//       model: 'gpt-3.5-turbo',
//     });

//     const aiMessage = completion.choices[0].message.content;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_APP_PASSWORD, // Gmail App password
//       },
//     });

//     const mailOptions = {
//       from: process.env.MY_EMAIL,
//       to: toEmail,
//       subject: `Message for ${role}`,
//       text: aiMessage,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true, message: 'Email sent successfully', content: aiMessage });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// }