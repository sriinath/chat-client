import * as React from 'react'
import { TextElement } from './styled'
import { TextProps } from './typings'
const Text = (props: TextProps) => {
    const { text } = props
    return (
        props.isHeading ? <TextElement as='h2' {...props}>{text}</TextElement> : <TextElement {...props}>{text}</TextElement>
    )
}
export { Text }