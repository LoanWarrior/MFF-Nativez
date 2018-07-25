import { RootStack } from '../App'
import { NavigationActions } from 'react-navigation'
import { Navigator } from '../Navigator'

const router = Navigator.router;
let mainNavAction = router.getActionForPathAndParams('Login');
let initialNavState = router.getStateForAction(mainNavAction);

export default (navState = initialNavState, action) => {
 switch (action.type) {
   default:
       return router.getStateForAction(action, navState)
 }
}
