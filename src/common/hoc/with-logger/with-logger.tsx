import { ComponentType, useEffect } from 'react'

type WithLoggerProps = object

/**
 * For more TypeScript syntax check out the cheatsheet:
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/ */

export const withLogger = <T extends WithLoggerProps = WithLoggerProps>(
  WrappedComponent: ComponentType<T>
) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const Component = (props: Omit<T, keyof WithLoggerProps>) => {
    useEffect(() => {
      console.log(`Компонент ${displayName} отрендерен.`)
    }, [])

    return <WrappedComponent {...(props as T)} />
  }

  Component.displayName = `withLogger(${displayName})`

  return Component
}
