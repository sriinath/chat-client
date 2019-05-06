import * as React from 'react'
import { Ref } from 'react'
import { IconBackground } from '../../atoms'
import {
    UserMessageWrapper,
    BackIcon,
    StyledText
} from './styled'

const UserMessageHeader = React.forwardRef((props: { name: string }, ref: Ref<HTMLDivElement>) => {
    const { name, ...remainingProps } = props
    return (
        <UserMessageWrapper ref={ref} {...remainingProps}>
            <IconBackground
                isFixed={false}
                isRectangular={false}
            >
                <BackIcon />
            </IconBackground>
            <StyledText isHeading={true} text={name || 'Anonymous'} />
        </UserMessageWrapper>
    )
})

export { UserMessageHeader }