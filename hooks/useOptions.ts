import { useRouter } from 'next/router'
import { isArray } from 'lodash'

export const useOptions = () => {
  const router = useRouter()

  return (options: any) =>
    isArray(options)
      ? options.map((item: any) => ({
          value: item._id,
          label: router.locale === 'ar' ? item.nameAr : item.nameEn,
        }))
      : [{ value: options._id, label: router.locale === 'ar' ? options.nameAr : options.nameEn }]
}

export const useGetSelectValue = (watch: any) => {
  const formatOption = useOptions()

  return (name: string, array: any) => {
    const value = isArray(array)
      ? array.find((item: any) => item.value === watch(name)) ?? null
      : formatOption(watch(name))

    return value
  }
}
