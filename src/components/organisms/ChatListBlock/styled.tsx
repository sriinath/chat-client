import styled, { css } from 'styled-components'
import { ChatBlockWrapper } from '../../Molecules'
import { ChatListStyleProps } from './typings'

const ChatListWrapper = styled.div`
    width: 100%;
    overflow: auto;
    /* position: relative; */
    /* padding: 0px; */
    padding-right: 5px;
    color: #757373;
    box-sizing: border-box;
    ${(props: ChatListStyleProps) => 
        css`
            height: calc(100% - ${props.headerHeight});
            ${ChatBlockWrapper} {
                padding: 10px;
                margin: 5px;
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
                border-radius: 5px;
            }
        `
    }
`

export { ChatListWrapper }