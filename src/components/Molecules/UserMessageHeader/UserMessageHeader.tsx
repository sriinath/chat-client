import * as React from 'react'
import { IconBackground } from '../../atoms'
import {
    UserMessageWrapper,
    BackIcon,
    StyledText
} from './styled'

const UserMessageHeader = (props: { name: string, forwardedRef: React.Ref<HTMLDivElement>, backClickHandler: any }) => {
    const { name, forwardedRef, backClickHandler, ...remainingProps } = props
    return <UserMessageWrapper ref={forwardedRef} {...remainingProps}>
            <IconBackground
                isFixed={false}
                isRectangular={false}
            >
                <BackIcon onClick={backClickHandler} />
            </IconBackground>
            <StyledText isHeading={true} text={name || 'Anonymous'} />
        </UserMessageWrapper>
}

export { UserMessageHeader }