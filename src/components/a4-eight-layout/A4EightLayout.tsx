import { Children, ReactElement } from 'react'
import './A4EightLayout.css'

type A4EightLayoutProps = {
  children: ReactElement[]
}

export function A4EightLayout({ children }: A4EightLayoutProps) {
  const childrenArray = Children.toArray(children)
  const numSheets = Math.ceil(childrenArray.length / 8)
  return (
    <>
      {Array.from({ length: numSheets }, (_, sheetIndex) => (
        <div className="sheet">
          {
            childrenArray.slice(sheetIndex * 8, (sheetIndex + 1) * 8).map((child, blockIndex) => (
              <div className="block" key={blockIndex}>{child}</div>
            ))
          }
        </div>
      )
      )}
    </>
  )
}