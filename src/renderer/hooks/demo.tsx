import { useEffect, useState } from 'react'

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [])

  return
}

const useUpdate = () => {
  const [, setFlag] = useState(0)
  const update = () => {
    setFlag(Date.now())
  }

  return update
}

export default useUpdate
