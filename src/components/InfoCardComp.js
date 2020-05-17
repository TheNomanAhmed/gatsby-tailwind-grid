import React from "react"

const InfoCardComp = ({
  className,
  borderColor,
  heading,
  text,
  tag,
  ...props
}) => {
  return (
    <div {...props} className={` cursor-pointer p-3 ${className}`}>
      <div
        className={`antialiased w-auto sm:max-w-md  group p-8 hover:shadow-2xl rounded-md transform hover:-translate-y-2 bg-background-muted transition-all ease-linear duration-200 ${borderColor}`}
      >
        {/* <div className="antialiased max-w-md  group p-8 hover:shadow-2xl rounded-md transform hover:-translate-y-3 bg-white transition-all ease-linear duration-300"> */}
        <div className="flex over justify-between">
          <div className="text-xl tracking-wide text-heading font-semibold">
            {heading}
          </div>

          <div class="flex tracking-wide sm:block sm:hidden justify-center group-hover:block  items-center font-medium py-2 px-2 bg-background rounded-full text-primary ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              {tag}
            </div>
          </div>
        </div>
        <div className="mt-8 text-lg text-body">{text}</div>
      </div>
    </div>
  )
}

export default InfoCardComp
