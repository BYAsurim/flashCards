import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { RadioGroup } from '@/components/ui/radioGroup/RadioGroup'
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
  const options = [
    { label: 'hello', value: '1' },
    { label: '2', value: '2' },
  ]

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
        onChange={e => {
          if (typeof e === 'string') {
            fooTextField(e)
          }
        }}
        placeholder={'Input'}
        value={textFieldvalue}
      />
      <RadioGroup options={options} />
    </div>
  )
}
