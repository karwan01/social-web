import React from 'react'

interface Props {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
}
function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="group my-2 flex max-w-fit cursor-pointer items-center space-x-1  rounded-full px-3 py-1 transition-all duration-200 hover:bg-slate-100 ">
      <Icon className="h-6 w-6 text-gray-800" />
      <p className="hidden text-base font-light text-gray-700 group-hover:text-specialOrange md:inline lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
