import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/reducer'
import { UserListAction } from '../../store/actions'
import { UserList } from '../../store/types'
import { useEffect } from 'react'

const UserList = (props: any) => {
    console.log(props)
    useEffect(() => {
        console.log('in effec')
        // props.dispatch(UserListAction())
    })
    return <div>hello</div>
}
const mapStateToProps = (state: AppState) => ({
    data: state.UserListReducer
})
export default connect(mapStateToProps)(UserList)