import React from 'react'
import "./style.scss";
import { EyeIcon } from '../Icons/EyeIcon'
import { EyeSlashIcon } from '../Icons/EyeSlashIcon'

export const HideShowPassword = ({showPassword}) => {
  return (
    <>
        {
            !showPassword ? <EyeIcon/> : <EyeSlashIcon/>
        }
    </>
  )
}
