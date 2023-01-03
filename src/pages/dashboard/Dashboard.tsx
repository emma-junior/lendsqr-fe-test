import UserTable from '../../components/userTable/UserTable'
import Widget from '../../components/widget/Widget'
import "./dashboard.scss"

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <h4>Users</h4>
      <div className='widgets-wrapper'>
        <Widget type="USERS" num={2453} icon="users_widget" icon_wrapper="pink"  />
        <Widget type="ACTIVE USERS" num={2453} icon="active_widget" icon_wrapper="blue"/>
        <Widget type="USERS WITH LOANS" num={12453} icon="loans_widget" icon_wrapper="orange"/>
        <Widget type="USERS WITH SAVINGS" num={102453} icon="savings_widget" icon_wrapper="red"/>
      </div>
      <UserTable />
    </section>
  )
}

export default Dashboard