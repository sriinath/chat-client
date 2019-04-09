import * as React from 'react'
import { IconBackgroundProps } from './typings'
import { BackgroundElement } from './Styled'

const IconBackground: React.SFC<IconBackgroundProps> = (props) => {
    return <BackgroundElement {...props} />
}
IconBackground.defaultProps = {
    width: '60px',
    height: '60px',
    isRectangular: false,
    bottom: '20px',
    right: '20px'
}

export { IconBackground }