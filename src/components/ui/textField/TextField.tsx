import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import eyeImgOpen from '@/assets/icons/eye-outline.svg'
import searchImg from '@/assets/icons/search.svg'

import s from './TextField.module.scss'

type Props = {
  errorMessage?: string
  inputType?: 'password' | 'search' | 'text'
  label?: string
  onChange: (value: string) => void
  value?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = ({
  className,
  disabled,
  errorMessage,
  inputType,
  label,
  onChange,
  placeholder,
  value,
}: Props) => {
  const [showPasword, setShowPasword] = useState(false)
  const inputPassword = inputType === 'password'
  const inputSearch = inputType === 'search'
  const classNames = {
    input: `${s.input} ${errorMessage ? s.error : ''} ${
      inputSearch ? s.hasSearch : ''
    } ${className}`,
    span: `${errorMessage ? s.errorText : ''} ${className}`,
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value

    onChange(newValue)
  }
  const showPaswordHandler = () => setShowPasword(!showPasword)
  const getInputType = (type: Props['type'], showPassword: boolean) => {
    if (type === 'password' && showPassword) {
      return 'text'
    }

    return type
  }
  const currentInputType = getInputType(inputType, showPasword)

  return (
    <div className={s.container}>
      {label && !inputSearch && <span className={s.label}>{label}</span>}
      <div className={s.InputContainer}>
        {inputSearch && <img alt={'img'} className={s.buttonSearch} src={searchImg} />}
        <input
          autoFocus
          className={classNames.input}
          disabled={disabled}
          onChange={onChangeHandler}
          placeholder={placeholder}
          type={currentInputType}
          value={value}
        />
        {inputPassword && (
          <button className={s.buttonEye} onClick={showPaswordHandler}>
            <img alt={'img'} className={s.showPassword} src={eyeImgOpen} />
          </button>
        )}
      </div>
      {errorMessage && <span className={classNames.span}>{errorMessage}</span>}
    </div>
  )
}
