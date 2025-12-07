import { useEffect, useState } from 'react'
import '../Style/app_ctn.css'
import { getRoute, type RouteName } from '../routers/route'
import DashHme from './dash_hme';
import PlanHme from './plan_hme';
import TaskHme from './task_hme';

interface AppCtnProps {
    isCtnDashVisible: boolean;
}

export default function AppCtn({ isCtnDashVisible }: AppCtnProps) {

    const [route, setRoute] = useState<RouteName>(getRoute());

    useEffect(() => {
        const onChange = () => setRoute(getRoute());
        window.addEventListener("route-change", onChange);
        window.addEventListener("popstate", onChange);

        return (() => {
            window.removeEventListener("route-change", onChange);
            window.removeEventListener("popstate", onChange);
        })
    }, []);

    const renderPage = () => {
        switch (route) {
            case "task":
                return <TaskHme isCtnDashVisible={isCtnDashVisible}/>; 
            case "plans":
                return <PlanHme isCtnDashVisible={isCtnDashVisible} />;
            default:
                return <DashHme isCtnDashVisible={isCtnDashVisible} />
        }
    };

    return (
        <div className={`ctn__app ${!isCtnDashVisible ? 'ctn__app--expanded' : ''}`}>
            <div className="ctn__main__app">
                {renderPage()}
            </div>
        </div>
    )
}


