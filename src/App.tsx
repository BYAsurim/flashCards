import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'

export function App() {
  const [value, setValue] = useState(false)
  const foo = () => {
    setValue(!value)
  }

  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
      <Button> Hello</Button>
      <Button as={'a'} href={'https://www.google.by/'}>
        link
      </Button>
      <Checkbox checked={value} label={'Check-box'} onChange={foo} />
    </div>
  )
}
