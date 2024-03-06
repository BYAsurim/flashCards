import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { TextField } from '@/components/ui/textField/TextField'

export function App() {
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [textFieldvalue, setTextFieldvalue] = useState('')
  const fooCheckbox = () => {
    setCheckboxValue(!checkboxValue)
  }
  const fooTextField = (value: string) => {
    setTextFieldvalue(value)
  }

  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
      <Button> Hello</Button>
      <Button as={'a'} href={'https://www.google.by/'}>
        link
      </Button>
      <Checkbox checked={checkboxValue} label={'Check-box'} onChange={fooCheckbox} />
      <TextField
        errorMessage={''}
        inputType={'password'}
        label={'Input'}
        onChange={fooTextField}
        placeholder={'Input'}
        value={textFieldvalue}
      />
    </div>
  )
}
