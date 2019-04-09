import * as React from 'react'
import { useState } from 'react'
import { InputBox } from './styled'
import { InputProps } from './typings'

const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    return e.currentTarget.value 
}

const Input = (props: InputProps) => {
    const {
        placeholder,
        value
    } = props
    const [ curValue, setValue ] = useState(value || '')

    return (
        <InputBox
            placeholder={placeholder}
            value={curValue}
            onChange={e => setValue(onInput(e))}
        />
    )
}

export { Input }