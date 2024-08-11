import instance from 'service'
export const sendEmail = (data: any) => {
  return instance.post('/sendEmail', data)
}
