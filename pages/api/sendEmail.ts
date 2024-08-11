import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'seessees413@gmail.com',
    pass: 'T2FIJLkqKvHsaDBc',
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { fullName, phoneNumber, email, subject, message } = req.body
  const messageOptions = `<p>From: ${fullName}</p><p>Phone Number: ${phoneNumber}</p><p>Email : ${email}</p><p>Subject : ${subject}</p></p><p>${message}</p>`
  const mailSent = await transporter.sendMail({
    from: '"Message From SEES"<test@gmail.com>', // sender address
    to: 'M.elkobtan@solidedgesolutions.net', // list of receivers
    subject: `Message from ${fullName}`, // Subject line
    text: JSON.stringify(message), // plain text body
    html: messageOptions, // html body
  })
  return res.status(200).json({ message: 'Email Sent !' })
}
