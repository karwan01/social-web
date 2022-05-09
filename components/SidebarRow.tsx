import React from 'react'

interface Props {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
}
function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-1 rounded-full  py-3 transition-all duration-200 hover:bg-slate-100 ">
      <Icon className="h-6 w-6 text-gray-800" />
      <p className="text-gray-700 group-hover:text-specialOrange">{title}</p>
    </div>
  )
}

export default SidebarRow
