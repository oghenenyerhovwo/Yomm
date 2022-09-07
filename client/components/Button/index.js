import React from 'react'
import Link from 'next/link'

const Button = props => {
    const {
        href,
        block,
        variant,
        children,
    } = props
  return (
    <Link href={href || "#"}><a className={`btn btn-${variant }  ${block && `flex flex__center btn-block` }`}>{children} </a></Link>
  )
}

export default Button