import * as React from 'react'
import * as moment from 'moment'
import { StyledText } from './styled'

const ChatDate = (date: Date) => {
    let localDateString = date.toLocaleDateString()
    const curDate = new Date()
    if(localDateString === curDate.toLocaleDateString()) {
        localDateString = moment().format('hh:mm a')
    }
    else if(date.getFullYear() === curDate.getFullYear()) {
        localDateString = localDateString.replace(`/${date.getFullYear()}`, '')
    }
    return localDateString ? <StyledText isHeading={false} isTitle={false} text={localDateString} /> : null
}

export { ChatDate }