import styled, { css } from 'styled-components'
import { ChatBlockWrapper } from '../../Molecules'
import { ChatListStyleProps } from './typings'

const ChatListWrapper = styled.div`
    ${(props: ChatListStyleProps) => 
        css`
            ${ChatBlockWrapper} {
                padding: 10px;
                ${props.chatListSkipBorder ? '' : css`
                    border: ${props.chatListBorderDimension || '1px'} solid ${props.chatListBorderColor || '#a2a2a2'};
                    ${props.chatListSkipBorderBottom ? 'border-bottom: 0px' : ''};
                    ${props.chatListSkipBorderLeft ? 'border-left: 0px' : ''};
                    ${props.chatListSkipBorderTop ? 'border-top: 0px' : ''};
                    ${props.chatListSkipBorderRight ? 'border-right: 0px' : ''};
                `}
                font-size: ${props.chatListFontSize || '16px'};
                color: ${props.chatListFontColor || '#000'};
                background-color: ${props.chatListBackgroundColor || '#fff'};
            }
        `
    }
`

export { ChatListWrapper }