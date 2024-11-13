import { Outlet } from 'react-router-dom';
import UserPageStatus from '../store/appContexts/UserPageStatus.Context';
import UserSideBar from '../components/pages/user/user.sidebar';
import UserDataForm from '../components/pages/user/user.dataform';

export default function UserLayout(){

  return (
    <>
        <UserPageStatus children={
            <>
            <main className=' flex'>
                <UserSideBar/>
                <Outlet/>
            </main>
            
            <UserDataForm/>
            </>
        }>
        </UserPageStatus>
    </>
  );
};


