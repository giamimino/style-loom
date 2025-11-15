import { Icon } from '@iconify/react'

export default function IconWrapper({ icon }: { icon: string }) {
  return (
    <div className='w-fit relative p-3 border-2 border-dashed border-dark-15 rounded-full'>
      <div className='p-3 rounded-full bg-dark-10 text-brown-70 text-xl'>
        <Icon icon={icon} />
      </div>
      <span className='h-3 w-px absolute bg-dark-15 top-0 left-1/2 -translate-x-1/2'></span>
      <span className='h-3 w-px absolute bg-dark-15 bottom-0 left-1/2 -translate-x-1/2'></span>
      <span className='w-3 h-px absolute bg-dark-15 left-0  top-1/2 -translate-y-1/2'></span>
      <span className='w-3 h-px absolute bg-dark-15 right-0 top-1/2 -translate-y-1/2'></span>
    </div>
  )
}
