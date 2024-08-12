import ShineHeadLine from 'modules/molcules/shineHeadline'
import { useForm } from 'react-hook-form'
import { sendEmail } from 'service/main'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import Answar from './Answar'

export default function SendUsMessageModule() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        fullName: yup.string().required('This Field Cannot Be Empty'),
        phoneNumber: yup.string().required('This Field Cannot Be Empty'),
        email: yup.string().required('This Field Cannot Be Empty'),
        subject: yup.string().required('This Field Cannot Be Empty'),
        message: yup.string().required('This Field Cannot Be Empty'),
      }),
    ),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async e => {
    try {
      const res = await sendEmail(e)
      toast.success('Message Sent Successfully')
      return reset()
    } catch (err) {
      console.error(err)
    }
    // Perform any necessary actions with the form data
  }

  return (
    <>
      <div className="container-fluid sendUsMessageModule">
        <div className="sendUsMessageBackground"></div>
        <div>
          <ShineHeadLine text={<span>Send Us Message</span>} />
          <p className="site-p">
            Share your project goals or questions with our team of experts – we're here to listen
            and partner with you on your digital journey.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="container message-content">
          <div className="row">
            <div className="col-md-6">
              <input {...register('fullName')} type="text" placeholder="Full Name" />
            </div>
            <div className="col-md-6">
              <input {...register('phoneNumber')} type="text" placeholder="Phone Number" />
            </div>
            <div className="col-md-6">
              <input {...register('email')} type="text" placeholder="Email Address" />
            </div>
            <div className="col-md-6">
              <input {...register('subject')} type="text" placeholder="Email Subject" />
            </div>
            <div className="col-md-12">
              <textarea
                onChange={e => setValue('message', e.target.value)}
                placeholder="Message"
                name=""
                id=""
              >
                {watch('message')}
              </textarea>
            </div>
            <div className="col-md-12">
              <button id="formBtn" type="submit" className="btn-outline btn-hover btn-main-block">
                {' '}
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <Answar />
    </>
  )
}
