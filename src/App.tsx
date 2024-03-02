import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button> Hello</Button>
      <Button as={'a'} href={'https://www.google.by/'}>
        link
      </Button>
    </div>
  )
}
